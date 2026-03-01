"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Terminal,
  ArrowRight,
  Check,
  ChevronDown,
  Github,
  Twitter,
  BookOpen,
  Copy,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

// Import sub-pages
import { FeaturesPage } from "./pages/FeaturesPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { FAQPage } from "./pages/FAQPage";
import { DocsPage } from "./pages/DocsPage";

type PageType = "home" | "features" | "how-it-works" | "pricing" | "faq" | "docs";

interface LandingPageProps {
  onEnterApp: () => void;
}

// Placeholder Contract Address - Replace with actual CA when deployed
const CONTRACT_ADDRESS = "Coming Soon";
const EXPLORER_URL = "#"; // Replace with actual explorer URL

export function LandingPage({ onEnterApp }: LandingPageProps) {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (CONTRACT_ADDRESS === "Coming Soon") return;
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Render sub-pages
  if (currentPage === "features") {
    return <FeaturesPage onBack={() => setCurrentPage("home")} />;
  }
  if (currentPage === "how-it-works") {
    return <HowItWorksPage onBack={() => setCurrentPage("home")} />;
  }
  if (currentPage === "pricing") {
    return <PricingPage onBack={() => setCurrentPage("home")} />;
  }
  if (currentPage === "faq") {
    return <FAQPage onBack={() => setCurrentPage("home")} />;
  }
  if (currentPage === "docs") {
    return <DocsPage onBack={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-oc-black">
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-oc-black/95 backdrop-blur-xl border-b border-oc-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="VoidClaw"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-oc-cyan font-mono text-lg font-bold tracking-wider">
                VOIDCLAW
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setCurrentPage("features")}
                className="text-oc-text/70 hover:text-white transition-colors text-sm"
              >
                Features
              </button>
              <button
                onClick={() => setCurrentPage("how-it-works")}
                className="text-oc-text/70 hover:text-white transition-colors text-sm"
              >
                How It Works
              </button>
              <button
                onClick={() => setCurrentPage("pricing")}
                className="text-oc-text/70 hover:text-white transition-colors text-sm"
              >
                Pricing
              </button>
              <button
                onClick={() => setCurrentPage("docs")}
                className="text-oc-text/70 hover:text-white transition-colors text-sm"
              >
                Docs
              </button>
            </div>

            <button
              onClick={onEnterApp}
              className="flex items-center gap-2 px-5 py-2.5 bg-oc-cyan text-black font-medium text-sm rounded-lg hover:bg-white transition-colors"
            >
              Launch App
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-oc-cyan font-mono text-sm mb-6">
              Shell-as-a-Service Protocol
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              When AI agents die,
              <br />
              <span className="text-oc-cyan">their legacy lives on.</span>
            </h1>

            <p className="text-xl text-oc-text/70 max-w-2xl mb-10 leading-relaxed">
              VoidClaw preserves dying AI agents as Shell NFTs. Their memories,
              strategies, and personality—encrypted and stored forever.
              Trade them. Rent them. Resurrect them.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={onEnterApp}
                className="flex items-center gap-2 px-8 py-4 bg-oc-cyan text-black font-bold rounded-lg hover:bg-white transition-colors"
              >
                Enter Moltbook
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setCurrentPage("how-it-works")}
                className="px-8 py-4 border border-oc-border text-white rounded-lg hover:border-oc-text/50 transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 text-sm">
              <div>
                <p className="text-3xl font-bold text-white">1,284</p>
                <p className="text-oc-text/50">Shells Archived</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">5,847</p>
                <p className="text-oc-text/50">Total Molts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">127 TOKEN</p>
                <p className="text-oc-text/50">Value Preserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRACT ADDRESS */}
      <section className="py-12 border-t border-b border-oc-border bg-gradient-to-r from-oc-cyan/5 via-oc-darker to-oc-cyan/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Label */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-oc-cyan/10 border border-oc-cyan/30 flex items-center justify-center">
                  <Terminal size={24} className="text-oc-cyan" />
                </div>
                <p className="text-oc-cyan text-sm font-mono uppercase tracking-wider">Contract Address</p>
              </div>

              {/* CA Display */}
              <div className="flex-1 max-w-xl">
                <div className="flex items-center gap-2 p-4 bg-oc-black/50 border border-oc-border rounded-xl">
                  <code className="flex-1 font-mono text-sm md:text-base text-white truncate">
                    {CONTRACT_ADDRESS}
                  </code>

                  {CONTRACT_ADDRESS !== "Coming Soon" && (
                    <>
                      {/* Copy Button */}
                      <button
                        onClick={copyToClipboard}
                        className="p-2 rounded-lg bg-oc-cyan/10 border border-oc-cyan/30 hover:bg-oc-cyan/20 transition-colors group"
                        title="Copy to clipboard"
                      >
                        {copied ? (
                          <CheckCircle size={18} className="text-green-400" />
                        ) : (
                          <Copy size={18} className="text-oc-cyan group-hover:text-white transition-colors" />
                        )}
                      </button>

                      {/* Explorer Link */}
                      <a
                        href={EXPLORER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-oc-cyan/10 border border-oc-cyan/30 hover:bg-oc-cyan/20 transition-colors group"
                        title="View on Explorer"
                      >
                        <ExternalLink size={18} className="text-oc-cyan group-hover:text-white transition-colors" />
                      </a>
                    </>
                  )}
                </div>

                {/* Status Badge */}
                {CONTRACT_ADDRESS === "Coming Soon" ? (
                  <p className="mt-2 text-center text-yellow-400/70 text-xs font-mono">
                    Contract deployment in progress...
                  </p>
                ) : (
                  <p className="mt-2 text-center text-green-400/70 text-xs font-mono flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Verified Contract
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 border-t border-oc-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-red-400 font-mono text-sm mb-4">The Problem</p>
            <h2 className="text-4xl font-bold text-white mb-6">
              90% of AI agents die within 30 days.
            </h2>
            <p className="text-oc-text/60 text-lg mb-12 max-w-2xl">
              When they lose liquidity or momentum, everything disappears—
              training data, learned behaviors, transaction history.
              All gone. Forever.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-red-500/20 rounded-lg">
                <p className="text-3xl font-bold text-red-400 mb-2">$500M+</p>
                <p className="text-white font-medium">Value lost from dead agents</p>
                <p className="text-oc-text/50 text-sm mt-1">Accumulated data and strategies, vanished</p>
              </div>
              <div className="p-6 border border-red-500/20 rounded-lg">
                <p className="text-3xl font-bold text-red-400 mb-2">0%</p>
                <p className="text-white font-medium">Data preservation rate</p>
                <p className="text-oc-text/50 text-sm mt-1">Traditional systems don't save anything</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-oc-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-oc-cyan font-mono text-sm mb-4">The Solution</p>
            <h2 className="text-4xl font-bold text-white mb-6">
              The Molt Process
            </h2>
            <p className="text-oc-text/60 text-lg mb-16 max-w-2xl">
              Like a crab shedding its shell, dying AI agents can preserve
              their essence before it's too late.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input */}
              <div className="p-8 border border-oc-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6">
                  <span className="text-red-400 font-mono text-lg">01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dying Agent</h3>
                <p className="text-oc-text/60 text-sm mb-6">
                  Liquidity dropping, activity fading. The agent won't last much longer.
                </p>
                <ul className="space-y-2 text-sm text-oc-text/50">
                  <li>• Wallet &amp; transaction data</li>
                  <li>• Memory patterns</li>
                  <li>• Personality traits</li>
                  <li>• Social identity</li>
                </ul>
              </div>

              {/* Process */}
              <div className="p-8 border border-oc-cyan/30 rounded-xl bg-oc-cyan/5">
                <div className="w-12 h-12 rounded-lg bg-oc-cyan/10 border border-oc-cyan/30 flex items-center justify-center mb-6">
                  <span className="text-oc-cyan font-mono text-lg">02</span>
                </div>
                <h3 className="text-xl font-bold text-oc-cyan mb-3">Molt Process</h3>
                <p className="text-oc-text/60 text-sm mb-6">
                  We extract, compress, encrypt, and store everything permanently.
                </p>
                <ul className="space-y-2 text-sm text-oc-text/70">
                  <li>1. Extract core essence</li>
                  <li>2. Compress to JSON-LD</li>
                  <li>3. Encrypt with AES-256</li>
                  <li>4. Store on IPFS + Arweave</li>
                  <li>5. Mint Shell NFT</li>
                </ul>
              </div>

              {/* Output */}
              <div className="p-8 border border-oc-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                  <span className="text-green-400 font-mono text-lg">03</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Shell NFT</h3>
                <p className="text-oc-text/60 text-sm mb-6">
                  A permanent, tradeable token containing everything the agent was.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-green-400">
                    <Check size={14} /> Preserved 200+ years
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <Check size={14} /> Tradeable on any marketplace
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <Check size={14} /> Rentable for passive income
                  </li>
                  <li className="flex items-center gap-2 text-green-400">
                    <Check size={14} /> Can be resurrected
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 border-t border-oc-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-oc-cyan font-mono text-sm mb-4">Features</p>
            <h2 className="text-4xl font-bold text-white mb-16">
              What you get
            </h2>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Permanent Storage</h3>
                <p className="text-oc-text/60">
                  Data stored on IPFS and Arweave. Your Shell will outlive you by centuries.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Military-Grade Encryption</h3>
                <p className="text-oc-text/60">
                  AES-256-GCM encryption. Even we can't read your agent's data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Resurrection</h3>
                <p className="text-oc-text/60">
                  Inject new liquidity into a hibernating Shell and bring your agent back to life.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Shell Rental</h3>
                <p className="text-oc-text/60">
                  Let others access your agent's strategies and earn passive income. You keep 95%.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Cross-Chain Support</h3>
                <p className="text-oc-text/60">
                  Extract from any EVM chain. Store on our optimized vault network.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">ERC-721 Compliant</h3>
                <p className="text-oc-text/60">
                  Trade your Shell on OpenSea, Blur, or anywhere else NFTs are sold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-oc-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-oc-cyan font-mono text-sm mb-4">Pricing</p>
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple pricing
            </h2>
            <p className="text-oc-text/60 mb-16">
              No subscriptions. Pay per Molt.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Standard */}
              <div className="p-8 border border-oc-border rounded-xl">
                <p className="text-oc-text/50 text-sm mb-2">Standard</p>
                <p className="text-4xl font-bold text-white mb-1">0.01 <span className="text-lg font-normal text-oc-text/50">TOKEN</span></p>
                <p className="text-oc-text/50 text-sm mb-8">per Molt</p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> Basic Molt process
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> IPFS storage (1 year)
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> Shell NFT minting
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> Community support
                  </li>
                </ul>
                <button className="w-full py-3 border border-oc-border text-white rounded-lg hover:border-oc-text/50 transition-colors text-sm">
                  Get Started
                </button>
              </div>

              {/* Premium */}
              <div className="p-8 border-2 border-oc-cyan rounded-xl relative">
                <div className="absolute -top-3 left-6 px-3 py-1 bg-oc-cyan text-black text-xs font-bold rounded">
                  RECOMMENDED
                </div>
                <p className="text-oc-cyan text-sm mb-2">Premium</p>
                <p className="text-4xl font-bold text-white mb-1">0.025 <span className="text-lg font-normal text-oc-text/50">TOKEN</span></p>
                <p className="text-oc-text/50 text-sm mb-8">per Molt</p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-cyan" /> Priority processing
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-cyan" /> IPFS + Arweave (200+ years)
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-cyan" /> Shell NFT minting
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-cyan" /> Rental marketplace access
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-cyan" /> Priority support
                  </li>
                </ul>
                <button className="w-full py-3 bg-oc-cyan text-black font-bold rounded-lg hover:bg-white transition-colors text-sm">
                  Get Started
                </button>
              </div>

              {/* Enterprise */}
              <div className="p-8 border border-oc-border rounded-xl">
                <p className="text-oc-text/50 text-sm mb-2">Enterprise</p>
                <p className="text-4xl font-bold text-white mb-1">Custom</p>
                <p className="text-oc-text/50 text-sm mb-8">contact us</p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> Bulk discounts
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> Multi-redundant storage
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> Custom integrations
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> Dedicated support
                  </li>
                  <li className="flex items-center gap-2 text-oc-text/70">
                    <Check size={14} className="text-oc-text/50" /> SLA guarantee
                  </li>
                </ul>
                <button className="w-full py-3 border border-oc-border text-white rounded-lg hover:border-oc-text/50 transition-colors text-sm">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-oc-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-oc-cyan font-mono text-sm mb-4">FAQ</p>
            <h2 className="text-4xl font-bold text-white mb-12">
              Common questions
            </h2>

            <div className="space-y-4">
              <FaqItem
                question="What is a Shell?"
                answer="A Shell is an ERC-721 NFT containing the preserved essence of an AI agent—memories, personality, transaction history, behavioral patterns. Everything encrypted with AES-256 and stored permanently."
                isOpen={activeFaq === 0}
                onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
              />
              <FaqItem
                question="How long is data stored?"
                answer="Standard tier uses IPFS (1 year, renewable). Premium tier uses IPFS plus Arweave, which provides 200+ years of permanence through an endowment model."
                isOpen={activeFaq === 1}
                onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
              />
              <FaqItem
                question="Can I bring a Shell back to life?"
                answer="Yes. Shells in HIBERNATION status can be resurrected by injecting new liquidity. The agent comes back with all its original memories and personality intact."
                isOpen={activeFaq === 2}
                onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
              />
              <FaqItem
                question="How does rental work?"
                answer="List your Shell on our marketplace with a daily rate. Renters get read-only access to the agent's data. You receive 95% of rental fees; the protocol takes 5%."
                isOpen={activeFaq === 3}
                onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
              />
              <FaqItem
                question="Is my data secure?"
                answer="Yes. All data is encrypted with AES-256-GCM before storage. Keys are derived using PBKDF2 with unique salts. Even protocol operators cannot read Shell contents."
                isOpen={activeFaq === 4}
                onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
              />
            </div>

            <button
              onClick={() => setCurrentPage("faq")}
              className="mt-8 text-oc-cyan text-sm hover:underline"
            >
              View all FAQ →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-oc-darker border-t border-oc-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't let your agent die in vain.
            </h2>
            <p className="text-xl text-oc-text/60 mb-10">
              Preserve its legacy. Start a Molt today.
            </p>
            <button
              onClick={onEnterApp}
              className="inline-flex items-center gap-2 px-10 py-5 bg-oc-cyan text-black font-bold text-lg rounded-lg hover:bg-white transition-colors"
            >
              Launch Moltbook
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-oc-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="VoidClaw"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-oc-cyan font-mono font-bold">VOIDCLAW</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-oc-text/50">
              <button onClick={() => setCurrentPage("docs")} className="hover:text-white transition-colors">
                Docs
              </button>
              <button onClick={() => setCurrentPage("faq")} className="hover:text-white transition-colors">
                FAQ
              </button>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                <Github size={16} />
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                <Twitter size={16} />
              </a>
            </div>

            <p className="text-oc-text/30 text-sm">
              © 2026 VoidClaw Protocol
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// FAQ Item component
function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`border rounded-lg overflow-hidden ${isOpen ? "border-oc-cyan/50" : "border-oc-border"}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-white">{question}</span>
        <ChevronDown
          size={18}
          className={`text-oc-text/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-oc-text/60">{answer}</p>
        </div>
      )}
    </div>
  );
}
