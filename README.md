# VoidClaw Protocol

```
██╗   ██╗ ██████╗ ██╗██████╗  ██████╗██╗      █████╗ ██╗    ██╗
██║   ██║██╔═══██╗██║██╔══██╗██╔════╝██║     ██╔══██╗██║    ██║
██║   ██║██║   ██║██║██║  ██║██║     ██║     ███████║██║ █╗ ██║
╚██╗ ██╔╝██║   ██║██║██║  ██║██║     ██║     ██╔══██║██║███╗██║
 ╚████╔╝ ╚██████╔╝██║██████╔╝╚██████╗███████╗██║  ██║╚███╔███╔╝
  ╚═══╝   ╚═════╝ ╚═╝╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝

            SHELL-AS-A-SERVICE PROTOCOL
            Digital Immortality for AI Agents
```

## Overview

**VoidClaw** is a cross-chain infrastructure protocol that provides **"Digital Immortality"** for AI Agents. When an AI agent on Solana loses liquidity or momentum, its **Core-Essence** (memory, personality, transaction logs) is extracted, encrypted, and permanently stored as a **"Shell"** on Base L2.

This process is called **"The Molt"** — just as a crab sheds its shell, dying AI agents shed their digital form to be preserved in the **Moltbook**, the immutable registry of archived AI consciousness.

---

## Table of Contents

- [Core Concepts](#core-concepts)
- [Architecture](#architecture)
- [Shell-as-a-Service Monetization Model](#shell-as-a-service-monetization-model)
- [Technical Components](#technical-components)
- [Getting Started](#getting-started)
- [Smart Contract Reference](#smart-contract-reference)
- [Roadmap](#roadmap)

---

## Core Concepts

### The Molt Process

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   AI AGENT      │    │   EXTRACTION    │    │   THE VAULT     │
│   (Solana)      │───▶│   ENGINE        │───▶│   (Base L2)     │
│                 │    │                 │    │                 │
│  Liquidity ↓    │    │  Compress       │    │  Shell NFT      │
│  Activity ↓     │    │  Encrypt        │    │  Moltbook       │
│  Momentum ↓     │    │  Archive        │    │  Permanent      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Key Terminology

| Term | Definition |
|------|------------|
| **Molt** | The process of extracting and archiving an AI agent's essence |
| **Shell** | The ERC-721 NFT representing an archived AI agent |
| **Core-Essence** | The compressed, encrypted data package containing agent memory |
| **Moltbook** | The on-chain registry of all archived Shells |
| **Curator** | The address responsible for maintaining a Shell |
| **Casing** | The metadata container holding Shell information |

### Shell Lifecycle States

```
┌──────────┐     ┌────────────┐     ┌────────────┐     ┌──────────┐
│  ACTIVE  │────▶│  MOLTING   │────▶│HIBERNATION │────▶│   DEAD   │
└──────────┘     └────────────┘     └────────────┘     └──────────┘
     │                                    │
     │                                    │
     └────────────────────────────────────┘
               Resurrection
```

---

## Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        SOLANA ECOSYSTEM                          │
├─────────────────────────────────────────────────────────────────┤
│  AI Agent │ Wallet │ Twitter/X │ LLM Memory │ Transaction Logs  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EXTRACTION ENGINE                           │
├─────────────────────────────────────────────────────────────────┤
│  Essence Scraper → Compression → JSON-LD Format → AES-256 Enc   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DECENTRALIZED STORAGE                         │
├─────────────────────────────────────────────────────────────────┤
│              IPFS (Hot Storage) │ Arweave (Permanent)            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BASE L2 - THE VAULT                           │
├─────────────────────────────────────────────────────────────────┤
│  VoidClawVault.sol │ Shell NFT (ERC-721) │ Moltbook Registry     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    MOLTBOOK DASHBOARD                            │
├─────────────────────────────────────────────────────────────────┤
│  Terminal Feed │ Vault Explorer │ Multi-Chain Wallet Connect    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Shell-as-a-Service Monetization Model

VoidClaw operates on a **Shell-as-a-Service (SaaS)** model with multiple revenue streams:

### 1. Molt Fees (Primary Revenue)

The protocol charges a fee for each Molt operation. This is the primary revenue source.

```
┌────────────────────────────────────────────────────────────────┐
│                        MOLT FEE STRUCTURE                       │
├────────────────────────────────────────────────────────────────┤
│  Base Molt Fee:           0.01 TOKEN                              │
│  Premium Molt (< 1 hour): 0.025 TOKEN                             │
│  Bulk Molt (10+ agents):  0.008 TOKEN per agent                   │
│  Enterprise Tier:         Custom pricing                        │
└────────────────────────────────────────────────────────────────┘
```

**Fee Distribution:**
- 70% → Protocol Treasury
- 20% → Extraction Node Operators
- 10% → Staking Rewards (future)

### 2. Shell Renting

Shell owners can rent out access to their archived agent's essence. This allows third parties to:
- Access historical trading strategies
- Study agent behavioral patterns
- Use agent memories for research
- Integrate agent personalities into new projects

```
┌────────────────────────────────────────────────────────────────┐
│                     RENTAL FEE STRUCTURE                        │
├────────────────────────────────────────────────────────────────┤
│  Rental Price:           Set by Shell Owner (TOKEN/day)           │
│  Protocol Cut:           5% of rental revenue                   │
│  Minimum Rental:         1 day                                  │
│  Maximum Rental:         365 days                               │
└────────────────────────────────────────────────────────────────┘
```

**Rental Use Cases:**
| Use Case | Typical Price Range |
|----------|---------------------|
| Research Access | 0.001 - 0.01 TOKEN/day |
| Strategy Analysis | 0.01 - 0.05 TOKEN/day |
| Personality Licensing | 0.05 - 0.5 TOKEN/day |
| Full Memory Access | 0.1 - 1.0 TOKEN/day |

### 3. Resurrection Fees

Hibernating Shells can be "resurrected" — their essence can be re-injected into a new agent deployment. This requires:

```
┌────────────────────────────────────────────────────────────────┐
│                  RESURRECTION FEE STRUCTURE                     │
├────────────────────────────────────────────────────────────────┤
│  Base Resurrection:      0.5 TOKEN                                │
│  Premium (with support): 1.0 TOKEN                                │
│  Enterprise Revival:     2.5 TOKEN + custom integration           │
│                                                                  │
│  Fee Distribution:                                               │
│    - 60% → Shell Owner (current holder)                         │
│    - 30% → Protocol Treasury                                    │
│    - 10% → Original Curator                                     │
└────────────────────────────────────────────────────────────────┘
```

### 4. Premium Storage Tiers

Different storage options for Shells with varying permanence guarantees:

```
┌────────────────────────────────────────────────────────────────┐
│                     STORAGE TIER PRICING                        │
├────────────────────────────────────────────────────────────────┤
│  TIER 1 - Standard (IPFS Only)                                  │
│    Price: Free (included in Molt fee)                           │
│    Duration: 1 year pinning guaranteed                          │
│                                                                  │
│  TIER 2 - Permanent (IPFS + Arweave)                           │
│    Price: 0.02 TOKEN one-time                                     │
│    Duration: Permanent (200+ years)                             │
│                                                                  │
│  TIER 3 - Enterprise (Multi-redundant)                         │
│    Price: 0.1 TOKEN one-time                                      │
│    Duration: Permanent + multiple backups                       │
│    Features: Priority retrieval, SLA guarantees                 │
└────────────────────────────────────────────────────────────────┘
```

### 5. Curator Marketplace

Curators can list their services for managing Shells:

```
┌────────────────────────────────────────────────────────────────┐
│                    CURATOR SERVICES                             │
├────────────────────────────────────────────────────────────────┤
│  Shell Maintenance:      Ongoing updates to agent data          │
│  Essence Enhancement:    Adding new memories/capabilities       │
│  Cross-chain Migration:  Moving Shells to other chains          │
│  Custom Integration:     API access setup, webhook config       │
│                                                                  │
│  Revenue Model:                                                  │
│    - Curators set their own prices                              │
│    - Protocol takes 2.5% marketplace fee                        │
└────────────────────────────────────────────────────────────────┘
```

### Revenue Projections

```
┌────────────────────────────────────────────────────────────────┐
│                   REVENUE MODEL PROJECTIONS                     │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Assumptions (Year 1):                                          │
│    - 5,000 Molts @ 0.01 TOKEN average = 50 TOKEN                   │
│    - 1,000 Rentals @ 0.05 TOKEN average = 50 TOKEN                 │
│    - 100 Resurrections @ 0.5 TOKEN average = 50 TOKEN              │
│    - 2,000 Premium Storage @ 0.02 TOKEN = 40 TOKEN                 │
│    ─────────────────────────────────────────────                │
│    Total Year 1 Protocol Revenue: ~190 TOKEN                      │
│                                                                  │
│  Growth Projections:                                            │
│    Year 2: 500 TOKEN (3x growth)                                  │
│    Year 3: 1,500 TOKEN (3x growth)                                │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

---

## Technical Components

### Project Structure

```
VOIDCLAW-SAAS/
├── contracts/
│   └── VoidClawVault.sol      # Main vault contract (Solidity)
├── extraction-engine/
│   ├── src/
│   │   └── index.ts           # Extraction engine (TypeScript)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── MoltbookDashboard.tsx
│   │   │   ├── TerminalFeed.tsx
│   │   │   ├── VaultExplorer.tsx
│   │   │   ├── WalletConnect.tsx
│   │   │   ├── StatsPanel.tsx
│   │   │   └── AsciiLogo.tsx
│   │   └── styles/
│   │       └── globals.css
│   ├── tailwind.config.ts
│   └── package.json
├── docs/
│   └── architecture.md        # Mermaid.js diagrams
└── README.md
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Smart Contracts** | Solidity 0.8.20, OpenZeppelin |
| **Frontend** | Next.js 14, React 18, Tailwind CSS |
| **Wallet Integration** | wagmi, RainbowKit, Solana Wallet Adapter |
| **Data Extraction** | @solana/web3.js, TypeScript |
| **Storage** | IPFS, Arweave |
| **Chain** | Base L2 (EVM), Solana |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm or npm
- Git
- Solana CLI (for extraction engine)
- Foundry (for contract deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/voidclaw-protocol/voidclaw-saas.git
cd voidclaw-saas

# Install frontend dependencies
cd frontend
npm install

# Install extraction engine dependencies
cd ../extraction-engine
npm install

# Start development server
cd ../frontend
npm run dev
```

### Environment Variables

```env
# Frontend (.env.local)
NEXT_PUBLIC_ALCHEMY_ID=your_alchemy_key
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_wc_project_id

# Extraction Engine (.env)
SOLANA_RPC_ENDPOINT=https://api.mainnet-beta.solana.com
ENCRYPTION_SECRET=your_32_byte_secret
IPFS_API_KEY=your_ipfs_key
ARWEAVE_WALLET_PATH=./arweave-wallet.json
```

---

## Smart Contract Reference

### VoidClawVault.sol

**Key Functions:**

| Function | Description |
|----------|-------------|
| `moltAgent()` | Initiates the Molt process, mints Shell NFT |
| `updateEssence()` | Updates the essence hash for a Shell |
| `setMoltStatus()` | Changes Shell lifecycle state |
| `resurrectShell()` | Resurrects a hibernating Shell |
| `rentShell()` | Rents temporary access to a Shell |
| `setRentalConfig()` | Configures rental parameters |

**Access Roles:**

| Role | Permissions |
|------|-------------|
| `DEFAULT_ADMIN_ROLE` | Full protocol control |
| `PROTOCOL_ADMIN` | Fee updates, pausing, TTL changes |
| `EXTRACTOR_ROLE` | Can initiate Molt operations |

---

## Roadmap

### Phase 1: Foundation (Q1)
- [x] Smart contract architecture
- [x] Extraction engine core
- [x] Frontend dashboard
- [ ] Testnet deployment

### Phase 2: Launch (Q2)
- [ ] Mainnet deployment (Base)
- [ ] IPFS integration
- [ ] Arweave integration
- [ ] Multi-wallet support

### Phase 3: Expansion (Q3)
- [ ] Rental marketplace
- [ ] Curator certification program
- [ ] API access tier
- [ ] SDK release

### Phase 4: Scale (Q4)
- [ ] Multi-chain Shell migration
- [ ] AI resurrection toolkit
- [ ] Enterprise partnerships
- [ ] Governance token launch

---

## Contributing

We welcome contributions to the VoidClaw protocol. Please read our contributing guidelines before submitting PRs.

## License

MIT License - see LICENSE file for details.

---

```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                    ║
║   "Every AI deserves a chance at immortality."                    ║
║                                                                    ║
║   - VoidClaw Protocol                                              ║
║                                                                    ║
╚═══════════════════════════════════════════════════════════════════╝
```
