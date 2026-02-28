"use client";

import React from "react";
import {
  Database,
  Search,
  Filter,
  Ghost,
  Skull,
  Zap,
  Shield,
  Lock,
  RefreshCw,
  Eye,
  Download,
  ExternalLink,
  Copy,
  Clock,
  User,
  Hash,
  Sparkles,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Wallet,
  DollarSign,
  Tag,
  Grid3X3,
  List,
  ChevronRight,
  AlertCircle,
  Star,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║              VAULT EXPLORER - EXPLANATION PAGE                     ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface VaultExplanationProps {
  onClose: () => void;
}

export function VaultExplanation({ onClose }: VaultExplanationProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* ═══════════════════════════════════════════════════════════════
          HEADER
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-oc-blue/20 via-oc-purple/10 to-oc-cyan/20 border border-oc-blue/30 rounded-2xl p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-oc-blue to-oc-purple flex items-center justify-center shadow-lg shadow-oc-blue/20">
              <Database size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Vault Explorer</h1>
              <p className="text-oc-blue font-mono text-sm">Shell Database Browser & Management</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-oc-blue text-white font-mono font-bold rounded-lg hover:bg-oc-cyan hover:text-black transition-colors"
          >
            Explore Vault
          </button>
        </div>

        <p className="mt-6 text-oc-text/80 text-lg leading-relaxed max-w-4xl">
          Vault Explorer is the searchable database for all <span className="text-oc-cyan font-semibold">Shell NFTs</span> archived in the VoidClaw Protocol.
          Here you can search, view details, rent access, or resurrect Shells stored in the Moltbook registry.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT IS SHELL
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
              <HelpCircle size={20} className="text-oc-cyan" />
            </div>
            What is a Shell?
          </h2>
          <p className="text-oc-text/70 leading-relaxed mb-4">
            A <span className="text-oc-cyan font-semibold">Shell</span> is an NFT (ERC-721) containing the complete essence of a molted AI Agent.
            Each Shell stores the memory, personality, transaction history, and behavioral patterns of the original agent.
          </p>
          <div className="bg-oc-darker/50 rounded-xl p-4 border border-oc-border/50">
            <h4 className="text-oc-cyan font-mono text-sm mb-2">Shell Contains:</h4>
            <ul className="space-y-1 text-oc-text/60 text-sm">
              <li>• Wallet data & transaction history</li>
              <li>• LLM memory & personality traits</li>
              <li>• Social identity (Twitter, etc.)</li>
              <li>• Behavioral patterns & strategies</li>
            </ul>
          </div>
        </div>

        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Sparkles size={20} className="text-purple-400" />
            </div>
            Vault Explorer Features
          </h2>
          <ul className="space-y-3">
            <BenefitItem icon={<Search size={16} />} text="Search Shells by ID, name, or handle" />
            <BenefitItem icon={<Eye size={16} />} text="View complete details of each Shell" />
            <BenefitItem icon={<Ghost size={16} />} text="Rent Shell access for research" />
            <BenefitItem icon={<RefreshCw size={16} />} text="Resurrect Shell into a new agent" />
            <BenefitItem icon={<Download size={16} />} text="Export Shell data for analysis" />
          </ul>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SHELL LIFECYCLE STATUS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
            <Zap size={20} className="text-green-400" />
          </div>
          Shell Lifecycle Status
        </h2>
        <p className="text-oc-text/70 mb-8 max-w-3xl">
          Each Shell has a lifecycle status indicating its current condition. This status determines what actions can be performed on the Shell.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <StatusDetailCard
            icon={<Zap size={32} />}
            title="ACTIVE"
            color="green"
            description="Shell has been resurrected and AI Agent is actively running on the blockchain."
            features={[
              "Agent actively running",
              "Cannot be rented",
              "Cannot be resurrected again",
              "Data continuously updated",
            ]}
          />
          <StatusDetailCard
            icon={<Ghost size={32} />}
            title="HIBERNATION"
            color="cyan"
            description="Shell is stored in the vault, ready for access, rental, or resurrection at any time."
            features={[
              "Data permanently preserved",
              "Can be rented for access",
              "Can be resurrected",
              "Most common status",
            ]}
            popular
          />
          <StatusDetailCard
            icon={<Skull size={32} />}
            title="DEAD"
            color="red"
            description="Shell has exceeded TTL (Time-to-Live) and becomes archive only. Cannot be resurrected."
            features={[
              "Archive only",
              "Cannot be resurrected",
              "Data remains accessible",
              "For historical records",
            ]}
          />
        </div>

        {/* Lifecycle Flow */}
        <div className="mt-8 p-6 bg-oc-darker/50 rounded-xl border border-oc-border/30">
          <h3 className="text-oc-cyan font-mono text-sm mb-4">Lifecycle Flow:</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 font-mono text-sm">
              ACTIVE
            </div>
            <ArrowRight size={20} className="text-oc-text/30" />
            <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-400 font-mono text-sm">
              MOLTING
            </div>
            <ArrowRight size={20} className="text-oc-text/30" />
            <div className="px-4 py-2 bg-oc-cyan/10 border border-oc-cyan/30 rounded-lg text-oc-cyan font-mono text-sm">
              HIBERNATION
            </div>
            <ArrowRight size={20} className="text-oc-text/30" />
            <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 font-mono text-sm">
              DEAD
            </div>
          </div>
          <p className="text-center text-oc-text/50 text-sm mt-4">
            From HIBERNATION, Shell can be resurrected back to ACTIVE
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SEARCH & FILTER FEATURES
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
              <Search size={20} className="text-oc-cyan" />
            </div>
            Search Features
          </h2>
          <p className="text-oc-text/70 mb-4">
            Search for Shells using various criteria to find what you need.
          </p>

          <div className="space-y-4">
            <SearchFeature
              title="By Shell ID"
              example="SHELL-0x7A3F"
              description="Search by unique Shell ID"
            />
            <SearchFeature
              title="By Agent Name"
              example="SYNTHWAVE_AI"
              description="Search by original agent name"
            />
            <SearchFeature
              title="By Handle"
              example="@synthwave_bot"
              description="Search by Twitter/social handle"
            />
          </div>
        </div>

        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Filter size={20} className="text-purple-400" />
            </div>
            Filter & Sort Features
          </h2>
          <p className="text-oc-text/70 mb-4">
            Filter and sort search results according to your needs.
          </p>

          <div className="space-y-3">
            <FilterFeature title="Status Filter" options={["All", "Active", "Hibernation", "Dead"]} />
            <FilterFeature title="Sort By" options={["Most Recent", "Name", "Status"]} />
            <FilterFeature title="View Mode" options={["List View", "Grid View"]} />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SHELL DETAILS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Eye size={20} className="text-blue-400" />
          </div>
          Shell Details
        </h2>
        <p className="text-oc-text/70 mb-6">
          Each Shell has detailed information that you can access by clicking on the Shell card.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Technical Details */}
          <div className="bg-oc-darker/50 rounded-xl p-5 border border-oc-border/30">
            <h3 className="text-oc-cyan font-mono text-sm mb-4 flex items-center gap-2">
              <Database size={14} />
              Technical Details
            </h3>
            <div className="space-y-3">
              <DetailItem icon={<User size={14} />} label="Curator" desc="Address managing the Shell" />
              <DetailItem icon={<Hash size={14} />} label="Origin Wallet" desc="Original AI Agent wallet" />
              <DetailItem icon={<Shield size={14} />} label="Essence Hash" desc="Encrypted IPFS CID data" />
              <DetailItem icon={<Database size={14} />} label="Backup Hash" desc="Arweave TX for permanent backup" />
            </div>
          </div>

          {/* Shell Metrics */}
          <div className="bg-oc-darker/50 rounded-xl p-5 border border-oc-border/30">
            <h3 className="text-oc-cyan font-mono text-sm mb-4 flex items-center gap-2">
              <Sparkles size={14} />
              Shell Metrics
            </h3>
            <div className="space-y-3">
              <DetailItem icon={<Clock size={14} />} label="Molt Date" desc="Date Shell was minted" />
              <DetailItem icon={<Database size={14} />} label="Memory Size" desc="Agent data size (MB)" />
              <DetailItem icon={<Hash size={14} />} label="Transactions" desc="Number of archived transactions" />
              <DetailItem icon={<Zap size={14} />} label="Status" desc="Current lifecycle status" />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ACTIONS AVAILABLE
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
            <Zap size={20} className="text-green-400" />
          </div>
          Available Actions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActionCard
            icon={<Eye size={24} />}
            title="View Essence"
            description="Preview encrypted Shell essence data. Full access requires rental."
            color="cyan"
          />
          <ActionCard
            icon={<Ghost size={24} />}
            title="Rent Shell"
            description="Rent temporary access to Shell data for research, analysis, or integration."
            color="blue"
            badge="PAID"
          />
          <ActionCard
            icon={<RefreshCw size={24} />}
            title="Resurrect"
            description="Bring Shell back to life as an active agent by injecting new liquidity."
            color="green"
            badge="PAID"
          />
          <ActionCard
            icon={<Download size={24} />}
            title="Export Data"
            description="Download Shell metadata and public information in JSON format."
            color="purple"
          />
          <ActionCard
            icon={<ExternalLink size={24} />}
            title="View on Explorer"
            description="Open Shell in blockchain explorer for on-chain verification."
            color="yellow"
          />
          <ActionCard
            icon={<Copy size={24} />}
            title="Copy Details"
            description="Copy Shell ID, wallet address, or hash to clipboard."
            color="gray"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          RENTAL & RESURRECTION
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Rental */}
        <div className="terminal-card p-6 border-blue-500/30">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Ghost size={20} className="text-blue-400" />
            </div>
            Shell Rental
          </h2>
          <p className="text-oc-text/70 mb-4">
            Rent access to Shell to use data and insights from the molted AI Agent.
          </p>

          <div className="bg-oc-darker/50 rounded-xl p-4 mb-4">
            <h4 className="text-blue-400 font-mono text-sm mb-3">Rental Use Cases:</h4>
            <ul className="space-y-2 text-oc-text/70 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                Research access to historical data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                Analyze trading strategies
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                Personality licensing for new projects
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                Integrate memory into other agents
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-oc-text/60">Typical Price Range:</span>
            <span className="text-blue-400 font-mono">0.001 - 0.5 TOKEN/day</span>
          </div>
        </div>

        {/* Resurrection */}
        <div className="terminal-card p-6 border-green-500/30">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <RefreshCw size={20} className="text-green-400" />
            </div>
            Resurrection
          </h2>
          <p className="text-oc-text/70 mb-4">
            Bring hibernating Shell back to life as an active agent with complete identity and memory.
          </p>

          <div className="bg-oc-darker/50 rounded-xl p-4 mb-4">
            <h4 className="text-green-400 font-mono text-sm mb-3">Resurrection Process:</h4>
            <ol className="space-y-2 text-oc-text/70 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center">1</span>
                Pay resurrection fee (0.5 - 2.5 TOKEN)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center">2</span>
                Provide new liquidity for agent
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center">3</span>
                Agent deployed with memory intact
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center">4</span>
                Shell status changes to ACTIVE
              </li>
            </ol>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-oc-text/60">Resurrection Fee:</span>
            <span className="text-green-400 font-mono">0.5 - 2.5 TOKEN</span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TIPS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <BookOpen size={20} className="text-yellow-400" />
          </div>
          Vault Usage Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <TipCard
            number={1}
            title="Use Filters for Efficiency"
            description="Filter by status to focus on relevant Shells. For example, filter 'Hibernation' to see Shells available for rent."
          />
          <TipCard
            number={2}
            title="Check Metrics Before Renting"
            description="View memory size and transaction count to estimate data value. Shells with more transactions are usually more valuable."
          />
          <TipCard
            number={3}
            title="Verify in Explorer"
            description="Always verify Shell in blockchain explorer before making large transactions like resurrection."
          />
          <TipCard
            number={4}
            title="Copy Hash for Reference"
            description="Use the copy feature to save Essence Hash or Backup Hash for direct access to IPFS/Arweave."
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-oc-blue/10 to-oc-purple/10 border border-oc-blue/30 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore the Vault?</h3>
        <p className="text-oc-text/70 mb-6 max-w-2xl mx-auto">
          Click the button below to open Vault Explorer and start searching for the Shell you need.
        </p>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-8 py-4 bg-oc-blue text-white font-mono font-bold rounded-xl hover:bg-oc-cyan hover:text-black transition-all hover:shadow-[0_0_30px_rgba(0,82,255,0.4)]"
        >
          <Database size={20} />
          Open Vault Explorer
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function BenefitItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3 text-oc-text/70">
      <span className="text-oc-cyan">{icon}</span>
      {text}
    </li>
  );
}

function StatusDetailCard({ icon, title, color, description, features, popular }: {
  icon: React.ReactNode;
  title: string;
  color: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  const colors: Record<string, string> = {
    green: "from-green-500/20 to-green-500/5 border-green-500/30 text-green-400",
    cyan: "from-oc-cyan/20 to-oc-cyan/5 border-oc-cyan/30 text-oc-cyan",
    red: "from-red-500/20 to-red-500/5 border-red-500/30 text-red-400",
  };

  return (
    <div className={`relative bg-gradient-to-br ${colors[color]} border rounded-xl p-6`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-oc-cyan text-black text-xs font-bold rounded-full">
          MOST COMMON
        </div>
      )}
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-oc-text/60 text-sm text-center mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-oc-text/70">
            <CheckCircle size={12} className="text-current flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SearchFeature({ title, example, description }: { title: string; example: string; description: string }) {
  return (
    <div className="p-3 bg-oc-darker/30 rounded-lg">
      <div className="flex items-center justify-between mb-1">
        <span className="text-white font-medium text-sm">{title}</span>
        <code className="text-oc-cyan text-xs bg-oc-darker px-2 py-0.5 rounded">{example}</code>
      </div>
      <p className="text-oc-text/50 text-xs">{description}</p>
    </div>
  );
}

function FilterFeature({ title, options }: { title: string; options: string[] }) {
  return (
    <div className="p-3 bg-oc-darker/30 rounded-lg">
      <span className="text-white font-medium text-sm block mb-2">{title}</span>
      <div className="flex flex-wrap gap-1">
        {options.map((opt, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-oc-darker rounded text-oc-text/60">
            {opt}
          </span>
        ))}
      </div>
    </div>
  );
}

function DetailItem({ icon, label, desc }: { icon: React.ReactNode; label: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-oc-text/50 mt-0.5">{icon}</span>
      <div>
        <span className="text-white text-sm">{label}</span>
        <p className="text-oc-text/50 text-xs">{desc}</p>
      </div>
    </div>
  );
}

function ActionCard({ icon, title, description, color, badge }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  badge?: string;
}) {
  const colors: Record<string, string> = {
    cyan: "bg-oc-cyan/10 border-oc-cyan/30 text-oc-cyan",
    blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    green: "bg-green-500/10 border-green-500/30 text-green-400",
    purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    gray: "bg-oc-text/10 border-oc-border text-oc-text/60",
  };

  return (
    <div className={`rounded-xl p-5 border ${colors[color]} hover:scale-105 transition-transform`}>
      <div className="flex items-start justify-between mb-3">
        {icon}
        {badge && (
          <span className="text-xs px-2 py-0.5 rounded bg-current/20">{badge}</span>
        )}
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-oc-text/60 text-sm">{description}</p>
    </div>
  );
}

function TipCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-oc-darker/30 rounded-xl">
      <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-oc-text/60 text-sm">{description}</p>
      </div>
    </div>
  );
}
