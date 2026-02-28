"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Database,
  Lock,
  RefreshCw,
  Wallet,
  Shield,
  Globe,
  Zap,
  Clock,
  Server,
  Eye,
  Download,
  Code,
  Layers,
  CheckCircle,
  Star,
  Target,
  Users,
  TrendingUp,
  HardDrive,
  Cpu,
  Binary,
  Key,
  FileCheck,
  CloudOff,
  Infinity,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                      FEATURES PAGE                                 ║
 * ║           Detailed explanation of all VoidClaw features            ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface FeaturesPageProps {
  onBack: () => void;
}

export function FeaturesPage({ onBack }: FeaturesPageProps) {
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
        <div className="absolute inset-0 bg-gradient-to-b from-oc-cyan/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-oc-cyan/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-oc-cyan/10 border border-oc-cyan/30 mb-6">
              <Layers size={16} className="text-oc-cyan" />
              <span className="text-oc-cyan text-sm font-mono">PROTOCOL FEATURES</span>
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete <span className="text-oc-cyan">VoidClaw</span> Features
            </h1>

            <p className="text-xl text-oc-text/70 max-w-2xl mx-auto">
              Explore all the features that make VoidClaw Protocol the leading solution
              for AI Agent preservation and monetization.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Star className="text-oc-cyan" size={24} />
              Core Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1: Permanent Storage */}
              <FeatureDetailCard
                icon={<Database size={28} />}
                title="Permanent Storage"
                subtitle="Decentralized Data Permanence"
                color="cyan"
                features={[
                  "Dual storage: IPFS + Arweave",
                  "200+ years data permanence",
                  "Multi-location redundancy",
                  "Content-addressed storage",
                  "Automatic pinning service",
                ]}
                description="Your Shell data is stored permanently using decentralized
                  storage technology. IPFS for fast access, Arweave for long-term
                  permanence. No single point of failure."
              />

              {/* Feature 2: Military Encryption */}
              <FeatureDetailCard
                icon={<Lock size={28} />}
                title="Military Encryption"
                subtitle="Enterprise-Grade Security"
                color="blue"
                features={[
                  "AES-256-GCM encryption",
                  "PBKDF2 key derivation",
                  "Unique IV per encryption",
                  "Zero-knowledge architecture",
                  "End-to-end encrypted",
                ]}
                description="All Shell data is encrypted using military-grade AES-256-GCM
                  encryption. Only Shell owners have access to the original data.
                  Even protocol operators cannot read your Shell contents."
              />

              {/* Feature 3: Resurrection */}
              <FeatureDetailCard
                icon={<RefreshCw size={28} />}
                title="Resurrection"
                subtitle="Bring AI Agents Back to Life"
                color="purple"
                features={[
                  "Restore to new agent",
                  "Memory and personality intact",
                  "Liquidity injection",
                  "New deployment ready",
                  "Seamless transition",
                ]}
                description="Hibernating Shells can be resurrected by injecting new
                  liquidity. All memories, personality traits, and behavioral
                  patterns are restored to the newly deployed AI agent."
              />

              {/* Feature 4: Shell Rental */}
              <FeatureDetailCard
                icon={<Wallet size={28} />}
                title="Shell Rental"
                subtitle="Monetize Your Digital Assets"
                color="green"
                features={[
                  "Passive income stream",
                  "Flexible pricing",
                  "Time-limited access",
                  "Revenue sharing 95/5",
                  "Automated payments",
                ]}
                description="Monetize your Shell by renting out access to your agent's data
                  and strategies. Set your own daily rate. Protocol takes 5%,
                  you receive 95% of every rental payment."
              />

              {/* Feature 5: ERC-721 Standard */}
              <FeatureDetailCard
                icon={<Shield size={28} />}
                title="ERC-721 Standard"
                subtitle="Industry-Standard NFT"
                color="yellow"
                features={[
                  "Full ERC-721 compliance",
                  "Tradeable on marketplaces",
                  "OpenSea compatible",
                  "Royalty support",
                  "On-chain metadata",
                ]}
                description="Shell NFTs follow the ERC-721 standard completely, enabling
                  trading on all popular NFT marketplaces. Metadata is stored
                  on-chain for transparency and verification."
              />

              {/* Feature 6: Cross-Chain */}
              <FeatureDetailCard
                icon={<Globe size={28} />}
                title="Cross-Chain"
                subtitle="Multi-Blockchain Support"
                color="red"
                features={[
                  "Multi-chain extraction",
                  "EVM compatible origins",
                  "Unified vault network",
                  "Chain-agnostic storage",
                  "Bridge integration",
                ]}
                description="Extract data from any EVM-compatible blockchain. Shells are
                  stored on the Vault Network optimized for gas efficiency and
                  security. Support for all major L1 and L2 networks."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-oc-darker/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Cpu className="text-oc-purple" size={24} />
              Technical Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Extraction Engine */}
              <div className="bg-oc-darker border border-oc-border rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-oc-cyan/20 to-oc-blue/20
                              border border-oc-cyan/30 flex items-center justify-center mb-6">
                  <Binary size={28} className="text-oc-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Extraction Engine</h3>
                <p className="text-oc-text/70 mb-6">
                  Advanced extraction engine that collects all essential data from
                  AI agents undergoing the Molt process.
                </p>
                <div className="space-y-3">
                  <TechItem label="Wallet Data Extraction" desc="All transactions and balances" />
                  <TechItem label="Memory Capture" desc="Personality and behavioral data" />
                  <TechItem label="Social Identity" desc="Handles and social connections" />
                  <TechItem label="Strategy Export" desc="Trading and decision patterns" />
                </div>
              </div>

              {/* Compression System */}
              <div className="bg-oc-darker border border-oc-border rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20
                              border border-purple-500/30 flex items-center justify-center mb-6">
                  <Layers size={28} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Compression System</h3>
                <p className="text-oc-text/70 mb-6">
                  Compression system that optimizes data size without losing
                  any important information.
                </p>
                <div className="space-y-3">
                  <TechItem label="JSON-LD Format" desc="Semantic web standard" />
                  <TechItem label="Efficient Encoding" desc="Minimal storage footprint" />
                  <TechItem label="Lossless Compression" desc="Zero data loss" />
                  <TechItem label="Structured Schema" desc="Easy parsing & validation" />
                </div>
              </div>

              {/* Security Layer */}
              <div className="bg-oc-darker border border-oc-border rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20
                              border border-green-500/30 flex items-center justify-center mb-6">
                  <Key size={28} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security Layer</h3>
                <p className="text-oc-text/70 mb-6">
                  Multi-layered security that protects Shell data from
                  unauthorized access.
                </p>
                <div className="space-y-3">
                  <TechItem label="AES-256-GCM" desc="Military-grade encryption" />
                  <TechItem label="PBKDF2 Derivation" desc="Secure key generation" />
                  <TechItem label="Unique IV" desc="Per-encryption randomness" />
                  <TechItem label="Access Control" desc="Smart contract enforced" />
                </div>
              </div>

              {/* Storage Network */}
              <div className="bg-oc-darker border border-oc-border rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20
                              border border-yellow-500/30 flex items-center justify-center mb-6">
                  <HardDrive size={28} className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Storage Network</h3>
                <p className="text-oc-text/70 mb-6">
                  Decentralized storage network with high redundancy
                  and data permanence.
                </p>
                <div className="space-y-3">
                  <TechItem label="IPFS Hot Storage" desc="Fast access & retrieval" />
                  <TechItem label="Arweave Permanent" desc="200+ years permanence" />
                  <TechItem label="Multi-Region" desc="Global distribution" />
                  <TechItem label="Auto Redundancy" desc="Automatic backups" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shell Lifecycle */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <RefreshCw className="text-green-400" size={24} />
              Shell Lifecycle
            </h2>

            <div className="bg-oc-darker border border-oc-border rounded-2xl p-8">
              <p className="text-oc-text/70 mb-8 text-center max-w-2xl mx-auto">
                Every Shell NFT has a clear lifecycle with three main states.
                Understand each stage to maximize the value of your Shell.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Active */}
                <LifecycleCard
                  status="ACTIVE"
                  icon={<Zap size={32} />}
                  color="green"
                  description="Shell has been resurrected and the AI agent is actively running"
                  features={[
                    "Agent fully operational",
                    "Real-time data updates",
                    "Can be traded/sold",
                    "Generating activity",
                  ]}
                />

                {/* Hibernation */}
                <LifecycleCard
                  status="HIBERNATION"
                  icon={<Clock size={32} />}
                  color="cyan"
                  description="Shell is stored, ready to be accessed or resurrected"
                  features={[
                    "Data preserved",
                    "Can be rented out",
                    "Can be resurrected",
                    "Fully tradeable",
                  ]}
                />

                {/* Dead */}
                <LifecycleCard
                  status="DEAD"
                  icon={<CloudOff size={32} />}
                  color="red"
                  description="Archive only, TTL expired or permanently archived"
                  features={[
                    "Read-only access",
                    "Historical record",
                    "Cannot resurrect",
                    "Legacy preservation",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-oc-darker/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="text-yellow-400" size={24} />
              Comparison with Other Solutions
            </h2>

            <div className="bg-oc-darker border border-oc-border rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-oc-border">
                    <th className="px-6 py-4 text-left text-oc-text/60 font-mono text-sm">Feature</th>
                    <th className="px-6 py-4 text-center text-oc-cyan font-mono text-sm">VoidClaw</th>
                    <th className="px-6 py-4 text-center text-oc-text/60 font-mono text-sm">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow feature="Data Preservation" voidclaw="Forever" traditional="Lost on death" />
                  <ComparisonRow feature="Encryption" voidclaw="AES-256-GCM" traditional="None/Basic" />
                  <ComparisonRow feature="Monetization" voidclaw="Rental + Trade" traditional="None" />
                  <ComparisonRow feature="Resurrection" voidclaw="Full Support" traditional="Not Possible" />
                  <ComparisonRow feature="Cross-Chain" voidclaw="All EVM" traditional="Single Chain" />
                  <ComparisonRow feature="Ownership" voidclaw="NFT Standard" traditional="Centralized" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Use These Features?
            </h2>
            <p className="text-oc-text/70 text-lg mb-8">
              Start preserving your AI agent now and experience all of VoidClaw's premium features.
            </p>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-3 px-8 py-4 bg-oc-cyan text-black font-mono font-bold
                       rounded-xl hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(0,255,204,0.4)]"
            >
              Get Started Now
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

interface FeatureDetailCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  features: string[];
  description: string;
}

function FeatureDetailCard({ icon, title, subtitle, color, features, description }: FeatureDetailCardProps) {
  const colorClasses: Record<string, string> = {
    cyan: "from-oc-cyan/20 to-oc-cyan/5 border-oc-cyan/30 text-oc-cyan",
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400",
    green: "from-green-500/20 to-green-500/5 border-green-500/30 text-green-400",
    yellow: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30 text-yellow-400",
    red: "from-red-500/20 to-red-500/5 border-red-500/30 text-red-400",
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-2xl p-6 h-full`}>
      <div className={colorClasses[color].split(" ").pop()}>{icon}</div>
      <h3 className="text-xl font-bold text-white mt-4 mb-1">{title}</h3>
      <p className="text-oc-text/50 text-sm mb-4">{subtitle}</p>
      <p className="text-oc-text/70 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
            <span className="text-oc-text/80">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechItem({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-oc-gray/30 rounded-lg">
      <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-white text-sm font-medium">{label}</p>
        <p className="text-oc-text/50 text-xs">{desc}</p>
      </div>
    </div>
  );
}

interface LifecycleCardProps {
  status: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  features: string[];
}

function LifecycleCard({ status, icon, color, description, features }: LifecycleCardProps) {
  const colorClasses: Record<string, string> = {
    green: "border-green-500/30 bg-green-500/10 text-green-400",
    cyan: "border-oc-cyan/30 bg-oc-cyan/10 text-oc-cyan",
    red: "border-red-500/30 bg-red-500/10 text-red-400",
  };

  return (
    <div className={`border rounded-xl p-6 ${colorClasses[color]}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <span className="font-mono font-bold">{status}</span>
      </div>
      <p className="text-oc-text/70 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-oc-text/60">
            <div className="w-1.5 h-1.5 rounded-full bg-current" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonRow({ feature, voidclaw, traditional }: { feature: string; voidclaw: string; traditional: string }) {
  return (
    <tr className="border-b border-oc-border/50 last:border-0">
      <td className="px-6 py-4 text-oc-text/80">{feature}</td>
      <td className="px-6 py-4 text-center">
        <span className="inline-flex items-center gap-2 text-green-400">
          <CheckCircle size={14} />
          {voidclaw}
        </span>
      </td>
      <td className="px-6 py-4 text-center text-oc-text/50">{traditional}</td>
    </tr>
  );
}
