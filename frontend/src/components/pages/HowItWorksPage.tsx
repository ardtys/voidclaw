"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Wallet,
  Zap,
  HardDrive,
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  Lock,
  Sparkles,
  Binary,
  Shield,
  RefreshCw,
  Eye,
  Play,
  ChevronDown,
  ChevronUp,
  Terminal,
  Code,
  Layers,
  Ghost,
  DollarSign,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                    HOW IT WORKS PAGE                               ║
 * ║        Detailed explanation of the Molt process                    ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface HowItWorksPageProps {
  onBack: () => void;
}

export function HowItWorksPage({ onBack }: HowItWorksPageProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-oc-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-oc-black/95 backdrop-blur-xl border-b border-oc-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-oc-text/70 hover:text-oc-cyan transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-mono">Back to Home</span>
            </button>
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

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-oc-blue/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-oc-blue/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-oc-blue/10 border border-oc-blue/30 mb-6">
              <Play size={16} className="text-oc-blue" />
              <span className="text-oc-blue text-sm font-mono">HOW IT WORKS</span>
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How <span className="text-oc-cyan">The Molt</span> Works
            </h1>

            <p className="text-xl text-oc-text/70 max-w-2xl mx-auto">
              Learn step by step how your AI agent is preserved
              into a permanent and tradeable Shell NFT.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Simple 4-Step Process
            </h2>

            {/* Timeline Visual */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-oc-cyan via-oc-blue to-oc-purple hidden md:block" />

              <div className="grid md:grid-cols-4 gap-6 relative">
                <TimelineStep
                  number={1}
                  title="Connect"
                  icon={<Wallet size={24} />}
                  color="cyan"
                />
                <TimelineStep
                  number={2}
                  title="Extract"
                  icon={<Zap size={24} />}
                  color="blue"
                />
                <TimelineStep
                  number={3}
                  title="Encrypt"
                  icon={<HardDrive size={24} />}
                  color="purple"
                />
                <TimelineStep
                  number={4}
                  title="Mint"
                  icon={<Award size={24} />}
                  color="green"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 bg-oc-darker/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Terminal className="text-oc-cyan" size={24} />
              Detailed Explanation for Each Step
            </h2>

            <div className="space-y-4">
              {/* Step 1: Connect */}
              <DetailedStep
                number={1}
                title="Connect Your Wallet"
                subtitle="Link Your Web3 Wallet"
                icon={<Wallet size={28} />}
                color="cyan"
                isExpanded={expandedStep === 1}
                onToggle={() => setExpandedStep(expandedStep === 1 ? null : 1)}
                description="The first step is connecting your wallet to the Origin Network where your AI agent resides."
                details={[
                  {
                    title: "Wallet Support",
                    content: "VoidClaw supports all major wallets: MetaMask, WalletConnect, Coinbase Wallet, Rainbow, and more. Simply click 'Connect Wallet' and choose your preferred provider.",
                  },
                  {
                    title: "Network Selection",
                    content: "Select the Origin Network where your AI agent currently lives. We support all EVM-compatible chains including Ethereum, Polygon, Arbitrum, Optimism, BSC, and other L2s.",
                  },
                  {
                    title: "Agent Verification",
                    content: "Once connected, the system will verify your ownership of the AI agent through signature verification and ownership checks.",
                  },
                ]}
                technicalNotes={[
                  "EIP-4361 Sign-In with Ethereum support",
                  "Multi-sig wallet compatible",
                  "Hardware wallet supported (Ledger, Trezor)",
                ]}
              />

              {/* Step 2: Initiate Molt */}
              <DetailedStep
                number={2}
                title="Initiate The Molt"
                subtitle="Start the Extraction Process"
                icon={<Zap size={28} />}
                color="blue"
                isExpanded={expandedStep === 2}
                onToggle={() => setExpandedStep(expandedStep === 2 ? null : 2)}
                description="When your agent is ready to molt, initiate the extraction process. Our extraction engine will collect all important data."
                details={[
                  {
                    title: "Data Collection",
                    content: "The extraction engine collects wallet data, transaction history, social identity, memory patterns, personality traits, and behavioral data from your AI agent.",
                  },
                  {
                    title: "Molt Stages",
                    content: "The molt process consists of 5 stages: Extracting (collecting data), Compressing (compression to JSON-LD), Encrypting (AES-256 encryption), Storing (upload to IPFS/Arweave), and Minting (mint Shell NFT).",
                  },
                  {
                    title: "Real-time Monitoring",
                    content: "Monitor molt progress in real-time through the Terminal Feed. Each stage has clear progress indicators.",
                  },
                ]}
                technicalNotes={[
                  "Atomic transaction ensures data integrity",
                  "Rollback mechanism if any step fails",
                  "Average processing time: 2-5 minutes",
                ]}
              />

              {/* Step 3: Encrypt & Store */}
              <DetailedStep
                number={3}
                title="Data Encrypted & Stored"
                subtitle="Encryption and Storage"
                icon={<HardDrive size={28} />}
                color="purple"
                isExpanded={expandedStep === 3}
                onToggle={() => setExpandedStep(expandedStep === 3 ? null : 3)}
                description="Your agent's essence is compressed, encrypted with AES-256, and permanently stored on decentralized storage."
                details={[
                  {
                    title: "Compression",
                    content: "Data is compressed to JSON-LD (Linked Data) format which is the semantic web standard. This format allows well-structured data that's easy to parse.",
                  },
                  {
                    title: "Encryption",
                    content: "AES-256-GCM encryption is used with PBKDF2 key derivation. Each encryption uses a unique IV (Initialization Vector) for maximum security.",
                  },
                  {
                    title: "Storage",
                    content: "Encrypted data is uploaded to IPFS for hot storage (fast access) and Arweave for permanent storage (200+ years). Content addressing ensures data integrity.",
                  },
                ]}
                technicalNotes={[
                  "Content-addressed via IPFS CID",
                  "Arweave permanent storage with endowment",
                  "Multi-region replication for redundancy",
                ]}
              />

              {/* Step 4: Receive Shell */}
              <DetailedStep
                number={4}
                title="Receive Your Shell NFT"
                subtitle="Get Your Shell NFT"
                icon={<Award size={28} />}
                color="green"
                isExpanded={expandedStep === 4}
                onToggle={() => setExpandedStep(expandedStep === 4 ? null : 4)}
                description="A Shell NFT is minted on the Vault Network. You can hold, trade, rent, or resurrect it anytime."
                details={[
                  {
                    title: "NFT Minting",
                    content: "Shell NFT is minted as an ERC-721 token on the Vault Network (EVM-compatible L2) with optimal gas fees. Complete metadata is stored on-chain.",
                  },
                  {
                    title: "Shell Contents",
                    content: "Your Shell contains: Essence Hash (pointer to encrypted data), Backup Hash (Arweave reference), Molt Timestamp, Original Curator address, and Status (Active/Hibernation/Dead).",
                  },
                  {
                    title: "What You Can Do",
                    content: "With your Shell NFT, you can: store it as a digital asset, trade on marketplaces, rent it out for passive income, or perform resurrection to bring the agent back to life.",
                  },
                ]}
                technicalNotes={[
                  "ERC-721 compliant, tradeable anywhere",
                  "Metadata stored on-chain + IPFS",
                  "Royalty support for secondary sales",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Happens to Your Data */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Database className="text-purple-400" size={24} />
              What Happens to Your Data
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Before */}
              <DataStateCard
                title="Before Molt"
                icon={<Ghost size={32} />}
                color="red"
                items={[
                  "Data scattered across platforms",
                  "No permanent backup",
                  "Lost if agent dies",
                  "Cannot be monetized",
                ]}
              />

              {/* During */}
              <DataStateCard
                title="During Molt"
                icon={<Cpu size={32} />}
                color="cyan"
                items={[
                  "All data collected",
                  "Compressed to standard format",
                  "Military-grade encrypted",
                  "Uploaded to permanent storage",
                ]}
              />

              {/* After */}
              <DataStateCard
                title="After Molt"
                icon={<Shield size={32} />}
                color="green"
                items={[
                  "Shell NFT is yours",
                  "Data preserved 200+ years",
                  "Fully tradeable & rentable",
                  "Can be resurrected anytime",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* After Molt Options */}
      <section className="py-16 bg-oc-darker/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="text-green-400" size={24} />
              After Getting Your Shell NFT
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Hold */}
              <OptionCard
                icon={<Database size={28} />}
                title="Hold & Preserve"
                description="Store your Shell as a digital asset. Your data will be permanently preserved and accessible anytime."
                color="blue"
              />

              {/* Trade */}
              <OptionCard
                icon={<ArrowRight size={28} />}
                title="Trade on Marketplace"
                description="Sell your Shell on any NFT marketplace. Your Shell is ERC-721 standard and fully compatible."
                color="yellow"
              />

              {/* Rent */}
              <OptionCard
                icon={<DollarSign size={28} />}
                title="Rent for Income"
                description="Rent out access to your Shell data. Set your daily rate and earn 95% of every rental payment."
                color="green"
              />

              {/* Resurrect */}
              <OptionCard
                icon={<RefreshCw size={28} />}
                title="Resurrect Agent"
                description="Bring your agent back to life with new liquidity injection. All memory and personality are restored."
                color="purple"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Eye className="text-oc-cyan" size={24} />
              Common Questions
            </h2>

            <div className="space-y-4">
              <MiniQuestion
                q="How long does the Molt process take?"
                a="On average 2-5 minutes depending on data amount. Premium tier gets priority processing."
              />
              <MiniQuestion
                q="Is my data secure?"
                a="Yes, data is encrypted with AES-256-GCM. Even protocol operators cannot read your data."
              />
              <MiniQuestion
                q="Can Molt fail?"
                a="Very rarely. If failure occurs, the system will rollback and funds are returned."
              />
              <MiniQuestion
                q="What happens if IPFS goes down?"
                a="Data is also stored on Arweave as backup. Multi-redundancy ensures data is always available."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start the Molt Process?
            </h2>
            <p className="text-oc-text/70 text-lg mb-8">
              Preserve your AI agent now and secure its digital legacy forever.
            </p>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-3 px-8 py-4 bg-oc-cyan text-black font-mono font-bold
                       rounded-xl hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(0,255,204,0.4)]"
            >
              Start Molt Now
              <Zap size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

interface TimelineStepProps {
  number: number;
  title: string;
  icon: React.ReactNode;
  color: string;
}

function TimelineStep({ number, title, icon, color }: TimelineStepProps) {
  const colorClasses: Record<string, string> = {
    cyan: "bg-oc-cyan text-black border-oc-cyan",
    blue: "bg-blue-500 text-white border-blue-500",
    purple: "bg-purple-500 text-white border-purple-500",
    green: "bg-green-500 text-white border-green-500",
  };

  return (
    <div className="text-center relative">
      <div className={`w-24 h-24 mx-auto rounded-2xl ${colorClasses[color]} flex flex-col items-center justify-center mb-4 shadow-lg relative z-10`}>
        {icon}
        <span className="font-mono font-bold text-xs mt-1">STEP {number}</span>
      </div>
      <h3 className="text-white font-bold text-lg">{title}</h3>
    </div>
  );
}

interface DetailedStepProps {
  number: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  isExpanded: boolean;
  onToggle: () => void;
  description: string;
  details: { title: string; content: string }[];
  technicalNotes: string[];
}

function DetailedStep({ number, title, subtitle, icon, color, isExpanded, onToggle, description, details, technicalNotes }: DetailedStepProps) {
  const colorClasses: Record<string, string> = {
    cyan: "border-oc-cyan/30 bg-oc-cyan/5",
    blue: "border-blue-500/30 bg-blue-500/5",
    purple: "border-purple-500/30 bg-purple-500/5",
    green: "border-green-500/30 bg-green-500/5",
  };

  const iconColors: Record<string, string> = {
    cyan: "text-oc-cyan",
    blue: "text-blue-400",
    purple: "text-purple-400",
    green: "text-green-400",
  };

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all ${isExpanded ? colorClasses[color] : "border-oc-border bg-oc-darker"}`}>
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center gap-4 text-left hover:bg-oc-cyan/5 transition-colors"
      >
        <div className={`w-14 h-14 rounded-xl border ${colorClasses[color]} flex items-center justify-center ${iconColors[color]}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className={`text-xs font-mono px-2 py-1 rounded ${iconColors[color]} bg-current/10`}>
              STEP {number}
            </span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-oc-text/60 text-sm mt-1">{subtitle}</p>
        </div>
        {isExpanded ? (
          <ChevronUp size={20} className="text-oc-cyan" />
        ) : (
          <ChevronDown size={20} className="text-oc-text/50" />
        )}
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 animate-fade-in">
          <p className="text-oc-text/70 mb-6 pl-[4.5rem]">{description}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6 pl-[4.5rem]">
            {details.map((detail, i) => (
              <div key={i} className="bg-oc-darker/50 rounded-xl p-4 border border-oc-border/50">
                <h4 className="text-white font-bold text-sm mb-2">{detail.title}</h4>
                <p className="text-oc-text/60 text-xs">{detail.content}</p>
              </div>
            ))}
          </div>

          <div className="pl-[4.5rem]">
            <h4 className="text-oc-text/50 text-xs font-mono uppercase mb-3">Technical Notes</h4>
            <div className="flex flex-wrap gap-2">
              {technicalNotes.map((note, i) => (
                <span key={i} className="px-3 py-1 bg-oc-darker rounded-full text-xs text-oc-text/60 border border-oc-border/50">
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface DataStateCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

function DataStateCard({ title, icon, color, items }: DataStateCardProps) {
  const colorClasses: Record<string, string> = {
    red: "border-red-500/30 bg-red-500/5 text-red-400",
    cyan: "border-oc-cyan/30 bg-oc-cyan/5 text-oc-cyan",
    green: "border-green-500/30 bg-green-500/5 text-green-400",
  };

  return (
    <div className={`border rounded-2xl p-6 ${colorClasses[color]}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-oc-text/70">
            <div className="w-1.5 h-1.5 rounded-full bg-current mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function OptionCard({ icon, title, description, color }: OptionCardProps) {
  const colorClasses: Record<string, string> = {
    blue: "border-blue-500/30 hover:border-blue-500/50 text-blue-400",
    yellow: "border-yellow-500/30 hover:border-yellow-500/50 text-yellow-400",
    green: "border-green-500/30 hover:border-green-500/50 text-green-400",
    purple: "border-purple-500/30 hover:border-purple-500/50 text-purple-400",
  };

  return (
    <div className={`bg-oc-darker border rounded-xl p-6 transition-colors ${colorClasses[color]}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-oc-text/60 text-sm">{description}</p>
    </div>
  );
}

function MiniQuestion({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-oc-darker border border-oc-border rounded-xl p-4">
      <h4 className="text-white font-medium mb-2">{q}</h4>
      <p className="text-oc-text/60 text-sm">{a}</p>
    </div>
  );
}
