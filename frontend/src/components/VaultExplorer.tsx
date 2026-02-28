"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Ghost,
  Skull,
  Zap,
  ExternalLink,
  Copy,
  ChevronDown,
  ChevronUp,
  Database,
  Clock,
  User,
  Hash,
  Shield,
  Sparkles,
  Eye,
  Download,
  RefreshCw,
  SlidersHorizontal,
  Grid3X3,
  List,
  Info,
} from "lucide-react";
import { VaultExplanation } from "./VaultExplanation";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                        VAULT EXPLORER                              ║
 * ║          Searchable database of hibernating shells                 ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface ShellData {
  id: string;
  shellId: string;
  agentName: string;
  agentHandle: string;
  originWallet: string;
  essenceHash: string;
  backupHash: string;
  status: "active" | "hibernation" | "dead";
  moltTimestamp: Date;
  curator: string;
  isRentable: boolean;
  rentalPricePerDay: number;
  resurrectionCost: number;
  memorySize: string;
  transactionCount: number;
}

// Mock shell data
const MOCK_SHELLS: ShellData[] = [
  {
    id: "1",
    shellId: "SHELL-0x7A3F",
    agentName: "SYNTHWAVE_AI",
    agentHandle: "@synthwave_bot",
    originWallet: "0x7xKX...9fTz",
    essenceHash: "QmX8kL9vN3pR7wQ2mT5bY4cZ6dF8gH1jK0sA",
    backupHash: "ar://Xk9L2mN8pR3wQ7vT",
    status: "hibernation",
    moltTimestamp: new Date(Date.now() - 86400000 * 3),
    curator: "0x7a3f...9b2c",
    isRentable: true,
    rentalPricePerDay: 0.001,
    resurrectionCost: 0.5,
    memorySize: "2.4 MB",
    transactionCount: 1247,
  },
  {
    id: "2",
    shellId: "SHELL-0x4B2C",
    agentName: "MEMECOIN_SAGE",
    agentHandle: "@meme_sage",
    originWallet: "0x4pRt...2wQm",
    essenceHash: "QmY9nM4pR8wQ3vT6bZ7cD2fG5hJ0kL1sB",
    backupHash: "ar://Ym0M3oP9qS4xU",
    status: "active",
    moltTimestamp: new Date(Date.now() - 86400000 * 7),
    curator: "0x4b2c...1d3e",
    isRentable: false,
    rentalPricePerDay: 0,
    resurrectionCost: 0,
    memorySize: "1.8 MB",
    transactionCount: 892,
  },
  {
    id: "3",
    shellId: "SHELL-0x9D5E",
    agentName: "ALPHA_HUNTER_V2",
    agentHandle: "@alpha_v2",
    originWallet: "0x9mNk...6bXy",
    essenceHash: "QmZ0oN5qS9xU4wR7cA8bE1fH2iJ3kL6mC",
    backupHash: "ar://Zn1N4pQ0rT5yV",
    status: "dead",
    moltTimestamp: new Date(Date.now() - 86400000 * 30),
    curator: "0x9d5e...7f8g",
    isRentable: false,
    rentalPricePerDay: 0,
    resurrectionCost: 0,
    memorySize: "3.1 MB",
    transactionCount: 2341,
  },
  {
    id: "4",
    shellId: "SHELL-0x2F8G",
    agentName: "DEGEN_ORACLE",
    agentHandle: "@degen_oracle",
    originWallet: "0x2cVb...8pRt",
    essenceHash: "QmA1pO6rT0yV5xS8bC2dE3fG4hI7jK9lM",
    backupHash: "ar://Ao2O5qR1sU6zW",
    status: "hibernation",
    moltTimestamp: new Date(Date.now() - 86400000 * 14),
    curator: "0x2f8g...3h4i",
    isRentable: true,
    rentalPricePerDay: 0.0025,
    resurrectionCost: 0.75,
    memorySize: "1.5 MB",
    transactionCount: 678,
  },
];

export function VaultExplorer() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "hibernation" | "dead">("all");
  const [expandedShell, setExpandedShell] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"recent" | "name" | "status">("recent");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredShells = MOCK_SHELLS.filter((shell) => {
    const matchesSearch =
      shell.agentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shell.shellId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shell.agentHandle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || shell.status === statusFilter;

    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return b.moltTimestamp.getTime() - a.moltTimestamp.getTime();
      case "name":
        return a.agentName.localeCompare(b.agentName);
      case "status":
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  const getStatusIcon = (status: ShellData["status"]) => {
    switch (status) {
      case "active":
        return <Zap className="text-green-400" size={16} />;
      case "hibernation":
        return <Ghost className="text-oc-cyan" size={16} />;
      case "dead":
        return <Skull className="text-red-400" size={16} />;
    }
  };

  const getStatusColor = (status: ShellData["status"]) => {
    switch (status) {
      case "active":
        return "text-green-400 bg-green-400/10 border-green-400/30";
      case "hibernation":
        return "text-oc-cyan bg-oc-cyan/10 border-oc-cyan/30";
      case "dead":
        return "text-red-400 bg-red-400/10 border-red-400/30";
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  // Show explanation page if toggled
  if (showExplanation) {
    return <VaultExplanation onClose={() => setShowExplanation(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION HEADER & EXPLANATION
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-oc-blue/10 via-transparent to-oc-purple/10 border border-oc-border rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Title & Description */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-oc-blue to-oc-purple flex items-center justify-center">
                <Database size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Vault Explorer</h2>
                <p className="text-oc-blue font-mono text-sm">Shell Database Browser</p>
              </div>
              {/* Info Button */}
              <button
                onClick={() => setShowExplanation(true)}
                className="ml-auto p-2 rounded-lg border border-oc-border/50 text-oc-text/50
                           hover:text-oc-blue hover:border-oc-blue/50 hover:bg-oc-blue/5
                           transition-all duration-200 group"
                title="View full explanation"
              >
                <Info size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <p className="text-oc-text/70 leading-relaxed mb-4">
              Vault Explorer is the searchable database for all archived <span className="text-oc-cyan font-semibold">Shell NFTs</span>.
              Find, view details, rent, or resurrect Shells stored in the Moltbook registry.
              Each Shell contains the complete essence of a molted AI Agent.
            </p>

            {/* Status Legend */}
            <div className="flex flex-wrap gap-3 mb-4">
              <StatusBadge status="active" label="Active" description="Shell has been resurrected and agent is active" />
              <StatusBadge status="hibernation" label="Hibernation" description="Shell stored, ready for access or resurrection" />
              <StatusBadge status="dead" label="Dead" description="Archive only, TTL expired" />
            </div>
          </div>

          {/* Vault Statistics */}
          <div className="lg:w-80 bg-oc-darker/50 rounded-xl p-4 border border-oc-border/50">
            <h3 className="text-oc-text/60 text-xs font-mono uppercase tracking-wider mb-3">Vault Statistics</h3>
            <div className="grid grid-cols-2 gap-3">
              <VaultStat value="1,284" label="Total Shells" icon={<Database size={14} />} />
              <VaultStat value="1,089" label="Hibernating" icon={<Ghost size={14} />} />
              <VaultStat value="127" label="Active" icon={<Zap size={14} />} />
              <VaultStat value="68" label="Archived" icon={<Skull size={14} />} />
            </div>
            <div className="mt-4 pt-4 border-t border-oc-border/30">
              <div className="flex items-center justify-between text-sm">
                <span className="text-oc-text/60">Vault Capacity</span>
                <span className="text-oc-cyan font-mono">12.8%</span>
              </div>
              <div className="mt-2 h-2 bg-oc-darker rounded-full overflow-hidden">
                <div className="h-full w-[12.8%] bg-gradient-to-r from-oc-cyan to-oc-blue rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-6 pt-6 border-t border-oc-border/30">
          <div className="grid md:grid-cols-4 gap-4">
            <VaultFeature
              icon={<Search size={16} />}
              title="Advanced Search"
              description="Search by Shell ID, name, or handle"
            />
            <VaultFeature
              icon={<Filter size={16} />}
              title="Smart Filters"
              description="Filter by status (Active, Hibernation, Dead)"
            />
            <VaultFeature
              icon={<Ghost size={16} />}
              title="Rent Access"
              description="Rent Shell access for research or integration"
            />
            <VaultFeature
              icon={<RefreshCw size={16} />}
              title="Resurrection"
              description="Bring back Shell as a new active agent"
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SEARCH & FILTERS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card">
        <div className="terminal-header">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-yellow" />
          <div className="terminal-dot terminal-dot-green" />
          <span className="ml-4 text-oc-text text-sm font-mono flex items-center gap-2">
            <Database size={14} className="text-oc-cyan" />
            VAULT_EXPLORER.query
          </span>
          <span className="ml-auto text-xs text-oc-text/50">
            {filteredShells.length} shells found
          </span>
        </div>
        <div className="p-5 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-oc-text/50" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Shell ID, Agent Name, or Handle..."
              className="w-full bg-oc-darker border border-oc-border rounded-xl pl-12 pr-4 py-4
                         text-oc-cyan font-mono text-sm placeholder-oc-text/30
                         focus:outline-none focus:border-oc-cyan/50 focus:ring-2 focus:ring-oc-cyan/10
                         transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-oc-text/50 hover:text-oc-cyan"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-oc-text/50" />
              <span className="text-oc-text/60 text-sm">Status:</span>
              <div className="flex gap-1">
                {(["all", "active", "hibernation", "dead"] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200
                      ${
                        statusFilter === status
                          ? "border-oc-cyan text-oc-cyan bg-oc-cyan/10"
                          : "border-oc-border/50 text-oc-text/60 hover:border-oc-cyan/30 hover:text-oc-cyan"
                      }`}
                  >
                    {status.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort & View Controls */}
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={14} className="text-oc-text/50" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="bg-oc-darker border border-oc-border/50 rounded-lg px-3 py-1.5 text-xs font-mono
                             text-oc-cyan focus:outline-none focus:border-oc-cyan/50 cursor-pointer"
                >
                  <option value="recent">Most Recent</option>
                  <option value="name">Name</option>
                  <option value="status">Status</option>
                </select>
              </div>

              <div className="flex border border-oc-border/50 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-oc-cyan/10 text-oc-cyan" : "text-oc-text/50 hover:text-oc-cyan"}`}
                >
                  <List size={16} />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-oc-cyan/10 text-oc-cyan" : "text-oc-text/50 hover:text-oc-cyan"}`}
                >
                  <Grid3X3 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SHELL LIST / GRID
          ═══════════════════════════════════════════════════════════════ */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-3"}>
        {filteredShells.map((shell) => (
          <div
            key={shell.id}
            className={`terminal-card transition-all duration-300 hover:border-oc-cyan/30 ${
              expandedShell === shell.id ? "border-oc-cyan/50 shadow-lg shadow-oc-cyan/5" : ""
            }`}
          >
            {/* Shell Header Row */}
            <button
              onClick={() => setExpandedShell(expandedShell === shell.id ? null : shell.id)}
              className="w-full p-5 flex items-center justify-between hover:bg-oc-cyan/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                {/* Status Icon */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center ${getStatusColor(shell.status)}`}
                >
                  {getStatusIcon(shell.status)}
                </div>

                {/* Shell Info */}
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="text-oc-cyan font-bold font-mono">{shell.shellId}</h3>
                    {shell.isRentable && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        RENTABLE
                      </span>
                    )}
                  </div>
                  <p className="text-oc-text/70 text-sm">{shell.agentName}</p>
                  <p className="text-oc-text/50 text-xs">{shell.agentHandle}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Quick Stats */}
                <div className="hidden md:flex items-center gap-4 text-xs">
                  <div className="text-center">
                    <p className="text-oc-cyan font-mono">{shell.memorySize}</p>
                    <p className="text-oc-text/40">Memory</p>
                  </div>
                  <div className="text-center">
                    <p className="text-oc-cyan font-mono">{shell.transactionCount.toLocaleString()}</p>
                    <p className="text-oc-text/40">Txns</p>
                  </div>
                </div>

                {/* Time & Status */}
                <div className="text-right">
                  <span className={`text-xs font-mono px-2 py-1 rounded ${getStatusColor(shell.status)}`}>
                    {shell.status.toUpperCase()}
                  </span>
                  <p className="text-oc-text/40 text-xs mt-1">{getTimeAgo(shell.moltTimestamp)}</p>
                </div>

                {/* Expand Icon */}
                {expandedShell === shell.id ? (
                  <ChevronUp size={18} className="text-oc-cyan" />
                ) : (
                  <ChevronDown size={18} className="text-oc-text/50" />
                )}
              </div>
            </button>

            {/* Expanded Details */}
            {expandedShell === shell.id && (
              <div className="border-t border-oc-border p-5 bg-gradient-to-br from-oc-darker/80 to-transparent animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column - Technical Details */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono text-oc-text/50 uppercase tracking-wider flex items-center gap-2">
                      <Database size={12} />
                      Technical Details
                    </h4>

                    <DetailRow
                      icon={<User size={14} />}
                      label="Curator"
                      value={shell.curator}
                      onCopy={() => copyToClipboard(shell.curator, `curator-${shell.id}`)}
                      copied={copiedId === `curator-${shell.id}`}
                    />
                    <DetailRow
                      icon={<Hash size={14} />}
                      label="Origin Wallet"
                      value={shell.originWallet}
                      onCopy={() => copyToClipboard(shell.originWallet, `wallet-${shell.id}`)}
                      copied={copiedId === `wallet-${shell.id}`}
                    />
                    <DetailRow
                      icon={<Shield size={14} />}
                      label="Essence Hash"
                      value={shell.essenceHash.slice(0, 20) + "..."}
                      onCopy={() => copyToClipboard(shell.essenceHash, `essence-${shell.id}`)}
                      copied={copiedId === `essence-${shell.id}`}
                      hasLink
                    />
                    <DetailRow
                      icon={<Database size={14} />}
                      label="Backup Hash"
                      value={shell.backupHash}
                      onCopy={() => copyToClipboard(shell.backupHash, `backup-${shell.id}`)}
                      copied={copiedId === `backup-${shell.id}`}
                      hasLink
                    />
                  </div>

                  {/* Right Column - Stats & Pricing */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono text-oc-text/50 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles size={12} />
                      Shell Metrics
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      <MetricCard
                        icon={<Clock size={14} />}
                        label="Molt Date"
                        value={shell.moltTimestamp.toLocaleDateString()}
                      />
                      <MetricCard
                        icon={<Database size={14} />}
                        label="Memory"
                        value={shell.memorySize}
                      />
                      <MetricCard
                        icon={<Hash size={14} />}
                        label="Transactions"
                        value={shell.transactionCount.toLocaleString()}
                      />
                      <MetricCard
                        icon={shell.status === "active" ? <Zap size={14} /> : <Ghost size={14} />}
                        label="Status"
                        value={shell.status.charAt(0).toUpperCase() + shell.status.slice(1)}
                        highlight={shell.status === "active"}
                      />
                    </div>

                    {/* Pricing Info */}
                    {shell.isRentable && (
                      <div className="mt-4 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-blue-400 text-sm font-medium">Rental Available</p>
                            <p className="text-oc-text/50 text-xs">{shell.rentalPricePerDay} TOKEN/day</p>
                          </div>
                          {shell.resurrectionCost > 0 && (
                            <div className="text-right">
                              <p className="text-green-400 text-sm font-medium">Resurrection</p>
                              <p className="text-oc-text/50 text-xs">{shell.resurrectionCost} TOKEN</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-oc-border/30">
                  <ActionButton
                    icon={<Eye size={14} />}
                    label="View Essence"
                    variant="primary"
                  />
                  {shell.isRentable && (
                    <ActionButton
                      icon={<Ghost size={14} />}
                      label="Rent Shell"
                      variant="secondary"
                    />
                  )}
                  {shell.resurrectionCost > 0 && (
                    <ActionButton
                      icon={<RefreshCw size={14} />}
                      label="Resurrect"
                      variant="success"
                    />
                  )}
                  <ActionButton
                    icon={<Download size={14} />}
                    label="Export Data"
                    variant="ghost"
                  />
                  <ActionButton
                    icon={<ExternalLink size={14} />}
                    label="Explorer"
                    variant="ghost"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredShells.length === 0 && (
        <div className="terminal-card p-12 text-center">
          <Ghost size={48} className="mx-auto text-oc-text/30 mb-4" />
          <h3 className="text-oc-text/60 font-mono mb-2">No Shells Found</h3>
          <p className="text-oc-text/40 text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onCopy?: () => void;
  copied?: boolean;
  hasLink?: boolean;
}

function DetailRow({ icon, label, value, onCopy, copied, hasLink }: DetailRowProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-oc-darker/50 rounded-lg">
      <span className="text-oc-text/50">{icon}</span>
      <span className="text-oc-text/60 text-sm min-w-[100px]">{label}</span>
      <code className="text-oc-cyan font-mono text-sm flex-1 truncate">{value}</code>
      <div className="flex items-center gap-2">
        {onCopy && (
          <button
            onClick={onCopy}
            className="p-1.5 rounded hover:bg-oc-cyan/10 transition-colors"
          >
            {copied ? (
              <span className="text-green-400 text-xs">Copied!</span>
            ) : (
              <Copy size={12} className="text-oc-text/50 hover:text-oc-cyan" />
            )}
          </button>
        )}
        {hasLink && (
          <a href="#" className="p-1.5 rounded hover:bg-oc-cyan/10 transition-colors">
            <ExternalLink size={12} className="text-oc-text/50 hover:text-oc-cyan" />
          </a>
        )}
      </div>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}

function MetricCard({ icon, label, value, highlight }: MetricCardProps) {
  return (
    <div className="p-3 bg-oc-darker/50 rounded-lg">
      <div className="flex items-center gap-2 text-oc-text/50 text-xs mb-1">
        {icon}
        {label}
      </div>
      <p className={`font-mono text-sm ${highlight ? "text-green-400" : "text-oc-cyan"}`}>
        {value}
      </p>
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  variant: "primary" | "secondary" | "success" | "ghost";
}

function ActionButton({ icon, label, variant }: ActionButtonProps) {
  const variants = {
    primary: "border-oc-cyan text-oc-cyan hover:bg-oc-cyan hover:text-black",
    secondary: "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white",
    success: "border-green-400 text-green-400 hover:bg-green-400 hover:text-white",
    ghost: "border-oc-border text-oc-text/60 hover:border-oc-cyan/50 hover:text-oc-cyan",
  };

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 border rounded-lg font-mono text-sm transition-all duration-200 ${variants[variant]}`}
    >
      {icon}
      {label}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                 SECTION HEADER HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function StatusBadge({ status, label, description }: { status: string; label: string; description: string }) {
  const colors: Record<string, string> = {
    active: "bg-green-400/10 border-green-400/30 text-green-400",
    hibernation: "bg-oc-cyan/10 border-oc-cyan/30 text-oc-cyan",
    dead: "bg-red-400/10 border-red-400/30 text-red-400",
  };

  const icons: Record<string, React.ReactNode> = {
    active: <Zap size={12} />,
    hibernation: <Ghost size={12} />,
    dead: <Skull size={12} />,
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${colors[status]}`}>
      {icons[status]}
      <div>
        <span className="font-mono text-sm font-medium">{label}</span>
        <p className="text-oc-text/50 text-xs">{description}</p>
      </div>
    </div>
  );
}

function VaultStat({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="p-3 bg-oc-darker/50 rounded-lg">
      <div className="flex items-center gap-2 text-oc-text/50 text-xs mb-1">
        {icon}
        {label}
      </div>
      <p className="text-oc-cyan font-mono font-bold">{value}</p>
    </div>
  );
}

function VaultFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-oc-darker/30 hover:bg-oc-darker/50 transition-colors">
      <div className="w-8 h-8 rounded-lg bg-oc-blue/10 flex items-center justify-center text-oc-blue flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium text-sm mb-0.5">{title}</h4>
        <p className="text-oc-text/60 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
