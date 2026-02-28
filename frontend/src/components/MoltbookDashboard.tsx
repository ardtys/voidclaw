"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  Database,
  Activity,
  Shield,
  Zap,
  Clock,
  Cpu,
  Github,
  Twitter,
  BookOpen,
  ChevronRight,
  Layers,
  Radio,
  ArrowLeft,
  Home,
} from "lucide-react";
import { TerminalFeed } from "./TerminalFeed";
import { VaultExplorer } from "./VaultExplorer";
import { WalletConnect } from "./WalletConnect";
import { AsciiLogo } from "./AsciiLogo";
import { StatsPanel } from "./StatsPanel";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                    MOLTBOOK DASHBOARD                              ║
 * ║         The Terminal Interface for Digital Immortality             ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

type TabType = "terminal" | "vault" | "stats";

interface MoltbookDashboardProps {
  onBackToLanding?: () => void;
}

export function MoltbookDashboard({ onBackToLanding }: MoltbookDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("terminal");
  const [isConnected, setIsConnected] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [blockNumber, setBlockNumber] = useState(19847291);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate block updates
      if (Math.random() > 0.7) {
        setBlockNumber(prev => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════
          HEADER - Logo & Navigation
          ═══════════════════════════════════════════════════════════════ */}
      <header className="border-b border-oc-border bg-oc-darker/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo with Back Button */}
            <div className="flex items-center gap-4">
              {onBackToLanding && (
                <button
                  onClick={onBackToLanding}
                  className="flex items-center gap-2 px-3 py-2 text-oc-text/60 hover:text-oc-cyan hover:bg-oc-cyan/5 rounded-lg transition-all mr-2"
                  title="Back to Landing"
                >
                  <ArrowLeft size={18} />
                  <span className="hidden sm:inline text-sm font-mono">Back</span>
                </button>
              )}
              <AsciiLogo />
              <div>
                <h1 className="text-oc-cyan font-mono text-lg font-bold tracking-wider flex items-center gap-2">
                  VOIDCLAW
                  <span className="text-[10px] px-2 py-0.5 rounded bg-oc-cyan/10 text-oc-cyan/70 border border-oc-cyan/20">
                    BETA
                  </span>
                </h1>
                <p className="text-oc-text/60 text-xs font-mono">Shell-as-a-Service Protocol</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-oc-gray/30 rounded-xl p-1">
              <TabButton
                active={activeTab === "terminal"}
                onClick={() => setActiveTab("terminal")}
                icon={<Terminal size={16} />}
                label="TERMINAL"
              />
              <TabButton
                active={activeTab === "vault"}
                onClick={() => setActiveTab("vault")}
                icon={<Database size={16} />}
                label="VAULT"
              />
              <TabButton
                active={activeTab === "stats"}
                onClick={() => setActiveTab("stats")}
                icon={<Activity size={16} />}
                label="ANALYTICS"
              />
            </nav>

            {/* Mobile Navigation */}
            <nav className="flex md:hidden items-center gap-1">
              <MobileTabButton
                active={activeTab === "terminal"}
                onClick={() => setActiveTab("terminal")}
                icon={<Terminal size={18} />}
              />
              <MobileTabButton
                active={activeTab === "vault"}
                onClick={() => setActiveTab("vault")}
                icon={<Database size={18} />}
              />
              <MobileTabButton
                active={activeTab === "stats"}
                onClick={() => setActiveTab("stats")}
                icon={<Activity size={18} />}
              />
            </nav>

            {/* Wallet Connect */}
            <WalletConnect
              isConnected={isConnected}
              onConnect={() => setIsConnected(true)}
              onDisconnect={() => setIsConnected(false)}
            />
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          STATUS BAR
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-oc-gray/50 via-oc-darker to-oc-gray/50 border-b border-oc-border/50 px-4 py-2.5">
        <div className="container mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-6">
            <StatusIndicator
              label="PROTOCOL"
              status="online"
              icon={<Shield size={12} />}
            />
            <StatusIndicator
              label="ORIGIN"
              status="synced"
              icon={<Zap size={12} />}
            />
            <StatusIndicator
              label="VAULT"
              status="connected"
              icon={<Database size={12} />}
            />
            <div className="hidden lg:flex items-center gap-2 text-oc-text/60 border-l border-oc-border/30 pl-6">
              <Radio size={12} className="text-green-400 animate-pulse" />
              <span>3 active extractors</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-oc-text/70">
            <span className="hidden sm:flex items-center gap-2">
              <Layers size={12} className="text-oc-cyan" />
              <span className="text-oc-cyan font-medium">{blockNumber.toLocaleString()}</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={12} />
              <span>{currentTime.toLocaleTimeString()}</span>
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════════════════════════════════ */}
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-6">
        <div className="animate-fade-in">
          {activeTab === "terminal" && <TerminalFeed />}
          {activeTab === "vault" && <VaultExplorer />}
          {activeTab === "stats" && <StatsPanel />}
        </div>
      </main>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-oc-border bg-oc-darker mt-auto">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Protocol Info */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-oc-cyan to-oc-blue flex items-center justify-center">
                <Cpu size={16} className="text-white" />
              </div>
              <div>
                <p className="text-oc-text/80 text-sm font-mono">VoidClaw Protocol</p>
                <p className="text-oc-text/40 text-xs">v0.1.0 - Testnet</p>
              </div>
            </div>

            {/* Center - Quick Stats */}
            <div className="hidden lg:flex items-center gap-8 text-xs font-mono">
              <QuickStat label="Total Shells" value="1,284" />
              <QuickStat label="Active Molts" value="3" />
              <QuickStat label="Success Rate" value="98.7%" />
            </div>

            {/* Right - Links */}
            <div className="flex items-center gap-4">
              <FooterLink href="#" icon={<BookOpen size={16} />} label="Docs" />
              <FooterLink href="#" icon={<Github size={16} />} label="GitHub" />
              <FooterLink href="#" icon={<Twitter size={16} />} label="Twitter" />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-4 border-t border-oc-border/30 text-center">
            <p className="text-oc-text/30 text-xs font-mono">
              2024 VoidClaw Protocol. Digital Immortality for AI Agents.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function TabButton({ active, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2.5 font-mono text-sm transition-all duration-300 rounded-lg
        ${
          active
            ? "text-oc-cyan bg-oc-cyan/10 shadow-[inset_0_0_20px_rgba(0,255,204,0.1)]"
            : "text-oc-text/60 hover:text-oc-cyan hover:bg-oc-cyan/5"
        }
      `}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <ChevronRight size={14} className="ml-1 animate-pulse" />
      )}
    </button>
  );
}

function MobileTabButton({ active, onClick, icon }: Omit<TabButtonProps, 'label'>) {
  return (
    <button
      onClick={onClick}
      className={`
        p-3 rounded-lg transition-all duration-300
        ${
          active
            ? "text-oc-cyan bg-oc-cyan/10"
            : "text-oc-text/60 hover:text-oc-cyan"
        }
      `}
    >
      {icon}
    </button>
  );
}

interface StatusIndicatorProps {
  label: string;
  status: "online" | "synced" | "connected" | "offline";
  icon: React.ReactNode;
}

function StatusIndicator({ label, status, icon }: StatusIndicatorProps) {
  const statusConfig = {
    online: { color: "text-green-400", bg: "bg-green-400" },
    synced: { color: "text-oc-cyan", bg: "bg-oc-cyan" },
    connected: { color: "text-blue-400", bg: "bg-blue-400" },
    offline: { color: "text-red-400", bg: "bg-red-400" },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className={`w-1.5 h-1.5 rounded-full ${config.bg}`} />
        {status !== "offline" && (
          <div className={`absolute inset-0 w-1.5 h-1.5 rounded-full ${config.bg} animate-ping`} />
        )}
      </div>
      <span className={config.color}>{icon}</span>
      <span className="text-oc-text/60 hidden sm:inline">{label}:</span>
      <span className={`${config.color} font-medium`}>{status.toUpperCase()}</span>
    </div>
  );
}

function QuickStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-oc-cyan font-bold">{value}</p>
      <p className="text-oc-text/40 text-[10px]">{label}</p>
    </div>
  );
}

function FooterLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-3 py-2 text-oc-text/60 hover:text-oc-cyan transition-colors duration-200 rounded-lg hover:bg-oc-cyan/5"
    >
      {icon}
      <span className="text-sm hidden sm:inline">{label}</span>
    </a>
  );
}
