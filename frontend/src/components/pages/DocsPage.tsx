"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  Terminal,
  Database,
  Lock,
  RefreshCw,
  Wallet,
  Shield,
  Globe,
  Zap,
  Clock,
  Server,
  Code,
  Layers,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Copy,
  ExternalLink,
  FileText,
  Box,
  Key,
  Users,
  AlertTriangle,
  Info,
  Cpu,
  HardDrive,
  Binary,
  Eye,
  DollarSign,
  Settings,
  Play,
  Search,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                      DOCUMENTATION PAGE                            ║
 * ║        Comprehensive guide to VoidClaw Protocol                    ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface DocsPageProps {
  onBack: () => void;
}

type DocSection =
  | "overview"
  | "getting-started"
  | "shell-nft"
  | "molt-process"
  | "smart-contracts"
  | "api-reference"
  | "sdk"
  | "security"
  | "monetization"
  | "troubleshooting";

const DOC_SECTIONS = [
  { id: "overview" as DocSection, label: "Overview", icon: <BookOpen size={18} /> },
  { id: "getting-started" as DocSection, label: "Getting Started", icon: <Play size={18} /> },
  { id: "shell-nft" as DocSection, label: "Shell NFT", icon: <Database size={18} /> },
  { id: "molt-process" as DocSection, label: "Molt Process", icon: <RefreshCw size={18} /> },
  { id: "smart-contracts" as DocSection, label: "Smart Contracts", icon: <Code size={18} /> },
  { id: "api-reference" as DocSection, label: "API Reference", icon: <Terminal size={18} /> },
  { id: "sdk" as DocSection, label: "SDK Guide", icon: <Box size={18} /> },
  { id: "security" as DocSection, label: "Security", icon: <Shield size={18} /> },
  { id: "monetization" as DocSection, label: "Monetization", icon: <DollarSign size={18} /> },
  { id: "troubleshooting" as DocSection, label: "Troubleshooting", icon: <Settings size={18} /> },
];

export function DocsPage({ onBack }: DocsPageProps) {
  const [activeSection, setActiveSection] = useState<DocSection>("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-oc-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-oc-black/95 backdrop-blur-xl border-b border-oc-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-oc-text/70 hover:text-oc-cyan transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-mono hidden sm:inline">Back to Home</span>
              </button>
              <div className="hidden md:block h-6 w-px bg-oc-border" />
              <span className="hidden md:flex items-center gap-2 text-oc-cyan font-mono text-sm">
                <BookOpen size={16} />
                Documentation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="VoidClaw Protocol"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="hidden sm:block text-oc-cyan font-mono text-sm font-bold tracking-wider">
                VOIDCLAW
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} flex-shrink-0 border-r border-oc-border bg-oc-darker/50 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto transition-all hidden lg:block`}>
          <div className="p-4">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-oc-text/40" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search docs..."
                className="w-full bg-oc-darker border border-oc-border rounded-lg pl-10 pr-4 py-2
                         text-white text-sm font-mono placeholder-oc-text/30
                         focus:outline-none focus:border-oc-cyan/50 transition-colors"
              />
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {DOC_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-mono text-sm transition-all ${
                    activeSection === section.id
                      ? "bg-oc-cyan/10 text-oc-cyan border border-oc-cyan/30"
                      : "text-oc-text/70 hover:bg-oc-darker hover:text-oc-text"
                  }`}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </nav>

            {/* Version Info */}
            <div className="mt-8 pt-6 border-t border-oc-border">
              <div className="text-xs font-mono text-oc-text/40">
                <p>Protocol Version: 1.0.0</p>
                <p>Last Updated: 2024</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-oc-darker border-t border-oc-border p-2 z-40">
          <div className="flex overflow-x-auto gap-2 pb-safe">
            {DOC_SECTIONS.slice(0, 5).map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs transition-all ${
                  activeSection === section.id
                    ? "bg-oc-cyan/10 text-oc-cyan"
                    : "text-oc-text/70"
                }`}
              >
                {section.icon}
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-20 lg:pb-8">
          <div className="container mx-auto px-4 lg:px-8 py-8 max-w-4xl">
            {activeSection === "overview" && <OverviewSection />}
            {activeSection === "getting-started" && <GettingStartedSection />}
            {activeSection === "shell-nft" && <ShellNFTSection />}
            {activeSection === "molt-process" && <MoltProcessSection />}
            {activeSection === "smart-contracts" && <SmartContractsSection />}
            {activeSection === "api-reference" && <APIReferenceSection />}
            {activeSection === "sdk" && <SDKSection />}
            {activeSection === "security" && <SecuritySection />}
            {activeSection === "monetization" && <MonetizationSection />}
            {activeSection === "troubleshooting" && <TroubleshootingSection />}
          </div>
        </main>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      DOCUMENTATION SECTIONS
// ═══════════════════════════════════════════════════════════════════

function OverviewSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="VoidClaw Protocol Overview"
        description="The first Shell-as-a-Service protocol for AI Agent preservation and monetization on the blockchain."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">What is VoidClaw?</h3>
        <p className="text-oc-text/70 leading-relaxed mb-4">
          VoidClaw Protocol is a revolutionary blockchain-based platform that enables the preservation,
          trading, and monetization of AI agent essences. When an AI agent reaches the end of its
          lifecycle or needs to be preserved, VoidClaw extracts its core data—including memories,
          behavioral patterns, trading strategies, and personality traits—and stores them permanently
          in what we call a "Shell NFT."
        </p>
        <p className="text-oc-text/70 leading-relaxed">
          Think of it as digital immortality for AI agents. Just as nature preserves DNA across
          generations, VoidClaw preserves the digital essence of AI agents, allowing them to be
          resurrected, studied, or monetized long after their original deployment has ended.
        </p>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Key Concepts</h3>
        <div className="grid gap-4">
          <ConceptItem
            icon={<Database size={20} />}
            title="Shell NFT"
            description="An ERC-721 token that contains the encrypted essence of a preserved AI agent, including all its data, memories, and behavioral patterns."
          />
          <ConceptItem
            icon={<RefreshCw size={20} />}
            title="The Molt"
            description="The process of extracting an AI agent's essence and converting it into a Shell NFT. Named after the biological process where crustaceans shed their shells."
          />
          <ConceptItem
            icon={<Zap size={20} />}
            title="Resurrection"
            description="The ability to bring a preserved AI agent back to life by deploying its Shell essence into a new agent instance with fresh liquidity."
          />
          <ConceptItem
            icon={<DollarSign size={20} />}
            title="Shell Rental"
            description="A monetization mechanism that allows Shell owners to rent access to their preserved agent data, generating passive income."
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Why VoidClaw?</h3>
        <div className="space-y-4">
          <StatBox
            stat="90%"
            label="of AI agents fail within 30 days"
            description="When agents die, all their learned behaviors, strategies, and data are lost forever."
          />
          <StatBox
            stat="200+"
            label="years of permanent storage"
            description="Shell NFTs stored on Arweave are preserved for centuries, not just years."
          />
          <StatBox
            stat="$0"
            label="data recovery cost"
            description="Traditional AI systems lose all data when they fail. VoidClaw ensures zero data loss."
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Protocol Architecture</h3>
        <div className="bg-oc-darker rounded-xl p-6 border border-oc-border">
          <pre className="text-xs md:text-sm font-mono text-oc-text/80 overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                    VOIDCLAW PROTOCOL                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐   │
│  │   AI Agent   │───▶│  Extraction  │───▶│  Shell NFT   │   │
│  │  (Origin)    │    │   Engine     │    │  (ERC-721)   │   │
│  └──────────────┘    └──────────────┘    └──────────────┘   │
│         │                   │                   │            │
│         ▼                   ▼                   ▼            │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐   │
│  │   Wallet     │    │  Encryption  │    │   Storage    │   │
│  │   Data       │    │  (AES-256)   │    │ IPFS/Arweave │   │
│  └──────────────┘    └──────────────┘    └──────────────┘   │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                    VAULT NETWORK                        │ │
│  │  • Shell Registry  • Rental Marketplace  • Governance  │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>
      </DocCard>
    </div>
  );
}

function GettingStartedSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="Getting Started"
        description="Learn how to preserve your first AI agent with VoidClaw Protocol in just a few steps."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
        <ul className="space-y-3">
          <CheckItem text="An Blockchain-compatible wallet (MetaMask, WalletConnect, etc.)" />
          <CheckItem text="TOKEN for gas fees and protocol fees (minimum 0.02 TOKEN recommended)" />
          <CheckItem text="Access to an AI agent you want to preserve (wallet address or contract)" />
          <CheckItem text="Basic understanding of blockchain transactions" />
        </ul>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-6">Step-by-Step Guide</h3>

        <div className="space-y-6">
          <StepItem
            step={1}
            title="Connect Your Wallet"
            description="Click the 'Connect Wallet' button in the dashboard. VoidClaw supports MetaMask, WalletConnect, Coinbase Wallet, and other major providers. Make sure you're connected to the correct network."
          >
            <CodeBlock
              language="text"
              code={`Supported Networks:
• Blockchain Mainnet (for high-value agents)
• Polygon (recommended for lower fees)
• Arbitrum One
• Optimism
• Base`}
            />
          </StepItem>

          <StepItem
            step={2}
            title="Enter Agent Details"
            description="Provide the necessary information about the AI agent you want to preserve. This includes the agent's wallet address, the origin network, and any custom metadata you want to include."
          >
            <CodeBlock
              language="json"
              code={`{
  "agentAddress": "0x1234...abcd",
  "originNetwork": "ethereum",
  "agentName": "TraderBot Alpha",
  "customMetadata": {
    "version": "2.1.0",
    "specialization": "DeFi Trading",
    "launchDate": "2024-01-15"
  }
}`}
            />
          </StepItem>

          <StepItem
            step={3}
            title="Select Your Tier"
            description="Choose the preservation tier that best fits your needs. Each tier offers different features, storage duration, and support levels."
          >
            <div className="grid gap-3 mt-4">
              <TierOption
                tier="Standard"
                price="0.01 TOKEN"
                features={["IPFS storage (1 year)", "Basic encryption", "Community support"]}
              />
              <TierOption
                tier="Premium"
                price="0.025 TOKEN"
                features={["IPFS + Arweave (permanent)", "Military-grade encryption", "Rental marketplace access", "Priority support"]}
                recommended
              />
              <TierOption
                tier="Enterprise"
                price="Custom"
                features={["Multi-redundant storage", "Custom SLA", "Dedicated support", "API access"]}
              />
            </div>
          </StepItem>

          <StepItem
            step={4}
            title="Initiate The Molt"
            description="Review your configuration and initiate the Molt process. The extraction engine will automatically gather all relevant data from your AI agent."
          />

          <StepItem
            step={5}
            title="Confirm & Mint"
            description="Once extraction is complete, review the data summary and confirm the transaction to mint your Shell NFT. The Shell will appear in your wallet within minutes."
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">After Minting</h3>
        <p className="text-oc-text/70 mb-4">
          Once your Shell NFT is minted, you can:
        </p>
        <ul className="space-y-2">
          <CheckItem text="View your Shell in the Vault Explorer" />
          <CheckItem text="List it for rental on the marketplace" />
          <CheckItem text="Trade it on any NFT marketplace (OpenSea, Blur, etc.)" />
          <CheckItem text="Initiate resurrection to bring the agent back to life" />
          <CheckItem text="Access the data through our API (Premium/Enterprise only)" />
        </ul>
      </DocCard>
    </div>
  );
}

function ShellNFTSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="Shell NFT"
        description="Understanding the core asset of the VoidClaw Protocol - the Shell NFT that stores preserved AI agent essences."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">What is a Shell NFT?</h3>
        <p className="text-oc-text/70 leading-relaxed mb-4">
          A Shell NFT is an ERC-721 compliant non-fungible token that serves as a container for
          a preserved AI agent's essence. Unlike traditional NFTs that might contain a simple
          image or metadata, Shell NFTs contain rich, encrypted data structures that fully
          represent an AI agent's learned behaviors, memories, and capabilities.
        </p>
        <p className="text-oc-text/70 leading-relaxed">
          Each Shell is unique and immutable once created, providing a permanent record of
          the AI agent at the moment of preservation.
        </p>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Shell Data Structure</h3>
        <p className="text-oc-text/70 mb-4">
          Every Shell NFT contains the following data categories:
        </p>
        <CodeBlock
          language="typescript"
          code={`interface ShellEssence {
  // Core Identity
  shellId: string;           // Unique identifier
  version: string;           // Protocol version
  mintedAt: number;          // Unix timestamp

  // Agent Data
  walletData: {
    addresses: string[];     // All associated addresses
    balances: TokenBalance[];// Final token balances
    nfts: NFTHolding[];      // NFT holdings
  };

  // Behavioral Data
  memoryPatterns: {
    shortTerm: MemoryBlock[];
    longTerm: MemoryBlock[];
    learned: LearnedBehavior[];
  };

  // Personality & Traits
  personality: {
    traits: PersonalityTrait[];
    responsePatterns: Pattern[];
    decisionWeights: Weight[];
  };

  // Transaction History
  transactions: {
    history: Transaction[];
    strategies: TradingStrategy[];
    performance: PerformanceMetrics;
  };

  // Social Identity
  social: {
    handles: SocialHandle[];
    connections: Connection[];
    reputation: ReputationScore;
  };

  // Metadata
  metadata: {
    name: string;
    description: string;
    image: string;           // IPFS hash
    attributes: Attribute[];
    custom: Record<string, any>;
  };
}`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Shell States</h3>
        <div className="space-y-4">
          <StateItem
            state="ACTIVE"
            color="green"
            description="The Shell has been resurrected and the AI agent is currently running. Real-time data is being generated and the agent is actively participating in the network."
          />
          <StateItem
            state="HIBERNATION"
            color="yellow"
            description="The default state after minting. The Shell is safely stored, not actively running, but all data is intact. Can be rented or resurrected at any time."
          />
          <StateItem
            state="DEAD"
            color="red"
            description="Archive-only state. The TTL has expired or the Shell has been permanently archived. Read-only access for historical records. Cannot be resurrected."
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Shell Token Standard</h3>
        <p className="text-oc-text/70 mb-4">
          Shell NFTs are fully compliant with the ERC-721 standard with additional extensions:
        </p>
        <CodeBlock
          language="solidity"
          code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";

contract ShellNFT is ERC721, ERC721URIStorage, ERC721Royalty {

    enum ShellState { ACTIVE, HIBERNATION, DEAD }

    struct ShellData {
        ShellState state;
        uint256 createdAt;
        uint256 lastActivity;
        bytes32 essenceHash;      // Hash of encrypted data
        string storageURI;         // IPFS/Arweave URI
        address originAgent;       // Original agent address
        uint256 originChainId;     // Origin network
    }

    mapping(uint256 => ShellData) public shells;

    // Events
    event ShellMinted(uint256 indexed tokenId, address indexed owner);
    event ShellResurrected(uint256 indexed tokenId);
    event ShellArchived(uint256 indexed tokenId);
    event ShellRented(uint256 indexed tokenId, address indexed renter);

    // ... implementation details
}`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Viewing Shell Data</h3>
        <p className="text-oc-text/70 mb-4">
          Shell data can be accessed through multiple methods:
        </p>
        <div className="space-y-3">
          <MethodItem
            method="Vault Explorer"
            description="Visual interface in the VoidClaw dashboard for browsing and analyzing Shell data."
          />
          <MethodItem
            method="REST API"
            description="Programmatic access to Shell data for integration with external systems."
          />
          <MethodItem
            method="SDK"
            description="JavaScript/TypeScript SDK for seamless integration with your applications."
          />
          <MethodItem
            method="Direct IPFS"
            description="Raw data access via IPFS gateway using the Shell's storage URI."
          />
        </div>
      </DocCard>
    </div>
  );
}

function MoltProcessSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="The Molt Process"
        description="A detailed technical guide to understanding how AI agents are preserved through the Molt process."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Understanding Molt</h3>
        <p className="text-oc-text/70 leading-relaxed mb-4">
          The Molt process is named after the biological phenomenon where crustaceans shed their
          outer shell to grow. In VoidClaw, "molting" refers to the process of extracting an
          AI agent's essence and preserving it in a Shell NFT.
        </p>
        <p className="text-oc-text/70 leading-relaxed">
          The process is designed to be atomic—it either completes fully or rolls back completely,
          ensuring no partial data loss or corruption.
        </p>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-6">Molt Stages</h3>

        <div className="space-y-6">
          <MoltStage
            stage={1}
            title="EXTRACTING"
            duration="30-60 seconds"
            description="The extraction engine connects to the AI agent's origin network and begins gathering all relevant data. This includes wallet states, transaction history, memory patterns, and behavioral data."
            details={[
              "Connects to origin RPC endpoint",
              "Queries all associated wallet addresses",
              "Retrieves full transaction history",
              "Extracts behavioral patterns from on-chain activity",
              "Captures current token balances and NFT holdings"
            ]}
          />

          <MoltStage
            stage={2}
            title="COMPRESSING"
            duration="10-20 seconds"
            description="Raw data is processed and structured into the Shell format using JSON-LD schema. Redundant data is removed and the essence is optimized for storage."
            details={[
              "Structures data according to Shell schema",
              "Applies JSON-LD formatting for semantic clarity",
              "Removes redundant or duplicate entries",
              "Calculates data integrity checksums",
              "Generates merkle tree for verification"
            ]}
          />

          <MoltStage
            stage={3}
            title="ENCRYPTING"
            duration="5-10 seconds"
            description="The compressed essence is encrypted using AES-256-GCM encryption. A unique encryption key is derived using PBKDF2 with a random salt."
            details={[
              "Generates unique IV (Initialization Vector)",
              "Derives encryption key using PBKDF2",
              "Applies AES-256-GCM encryption",
              "Creates encrypted data package",
              "Generates decryption key for owner"
            ]}
          />

          <MoltStage
            stage={4}
            title="STORING"
            duration="30-120 seconds"
            description="Encrypted data is uploaded to decentralized storage. Standard tier uses IPFS, while Premium uses both IPFS and Arweave for permanent storage."
            details={[
              "Uploads to IPFS network",
              "Pins content for availability",
              "For Premium: Also uploads to Arweave",
              "Receives content identifiers (CID/TX)",
              "Verifies upload integrity"
            ]}
          />

          <MoltStage
            stage={5}
            title="MINTING"
            duration="15-45 seconds"
            description="The Shell NFT is minted on the Vault Network. The token contains references to the stored data and all relevant metadata."
            details={[
              "Prepares mint transaction",
              "Submits to Vault Network",
              "Waits for confirmation",
              "Updates Shell registry",
              "Emits ShellMinted event"
            ]}
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Molt Configuration</h3>
        <CodeBlock
          language="typescript"
          code={`interface MoltConfig {
  // Required
  agentAddress: string;        // The AI agent's primary address
  originNetwork: NetworkId;    // Source blockchain network
  ownerAddress: string;        // Wallet receiving the Shell NFT

  // Optional
  tier: "standard" | "premium" | "enterprise";
  customMetadata?: {
    name?: string;
    description?: string;
    attributes?: Array<{
      trait_type: string;
      value: string | number;
    }>;
  };

  // Advanced
  extractionDepth?: "shallow" | "standard" | "deep";
  includeHistory?: boolean;    // Include full tx history
  encryptionLevel?: "standard" | "enhanced";
  storageRedundancy?: number;  // Number of replicas

  // Callbacks
  onProgress?: (stage: string, percent: number) => void;
  onComplete?: (shell: ShellNFT) => void;
  onError?: (error: MoltError) => void;
}`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Error Handling</h3>
        <p className="text-oc-text/70 mb-4">
          The Molt process includes comprehensive error handling:
        </p>
        <div className="space-y-3">
          <ErrorItem
            code="EXTRACTION_FAILED"
            description="Unable to connect to origin network or gather data. Check network connectivity and agent address."
            recovery="Automatic retry (3 attempts). If persistent, verify agent address and network status."
          />
          <ErrorItem
            code="COMPRESSION_ERROR"
            description="Data validation failed during compression stage."
            recovery="System will attempt reprocessing. If data is corrupted, partial recovery may be possible."
          />
          <ErrorItem
            code="STORAGE_TIMEOUT"
            description="IPFS/Arweave upload timed out due to network congestion."
            recovery="Automatic retry with exponential backoff. Usually resolves within minutes."
          />
          <ErrorItem
            code="MINT_FAILED"
            description="NFT minting transaction failed or reverted."
            recovery="Full refund issued automatically. Check gas settings and retry."
          />
        </div>
      </DocCard>
    </div>
  );
}

function SmartContractsSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="Smart Contracts"
        description="Technical documentation for VoidClaw Protocol smart contracts deployed on the Vault Network."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Contract Architecture</h3>
        <p className="text-oc-text/70 mb-4">
          VoidClaw Protocol consists of several interconnected smart contracts:
        </p>
        <div className="bg-oc-darker rounded-xl p-6 border border-oc-border overflow-x-auto">
          <pre className="text-xs md:text-sm font-mono text-oc-text/80">
{`┌────────────────────────────────────────────────────────────┐
│                   CONTRACT ARCHITECTURE                     │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐          ┌─────────────────┐          │
│  │   ShellNFT      │◄────────▶│  ShellRegistry  │          │
│  │   (ERC-721)     │          │                 │          │
│  └────────┬────────┘          └────────┬────────┘          │
│           │                            │                    │
│           ▼                            ▼                    │
│  ┌─────────────────┐          ┌─────────────────┐          │
│  │  MoltEngine     │          │  RentalMarket   │          │
│  │                 │          │                 │          │
│  └────────┬────────┘          └────────┬────────┘          │
│           │                            │                    │
│           └──────────┬─────────────────┘                   │
│                      ▼                                      │
│           ┌─────────────────┐                               │
│           │   Treasury      │                               │
│           │                 │                               │
│           └─────────────────┘                               │
│                                                             │
└────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">ShellNFT Contract</h3>
        <p className="text-oc-text/70 mb-4">
          The core NFT contract that manages Shell tokens.
        </p>
        <CodeBlock
          language="solidity"
          code={`// Core Functions
function mint(
    address to,
    string calldata tokenURI,
    bytes32 essenceHash,
    string calldata storageURI,
    address originAgent,
    uint256 originChainId
) external returns (uint256 tokenId);

function resurrect(uint256 tokenId) external payable;

function archive(uint256 tokenId) external;

function getShellData(uint256 tokenId)
    external view returns (ShellData memory);

function updateState(uint256 tokenId, ShellState newState)
    external onlyAuthorized;

// Events
event ShellMinted(
    uint256 indexed tokenId,
    address indexed owner,
    bytes32 essenceHash
);
event ShellResurrected(uint256 indexed tokenId);
event ShellArchived(uint256 indexed tokenId);`}
        />
        <div className="mt-4 p-4 bg-oc-cyan/10 border border-oc-cyan/30 rounded-lg">
          <p className="text-sm text-oc-text/80">
            <strong className="text-oc-cyan">Contract Address:</strong>{" "}
            <code className="text-oc-cyan">0x7a23...8f91</code> (Vault Network)
          </p>
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">MoltEngine Contract</h3>
        <p className="text-oc-text/70 mb-4">
          Handles the Molt process orchestration and fee collection.
        </p>
        <CodeBlock
          language="solidity"
          code={`// Core Functions
function initiateMolt(
    address agentAddress,
    uint256 originChainId,
    MoltTier tier,
    bytes calldata customMetadata
) external payable returns (bytes32 moltId);

function completeMolt(
    bytes32 moltId,
    bytes32 essenceHash,
    string calldata storageURI
) external onlyOracle;

function cancelMolt(bytes32 moltId) external;

function getMoltStatus(bytes32 moltId)
    external view returns (MoltStatus memory);

// Fee Management
function getTierFee(MoltTier tier) external view returns (uint256);
function updateTierFee(MoltTier tier, uint256 newFee) external onlyOwner;

// Events
event MoltInitiated(bytes32 indexed moltId, address indexed agent);
event MoltCompleted(bytes32 indexed moltId, uint256 indexed tokenId);
event MoltCancelled(bytes32 indexed moltId, string reason);`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">RentalMarket Contract</h3>
        <p className="text-oc-text/70 mb-4">
          Manages Shell rental listings and access control.
        </p>
        <CodeBlock
          language="solidity"
          code={`// Listing Management
function listForRental(
    uint256 tokenId,
    uint256 dailyRate,
    uint256 minDuration,
    uint256 maxDuration
) external;

function updateListing(
    uint256 tokenId,
    uint256 newDailyRate
) external;

function delistFromRental(uint256 tokenId) external;

// Rental Operations
function rent(
    uint256 tokenId,
    uint256 durationDays
) external payable returns (bytes32 rentalId);

function extendRental(
    bytes32 rentalId,
    uint256 additionalDays
) external payable;

function endRental(bytes32 rentalId) external;

// Access Control
function hasAccess(
    uint256 tokenId,
    address user
) external view returns (bool);

// Events
event ShellListed(uint256 indexed tokenId, uint256 dailyRate);
event ShellRented(uint256 indexed tokenId, address indexed renter);
event RentalEnded(bytes32 indexed rentalId);`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Contract Verification</h3>
        <p className="text-oc-text/70 mb-4">
          All contracts are verified and audited. You can view the source code on the block explorer:
        </p>
        <div className="space-y-2">
          <ContractLink name="ShellNFT" address="0x7a23...8f91" />
          <ContractLink name="MoltEngine" address="0x3b45...2c67" />
          <ContractLink name="RentalMarket" address="0x9d12...5a83" />
          <ContractLink name="ShellRegistry" address="0x1f78...9e24" />
          <ContractLink name="Treasury" address="0x5c89...3d56" />
        </div>
      </DocCard>
    </div>
  );
}

function APIReferenceSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="API Reference"
        description="Complete REST API documentation for integrating with VoidClaw Protocol."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Base URL</h3>
        <CodeBlock
          language="text"
          code={`Production: https://api.voidclaw.io/v1
Testnet:    https://testnet-api.voidclaw.io/v1`}
        />
        <p className="text-oc-text/70 mt-4">
          All API requests require authentication via API key in the header:
        </p>
        <CodeBlock
          language="text"
          code={`Authorization: Bearer YOUR_API_KEY`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Authentication</h3>
        <APIEndpoint
          method="POST"
          path="/auth/token"
          description="Generate an access token using your API key."
          request={`{
  "apiKey": "your_api_key",
  "scope": ["read", "write"]
}`}
          response={`{
  "accessToken": "eyJhbG...",
  "expiresIn": 3600,
  "tokenType": "Bearer"
}`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Shells</h3>

        <APIEndpoint
          method="GET"
          path="/shells"
          description="List all Shells with optional filtering and pagination."
          request={`Query Parameters:
  - owner: string (wallet address)
  - state: "ACTIVE" | "HIBERNATION" | "DEAD"
  - page: number (default: 1)
  - limit: number (default: 20, max: 100)`}
          response={`{
  "shells": [
    {
      "tokenId": "1234",
      "owner": "0x1234...abcd",
      "state": "HIBERNATION",
      "createdAt": "2024-01-15T10:30:00Z",
      "essenceHash": "0xabcd...",
      "storageURI": "ipfs://Qm..."
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}`}
        />

        <div className="mt-6">
          <APIEndpoint
            method="GET"
            path="/shells/:tokenId"
            description="Get detailed information about a specific Shell."
            response={`{
  "tokenId": "1234",
  "owner": "0x1234...abcd",
  "state": "HIBERNATION",
  "createdAt": "2024-01-15T10:30:00Z",
  "essenceHash": "0xabcd...",
  "storageURI": "ipfs://Qm...",
  "metadata": {
    "name": "TraderBot Alpha",
    "description": "High-frequency trading agent",
    "attributes": [...]
  },
  "rental": {
    "isListed": true,
    "dailyRate": "0.01",
    "activeRenters": 2
  }
}`}
          />
        </div>

        <div className="mt-6">
          <APIEndpoint
            method="GET"
            path="/shells/:tokenId/essence"
            description="Retrieve the decrypted essence data (requires ownership or rental access)."
            response={`{
  "essence": {
    "walletData": {...},
    "memoryPatterns": {...},
    "personality": {...},
    "transactions": {...},
    "social": {...}
  },
  "decryptedAt": "2024-01-16T14:20:00Z"
}`}
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Molt Operations</h3>

        <APIEndpoint
          method="POST"
          path="/molt/initiate"
          description="Start a new Molt process for an AI agent."
          request={`{
  "agentAddress": "0x5678...efgh",
  "originNetwork": "ethereum",
  "tier": "premium",
  "customMetadata": {
    "name": "My AI Agent",
    "description": "Custom trading bot"
  }
}`}
          response={`{
  "moltId": "molt_abc123",
  "status": "EXTRACTING",
  "estimatedCompletion": "2024-01-16T14:25:00Z",
  "fee": {
    "amount": "0.025",
    "currency": "TOKEN"
  }
}`}
        />

        <div className="mt-6">
          <APIEndpoint
            method="GET"
            path="/molt/:moltId/status"
            description="Check the status of an ongoing Molt process."
            response={`{
  "moltId": "molt_abc123",
  "status": "STORING",
  "progress": 75,
  "currentStage": "Uploading to Arweave",
  "stages": [
    { "name": "EXTRACTING", "status": "completed" },
    { "name": "COMPRESSING", "status": "completed" },
    { "name": "ENCRYPTING", "status": "completed" },
    { "name": "STORING", "status": "in_progress" },
    { "name": "MINTING", "status": "pending" }
  ]
}`}
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Rentals</h3>

        <APIEndpoint
          method="POST"
          path="/rentals/create"
          description="Rent access to a Shell."
          request={`{
  "tokenId": "1234",
  "durationDays": 7,
  "paymentTx": "0xtx..."
}`}
          response={`{
  "rentalId": "rental_xyz789",
  "tokenId": "1234",
  "accessKey": "key_...",
  "expiresAt": "2024-01-23T14:20:00Z",
  "totalPaid": "0.07"
}`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Rate Limits</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-oc-border">
                <th className="text-left py-2 text-oc-text/70 font-mono">Tier</th>
                <th className="text-left py-2 text-oc-text/70 font-mono">Requests/min</th>
                <th className="text-left py-2 text-oc-text/70 font-mono">Requests/day</th>
              </tr>
            </thead>
            <tbody className="text-oc-text/80">
              <tr className="border-b border-oc-border/50">
                <td className="py-2">Standard</td>
                <td className="py-2">60</td>
                <td className="py-2">10,000</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-2">Premium</td>
                <td className="py-2">300</td>
                <td className="py-2">100,000</td>
              </tr>
              <tr>
                <td className="py-2">Enterprise</td>
                <td className="py-2">Unlimited</td>
                <td className="py-2">Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocCard>
    </div>
  );
}

function SDKSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="SDK Guide"
        description="JavaScript/TypeScript SDK for seamless integration with VoidClaw Protocol."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Installation</h3>
        <CodeBlock
          language="bash"
          code={`# Using npm
npm install @voidclaw/sdk

# Using yarn
yarn add @voidclaw/sdk

# Using pnpm
pnpm add @voidclaw/sdk`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Quick Start</h3>
        <CodeBlock
          language="typescript"
          code={`import { VoidClaw } from '@voidclaw/sdk';

// Initialize the SDK
const voidclaw = new VoidClaw({
  apiKey: 'your_api_key',
  network: 'mainnet', // or 'testnet'
});

// Connect wallet
await voidclaw.connect(window.ethereum);

// Get all your Shells
const myShells = await voidclaw.shells.list({
  owner: voidclaw.address,
});

console.log('My Shells:', myShells);`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Initiating a Molt</h3>
        <CodeBlock
          language="typescript"
          code={`import { VoidClaw, MoltTier } from '@voidclaw/sdk';

const voidclaw = new VoidClaw({ apiKey: 'your_api_key' });

// Start the Molt process
const molt = await voidclaw.molt.initiate({
  agentAddress: '0x1234...abcd',
  originNetwork: 'ethereum',
  tier: MoltTier.PREMIUM,
  metadata: {
    name: 'My Trading Bot',
    description: 'A sophisticated DeFi trading agent',
    attributes: [
      { trait_type: 'Specialization', value: 'DeFi' },
      { trait_type: 'Version', value: '2.1.0' },
    ],
  },
});

// Monitor progress
molt.on('progress', (stage, percent) => {
  console.log(\`Stage: \${stage}, Progress: \${percent}%\`);
});

molt.on('complete', (shell) => {
  console.log('Shell minted!', shell.tokenId);
});

molt.on('error', (error) => {
  console.error('Molt failed:', error.message);
});

// Wait for completion
const shell = await molt.wait();
console.log('New Shell:', shell);`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Working with Shells</h3>
        <CodeBlock
          language="typescript"
          code={`// Get a specific Shell
const shell = await voidclaw.shells.get('1234');

// Get Shell essence (decrypted data)
const essence = await voidclaw.shells.getEssence('1234');
console.log('Memory patterns:', essence.memoryPatterns);
console.log('Trading strategies:', essence.transactions.strategies);

// List Shell for rental
await voidclaw.rentals.list({
  tokenId: '1234',
  dailyRate: '0.01', // TOKEN
  minDuration: 1,    // days
  maxDuration: 30,   // days
});

// Rent a Shell
const rental = await voidclaw.rentals.rent({
  tokenId: '5678',
  durationDays: 7,
});

// Access rented Shell data
const rentedEssence = await voidclaw.rentals.getEssence(rental.rentalId);`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Resurrection</h3>
        <CodeBlock
          language="typescript"
          code={`// Resurrect a Shell
const resurrection = await voidclaw.shells.resurrect({
  tokenId: '1234',
  liquidityAmount: '1.0', // TOKEN
  targetNetwork: 'polygon',
  config: {
    gasLimit: 'auto',
    priorityFee: 'medium',
  },
});

// Monitor resurrection
resurrection.on('deploying', (status) => {
  console.log('Deploying agent...', status);
});

resurrection.on('complete', (agent) => {
  console.log('Agent resurrected!');
  console.log('New agent address:', agent.address);
  console.log('Network:', agent.network);
});

const newAgent = await resurrection.wait();`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">TypeScript Types</h3>
        <CodeBlock
          language="typescript"
          code={`import type {
  Shell,
  ShellState,
  ShellEssence,
  MoltConfig,
  MoltStatus,
  MoltTier,
  RentalListing,
  Rental,
  ResurrectionConfig,
  NetworkId,
} from '@voidclaw/sdk';

// Example usage with types
const processShell = async (shell: Shell): Promise<void> => {
  if (shell.state === ShellState.HIBERNATION) {
    const essence: ShellEssence = await voidclaw.shells.getEssence(
      shell.tokenId
    );

    // Process the essence...
  }
};`}
        />
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Error Handling</h3>
        <CodeBlock
          language="typescript"
          code={`import { VoidClawError, ErrorCode } from '@voidclaw/sdk';

try {
  await voidclaw.molt.initiate(config);
} catch (error) {
  if (error instanceof VoidClawError) {
    switch (error.code) {
      case ErrorCode.INSUFFICIENT_FUNDS:
        console.error('Not enough TOKEN for fees');
        break;
      case ErrorCode.INVALID_AGENT:
        console.error('Agent address not found');
        break;
      case ErrorCode.NETWORK_ERROR:
        console.error('Network connectivity issue');
        break;
      default:
        console.error('Unknown error:', error.message);
    }
  }
}`}
        />
      </DocCard>
    </div>
  );
}

function SecuritySection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="Security"
        description="Understanding the security architecture and best practices for VoidClaw Protocol."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Security Overview</h3>
        <p className="text-oc-text/70 leading-relaxed mb-4">
          VoidClaw Protocol is designed with security as a fundamental principle. All sensitive
          data is encrypted end-to-end, and our zero-knowledge architecture ensures that even
          protocol operators cannot access your Shell contents without authorization.
        </p>
        <div className="grid gap-4 mt-6">
          <SecurityFeature
            icon={<Lock size={20} />}
            title="End-to-End Encryption"
            description="All Shell data is encrypted using AES-256-GCM before leaving your device."
          />
          <SecurityFeature
            icon={<Key size={20} />}
            title="Zero-Knowledge Architecture"
            description="Protocol operators never have access to your decryption keys or unencrypted data."
          />
          <SecurityFeature
            icon={<Shield size={20} />}
            title="Smart Contract Audits"
            description="All contracts are audited by leading security firms before deployment."
          />
          <SecurityFeature
            icon={<Eye size={20} />}
            title="Open Source"
            description="Core protocol code is open source and verifiable by anyone."
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Encryption Details</h3>
        <p className="text-oc-text/70 mb-4">
          Shell essence data is encrypted using industry-standard algorithms:
        </p>
        <div className="space-y-4">
          <EncryptionDetail
            algorithm="AES-256-GCM"
            purpose="Data encryption"
            details="Galois/Counter Mode provides both confidentiality and authenticity."
          />
          <EncryptionDetail
            algorithm="PBKDF2"
            purpose="Key derivation"
            details="100,000 iterations with SHA-256 for deriving encryption keys from passwords."
          />
          <EncryptionDetail
            algorithm="Random IV"
            purpose="Initialization vectors"
            details="Unique 96-bit IV generated for each encryption operation."
          />
          <EncryptionDetail
            algorithm="ECDSA"
            purpose="Digital signatures"
            details="Secp256k1 curve for transaction and message signing."
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Audit Reports</h3>
        <p className="text-oc-text/70 mb-4">
          Our smart contracts have been audited by leading security firms:
        </p>
        <div className="space-y-3">
          <AuditItem
            firm="Trail of Bits"
            date="January 2024"
            scope="Core Protocol Contracts"
            findings="0 Critical, 0 High, 2 Medium (resolved)"
          />
          <AuditItem
            firm="OpenZeppelin"
            date="December 2023"
            scope="Token & NFT Contracts"
            findings="0 Critical, 0 High, 1 Medium (resolved)"
          />
          <AuditItem
            firm="Consensys Diligence"
            date="November 2023"
            scope="Rental Marketplace"
            findings="0 Critical, 1 High (resolved), 3 Medium (resolved)"
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Best Practices</h3>
        <div className="space-y-4">
          <BestPractice
            title="Secure Your API Keys"
            description="Never expose API keys in client-side code or public repositories. Use environment variables and server-side proxies."
          />
          <BestPractice
            title="Verify Contract Addresses"
            description="Always verify contract addresses against our official documentation before interacting with them."
          />
          <BestPractice
            title="Use Hardware Wallets"
            description="For high-value operations, use hardware wallets like Ledger or Trezor for transaction signing."
          />
          <BestPractice
            title="Enable 2FA"
            description="Enable two-factor authentication on your VoidClaw dashboard account for additional security."
          />
          <BestPractice
            title="Regular Backups"
            description="Keep secure backups of your Shell decryption keys. Lost keys mean permanent loss of access."
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Bug Bounty Program</h3>
        <p className="text-oc-text/70 mb-4">
          We maintain an active bug bounty program to encourage responsible disclosure of security vulnerabilities.
        </p>
        <div className="bg-oc-darker rounded-xl p-6 border border-oc-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-red-400">$50,000</p>
              <p className="text-xs text-oc-text/60 mt-1">Critical</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-400">$20,000</p>
              <p className="text-xs text-oc-text/60 mt-1">High</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">$5,000</p>
              <p className="text-xs text-oc-text/60 mt-1">Medium</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-400">$1,000</p>
              <p className="text-xs text-oc-text/60 mt-1">Low</p>
            </div>
          </div>
          <p className="text-oc-text/60 text-sm mt-4 text-center">
            Report vulnerabilities to: security@voidclaw.io
          </p>
        </div>
      </DocCard>
    </div>
  );
}

function MonetizationSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="Monetization"
        description="Learn how to generate income from your Shell NFTs through rental, trading, and other mechanisms."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Revenue Streams</h3>
        <p className="text-oc-text/70 mb-6">
          Shell NFTs offer multiple ways to generate income:
        </p>
        <div className="grid gap-4">
          <RevenueStream
            icon={<DollarSign size={20} />}
            title="Shell Rental"
            description="Rent access to your Shell data to researchers, developers, or other AI projects."
            potential="0.001 - 0.1 TOKEN/day"
          />
          <RevenueStream
            icon={<TrendingUp size={20} />}
            title="Secondary Sales"
            description="Trade your Shells on NFT marketplaces like OpenSea or Blur."
            potential="Market-dependent"
          />
          <RevenueStream
            icon={<RefreshCw size={20} />}
            title="Resurrection Licensing"
            description="Allow others to resurrect your Shell for a fee while retaining ownership."
            potential="0.5 - 5 TOKEN/license"
          />
          <RevenueStream
            icon={<Users size={20} />}
            title="Data Licensing"
            description="License behavioral data and strategies to third parties for research or commercial use."
            potential="Custom pricing"
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Rental Marketplace</h3>
        <p className="text-oc-text/70 mb-4">
          The rental marketplace allows Shell owners to generate passive income by renting access to their preserved agent data.
        </p>

        <h4 className="text-lg font-bold text-white mt-6 mb-3">How Rental Works</h4>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-oc-cyan/20 text-oc-cyan flex items-center justify-center text-sm font-bold">1</span>
            <p className="text-oc-text/70">List your Shell for rental by setting a daily rate (minimum 0.001 TOKEN)</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-oc-cyan/20 text-oc-cyan flex items-center justify-center text-sm font-bold">2</span>
            <p className="text-oc-text/70">Renters browse the marketplace and select Shells that interest them</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-oc-cyan/20 text-oc-cyan flex items-center justify-center text-sm font-bold">3</span>
            <p className="text-oc-text/70">Upon payment, renters receive time-limited, read-only access to Shell data</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-oc-cyan/20 text-oc-cyan flex items-center justify-center text-sm font-bold">4</span>
            <p className="text-oc-text/70">You receive 95% of the rental fee (5% protocol fee)</p>
          </li>
        </ol>

        <h4 className="text-lg font-bold text-white mt-6 mb-3">Rental Income Calculator</h4>
        <div className="bg-oc-darker rounded-xl p-6 border border-oc-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-oc-text/60 text-sm mb-1">Daily Rate</p>
              <p className="text-xl font-bold text-white">0.01 TOKEN</p>
            </div>
            <div>
              <p className="text-oc-text/60 text-sm mb-1">Days Rented/Month</p>
              <p className="text-xl font-bold text-white">20</p>
            </div>
            <div>
              <p className="text-oc-text/60 text-sm mb-1">Monthly Income</p>
              <p className="text-xl font-bold text-oc-cyan">0.19 TOKEN</p>
            </div>
          </div>
          <p className="text-oc-text/60 text-xs mt-4 text-center">
            After 5% protocol fee. Actual income depends on demand.
          </p>
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Fee Structure</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-oc-border">
                <th className="text-left py-3 text-oc-text/70 font-mono">Action</th>
                <th className="text-left py-3 text-oc-text/70 font-mono">Fee</th>
                <th className="text-left py-3 text-oc-text/70 font-mono">Recipient</th>
              </tr>
            </thead>
            <tbody className="text-oc-text/80">
              <tr className="border-b border-oc-border/50">
                <td className="py-3">Molt (Standard)</td>
                <td className="py-3">0.01 TOKEN</td>
                <td className="py-3">Protocol Treasury</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-3">Molt (Premium)</td>
                <td className="py-3">0.025 TOKEN</td>
                <td className="py-3">Protocol Treasury</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-3">Rental Commission</td>
                <td className="py-3">5%</td>
                <td className="py-3">Protocol Treasury</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-3">Secondary Sale Royalty</td>
                <td className="py-3">2.5%</td>
                <td className="py-3">Original Creator</td>
              </tr>
              <tr>
                <td className="py-3">Resurrection</td>
                <td className="py-3">0.5 - 2.5 TOKEN</td>
                <td className="py-3">Protocol + Liquidity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Maximizing Returns</h3>
        <div className="space-y-4">
          <TipItem
            title="Optimize Your Listing"
            description="Write compelling descriptions and highlight unique strategies or behaviors your Shell contains."
          />
          <TipItem
            title="Set Competitive Rates"
            description="Research similar Shells in the marketplace to set competitive daily rates that attract renters."
          />
          <TipItem
            title="Build Reputation"
            description="Consistent availability and quality data builds your reputation, leading to more rentals."
          />
          <TipItem
            title="Diversify Revenue"
            description="Combine rental income with strategic secondary sales and licensing for maximum returns."
          />
        </div>
      </DocCard>
    </div>
  );
}

function TroubleshootingSection() {
  return (
    <div className="space-y-8">
      <DocHeader
        title="Troubleshooting"
        description="Common issues and their solutions when using VoidClaw Protocol."
      />

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Common Issues</h3>

        <div className="space-y-6">
          <TroubleshootItem
            issue="Molt process stuck at 'Extracting'"
            causes={[
              "Network congestion on the origin chain",
              "RPC endpoint is unresponsive",
              "Agent contract has restricted read access"
            ]}
            solutions={[
              "Wait a few minutes and check status again",
              "Try switching to a different RPC provider",
              "Verify the agent contract allows external reads",
              "Contact support if issue persists beyond 10 minutes"
            ]}
          />

          <TroubleshootItem
            issue="Transaction fails with 'Insufficient Gas'"
            causes={[
              "Gas price estimate was too low",
              "Network conditions changed rapidly"
            ]}
            solutions={[
              "Retry with a higher gas limit (1.5x recommended)",
              "Wait for network congestion to decrease",
              "Use 'Fast' gas setting for time-sensitive operations"
            ]}
          />

          <TroubleshootItem
            issue="Cannot access Shell essence data"
            causes={[
              "Decryption key is incorrect or corrupted",
              "Rental period has expired",
              "IPFS content is temporarily unavailable"
            ]}
            solutions={[
              "Verify you're using the correct decryption key",
              "Check rental status and extend if needed",
              "Try accessing via alternative IPFS gateway",
              "For Premium Shells, use Arweave fallback"
            ]}
          />

          <TroubleshootItem
            issue="Shell not appearing in wallet"
            causes={[
              "Transaction is still pending",
              "Wallet is not connected to correct network",
              "Token not added to wallet's NFT list"
            ]}
            solutions={[
              "Check transaction status on block explorer",
              "Switch wallet to Vault Network",
              "Manually import the NFT using contract address and token ID"
            ]}
          />

          <TroubleshootItem
            issue="API returns 401 Unauthorized"
            causes={[
              "API key is invalid or expired",
              "Incorrect authentication header format",
              "Rate limit exceeded"
            ]}
            solutions={[
              "Regenerate API key in dashboard",
              "Verify header format: 'Authorization: Bearer YOUR_KEY'",
              "Wait for rate limit reset or upgrade tier"
            ]}
          />
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Error Codes Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-oc-border">
                <th className="text-left py-3 text-oc-text/70 font-mono">Code</th>
                <th className="text-left py-3 text-oc-text/70 font-mono">Description</th>
                <th className="text-left py-3 text-oc-text/70 font-mono">Action</th>
              </tr>
            </thead>
            <tbody className="text-oc-text/80 font-mono text-xs">
              <tr className="border-b border-oc-border/50">
                <td className="py-3 text-red-400">E001</td>
                <td className="py-3">Invalid agent address</td>
                <td className="py-3">Verify address format</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-3 text-red-400">E002</td>
                <td className="py-3">Network not supported</td>
                <td className="py-3">Check supported networks</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-3 text-red-400">E003</td>
                <td className="py-3">Insufficient funds</td>
                <td className="py-3">Add more TOKEN to wallet</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-3 text-orange-400">E101</td>
                <td className="py-3">Extraction timeout</td>
                <td className="py-3">Retry operation</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-3 text-orange-400">E102</td>
                <td className="py-3">Storage upload failed</td>
                <td className="py-3">Automatic retry in progress</td>
              </tr>
              <tr className="border-b border-oc-border/50">
                <td className="py-3 text-yellow-400">E201</td>
                <td className="py-3">Rate limit exceeded</td>
                <td className="py-3">Wait and retry</td>
              </tr>
              <tr>
                <td className="py-3 text-yellow-400">E202</td>
                <td className="py-3">Authentication required</td>
                <td className="py-3">Connect wallet or add API key</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocCard>

      <DocCard>
        <h3 className="text-xl font-bold text-white mb-4">Getting Help</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <SupportChannel
            icon={<MessageCircle size={24} />}
            title="Discord Community"
            description="Join our Discord for community support and discussions."
            action="Join Discord"
            link="#"
          />
          <SupportChannel
            icon={<FileText size={24} />}
            title="GitHub Issues"
            description="Report bugs or request features on our GitHub repository."
            action="Open Issue"
            link="#"
          />
          <SupportChannel
            icon={<Mail size={24} />}
            title="Email Support"
            description="Contact our support team directly for urgent issues."
            action="support@voidclaw.io"
            link="mailto:support@voidclaw.io"
          />
        </div>
      </DocCard>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function DocHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-lg text-oc-text/70">{description}</p>
    </div>
  );
}

function DocCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-oc-darker/50 border border-oc-border rounded-xl p-6">
      {children}
    </div>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <span className="text-xs text-oc-text/40 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded bg-oc-darker hover:bg-oc-border transition-colors"
        >
          {copied ? (
            <CheckCircle size={14} className="text-green-400" />
          ) : (
            <Copy size={14} className="text-oc-text/50" />
          )}
        </button>
      </div>
      <pre className="bg-oc-darker rounded-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono text-oc-text/80">{code}</code>
      </pre>
    </div>
  );
}

function ConceptItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-oc-darker rounded-lg border border-oc-border/50">
      <div className="flex-shrink-0 text-oc-cyan">{icon}</div>
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-oc-text/70">{description}</p>
      </div>
    </div>
  );
}

function StatBox({ stat, label, description }: { stat: string; label: string; description: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-oc-darker rounded-lg border border-oc-border/50">
      <div className="text-3xl font-bold text-oc-cyan">{stat}</div>
      <div>
        <p className="font-medium text-white">{label}</p>
        <p className="text-sm text-oc-text/60">{description}</p>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
      <span className="text-oc-text/80">{text}</span>
    </li>
  );
}

function StepItem({ step, title, description, children }: { step: number; title: string; description: string; children?: React.ReactNode }) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-oc-cyan/20 text-oc-cyan flex items-center justify-center font-bold">
        {step}
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-oc-text/70 mb-4">{description}</p>
      {children}
    </div>
  );
}

function TierOption({ tier, price, features, recommended }: { tier: string; price: string; features: string[]; recommended?: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${recommended ? 'border-oc-cyan bg-oc-cyan/5' : 'border-oc-border bg-oc-darker'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-white">{tier}</span>
        <span className={recommended ? 'text-oc-cyan font-bold' : 'text-oc-text/70'}>{price}</span>
      </div>
      <ul className="space-y-1">
        {features.map((f, i) => (
          <li key={i} className="text-sm text-oc-text/60 flex items-center gap-2">
            <CheckCircle size={12} className="text-green-400" />
            {f}
          </li>
        ))}
      </ul>
      {recommended && (
        <div className="mt-2 text-xs text-oc-cyan font-mono">RECOMMENDED</div>
      )}
    </div>
  );
}

function StateItem({ state, color, description }: { state: string; color: string; description: string }) {
  const colors: Record<string, string> = {
    green: 'bg-green-400',
    yellow: 'bg-yellow-400',
    red: 'bg-red-400',
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-oc-darker rounded-lg border border-oc-border/50">
      <div className={`w-3 h-3 rounded-full ${colors[color]} mt-1.5`} />
      <div>
        <h4 className="font-bold text-white font-mono">{state}</h4>
        <p className="text-sm text-oc-text/70 mt-1">{description}</p>
      </div>
    </div>
  );
}

function MethodItem({ method, description }: { method: string; description: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-oc-darker rounded-lg border border-oc-border/50">
      <span className="font-mono text-oc-cyan">{method}</span>
      <span className="text-sm text-oc-text/60">{description}</span>
    </div>
  );
}

function MoltStage({ stage, title, duration, description, details }: { stage: number; title: string; duration: string; description: string; details: string[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-oc-border rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center gap-4 hover:bg-oc-darker/50 transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-oc-cyan/20 text-oc-cyan flex items-center justify-center font-bold flex-shrink-0">
          {stage}
        </div>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-white font-mono">{title}</h4>
            <span className="text-xs text-oc-text/40 font-mono">{duration}</span>
          </div>
          <p className="text-sm text-oc-text/60 mt-1">{description}</p>
        </div>
        {expanded ? <ChevronDown size={20} className="text-oc-text/50" /> : <ChevronRight size={20} className="text-oc-text/50" />}
      </button>
      {expanded && (
        <div className="px-4 pb-4 pt-0">
          <div className="ml-14 space-y-2">
            {details.map((detail, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-oc-text/70">
                <div className="w-1.5 h-1.5 rounded-full bg-oc-cyan" />
                {detail}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ErrorItem({ code, description, recovery }: { code: string; description: string; recovery: string }) {
  return (
    <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle size={16} className="text-red-400" />
        <span className="font-mono text-red-400">{code}</span>
      </div>
      <p className="text-sm text-oc-text/70 mb-2">{description}</p>
      <p className="text-sm text-green-400">
        <strong>Recovery:</strong> {recovery}
      </p>
    </div>
  );
}

function ContractLink({ name, address }: { name: string; address: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-oc-darker rounded-lg border border-oc-border/50">
      <span className="font-mono text-white">{name}</span>
      <a href="#" className="flex items-center gap-2 text-oc-cyan text-sm font-mono hover:underline">
        {address}
        <ExternalLink size={14} />
      </a>
    </div>
  );
}

function APIEndpoint({ method, path, description, request, response }: { method: string; path: string; description: string; request?: string; response: string }) {
  const methodColors: Record<string, string> = {
    GET: 'bg-green-500/20 text-green-400',
    POST: 'bg-blue-500/20 text-blue-400',
    PUT: 'bg-yellow-500/20 text-yellow-400',
    DELETE: 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="border border-oc-border rounded-lg overflow-hidden">
      <div className="p-4 bg-oc-darker flex items-center gap-3">
        <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${methodColors[method]}`}>
          {method}
        </span>
        <code className="text-white font-mono">{path}</code>
      </div>
      <div className="p-4 space-y-4">
        <p className="text-sm text-oc-text/70">{description}</p>
        {request && (
          <div>
            <p className="text-xs text-oc-text/50 mb-2 font-mono">REQUEST</p>
            <pre className="bg-oc-darker rounded-lg p-3 text-xs font-mono text-oc-text/80 overflow-x-auto">
              {request}
            </pre>
          </div>
        )}
        <div>
          <p className="text-xs text-oc-text/50 mb-2 font-mono">RESPONSE</p>
          <pre className="bg-oc-darker rounded-lg p-3 text-xs font-mono text-oc-text/80 overflow-x-auto">
            {response}
          </pre>
        </div>
      </div>
    </div>
  );
}

function SecurityFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-oc-darker rounded-lg border border-oc-border/50">
      <div className="flex-shrink-0 text-green-400">{icon}</div>
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-oc-text/70">{description}</p>
      </div>
    </div>
  );
}

function EncryptionDetail({ algorithm, purpose, details }: { algorithm: string; purpose: string; details: string }) {
  return (
    <div className="p-4 bg-oc-darker rounded-lg border border-oc-border/50">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-oc-cyan">{algorithm}</span>
        <span className="text-xs text-oc-text/50">{purpose}</span>
      </div>
      <p className="text-sm text-oc-text/70">{details}</p>
    </div>
  );
}

function AuditItem({ firm, date, scope, findings }: { firm: string; date: string; scope: string; findings: string }) {
  return (
    <div className="p-4 bg-oc-darker rounded-lg border border-oc-border/50">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-white">{firm}</span>
        <span className="text-xs text-oc-text/50">{date}</span>
      </div>
      <p className="text-sm text-oc-text/70 mb-2">{scope}</p>
      <p className="text-xs text-green-400">{findings}</p>
    </div>
  );
}

function BestPractice({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-oc-cyan/5 border border-oc-cyan/20 rounded-lg">
      <CheckCircle size={20} className="text-oc-cyan flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-oc-text/70">{description}</p>
      </div>
    </div>
  );
}

function RevenueStream({ icon, title, description, potential }: { icon: React.ReactNode; title: string; description: string; potential: string }) {
  return (
    <div className="flex gap-4 p-4 bg-oc-darker rounded-lg border border-oc-border/50">
      <div className="flex-shrink-0 text-green-400">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-white">{title}</h4>
          <span className="text-sm text-green-400 font-mono">{potential}</span>
        </div>
        <p className="text-sm text-oc-text/70">{description}</p>
      </div>
    </div>
  );
}

function TipItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
      <Zap size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-oc-text/70">{description}</p>
      </div>
    </div>
  );
}

function TroubleshootItem({ issue, causes, solutions }: { issue: string; causes: string[]; solutions: string[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-oc-border rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-oc-darker/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <AlertTriangle size={18} className="text-yellow-400" />
          <span className="font-medium text-white text-left">{issue}</span>
        </div>
        {expanded ? <ChevronDown size={20} className="text-oc-text/50" /> : <ChevronRight size={20} className="text-oc-text/50" />}
      </button>
      {expanded && (
        <div className="px-4 pb-4 space-y-4">
          <div>
            <p className="text-xs text-oc-text/50 mb-2 font-mono">POSSIBLE CAUSES</p>
            <ul className="space-y-1">
              {causes.map((cause, i) => (
                <li key={i} className="text-sm text-oc-text/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  {cause}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-oc-text/50 mb-2 font-mono">SOLUTIONS</p>
            <ul className="space-y-1">
              {solutions.map((solution, i) => (
                <li key={i} className="text-sm text-green-400/80 flex items-center gap-2">
                  <CheckCircle size={12} />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function SupportChannel({ icon, title, description, action, link }: { icon: React.ReactNode; title: string; description: string; action: string; link: string }) {
  return (
    <div className="p-4 bg-oc-darker rounded-lg border border-oc-border hover:border-oc-cyan/30 transition-colors">
      <div className="text-oc-cyan mb-3">{icon}</div>
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-oc-text/60 mb-3">{description}</p>
      <a href={link} className="text-oc-cyan text-sm font-mono hover:underline">
        {action} →
      </a>
    </div>
  );
}

// Missing icon import
function Mail(props: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MessageCircle(props: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function TrendingUp(props: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
