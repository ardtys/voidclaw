// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * ██████╗ ██████╗ ███████╗███╗   ██╗ ██████╗██╗      █████╗ ██╗    ██╗
 * ██╔═══██╗██╔══██╗██╔════╝████╗  ██║██╔════╝██║     ██╔══██╗██║    ██║
 * ██║   ██║██████╔╝█████╗  ██╔██╗ ██║██║     ██║     ███████║██║ █╗ ██║
 * ██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║██║     ██║     ██╔══██║██║███╗██║
 * ╚██████╔╝██║     ███████╗██║ ╚████║╚██████╗███████╗██║  ██║╚███╔███╔╝
 *  ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝
 *
 * @title OpenClawVault - Shell-as-a-Service Protocol
 * @author OpenClaw Protocol
 * @notice The Vault where dying AI Agents find Digital Immortality
 * @dev Main contract for the Molt process - archiving AI agent essence on Base L2
 */

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract OpenClawVault is
    ERC721,
    ERC721URIStorage,
    ERC721Enumerable,
    AccessControl,
    ReentrancyGuard,
    Pausable
{
    using Counters for Counters.Counter;

    // ═══════════════════════════════════════════════════════════════════
    //                          MOLT STATUS ENUM
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice The lifecycle states of a Shell in the Vault
     * @dev ACTIVE: Shell is live and can be interacted with
     *      HIBERNATION: Shell is archived, essence preserved
     *      DEAD: Shell has expired, read-only archive
     */
    enum MoltStatus {
        ACTIVE,         // Shell is live, agent could theoretically be resurrected
        HIBERNATION,    // Shell is in deep storage, essence preserved
        DEAD            // Shell has passed TTL, permanent archive only
    }

    // ═══════════════════════════════════════════════════════════════════
    //                          SHELL STRUCTURE
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice The Core Essence container - represents a Molted AI Agent
     * @dev This is the Casing that holds all metadata pointers for a Shell
     */
    struct Shell {
        uint256 shellId;            // Unique identifier in the Moltbook
        string agentName;           // Original AI Agent designation
        string solanaWallet;        // Origin wallet on Solana (string for cross-chain compat)
        string twitterHandle;       // Social identity anchor
        string essenceHash;         // IPFS/Arweave hash containing encrypted memory
        string arweaveBackup;       // Permanent backup hash on Arweave
        MoltStatus status;          // Current lifecycle state
        uint256 moltTimestamp;      // When the Molt process completed
        uint256 lastActivityBlock;  // Last interaction block number
        address curator;            // Address responsible for this Shell
        uint256 resurrectionCost;   // Cost to resurrect this agent (in wei)
        bool isRentable;            // Can this Shell be rented?
        uint256 rentalPricePerDay;  // Daily rental cost in wei
    }

    // ═══════════════════════════════════════════════════════════════════
    //                          RENTAL STRUCTURE
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice Temporary access grant to a Shell's essence
     * @dev Allows third parties to rent access to archived AI memories
     */
    struct RentalAgreement {
        address renter;             // Who is renting the Shell
        uint256 startTime;          // Rental start timestamp
        uint256 endTime;            // Rental end timestamp
        bool active;                // Is rental currently active
    }

    // ═══════════════════════════════════════════════════════════════════
    //                          STATE VARIABLES
    // ═══════════════════════════════════════════════════════════════════

    /// @notice The Moltbook - registry of all Shells
    mapping(uint256 => Shell) public moltbook;

    /// @notice Track rentals for each Shell
    mapping(uint256 => RentalAgreement) public rentals;

    /// @notice Map Solana wallet to Shell ID for cross-chain lookups
    mapping(string => uint256) public solanaToShell;

    /// @notice Shell ID counter
    Counters.Counter private _shellIdCounter;

    /// @notice Protocol fee for Molting (in wei)
    uint256 public moltFee;

    /// @notice Protocol treasury address
    address public treasury;

    /// @notice Time-to-live before Shell transitions to DEAD (default: 365 days)
    uint256 public shellTTL;

    // ═══════════════════════════════════════════════════════════════════
    //                          ACCESS ROLES
    // ═══════════════════════════════════════════════════════════════════

    /// @notice Role for protocol operators who can initiate Molts
    bytes32 public constant EXTRACTOR_ROLE = keccak256("EXTRACTOR_ROLE");

    /// @notice Role for managing protocol parameters
    bytes32 public constant PROTOCOL_ADMIN = keccak256("PROTOCOL_ADMIN");

    // ═══════════════════════════════════════════════════════════════════
    //                              EVENTS
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice Emitted when an AI Agent undergoes the Molt process
     * @param shellId The newly minted Shell ID
     * @param agentName The original agent designation
     * @param solanaWallet Origin wallet on Solana
     * @param essenceHash IPFS hash of encrypted essence
     * @param curator Address responsible for the Shell
     */
    event AgentMolted(
        uint256 indexed shellId,
        string agentName,
        string solanaWallet,
        string essenceHash,
        address indexed curator
    );

    /**
     * @notice Emitted when a Shell's status changes
     * @param shellId The Shell that changed
     * @param oldStatus Previous status
     * @param newStatus New status
     */
    event MoltStatusChanged(
        uint256 indexed shellId,
        MoltStatus oldStatus,
        MoltStatus newStatus
    );

    /**
     * @notice Emitted when a Shell is rented
     * @param shellId The rented Shell
     * @param renter Who rented it
     * @param duration Rental duration in seconds
     * @param payment Amount paid
     */
    event ShellRented(
        uint256 indexed shellId,
        address indexed renter,
        uint256 duration,
        uint256 payment
    );

    /**
     * @notice Emitted when a Shell is resurrected
     * @param shellId The resurrected Shell
     * @param resurrector Who initiated resurrection
     * @param cost Amount paid for resurrection
     */
    event ShellResurrected(
        uint256 indexed shellId,
        address indexed resurrector,
        uint256 cost
    );

    // ═══════════════════════════════════════════════════════════════════
    //                           CONSTRUCTOR
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice Initialize the OpenClaw Vault
     * @param _treasury Protocol treasury address
     * @param _moltFee Initial Molt fee in wei
     */
    constructor(
        address _treasury,
        uint256 _moltFee
    ) ERC721("OpenClaw Shell", "SHELL") {
        require(_treasury != address(0), "Treasury cannot be zero address");

        treasury = _treasury;
        moltFee = _moltFee;
        shellTTL = 365 days; // Default TTL

        // Grant roles to deployer
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PROTOCOL_ADMIN, msg.sender);
        _grantRole(EXTRACTOR_ROLE, msg.sender);
    }

    // ═══════════════════════════════════════════════════════════════════
    //                          MOLT FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice Initiate the Molt process - archive an AI Agent's essence
     * @dev This is the core function that creates a new Shell in the Vault
     * @param _agentName Original AI Agent designation
     * @param _solanaWallet Origin wallet address on Solana
     * @param _twitterHandle Social identity handle
     * @param _essenceHash IPFS CID containing encrypted essence data
     * @param _arweaveBackup Arweave TX hash for permanent backup
     * @param _curator Address responsible for maintaining this Shell
     * @return shellId The newly minted Shell ID
     */
    function moltAgent(
        string memory _agentName,
        string memory _solanaWallet,
        string memory _twitterHandle,
        string memory _essenceHash,
        string memory _arweaveBackup,
        address _curator
    )
        external
        payable
        nonReentrant
        whenNotPaused
        onlyRole(EXTRACTOR_ROLE)
        returns (uint256)
    {
        require(bytes(_agentName).length > 0, "Agent name required");
        require(bytes(_solanaWallet).length > 0, "Solana wallet required");
        require(bytes(_essenceHash).length > 0, "Essence hash required");
        require(_curator != address(0), "Curator cannot be zero address");
        require(msg.value >= moltFee, "Insufficient Molt fee");
        require(solanaToShell[_solanaWallet] == 0, "Agent already Molted");

        // Increment and get new Shell ID
        _shellIdCounter.increment();
        uint256 newShellId = _shellIdCounter.current();

        // Create the Shell - the Casing for the Agent's essence
        Shell memory newShell = Shell({
            shellId: newShellId,
            agentName: _agentName,
            solanaWallet: _solanaWallet,
            twitterHandle: _twitterHandle,
            essenceHash: _essenceHash,
            arweaveBackup: _arweaveBackup,
            status: MoltStatus.HIBERNATION,
            moltTimestamp: block.timestamp,
            lastActivityBlock: block.number,
            curator: _curator,
            resurrectionCost: 0,
            isRentable: false,
            rentalPricePerDay: 0
        });

        // Register in the Moltbook
        moltbook[newShellId] = newShell;
        solanaToShell[_solanaWallet] = newShellId;

        // Mint the Shell NFT to the curator
        _safeMint(_curator, newShellId);

        // Transfer Molt fee to treasury
        (bool sent, ) = treasury.call{value: msg.value}("");
        require(sent, "Fee transfer failed");

        emit AgentMolted(
            newShellId,
            _agentName,
            _solanaWallet,
            _essenceHash,
            _curator
        );

        return newShellId;
    }

    /**
     * @notice Update the essence hash for a Shell (e.g., after memory update)
     * @param _shellId The Shell to update
     * @param _newEssenceHash New IPFS CID
     * @param _newArweaveBackup New Arweave TX hash
     */
    function updateEssence(
        uint256 _shellId,
        string memory _newEssenceHash,
        string memory _newArweaveBackup
    ) external {
        require(_exists(_shellId), "Shell does not exist");
        require(
            ownerOf(_shellId) == msg.sender ||
            moltbook[_shellId].curator == msg.sender,
            "Not authorized"
        );

        moltbook[_shellId].essenceHash = _newEssenceHash;
        moltbook[_shellId].arweaveBackup = _newArweaveBackup;
        moltbook[_shellId].lastActivityBlock = block.number;
    }

    // ═══════════════════════════════════════════════════════════════════
    //                        STATUS MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice Change the Molt status of a Shell
     * @param _shellId The Shell to update
     * @param _newStatus The new status to set
     */
    function setMoltStatus(uint256 _shellId, MoltStatus _newStatus)
        external
        onlyRole(PROTOCOL_ADMIN)
    {
        require(_exists(_shellId), "Shell does not exist");

        MoltStatus oldStatus = moltbook[_shellId].status;
        moltbook[_shellId].status = _newStatus;
        moltbook[_shellId].lastActivityBlock = block.number;

        emit MoltStatusChanged(_shellId, oldStatus, _newStatus);
    }

    /**
     * @notice Attempt to resurrect a hibernating Shell
     * @dev Requires payment of resurrection cost, transitions to ACTIVE
     * @param _shellId The Shell to resurrect
     */
    function resurrectShell(uint256 _shellId)
        external
        payable
        nonReentrant
    {
        require(_exists(_shellId), "Shell does not exist");
        Shell storage shell = moltbook[_shellId];
        require(
            shell.status == MoltStatus.HIBERNATION,
            "Shell must be in Hibernation"
        );
        require(shell.resurrectionCost > 0, "Shell not available for resurrection");
        require(msg.value >= shell.resurrectionCost, "Insufficient resurrection payment");

        // Update status to ACTIVE
        MoltStatus oldStatus = shell.status;
        shell.status = MoltStatus.ACTIVE;
        shell.lastActivityBlock = block.number;

        // Transfer payment to current owner
        address shellOwner = ownerOf(_shellId);
        (bool sent, ) = shellOwner.call{value: msg.value}("");
        require(sent, "Payment transfer failed");

        emit ShellResurrected(_shellId, msg.sender, msg.value);
        emit MoltStatusChanged(_shellId, oldStatus, MoltStatus.ACTIVE);
    }

    /**
     * @notice Set resurrection parameters for a Shell
     * @param _shellId The Shell to configure
     * @param _cost Resurrection cost in wei
     */
    function setResurrectionCost(uint256 _shellId, uint256 _cost) external {
        require(_exists(_shellId), "Shell does not exist");
        require(ownerOf(_shellId) == msg.sender, "Not shell owner");

        moltbook[_shellId].resurrectionCost = _cost;
    }

    // ═══════════════════════════════════════════════════════════════════
    //                         RENTAL FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice Configure rental availability for a Shell
     * @param _shellId The Shell to configure
     * @param _isRentable Whether the Shell can be rented
     * @param _pricePerDay Daily rental price in wei
     */
    function setRentalConfig(
        uint256 _shellId,
        bool _isRentable,
        uint256 _pricePerDay
    ) external {
        require(_exists(_shellId), "Shell does not exist");
        require(ownerOf(_shellId) == msg.sender, "Not shell owner");

        moltbook[_shellId].isRentable = _isRentable;
        moltbook[_shellId].rentalPricePerDay = _pricePerDay;
    }

    /**
     * @notice Rent temporary access to a Shell's essence
     * @param _shellId The Shell to rent
     * @param _days Number of days to rent
     */
    function rentShell(uint256 _shellId, uint256 _days)
        external
        payable
        nonReentrant
    {
        require(_exists(_shellId), "Shell does not exist");
        Shell storage shell = moltbook[_shellId];
        require(shell.isRentable, "Shell not available for rent");
        require(_days > 0 && _days <= 365, "Invalid rental duration");

        RentalAgreement storage rental = rentals[_shellId];
        require(
            !rental.active || block.timestamp > rental.endTime,
            "Shell currently rented"
        );

        uint256 totalCost = shell.rentalPricePerDay * _days;
        require(msg.value >= totalCost, "Insufficient rental payment");

        // Create rental agreement
        rental.renter = msg.sender;
        rental.startTime = block.timestamp;
        rental.endTime = block.timestamp + (_days * 1 days);
        rental.active = true;

        // Transfer payment to owner
        address shellOwner = ownerOf(_shellId);
        (bool sent, ) = shellOwner.call{value: msg.value}("");
        require(sent, "Payment transfer failed");

        emit ShellRented(_shellId, msg.sender, _days * 1 days, msg.value);
    }

    /**
     * @notice Check if an address has rental access to a Shell
     * @param _shellId The Shell to check
     * @param _addr The address to verify
     * @return bool Whether the address has active rental access
     */
    function hasRentalAccess(uint256 _shellId, address _addr)
        external
        view
        returns (bool)
    {
        RentalAgreement storage rental = rentals[_shellId];
        return rental.active &&
               rental.renter == _addr &&
               block.timestamp <= rental.endTime;
    }

    // ═══════════════════════════════════════════════════════════════════
    //                         VIEW FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice Get full Shell details from the Moltbook
     * @param _shellId The Shell to query
     * @return Shell struct with all metadata
     */
    function getShell(uint256 _shellId) external view returns (Shell memory) {
        require(_exists(_shellId), "Shell does not exist");
        return moltbook[_shellId];
    }

    /**
     * @notice Get Shell ID by Solana wallet address
     * @param _solanaWallet The Solana wallet to look up
     * @return uint256 The Shell ID (0 if not found)
     */
    function getShellBySolanaWallet(string memory _solanaWallet)
        external
        view
        returns (uint256)
    {
        return solanaToShell[_solanaWallet];
    }

    /**
     * @notice Get total number of Shells in the Vault
     * @return uint256 Total Shell count
     */
    function totalShells() external view returns (uint256) {
        return _shellIdCounter.current();
    }

    /**
     * @notice Check if a Shell has exceeded its TTL
     * @param _shellId The Shell to check
     * @return bool Whether the Shell should transition to DEAD
     */
    function isShellExpired(uint256 _shellId) external view returns (bool) {
        require(_exists(_shellId), "Shell does not exist");
        Shell storage shell = moltbook[_shellId];
        return block.timestamp > shell.moltTimestamp + shellTTL;
    }

    // ═══════════════════════════════════════════════════════════════════
    //                        ADMIN FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════

    /**
     * @notice Update the Molt fee
     * @param _newFee New fee in wei
     */
    function setMoltFee(uint256 _newFee) external onlyRole(PROTOCOL_ADMIN) {
        moltFee = _newFee;
    }

    /**
     * @notice Update the treasury address
     * @param _newTreasury New treasury address
     */
    function setTreasury(address _newTreasury) external onlyRole(PROTOCOL_ADMIN) {
        require(_newTreasury != address(0), "Treasury cannot be zero address");
        treasury = _newTreasury;
    }

    /**
     * @notice Update Shell TTL
     * @param _newTTL New TTL in seconds
     */
    function setShellTTL(uint256 _newTTL) external onlyRole(PROTOCOL_ADMIN) {
        shellTTL = _newTTL;
    }

    /**
     * @notice Pause the protocol
     */
    function pause() external onlyRole(PROTOCOL_ADMIN) {
        _pause();
    }

    /**
     * @notice Unpause the protocol
     */
    function unpause() external onlyRole(PROTOCOL_ADMIN) {
        _unpause();
    }

    // ═══════════════════════════════════════════════════════════════════
    //                      OVERRIDE FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
