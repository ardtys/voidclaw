"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Database,
  Ghost,
  Skull,
  Zap,
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Shield,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Calendar,
  Layers,
  Info,
} from "lucide-react";
import { AnalyticsExplanation } from "./AnalyticsExplanation";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                        STATS PANEL                                 ║
 * ║              Protocol analytics and metrics                        ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

// Mock statistics data
const PROTOCOL_STATS = {
  totalShells: 1284,
  activeShells: 127,
  hibernatingShells: 1089,
  deadShells: 68,
  totalMoltFees: 42.5,
  totalRentalRevenue: 12.8,
  averageMoltTime: "2m 34s",
  successRate: 98.7,
  dailyMolts: 47,
  weeklyMolts: 312,
  monthlyMolts: 1284,
  topCurators: [
    { address: "0x7a3f...9b2c", shells: 45, revenue: 2.3, rank: 1 },
    { address: "0x4b2c...1d3e", shells: 38, revenue: 1.8, rank: 2 },
    { address: "0x9d5e...7f8g", shells: 31, revenue: 1.5, rank: 3 },
    { address: "0x2f8g...3h4i", shells: 28, revenue: 1.2, rank: 4 },
    { address: "0x5k9m...2n7p", shells: 24, revenue: 0.9, rank: 5 },
  ],
  recentActivity: [
    { type: "molt", agent: "SYNTHWAVE_AI", time: "2 min ago", value: "0.01" },
    { type: "rent", agent: "DEGEN_ORACLE", time: "5 min ago", value: "0.005" },
    { type: "resurrect", agent: "ALPHA_V1", time: "12 min ago", value: "0.5" },
    { type: "molt", agent: "NFT_WHISPERER", time: "18 min ago", value: "0.01" },
    { type: "rent", agent: "MEMECOIN_SAGE", time: "25 min ago", value: "0.003" },
  ],
  weeklyData: [42, 38, 51, 45, 48, 44, 44],
  monthlyGrowth: 23.5,
};

export function StatsPanel() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("week");
  const [isLoading, setIsLoading] = useState(false);

  // Simulate data refresh
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  // Show explanation page if toggled
  if (showExplanation) {
    return <AnalyticsExplanation onClose={() => setShowExplanation(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION HEADER & EXPLANATION
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-green-500/10 via-transparent to-yellow-500/10 border border-oc-border rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Title & Description */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center">
                <Activity size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Protocol Analytics</h2>
                <p className="text-green-400 font-mono text-sm">Real-time Insights Dashboard</p>
              </div>
              {/* Info Button */}
              <button
                onClick={() => setShowExplanation(true)}
                className="ml-auto p-2 rounded-lg border border-oc-border/50 text-oc-text/50
                           hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/5
                           transition-all duration-200 group"
                title="View full explanation"
              >
                <Info size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <p className="text-oc-text/70 leading-relaxed mb-4">
              Analytics Panel provides real-time insights on <span className="text-oc-cyan font-semibold">VoidClaw Protocol</span> performance.
              Monitor Molt statistics, revenue, curator activity, and Shell distribution in one comprehensive view.
              Data is automatically updated to provide the latest overview.
            </p>

            {/* Key Metrics Legend */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <MetricLegend icon={<Database size={14} />} label="Total Shells" desc="Number of Shells in vault" color="cyan" />
              <MetricLegend icon={<Ghost size={14} />} label="Molt Activity" desc="Daily/weekly molt processes" color="purple" />
              <MetricLegend icon={<DollarSign size={14} />} label="Revenue" desc="Protocol earnings" color="green" />
              <MetricLegend icon={<Users size={14} />} label="Curators" desc="Top curator leaderboard" color="yellow" />
            </div>
          </div>

          {/* Quick Overview */}
          <div className="lg:w-72 bg-oc-darker/50 rounded-xl p-4 border border-oc-border/50">
            <h3 className="text-oc-text/60 text-xs font-mono uppercase tracking-wider mb-3">Quick Overview</h3>
            <div className="space-y-3">
              <OverviewItem label="Protocol Status" value="Online" status="online" />
              <OverviewItem label="Last Update" value="Just now" status="recent" />
              <OverviewItem label="Data Integrity" value="100%" status="healthy" />
              <OverviewItem label="API Status" value="Operational" status="online" />
            </div>
            <div className="mt-4 pt-4 border-t border-oc-border/30">
              <p className="text-oc-text/50 text-xs text-center">
                Data refreshes every 30 seconds
              </p>
            </div>
          </div>
        </div>

        {/* Analytics Features */}
        <div className="mt-6 pt-6 border-t border-oc-border/30">
          <div className="grid md:grid-cols-4 gap-4">
            <AnalyticsFeature
              icon={<BarChart3 size={16} />}
              title="Activity Charts"
              description="Visualization of daily and weekly molt trends"
            />
            <AnalyticsFeature
              icon={<Activity size={16} />}
              title="Live Feed"
              description="Real-time feed of molt, rental, and resurrect activity"
            />
            <AnalyticsFeature
              icon={<Users size={16} />}
              title="Leaderboard"
              description="Curator ranking by shells and revenue"
            />
            <AnalyticsFeature
              icon={<Layers size={16} />}
              title="Distribution"
              description="Shell status distribution within the protocol"
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HEADER WITH CONTROLS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-mono font-bold text-oc-cyan flex items-center gap-2">
            <Activity size={20} />
            Detailed Metrics
          </h2>
          <p className="text-oc-text/50 text-sm mt-1">Filter and analyze data in more depth</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Time Range Selector */}
          <div className="flex bg-oc-darker rounded-lg p-1 border border-oc-border/50">
            {(["day", "week", "month"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 ${
                  timeRange === range
                    ? "bg-oc-cyan/10 text-oc-cyan"
                    : "text-oc-text/50 hover:text-oc-cyan"
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="p-2 rounded-lg border border-oc-border/50 text-oc-text/50 hover:text-oc-cyan hover:border-oc-cyan/30 transition-all disabled:opacity-50"
          >
            <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TOP STATS CARDS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Database className="text-oc-cyan" size={20} />}
          label="Total Shells"
          value={PROTOCOL_STATS.totalShells.toLocaleString()}
          change={12}
          positive
          gradient="from-oc-cyan/20 to-transparent"
        />
        <StatCard
          icon={<Ghost className="text-purple-400" size={20} />}
          label="Hibernating"
          value={PROTOCOL_STATS.hibernatingShells.toLocaleString()}
          change={8}
          positive
          gradient="from-purple-500/20 to-transparent"
        />
        <StatCard
          icon={<Zap className="text-green-400" size={20} />}
          label="Active"
          value={PROTOCOL_STATS.activeShells.toLocaleString()}
          change={23}
          positive
          gradient="from-green-500/20 to-transparent"
        />
        <StatCard
          icon={<DollarSign className="text-yellow-400" size={20} />}
          label="Total Revenue"
          value={`${(PROTOCOL_STATS.totalMoltFees + PROTOCOL_STATS.totalRentalRevenue).toFixed(1)} TOKEN`}
          change={15}
          positive
          gradient="from-yellow-500/20 to-transparent"
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN GRID - Charts & Activity
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="terminal-card lg:col-span-2">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-oc-text text-sm font-mono flex items-center gap-2">
              <BarChart3 size={14} className="text-oc-cyan" />
              MOLT_ACTIVITY.chart
            </span>
            <span className="ml-auto text-xs text-oc-text/50">Last 7 days</span>
          </div>
          <div className="p-6">
            {/* Mini Stats Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <MiniStat
                label="Total Molts"
                value={PROTOCOL_STATS.weeklyMolts.toString()}
                icon={<Ghost size={14} />}
                color="text-oc-cyan"
              />
              <MiniStat
                label="Molt Fees"
                value={`${PROTOCOL_STATS.totalMoltFees} TOKEN`}
                icon={<DollarSign size={14} />}
                color="text-green-400"
              />
              <MiniStat
                label="Success Rate"
                value={`${PROTOCOL_STATS.successRate}%`}
                icon={<Shield size={14} />}
                color="text-blue-400"
              />
              <MiniStat
                label="Avg Time"
                value={PROTOCOL_STATS.averageMoltTime}
                icon={<Clock size={14} />}
                color="text-purple-400"
              />
            </div>

            {/* Bar Chart */}
            <div className="h-48">
              <BarChart data={PROTOCOL_STATS.weeklyData} />
            </div>

            {/* Chart Footer */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-oc-border/30">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-oc-text/50">Growth:</span>
                <span className="text-green-400 flex items-center gap-1">
                  <ArrowUpRight size={14} />
                  {PROTOCOL_STATS.monthlyGrowth}%
                </span>
              </div>
              <span className="text-xs text-oc-text/40">Updated just now</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-oc-text text-sm font-mono flex items-center gap-2">
              <Activity size={14} className="text-green-400 animate-pulse" />
              LIVE_FEED.log
            </span>
          </div>
          <div className="p-4 space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
            {PROTOCOL_STATS.recentActivity.map((activity, i) => (
              <ActivityItem key={i} activity={activity} />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM ROW - Leaderboard & Distribution
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Curators Leaderboard */}
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-oc-text text-sm font-mono flex items-center gap-2">
              <Users size={14} className="text-yellow-400" />
              TOP_CURATORS.leaderboard
            </span>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {PROTOCOL_STATS.topCurators.map((curator, i) => (
                <LeaderboardRow key={curator.address} curator={curator} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Shell Distribution */}
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-oc-text text-sm font-mono flex items-center gap-2">
              <Layers size={14} className="text-purple-400" />
              SHELL_DISTRIBUTION.stats
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center gap-8">
              {/* Donut Chart */}
              <div className="relative">
                <DonutChart
                  data={[
                    { value: PROTOCOL_STATS.hibernatingShells, color: "#a855f7" },
                    { value: PROTOCOL_STATS.activeShells, color: "#22c55e" },
                    { value: PROTOCOL_STATS.deadShells, color: "#ef4444" },
                  ]}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-oc-cyan font-mono">
                    {PROTOCOL_STATS.totalShells.toLocaleString()}
                  </span>
                  <span className="text-xs text-oc-text/50">Total</span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-4">
                <LegendItem
                  color="bg-purple-500"
                  label="Hibernating"
                  value={PROTOCOL_STATS.hibernatingShells}
                  percentage={(PROTOCOL_STATS.hibernatingShells / PROTOCOL_STATS.totalShells * 100).toFixed(1)}
                />
                <LegendItem
                  color="bg-green-500"
                  label="Active"
                  value={PROTOCOL_STATS.activeShells}
                  percentage={(PROTOCOL_STATS.activeShells / PROTOCOL_STATS.totalShells * 100).toFixed(1)}
                />
                <LegendItem
                  color="bg-red-500"
                  label="Archived"
                  value={PROTOCOL_STATS.deadShells}
                  percentage={(PROTOCOL_STATS.deadShells / PROTOCOL_STATS.totalShells * 100).toFixed(1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: number;
  positive: boolean;
  gradient: string;
}

function StatCard({ icon, label, value, change, positive, gradient }: StatCardProps) {
  return (
    <div className={`terminal-card p-5 bg-gradient-to-br ${gradient} relative overflow-hidden group hover:border-oc-cyan/30 transition-all duration-300`}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-oc-darker/80 flex items-center justify-center border border-oc-border/50 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-mono ${positive ? "text-green-400" : "text-red-400"}`}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}%
        </div>
      </div>
      <p className="text-oc-cyan text-2xl font-bold font-mono">{value}</p>
      <p className="text-oc-text/50 text-xs mt-1">{label}</p>

      {/* Decorative element */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-current opacity-5" />
    </div>
  );
}

interface MiniStatProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

function MiniStat({ label, value, icon, color }: MiniStatProps) {
  return (
    <div className="bg-oc-darker/50 rounded-xl p-4 border border-oc-border/30">
      <div className={`flex items-center gap-2 ${color} text-xs mb-2`}>
        {icon}
        <span className="text-oc-text/50">{label}</span>
      </div>
      <p className={`font-mono font-bold text-lg ${color}`}>{value}</p>
    </div>
  );
}

function BarChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="flex items-end justify-between h-full gap-2">
      {data.map((value, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2">
          <div
            className="w-full bg-gradient-to-t from-oc-cyan to-oc-cyan/30 rounded-t-lg transition-all duration-500 hover:from-oc-cyan hover:to-oc-cyan/50 relative group"
            style={{ height: `${(value / max) * 100}%` }}
          >
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-oc-darker px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-oc-border">
              {value} molts
            </div>
          </div>
          <span className="text-oc-text/50 text-xs">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

function ActivityItem({ activity }: { activity: typeof PROTOCOL_STATS.recentActivity[0] }) {
  const typeConfig = {
    molt: { icon: <Ghost size={14} />, color: "text-oc-cyan bg-oc-cyan/10", label: "Molt" },
    rent: { icon: <DollarSign size={14} />, color: "text-blue-400 bg-blue-400/10", label: "Rental" },
    resurrect: { icon: <Zap size={14} />, color: "text-green-400 bg-green-400/10", label: "Resurrect" },
  };

  const config = typeConfig[activity.type as keyof typeof typeConfig];

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-oc-darker/30 border border-oc-border/20 hover:border-oc-border/40 transition-all">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${config.color}`}>
        {config.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-oc-cyan text-sm font-mono truncate">{activity.agent}</p>
        <p className="text-oc-text/40 text-xs">{config.label}</p>
      </div>
      <div className="text-right">
        <p className="text-green-400 text-sm font-mono">{activity.value} TOKEN</p>
        <p className="text-oc-text/30 text-xs">{activity.time}</p>
      </div>
    </div>
  );
}

function LeaderboardRow({ curator, index }: { curator: typeof PROTOCOL_STATS.topCurators[0]; index: number }) {
  const rankColors = ["text-yellow-400", "text-gray-400", "text-orange-400", "text-oc-text/50", "text-oc-text/50"];
  const rankBg = ["bg-yellow-400/10", "bg-gray-400/10", "bg-orange-400/10", "bg-oc-darker/50", "bg-oc-darker/50"];

  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl ${rankBg[index]} border border-oc-border/20 hover:border-oc-border/40 transition-all`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${rankColors[index]} bg-current/10 font-bold font-mono`}>
        #{curator.rank}
      </div>
      <div className="flex-1">
        <code className="text-oc-cyan text-sm">{curator.address}</code>
      </div>
      <div className="text-center">
        <p className="text-oc-cyan font-mono">{curator.shells}</p>
        <p className="text-oc-text/40 text-xs">shells</p>
      </div>
      <div className="text-right">
        <p className="text-green-400 font-mono">{curator.revenue} TOKEN</p>
        <p className="text-oc-text/40 text-xs">revenue</p>
      </div>
    </div>
  );
}

function DonutChart({ data }: { data: { value: number; color: string }[] }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      {data.map((item, i) => {
        const angle = (item.value / total) * 360;
        const startAngle = currentAngle;
        currentAngle += angle;

        const x1 = 80 + 60 * Math.cos((Math.PI * startAngle) / 180);
        const y1 = 80 + 60 * Math.sin((Math.PI * startAngle) / 180);
        const x2 = 80 + 60 * Math.cos((Math.PI * (startAngle + angle)) / 180);
        const y2 = 80 + 60 * Math.sin((Math.PI * (startAngle + angle)) / 180);

        const largeArcFlag = angle > 180 ? 1 : 0;

        return (
          <path
            key={i}
            d={`M 80 80 L ${x1} ${y1} A 60 60 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
            fill={item.color}
            opacity={0.8}
            className="hover:opacity-100 transition-opacity cursor-pointer"
          />
        );
      })}
      <circle cx="80" cy="80" r="40" fill="#050508" />
    </svg>
  );
}

function LegendItem({ color, label, value, percentage }: { color: string; label: string; value: number; percentage: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <div>
        <p className="text-oc-text/80 text-sm">{label}</p>
        <p className="text-oc-cyan font-mono text-xs">
          {value.toLocaleString()} <span className="text-oc-text/40">({percentage}%)</span>
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                SECTION HEADER HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function MetricLegend({ icon, label, desc, color }: { icon: React.ReactNode; label: string; desc: string; color: string }) {
  const colors: Record<string, string> = {
    cyan: "text-oc-cyan bg-oc-cyan/10 border-oc-cyan/30",
    purple: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    green: "text-green-400 bg-green-400/10 border-green-400/30",
    yellow: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
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

function OverviewItem({ label, value, status }: { label: string; value: string; status: string }) {
  const statusColors: Record<string, string> = {
    online: "text-green-400",
    recent: "text-blue-400",
    healthy: "text-oc-cyan",
  };

  const statusDots: Record<string, string> = {
    online: "bg-green-400",
    recent: "bg-blue-400",
    healthy: "bg-oc-cyan",
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-oc-text/60 text-sm">{label}</span>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${statusDots[status]} animate-pulse`} />
        <span className={`font-mono text-sm ${statusColors[status]}`}>{value}</span>
      </div>
    </div>
  );
}

function AnalyticsFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-oc-darker/30 hover:bg-oc-darker/50 transition-colors">
      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium text-sm mb-0.5">{title}</h4>
        <p className="text-oc-text/60 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
