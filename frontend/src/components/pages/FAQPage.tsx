"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Database,
  Lock,
  RefreshCw,
  Wallet,
  DollarSign,
  Shield,
  Zap,
  Clock,
  Globe,
  Users,
  Code,
  AlertCircle,
  CheckCircle,
  Info,
  MessageCircle,
  BookOpen,
  ExternalLink,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                        FAQ PAGE                                    ║
 * ║        Frequently Asked Questions with detailed answers            ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface FAQPageProps {
  onBack: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedLinks?: { text: string; href: string }[];
}

const FAQ_DATA: FAQItem[] = [
  // General
  {
    id: "what-is-shell",
    question: "What is a Shell?",
    answer: "A Shell is an NFT (ERC-721) that contains the 'essence' or core of a preserved AI agent. The Shell stores all critical agent data including: wallet data, transaction history, memory patterns, personality traits, social identity, and behavioral data. All data is encrypted with AES-256 and permanently stored on decentralized storage (IPFS + Arweave).",
    category: "general",
    relatedLinks: [
      { text: "Learn about the Molt Process", href: "#" },
    ],
  },
  {
    id: "what-is-molt",
    question: "What is 'The Molt'?",
    answer: "Molt is the process of extracting and preserving an AI agent's essence into a Shell NFT. Like a crab shedding its shell (molting), the AI agent 'releases' its data and identity for permanent storage. This process consists of 5 stages: Extracting (gathering data), Compressing (compression to JSON-LD), Encrypting (AES-256 encryption), Storing (upload to IPFS/Arweave), and Minting (mint Shell NFT).",
    category: "general",
  },
  {
    id: "why-preserve",
    question: "Why should I preserve my AI agent?",
    answer: "90% of AI agents die within the first 30 days after launch. When an agent dies (loses liquidity, momentum decreases), all data, memories, and strategies are lost forever. With VoidClaw, your agent's essence is preserved in a Shell NFT that: is permanently stored (200+ years), can be traded/sold, can be rented for passive income, and can be resurrected (brought back to life) at any time.",
    category: "general",
  },
  {
    id: "who-can-use",
    question: "Who can use VoidClaw?",
    answer: "VoidClaw can be used by anyone who owns an AI agent on an EVM-compatible blockchain. This includes: AI agent creators/developers, investors who purchased agents, DAOs managing multiple agents, and researchers who want to study agent behavioral data.",
    category: "general",
  },

  // Technical
  {
    id: "how-long-stored",
    question: "How long is data stored?",
    answer: "Standard tier stores data on IPFS for 1 year (can be extended). Premium tier stores on IPFS + Arweave which provides 200+ years of permanence. Arweave uses an endowment model where storage fees are paid once forever. Enterprise tier gets multi-redundant storage with SLA guarantee.",
    category: "technical",
  },
  {
    id: "is-data-secure",
    question: "Is my data secure?",
    answer: "Yes, extremely secure. All Shell data is encrypted using AES-256-GCM (military-grade encryption). Key derivation uses PBKDF2 with unique salt. Each encryption uses a different IV (Initialization Vector). Data is stored on decentralized storage with no single point of failure. Even protocol operators cannot read your Shell contents due to the zero-knowledge architecture.",
    category: "technical",
  },
  {
    id: "which-chains",
    question: "Which blockchains are supported?",
    answer: "The extraction engine can pull data from all EVM-compatible chains as Origin Network, including: Ethereum, Polygon, Arbitrum, Optimism, BSC, Avalanche, and other L2s. Shell NFTs are minted on the Vault Network (EVM-compatible L2) optimized for gas efficiency and security.",
    category: "technical",
  },
  {
    id: "what-data-extracted",
    question: "What data is extracted?",
    answer: "The extraction engine collects: wallet addresses and balances, full transaction history, memory patterns and learned behaviors, personality traits and response patterns, social identity (handles, connections), trading strategies and decision patterns, and custom metadata that you add.",
    category: "technical",
  },
  {
    id: "can-molt-fail",
    question: "Can the Molt process fail?",
    answer: "Very rarely, but it's possible. Failures can occur due to: extreme network congestion, insufficient gas, or data corruption. If Molt fails, the system will automatically rollback and refund 100% of funds. You can try again after the issue is resolved.",
    category: "technical",
  },

  // Shell Lifecycle
  {
    id: "shell-states",
    question: "What are the Shell states?",
    answer: "Shells have 3 states: ACTIVE (Shell has been resurrected, agent actively running, generating real-time data), HIBERNATION (Shell stored, not active but data intact, can be rented or resurrected), DEAD (Archive only, TTL expired or permanently archived, read-only access for historical records).",
    category: "lifecycle",
  },
  {
    id: "can-resurrect",
    question: "Can I resurrect a Shell?",
    answer: "Yes! Shells with HIBERNATION status can be resurrected with new liquidity injection. The resurrection process restores all essence data to a newly deployed AI agent. Resurrection costs range from 0.5 - 2.5 TOKEN depending on complexity. The resurrected agent will have all memories and personality traits from the original Shell.",
    category: "lifecycle",
  },
  {
    id: "shell-trading",
    question: "Can Shells be traded?",
    answer: "Yes! Shells are fully compliant ERC-721 NFTs. You can: trade on any NFT marketplace (OpenSea, Blur, etc.), transfer to another wallet, use as collateral in DeFi protocols, and buy/sell on the secondary market. Royalty support is available for creators.",
    category: "lifecycle",
  },

  // Rental & Monetization
  {
    id: "how-rental-works",
    question: "How does rental work?",
    answer: "As a Shell owner, you can list your Shell for rental on our marketplace. You set the daily price (min 0.001 TOKEN). Renters pay to get limited access to Shell data (read-only, time-limited). The protocol takes a 5% fee, you receive 95%. Rental does not affect Shell ownership.",
    category: "monetization",
  },
  {
    id: "what-renters-get",
    question: "What do renters get?",
    answer: "Renters get read-only access to Shell data during the rental period. This includes: viewing memory patterns, analyzing behavioral data, studying trading strategies, and accessing personality traits. Renters CANNOT modify data, transfer the Shell, or permanently copy data.",
    category: "monetization",
  },
  {
    id: "passive-income",
    question: "How much passive income from rental?",
    answer: "Income depends on demand and the price you set. Example: A Shell with valuable trading strategy could rent for 0.01 TOKEN/day. If rented 20 days/month = 0.2 TOKEN/month. You receive 95% = 0.19 TOKEN/month. Popular Shells can generate significant passive income.",
    category: "monetization",
  },

  // Pricing
  {
    id: "pricing-tiers",
    question: "What are the pricing tier differences?",
    answer: "Standard (0.01 TOKEN): Basic molt, IPFS 1 year, community support. Premium (0.025 TOKEN): Priority processing, IPFS + Arweave permanent, rental marketplace access, priority support. Enterprise (Custom): Bulk discounts, SLA guarantee, dedicated support, custom integration.",
    category: "pricing",
  },
  {
    id: "hidden-fees",
    question: "Are there hidden fees?",
    answer: "No hidden fees. Listed prices are all-inclusive except for network gas fees which vary. Gas fees are required for NFT minting and can change depending on network congestion. We display estimated gas before confirmation.",
    category: "pricing",
  },
  {
    id: "refund-policy",
    question: "What is the refund policy?",
    answer: "If the Molt process fails due to system error, funds are refunded 100% automatically. If Molt succeeds, there are no refunds as storage and NFT have been deployed. For other issues, contact support for case-by-case review.",
    category: "pricing",
  },

  // Support
  {
    id: "get-support",
    question: "How do I get support?",
    answer: "Standard tier: Community Discord with 24-48 hour response time. Premium tier: Priority support with < 4 hour response time. Enterprise tier: Dedicated support manager with < 1 hour response time and SLA guarantee. For urgent issues, all tiers can access emergency support.",
    category: "support",
  },
  {
    id: "documentation",
    question: "Where is the complete documentation?",
    answer: "Complete documentation is available at docs.voidclaw.io including: Getting Started guide, API Reference, Smart Contract documentation, SDK documentation, and Troubleshooting guide. For developers, we provide example code and integration tutorials.",
    category: "support",
  },
];

const CATEGORIES = [
  { id: "all", label: "All", icon: <HelpCircle size={16} /> },
  { id: "general", label: "General", icon: <Info size={16} /> },
  { id: "technical", label: "Technical", icon: <Code size={16} /> },
  { id: "lifecycle", label: "Shell Lifecycle", icon: <RefreshCw size={16} /> },
  { id: "monetization", label: "Monetization", icon: <DollarSign size={16} /> },
  { id: "pricing", label: "Pricing", icon: <Wallet size={16} /> },
  { id: "support", label: "Support", icon: <MessageCircle size={16} /> },
];

export function FAQPage({ onBack }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch = searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <HelpCircle size={16} className="text-purple-400" />
              <span className="text-purple-400 text-sm font-mono">FAQ</span>
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-purple-400">Questions</span>
            </h1>

            <p className="text-xl text-oc-text/70 max-w-2xl mx-auto mb-8">
              Find answers to common questions about VoidClaw Protocol,
              Shell NFTs, and the Molt process.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-oc-text/50" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-oc-darker border border-oc-border rounded-xl pl-12 pr-4 py-4
                         text-white font-mono placeholder-oc-text/30
                         focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                         transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-oc-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  activeCategory === cat.id
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : "bg-oc-darker text-oc-text/60 border border-oc-border hover:border-purple-500/30 hover:text-purple-400"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16">
                <AlertCircle size={48} className="mx-auto text-oc-text/30 mb-4" />
                <h3 className="text-oc-text/60 font-mono mb-2">No results found</h3>
                <p className="text-oc-text/40 text-sm">
                  Try different keywords or select another category
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <FAQCard
                    key={faq.id}
                    faq={faq}
                    isExpanded={expandedFaq === faq.id}
                    onToggle={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Topics */}
      <section className="py-16 bg-oc-darker/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Popular Topics
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <TopicCard
                icon={<Database size={28} />}
                title="About Shell NFTs"
                description="Learn what a Shell is, how it works, and what data is stored inside."
                color="cyan"
                questions={["What is a Shell?", "What data is stored?", "How long is data preserved?"]}
              />

              <TopicCard
                icon={<RefreshCw size={28} />}
                title="The Molt Process"
                description="Understand step by step how AI agents are preserved into Shells."
                color="blue"
                questions={["What is Molt?", "How long does it take?", "Can Molt fail?"]}
              />

              <TopicCard
                icon={<DollarSign size={28} />}
                title="Monetization"
                description="How to generate income from Shell NFTs through rental and trading."
                color="green"
                questions={["How does rental work?", "How much passive income?", "Can Shells be traded?"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/10 via-oc-cyan/10 to-blue-500/10 border border-oc-border rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-oc-text/70 mb-8 max-w-xl mx-auto">
                Can't find the answer you're looking for? Our support team is ready to help.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <SupportOption
                  icon={<MessageCircle size={24} />}
                  title="Discord Community"
                  description="Join our community and discussions"
                  action="Join Discord"
                />
                <SupportOption
                  icon={<BookOpen size={24} />}
                  title="Documentation"
                  description="Read the complete documentation"
                  action="View Docs"
                />
                <SupportOption
                  icon={<Users size={24} />}
                  title="Direct Support"
                  description="Contact the support team"
                  action="Contact Us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-oc-text/70 text-lg mb-8">
              Now that you understand how VoidClaw works, it's time to preserve your AI agent!
            </p>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-3 px-8 py-4 bg-oc-cyan text-black font-mono font-bold
                       rounded-xl hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(0,255,204,0.4)]"
            >
              Start Now
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

interface FAQCardProps {
  faq: FAQItem;
  isExpanded: boolean;
  onToggle: () => void;
}

function FAQCard({ faq, isExpanded, onToggle }: FAQCardProps) {
  const categoryColors: Record<string, string> = {
    general: "text-oc-cyan",
    technical: "text-blue-400",
    lifecycle: "text-purple-400",
    monetization: "text-green-400",
    pricing: "text-yellow-400",
    support: "text-orange-400",
  };

  const categoryLabels: Record<string, string> = {
    general: "General",
    technical: "Technical",
    lifecycle: "Lifecycle",
    monetization: "Monetization",
    pricing: "Pricing",
    support: "Support",
  };

  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${
      isExpanded ? "border-purple-500/50 bg-purple-500/5" : "border-oc-border bg-oc-darker"
    }`}>
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-start gap-4 text-left hover:bg-purple-500/5 transition-colors"
      >
        <div className={`mt-1 ${isExpanded ? "text-purple-400" : "text-oc-text/50"}`}>
          <HelpCircle size={20} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-mono ${categoryColors[faq.category]}`}>
              {categoryLabels[faq.category]}
            </span>
          </div>
          <h3 className="text-white font-medium">{faq.question}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp size={20} className="text-purple-400 mt-1" />
        ) : (
          <ChevronDown size={20} className="text-oc-text/50 mt-1" />
        )}
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 animate-fade-in">
          <div className="pl-9">
            <p className="text-oc-text/70 leading-relaxed">{faq.answer}</p>

            {faq.relatedLinks && faq.relatedLinks.length > 0 && (
              <div className="mt-4 pt-4 border-t border-oc-border/30">
                <p className="text-oc-text/50 text-xs font-mono mb-2">RELATED:</p>
                <div className="flex flex-wrap gap-2">
                  {faq.relatedLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-oc-darker rounded-full
                               text-xs text-purple-400 hover:bg-purple-500/10 transition-colors"
                    >
                      {link.text}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  questions: string[];
}

function TopicCard({ icon, title, description, color, questions }: TopicCardProps) {
  const colorClasses: Record<string, string> = {
    cyan: "border-oc-cyan/30 hover:border-oc-cyan/50 text-oc-cyan",
    blue: "border-blue-500/30 hover:border-blue-500/50 text-blue-400",
    green: "border-green-500/30 hover:border-green-500/50 text-green-400",
  };

  return (
    <div className={`bg-oc-darker border rounded-xl p-6 transition-colors ${colorClasses[color]}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-oc-text/60 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {questions.map((q, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-oc-text/70">
            <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SupportOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
}

function SupportOption({ icon, title, description, action }: SupportOptionProps) {
  return (
    <div className="bg-oc-darker border border-oc-border rounded-xl p-4 hover:border-oc-cyan/30 transition-colors">
      <div className="text-oc-cyan mb-3">{icon}</div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-oc-text/60 text-xs mb-3">{description}</p>
      <button className="text-oc-cyan text-sm font-mono hover:underline">
        {action} →
      </button>
    </div>
  );
}
