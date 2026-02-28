"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  CheckCircle,
  Clock,
  Cpu,
  ArrowRight,
  Ghost,
  Skull,
  Zap,
  Shield,
  Lock,
  Loader2,
  Sparkles,
  Database,
  Binary,
  Fingerprint,
  Hash,
  Info,
} from "lucide-react";
import { TerminalExplanation } from "./TerminalExplanation";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                       TERMINAL FEED                                ║
 * ║        Real-time feed of agents undergoing "The Molt"              ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface MoltEvent {
  id: string;
  timestamp: Date;
  agentName: string;
  agentHandle: string;
  originWallet: string;
  status: "extracting" | "compressing" | "encrypting" | "minting" | "complete" | "failed";
  progress: number;
  shellId?: string;
  essenceHash?: string;
  txHash?: string;
  memorySize?: string;
  transactionCount?: number;
}

// Simulated molt events for demo
const MOCK_EVENTS: MoltEvent[] = [
  {
    id: "m1",
    timestamp: new Date(Date.now() - 120000),
    agentName: "SYNTHWAVE_AI",
    agentHandle: "@synthwave_bot",
    originWallet: "0x7xKX...9fTz",
    status: "complete",
    progress: 100,
    shellId: "SHELL-0x7A3F",
    essenceHash: "Qm8x...4kL9",
    txHash: "0x9f8e...2b3c",
    memorySize: "2.4 MB",
    transactionCount: 1247,
  },
  {
    id: "m2",
    timestamp: new Date(Date.now() - 60000),
    agentName: "DEGEN_ORACLE",
    agentHandle: "@degen_oracle",
    originWallet: "0x4pRt...2wQm",
    status: "minting",
    progress: 85,
    memorySize: "1.8 MB",
    transactionCount: 892,
  },
  {
    id: "m3",
    timestamp: new Date(Date.now() - 30000),
    agentName: "ALPHA_HUNTER",
    agentHandle: "@alpha_hunt3r",
    originWallet: "0x9mNk...6bXy",
    status: "encrypting",
    progress: 60,
    memorySize: "3.1 MB",
    transactionCount: 2341,
  },
  {
    id: "m4",
    timestamp: new Date(Date.now() - 10000),
    agentName: "NFT_WHISPERER",
    agentHandle: "@nft_whisper",
    originWallet: "0x2cVb...8pRt",
    status: "extracting",
    progress: 25,
    memorySize: "1.2 MB",
    transactionCount: 456,
  },
];

export function TerminalFeed() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [events, setEvents] = useState<MoltEvent[]>(MOCK_EVENTS);
  const [commandInput, setCommandInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "╔══════════════════════════════════════════════════════════════╗",
    "║          VOIDCLAW TERMINAL v0.1.0 - SHELL PROTOCOL           ║",
    "╚══════════════════════════════════════════════════════════════╝",
    "",
    "$ voidclaw --init",
    "[OK] Protocol initialized successfully",
    "[OK] Connected to Vault Network",
    "[OK] Extraction engine online",
    "",
    "$ molt --watch",
    "[INFO] Watching for new Molt events...",
    "[INFO] Active extractors: 3",
    "",
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEvents((prev) =>
        prev.map((event) => {
          if (event.status === "complete" || event.status === "failed") return event;

          const statusOrder: MoltEvent["status"][] = [
            "extracting",
            "compressing",
            "encrypting",
            "minting",
            "complete",
          ];
          const currentIndex = statusOrder.indexOf(event.status);

          if (Math.random() > 0.6 && currentIndex < statusOrder.length - 1) {
            const newStatus = statusOrder[currentIndex + 1];
            const newProgress = Math.min(event.progress + Math.floor(Math.random() * 10) + 10, 100);

            // Add terminal log
            if (newStatus === "complete") {
              setTerminalHistory(prev => [
                ...prev,
                `[${new Date().toLocaleTimeString()}] MOLT COMPLETE: ${event.agentName}`,
                `  └─ Shell ID: SHELL-0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`,
                `  └─ Essence archived successfully`,
                "",
              ]);
            }

            return {
              ...event,
              status: newStatus,
              progress: newProgress,
              ...(newStatus === "complete"
                ? {
                    shellId: `SHELL-0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`,
                    essenceHash: `Qm${Math.random().toString(36).slice(2, 10)}`,
                    txHash: `0x${Math.random().toString(16).slice(2, 10)}`,
                  }
                : {}),
            };
          }
          return event;
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const newHistory = [...terminalHistory, `$ ${commandInput}`];

    // Command handling
    if (commandInput === "clear") {
      setTerminalHistory([]);
    } else if (commandInput === "help") {
      newHistory.push(
        "",
        "┌─────────────────────────────────────────────────────────────┐",
        "│                    AVAILABLE COMMANDS                       │",
        "├─────────────────────────────────────────────────────────────┤",
        "│  molt --status     Show current molt statistics             │",
        "│  molt --watch      Watch live molt events                   │",
        "│  vault --list      List all shells in vault                 │",
        "│  vault --stats     Show vault statistics                    │",
        "│  shell <id>        Get shell details                        │",
        "│  extract <wallet>  Initiate molt for agent                  │",
        "│  clear             Clear terminal                           │",
        "│  help              Show this help                           │",
        "└─────────────────────────────────────────────────────────────┘",
        ""
      );
      setTerminalHistory(newHistory);
    } else if (commandInput === "molt --status") {
      newHistory.push(
        "",
        "┌─────────────────────────────────────────────────────────────┐",
        "│                    MOLT STATUS REPORT                       │",
        "├─────────────────────────────────────────────────────────────┤",
        `│  Active Molts:        ${events.filter(e => e.status !== "complete" && e.status !== "failed").length}                                       │`,
        `│  Completed Today:     47                                    │`,
        `│  Total Shells:        1,284                                 │`,
        `│  Success Rate:        98.7%                                 │`,
        `│  Avg Processing:      2m 34s                                │`,
        "└─────────────────────────────────────────────────────────────┘",
        ""
      );
      setTerminalHistory(newHistory);
    } else if (commandInput === "vault --stats") {
      newHistory.push(
        "",
        "VAULT STATISTICS:",
        "  ├─ Total Capacity:    10,000 shells",
        "  ├─ Current Usage:     1,284 shells (12.8%)",
        "  ├─ Hibernating:       1,089 shells",
        "  ├─ Active:            127 shells",
        "  └─ Archived:          68 shells",
        ""
      );
      setTerminalHistory(newHistory);
    } else if (commandInput.startsWith("shell ")) {
      const shellId = commandInput.split(" ")[1];
      newHistory.push(
        "",
        `Fetching shell data for ${shellId}...`,
        "",
        `┌─────────────── SHELL DETAILS ───────────────┐`,
        `│  Shell ID:      ${shellId.padEnd(28)}│`,
        `│  Status:        HIBERNATION                 │`,
        `│  Curator:       0x7a3f...9b2c               │`,
        `│  Molt Date:     ${new Date().toLocaleDateString().padEnd(24)}│`,
        `│  Memory Size:   2.4 MB                      │`,
        `│  Transactions:  1,247                       │`,
        `│  Essence Hash:  QmX8kL9...                  │`,
        `└─────────────────────────────────────────────┘`,
        ""
      );
      setTerminalHistory(newHistory);
    } else {
      newHistory.push(`[ERROR] Command not found: ${commandInput}`, "Type 'help' for available commands", "");
      setTerminalHistory(newHistory);
    }

    setCommandInput("");
  };

  const getStatusIcon = (status: MoltEvent["status"]) => {
    switch (status) {
      case "extracting":
        return <Binary className="animate-pulse" size={14} />;
      case "compressing":
        return <Database className="animate-pulse" size={14} />;
      case "encrypting":
        return <Lock className="animate-pulse" size={14} />;
      case "minting":
        return <Sparkles className="animate-pulse" size={14} />;
      case "complete":
        return <CheckCircle size={14} />;
      case "failed":
        return <Skull size={14} />;
    }
  };

  const getStatusColor = (status: MoltEvent["status"]) => {
    switch (status) {
      case "extracting":
        return "text-yellow-400";
      case "compressing":
        return "text-orange-400";
      case "encrypting":
        return "text-purple-400";
      case "minting":
        return "text-blue-400";
      case "complete":
        return "text-green-400";
      case "failed":
        return "text-red-400";
    }
  };

  const getStatusLabel = (status: MoltEvent["status"]) => {
    switch (status) {
      case "extracting":
        return "Extracting Essence";
      case "compressing":
        return "Compressing Data";
      case "encrypting":
        return "Encrypting Memory";
      case "minting":
        return "Minting Shell NFT";
      case "complete":
        return "Molt Complete";
      case "failed":
        return "Molt Failed";
    }
  };

  // Show explanation page if toggled
  if (showExplanation) {
    return <TerminalExplanation onClose={() => setShowExplanation(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION HEADER & EXPLANATION
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-oc-cyan/10 via-transparent to-oc-blue/10 border border-oc-border rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Title & Description */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-oc-cyan to-oc-blue flex items-center justify-center">
                <Cpu size={24} className="text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Terminal Feed</h2>
                <p className="text-oc-cyan font-mono text-sm">Real-time Molt Monitoring</p>
              </div>
              {/* Info Button */}
              <button
                onClick={() => setShowExplanation(true)}
                className="ml-auto p-2 rounded-lg border border-oc-border/50 text-oc-text/50
                           hover:text-oc-cyan hover:border-oc-cyan/50 hover:bg-oc-cyan/5
                           transition-all duration-200 group"
                title="View full explanation"
              >
                <Info size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <p className="text-oc-text/70 leading-relaxed mb-4">
              Terminal Feed is the real-time monitoring center for all active <span className="text-oc-cyan font-semibold">Molt</span> processes.
              Here you can observe AI Agents undergoing extraction, compression, encryption, and Shell NFT minting.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <QuickInfo icon={<Binary size={14} />} label="Extracting" desc="Extracting agent data" color="yellow" />
              <QuickInfo icon={<Database size={14} />} label="Compressing" desc="Compressing to JSON-LD" color="orange" />
              <QuickInfo icon={<Lock size={14} />} label="Encrypting" desc="AES-256 encryption" color="purple" />
              <QuickInfo icon={<Sparkles size={14} />} label="Minting" desc="Minting Shell NFT" color="blue" />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="lg:w-72 bg-oc-darker/50 rounded-xl p-4 border border-oc-border/50">
            <h3 className="text-oc-text/60 text-xs font-mono uppercase tracking-wider mb-3">Live Statistics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-oc-text/70 text-sm">Active Molts</span>
                <span className="text-oc-cyan font-mono font-bold">{events.filter(e => e.status !== "complete" && e.status !== "failed").length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-oc-text/70 text-sm">Completed Today</span>
                <span className="text-green-400 font-mono font-bold">47</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-oc-text/70 text-sm">Success Rate</span>
                <span className="text-oc-cyan font-mono font-bold">98.7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-oc-text/70 text-sm">Avg. Processing</span>
                <span className="text-oc-text/80 font-mono">2m 34s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-6 pt-6 border-t border-oc-border/30">
          <div className="grid md:grid-cols-3 gap-4">
            <FeatureHighlight
              icon={<Zap size={16} />}
              title="Real-time Updates"
              description="Automatic status updates every second for accurate monitoring"
            />
            <FeatureHighlight
              icon={<Shield size={16} />}
              title="Interactive Console"
              description="Execute commands directly in the terminal for full control"
            />
            <FeatureHighlight
              icon={<Fingerprint size={16} />}
              title="Detailed Tracking"
              description="View memory size, transaction count, and progress details"
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT GRID
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ═══════════════════════════════════════════════════════════════
            ACTIVE MOLTS PANEL
            ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card">
        <div className="terminal-header">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-yellow" />
          <div className="terminal-dot terminal-dot-green" />
          <span className="ml-4 text-oc-text text-sm font-mono flex items-center gap-2">
            <Loader2 size={12} className="animate-spin text-oc-cyan" />
            ACTIVE_MOLTS.process
          </span>
          <span className="ml-auto text-xs text-oc-cyan font-mono">
            {events.filter(e => e.status !== "complete" && e.status !== "failed").length} active
          </span>
        </div>

        <div className="terminal-content space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`
                relative p-5 border rounded-xl transition-all duration-500
                ${
                  event.status === "complete"
                    ? "border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent"
                    : event.status === "failed"
                    ? "border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent"
                    : "border-oc-border bg-gradient-to-br from-oc-gray/30 to-transparent hover:border-oc-cyan/30"
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Progress indicator line */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl overflow-hidden bg-oc-darker">
                <div
                  className={`h-full transition-all duration-700 ${
                    event.status === "complete"
                      ? "bg-gradient-to-r from-green-500 to-green-400"
                      : event.status === "failed"
                      ? "bg-gradient-to-r from-red-500 to-red-400"
                      : "bg-gradient-to-r from-oc-cyan via-oc-blue to-oc-purple"
                  }`}
                  style={{ width: `${event.progress}%` }}
                />
              </div>

              {/* Agent Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      w-12 h-12 rounded-xl border-2 flex items-center justify-center
                      ${getStatusColor(event.status)} border-current
                      bg-current/5 shadow-lg shadow-current/10
                    `}
                  >
                    {getStatusIcon(event.status)}
                  </div>
                  <div>
                    <h3 className="text-oc-cyan font-bold text-base flex items-center gap-2">
                      {event.agentName}
                      {event.status === "complete" && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                          ARCHIVED
                        </span>
                      )}
                    </h3>
                    <p className="text-oc-text/70 text-sm">{event.agentHandle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`text-xs font-mono uppercase font-medium ${getStatusColor(event.status)}`}
                  >
                    {getStatusLabel(event.status)}
                  </span>
                  <p className="text-oc-text/50 text-xs mt-1">
                    {event.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>

              {/* Progress Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-oc-darker/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-oc-text/60 text-xs mb-1">
                    <Database size={12} />
                    Memory Size
                  </div>
                  <p className="text-oc-cyan font-mono text-sm">{event.memorySize || "Calculating..."}</p>
                </div>
                <div className="bg-oc-darker/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-oc-text/60 text-xs mb-1">
                    <Hash size={12} />
                    Transactions
                  </div>
                  <p className="text-oc-cyan font-mono text-sm">{event.transactionCount?.toLocaleString() || "..."}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-oc-text/60">Molt Progress</span>
                  <span className="text-oc-cyan font-mono font-bold">{event.progress}%</span>
                </div>
                <div className="h-2 bg-oc-darker rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-700 rounded-full ${
                      event.status === "complete"
                        ? "bg-gradient-to-r from-green-500 to-green-400"
                        : event.status === "failed"
                        ? "bg-gradient-to-r from-red-500 to-red-400"
                        : "bg-gradient-to-r from-oc-cyan via-oc-blue to-oc-purple animate-pulse"
                    }`}
                    style={{ width: `${event.progress}%` }}
                  />
                </div>
              </div>

              {/* Wallet & Shell Info */}
              <div className="flex items-center justify-between text-xs pt-3 border-t border-oc-border/30">
                <div className="flex items-center gap-2">
                  <Fingerprint size={12} className="text-oc-text/50" />
                  <span className="text-oc-text/60">Origin:</span>
                  <code className="text-oc-purple font-mono">{event.originWallet}</code>
                </div>
                {event.shellId && (
                  <div className="flex items-center gap-1 text-green-400">
                    <ChevronRight size={12} />
                    <span className="font-mono font-bold">{event.shellId}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TERMINAL CONSOLE
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card flex flex-col">
        <div className="terminal-header">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-yellow" />
          <div className="terminal-dot terminal-dot-green" />
          <span className="ml-4 text-oc-text text-sm font-mono">
            voidclaw@vault:~$
          </span>
          <span className="ml-auto flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400">CONNECTED</span>
          </span>
        </div>

        <div
          ref={terminalRef}
          className="terminal-content flex-1 max-h-[500px] overflow-y-auto custom-scrollbar bg-[#0a0a0f]"
        >
          {terminalHistory.map((line, i) => (
            <div
              key={i}
              className={`font-mono text-sm leading-relaxed ${
                line.startsWith("$")
                  ? "text-oc-cyan"
                  : line.startsWith("[OK]")
                  ? "text-green-400"
                  : line.startsWith("[ERROR]")
                  ? "text-red-400"
                  : line.startsWith("[INFO]")
                  ? "text-blue-400"
                  : line.startsWith("│") || line.startsWith("├") || line.startsWith("└") || line.startsWith("┌") || line.startsWith("┐") || line.startsWith("─")
                  ? "text-oc-cyan/70"
                  : "text-oc-text/80"
              }`}
            >
              {line}
            </div>
          ))}
        </div>

        <form onSubmit={handleCommand} className="border-t border-oc-border p-4 bg-oc-darker/50">
          <div className="flex items-center gap-2">
            <span className="text-oc-cyan font-mono">$</span>
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-oc-cyan font-mono text-sm placeholder-oc-text/30"
              placeholder="Type 'help' for available commands..."
            />
            <div className="w-2 h-5 bg-oc-cyan animate-pulse rounded-sm" />
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function QuickInfo({ icon, label, desc, color }: { icon: React.ReactNode; label: string; desc: string; color: string }) {
  const colors: Record<string, string> = {
    yellow: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    orange: "text-orange-400 bg-orange-400/10 border-orange-400/30",
    purple: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  };

  return (
    <div className={`rounded-lg p-3 border ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="font-mono text-sm font-medium">{label}</span>
      </div>
      <p className="text-oc-text/60 text-xs">{desc}</p>
    </div>
  );
}

function FeatureHighlight({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-oc-darker/30 hover:bg-oc-darker/50 transition-colors">
      <div className="w-8 h-8 rounded-lg bg-oc-cyan/10 flex items-center justify-center text-oc-cyan flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
        <p className="text-oc-text/60 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
