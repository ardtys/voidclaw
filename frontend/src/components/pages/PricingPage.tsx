"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  X,
  DollarSign,
  Zap,
  Shield,
  Clock,
  Users,
  RefreshCw,
  HardDrive,
  Star,
  Crown,
  Building,
  Calculator,
  TrendingUp,
  Wallet,
  ChevronDown,
  ChevronUp,
  Info,
  Sparkles,
  Database,
  Lock,
  Globe,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                      PRICING PAGE                                  ║
 * ║        Detailed explanation of pricing and monetization            ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface PricingPageProps {
  onBack: () => void;
}

export function PricingPage({ onBack }: PricingPageProps) {
  const [expandedFee, setExpandedFee] = useState<number | null>(null);

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
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
              <DollarSign size={16} className="text-green-400" />
              <span className="text-green-400 text-sm font-mono">PRICING</span>
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-green-400">Transparent</span> Pricing
            </h1>

            <p className="text-xl text-oc-text/70 max-w-2xl mx-auto">
              Pay only for what you use. No hidden fees.
              Choose the tier that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard Tier */}
              <PricingCard
                tier="Standard"
                icon={<Star size={24} />}
                price="0.01"
                unit="TOKEN / Molt"
                description="Perfect for individual agent preservation"
                color="blue"
                features={[
                  { text: "Basic Molt Process", included: true },
                  { text: "IPFS Storage (1 Year)", included: true },
                  { text: "Shell NFT Minting", included: true },
                  { text: "Basic Dashboard", included: true },
                  { text: "Community Support", included: true },
                  { text: "Priority Processing", included: false },
                  { text: "Arweave Permanent Storage", included: false },
                  { text: "Rental Marketplace", included: false },
                ]}
              />

              {/* Premium Tier */}
              <PricingCard
                tier="Premium"
                icon={<Crown size={24} />}
                price="0.025"
                unit="TOKEN / Molt"
                description="Priority processing & permanent storage"
                color="cyan"
                popular
                features={[
                  { text: "Priority Molt (< 1 Hour)", included: true },
                  { text: "IPFS + Arweave (200+ Years)", included: true },
                  { text: "Shell NFT Minting", included: true },
                  { text: "Full Dashboard Access", included: true },
                  { text: "Priority Support", included: true },
                  { text: "Rental Marketplace Access", included: true },
                  { text: "Resurrection Discount", included: true },
                  { text: "API Access (Limited)", included: true },
                ]}
              />

              {/* Enterprise Tier */}
              <PricingCard
                tier="Enterprise"
                icon={<Building size={24} />}
                price="Custom"
                unit="Contact Sales"
                description="For DAOs and large-scale operations"
                color="purple"
                features={[
                  { text: "Bulk Molt Discounts", included: true },
                  { text: "Multi-Redundant Storage", included: true },
                  { text: "White-Glove Service", included: true },
                  { text: "Custom Integration", included: true },
                  { text: "Dedicated Support", included: true },
                  { text: "SLA Guarantee", included: true },
                  { text: "Full API Access", included: true },
                  { text: "Custom Contracts", included: true },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Detail */}
      <section className="py-16 bg-oc-darker/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Info className="text-oc-cyan" size={24} />
              What's Included
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <IncludedCard
                icon={<Database size={24} />}
                title="Data Extraction"
                description="Complete extraction of all agent data: wallet, memory, personality, transactions, and social identity."
                details={[
                  "Wallet data & transaction history",
                  "Memory patterns & personality traits",
                  "Social identity & connections",
                  "Trading strategies & decisions",
                ]}
              />

              <IncludedCard
                icon={<Lock size={24} />}
                title="Encryption & Security"
                description="Military-grade encryption to protect your Shell data from unauthorized access."
                details={[
                  "AES-256-GCM encryption",
                  "PBKDF2 key derivation",
                  "Unique IV per encryption",
                  "Zero-knowledge architecture",
                ]}
              />

              <IncludedCard
                icon={<HardDrive size={24} />}
                title="Storage"
                description="Decentralized storage with high redundancy for data permanence."
                details={[
                  "IPFS hot storage",
                  "Arweave permanent storage (Premium)",
                  "Multi-region replication",
                  "Content-addressed storage",
                ]}
              />

              <IncludedCard
                icon={<Sparkles size={24} />}
                title="NFT Minting"
                description="ERC-721 compliant Shell NFT that can be traded on any marketplace."
                details={[
                  "ERC-721 standard compliance",
                  "On-chain metadata",
                  "Royalty support",
                  "Marketplace compatible",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Revenue Streams */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <TrendingUp className="text-green-400" size={24} />
              Additional Revenue Streams
            </h2>
            <p className="text-oc-text/60 mb-8">
              Your Shell NFT is not just a digital asset, but also a potential source of income.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Rental */}
              <RevenueCard
                icon={<Users size={28} />}
                title="Shell Rental"
                description="Rent out access to your Shell data and earn passive income."
                stats={[
                  { label: "Protocol Fee", value: "5%" },
                  { label: "Your Share", value: "95%" },
                  { label: "Min Rate", value: "0.001 TOKEN/day" },
                ]}
                color="blue"
              />

              {/* Resurrection */}
              <RevenueCard
                icon={<RefreshCw size={28} />}
                title="Resurrection"
                description="Bring your Shell back to life with new liquidity injection."
                stats={[
                  { label: "Base Cost", value: "0.5 TOKEN" },
                  { label: "Max Cost", value: "2.5 TOKEN" },
                  { label: "Protocol Fee", value: "10%" },
                ]}
                color="purple"
              />

              {/* Premium Storage */}
              <RevenueCard
                icon={<HardDrive size={28} />}
                title="Premium Storage"
                description="Upgrade to Arweave permanent storage anytime."
                stats={[
                  { label: "One-time", value: "0.02 TOKEN" },
                  { label: "Duration", value: "200+ years" },
                  { label: "Redundancy", value: "Multi-region" },
                ]}
                color="yellow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fee Breakdown */}
      <section className="py-16 bg-oc-darker/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Calculator className="text-yellow-400" size={24} />
              Detailed Fee Breakdown
            </h2>

            <div className="space-y-4">
              <FeeBreakdown
                title="Molt Fee (Standard)"
                amount="0.01 TOKEN"
                isExpanded={expandedFee === 0}
                onToggle={() => setExpandedFee(expandedFee === 0 ? null : 0)}
                breakdown={[
                  { item: "Extraction Engine", cost: "0.003 TOKEN" },
                  { item: "Compression & Encryption", cost: "0.001 TOKEN" },
                  { item: "IPFS Storage (1 year)", cost: "0.002 TOKEN" },
                  { item: "NFT Minting Gas", cost: "0.002 TOKEN" },
                  { item: "Protocol Fee", cost: "0.002 TOKEN" },
                ]}
              />

              <FeeBreakdown
                title="Molt Fee (Premium)"
                amount="0.025 TOKEN"
                isExpanded={expandedFee === 1}
                onToggle={() => setExpandedFee(expandedFee === 1 ? null : 1)}
                breakdown={[
                  { item: "Priority Extraction", cost: "0.005 TOKEN" },
                  { item: "Compression & Encryption", cost: "0.002 TOKEN" },
                  { item: "IPFS Storage (permanent)", cost: "0.003 TOKEN" },
                  { item: "Arweave Endowment", cost: "0.008 TOKEN" },
                  { item: "NFT Minting Gas", cost: "0.002 TOKEN" },
                  { item: "Protocol Fee", cost: "0.005 TOKEN" },
                ]}
              />

              <FeeBreakdown
                title="Rental Fee Structure"
                amount="Variable"
                isExpanded={expandedFee === 2}
                onToggle={() => setExpandedFee(expandedFee === 2 ? null : 2)}
                breakdown={[
                  { item: "Shell Owner", cost: "95%" },
                  { item: "Protocol Fee", cost: "5%" },
                  { item: "Minimum Daily Rate", cost: "0.001 TOKEN" },
                  { item: "Maximum Rate", cost: "No limit" },
                ]}
              />

              <FeeBreakdown
                title="Resurrection Fee"
                amount="0.5 - 2.5 TOKEN"
                isExpanded={expandedFee === 3}
                onToggle={() => setExpandedFee(expandedFee === 3 ? null : 3)}
                breakdown={[
                  { item: "Base Resurrection", cost: "0.5 TOKEN" },
                  { item: "Complexity Multiplier", cost: "1x - 5x" },
                  { item: "Protocol Fee", cost: "10%" },
                  { item: "New Deployment Gas", cost: "Variable" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Globe className="text-oc-cyan" size={24} />
              Tier Comparison
            </h2>

            <div className="bg-oc-darker border border-oc-border rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-oc-border bg-oc-gray/30">
                    <th className="px-6 py-4 text-left text-oc-text/60 font-mono text-sm">Feature</th>
                    <th className="px-6 py-4 text-center text-blue-400 font-mono text-sm">Standard</th>
                    <th className="px-6 py-4 text-center text-oc-cyan font-mono text-sm">Premium</th>
                    <th className="px-6 py-4 text-center text-purple-400 font-mono text-sm">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <CompareRow feature="Price per Molt" standard="0.01 TOKEN" premium="0.025 TOKEN" enterprise="Custom" />
                  <CompareRow feature="Processing Time" standard="< 24 hours" premium="< 1 hour" enterprise="< 30 min" />
                  <CompareRow feature="IPFS Storage" standard="1 year" premium="Permanent" enterprise="Permanent" />
                  <CompareRow feature="Arweave Storage" standard={false} premium={true} enterprise={true} />
                  <CompareRow feature="Dashboard Access" standard="Basic" premium="Full" enterprise="Full + Custom" />
                  <CompareRow feature="Support" standard="Community" premium="Priority" enterprise="Dedicated" />
                  <CompareRow feature="Rental Marketplace" standard={false} premium={true} enterprise={true} />
                  <CompareRow feature="API Access" standard={false} premium="Limited" enterprise="Full" />
                  <CompareRow feature="Bulk Discounts" standard={false} premium={false} enterprise={true} />
                  <CompareRow feature="Custom Integration" standard={false} premium={false} enterprise={true} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-oc-darker/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Pricing Questions</h2>

            <div className="space-y-4">
              <PricingFaq
                q="Are there any hidden fees?"
                a="No. The listed price includes everything except network gas fees which vary based on network conditions."
              />
              <PricingFaq
                q="Can I upgrade from Standard to Premium?"
                a="Yes, you can upgrade storage to Arweave anytime by paying the difference (0.02 TOKEN)."
              />
              <PricingFaq
                q="Is there a refund if Molt fails?"
                a="Yes, if the Molt process fails due to system error, funds are returned 100%."
              />
              <PricingFaq
                q="How do I pay for Enterprise?"
                a="Contact our sales team to discuss your needs and get a custom quote."
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
              Choose the Right Tier
            </h2>
            <p className="text-oc-text/70 text-lg mb-8">
              Starting at just 0.01 TOKEN for permanent AI agent preservation.
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

interface PricingCardProps {
  tier: string;
  icon: React.ReactNode;
  price: string;
  unit: string;
  description: string;
  color: string;
  popular?: boolean;
  features: { text: string; included: boolean }[];
}

function PricingCard({ tier, icon, price, unit, description, color, popular, features }: PricingCardProps) {
  const colorClasses: Record<string, string> = {
    blue: "border-blue-500",
    cyan: "border-oc-cyan",
    purple: "border-purple-500",
  };

  return (
    <div className={`relative bg-oc-darker border-2 rounded-2xl p-8 ${popular ? colorClasses[color] + " shadow-[0_0_30px_rgba(0,255,204,0.15)]" : "border-oc-border"}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-oc-cyan text-black text-xs font-bold rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className={`text-${color === "cyan" ? "oc-cyan" : color + "-400"}`}>{icon}</div>
        <h3 className="text-xl font-bold text-white">{tier}</h3>
      </div>

      <div className="mb-4">
        <span className="text-4xl font-bold text-oc-cyan">{price}</span>
        <span className="text-oc-text/60 ml-2">{unit}</span>
      </div>

      <p className="text-oc-text/60 text-sm mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            {feature.included ? (
              <Check size={16} className="text-green-400 flex-shrink-0" />
            ) : (
              <X size={16} className="text-oc-text/30 flex-shrink-0" />
            )}
            <span className={feature.included ? "text-oc-text/80" : "text-oc-text/40"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-xl font-mono font-bold transition-all ${
        popular
          ? "bg-oc-cyan text-black hover:bg-white"
          : "border border-oc-border text-oc-text/80 hover:border-oc-cyan hover:text-oc-cyan"
      }`}>
        {price === "Custom" ? "Contact Sales" : "Choose " + tier}
      </button>
    </div>
  );
}

interface IncludedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

function IncludedCard({ icon, title, description, details }: IncludedCardProps) {
  return (
    <div className="bg-oc-darker border border-oc-border rounded-xl p-6">
      <div className="text-oc-cyan mb-4">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-oc-text/60 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <Check size={14} className="text-green-400 flex-shrink-0" />
            <span className="text-oc-text/70">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface RevenueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  color: string;
}

function RevenueCard({ icon, title, description, stats, color }: RevenueCardProps) {
  const colorClasses: Record<string, string> = {
    blue: "border-blue-500/30 hover:border-blue-500/50",
    purple: "border-purple-500/30 hover:border-purple-500/50",
    yellow: "border-yellow-500/30 hover:border-yellow-500/50",
  };

  const iconColors: Record<string, string> = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    yellow: "text-yellow-400",
  };

  return (
    <div className={`bg-oc-darker border rounded-xl p-6 transition-colors ${colorClasses[color]}`}>
      <div className={`mb-4 ${iconColors[color]}`}>{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-oc-text/60 text-sm mb-4">{description}</p>
      <div className="space-y-2">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-oc-text/50">{stat.label}</span>
            <span className="text-oc-cyan font-mono">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FeeBreakdownProps {
  title: string;
  amount: string;
  isExpanded: boolean;
  onToggle: () => void;
  breakdown: { item: string; cost: string }[];
}

function FeeBreakdown({ title, amount, isExpanded, onToggle, breakdown }: FeeBreakdownProps) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${isExpanded ? "border-oc-cyan/50 bg-oc-cyan/5" : "border-oc-border bg-oc-darker"}`}>
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-oc-cyan/5 transition-colors"
      >
        <span className="text-white font-medium">{title}</span>
        <div className="flex items-center gap-4">
          <span className="text-oc-cyan font-mono">{amount}</span>
          {isExpanded ? <ChevronUp size={18} className="text-oc-cyan" /> : <ChevronDown size={18} className="text-oc-text/50" />}
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-2 animate-fade-in">
          {breakdown.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm py-2 border-t border-oc-border/30 first:border-0">
              <span className="text-oc-text/70">{item.item}</span>
              <span className="text-oc-text/80 font-mono">{item.cost}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CompareRow({ feature, standard, premium, enterprise }: {
  feature: string;
  standard: string | boolean;
  premium: string | boolean;
  enterprise: string | boolean;
}) {
  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check size={16} className="mx-auto text-green-400" />
      ) : (
        <X size={16} className="mx-auto text-oc-text/30" />
      );
    }
    return <span className="text-oc-text/80">{value}</span>;
  };

  return (
    <tr className="border-b border-oc-border/50 last:border-0">
      <td className="px-6 py-4 text-oc-text/60">{feature}</td>
      <td className="px-6 py-4 text-center">{renderCell(standard)}</td>
      <td className="px-6 py-4 text-center">{renderCell(premium)}</td>
      <td className="px-6 py-4 text-center">{renderCell(enterprise)}</td>
    </tr>
  );
}

function PricingFaq({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-oc-darker border border-oc-border rounded-xl p-4">
      <h4 className="text-white font-medium mb-2">{q}</h4>
      <p className="text-oc-text/60 text-sm">{a}</p>
    </div>
  );
}
