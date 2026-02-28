"use client";

import React from "react";
import {
  Activity,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Database,
  Ghost,
  Skull,
  Zap,
  DollarSign,
  Clock,
  Users,
  Shield,
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
  RefreshCw,
  Calendar,
  Layers,
  PieChart,
  Target,
  Award,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Bell,
  Filter,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║              ANALYTICS PANEL - EXPLANATION PAGE                    ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface AnalyticsExplanationProps {
  onClose: () => void;
}

export function AnalyticsExplanation({ onClose }: AnalyticsExplanationProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* ═══════════════════════════════════════════════════════════════
          HEADER
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-green-500/20 via-yellow-500/10 to-oc-cyan/20 border border-green-500/30 rounded-2xl p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-green-500/20">
              <Activity size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Protocol Analytics</h1>
              <p className="text-green-400 font-mono text-sm">Real-time Insights & Performance Dashboard</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-500 text-white font-mono font-bold rounded-lg hover:bg-oc-cyan hover:text-black transition-colors"
          >
            View Analytics
          </button>
        </div>

        <p className="mt-6 text-oc-text/80 text-lg leading-relaxed max-w-4xl">
          Analytics Panel provides comprehensive insights on <span className="text-oc-cyan font-semibold">VoidClaw Protocol</span> performance.
          Monitor Molt statistics, revenue streams, curator activity, and Shell distribution in one easy-to-understand view.
          Data is updated in real-time to provide the most current picture.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT IS ANALYTICS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <HelpCircle size={20} className="text-green-400" />
            </div>
            Why is Analytics Important?
          </h2>
          <p className="text-oc-text/70 leading-relaxed mb-4">
            Analytics helps you understand the overall health and performance of the protocol.
            With accurate data, you can make better decisions about when to perform Molt,
            which Shells have rental potential, and general market trends.
          </p>
          <div className="bg-oc-darker/50 rounded-xl p-4 border border-oc-border/50">
            <p className="text-oc-text/60 text-sm italic">
              "Data-driven decisions lead to better outcomes. Analytics gives you the insights
              you need to maximize the value of your AI Agent preservation strategy."
            </p>
          </div>
        </div>

        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
              <Target size={20} className="text-oc-cyan" />
            </div>
            Key Benefits
          </h2>
          <ul className="space-y-3">
            <BenefitItem icon={<TrendingUp size={16} />} text="Track protocol growth and trends" />
            <BenefitItem icon={<DollarSign size={16} />} text="Monitor revenue streams" />
            <BenefitItem icon={<Users size={16} />} text="Identify top curators" />
            <BenefitItem icon={<PieChart size={16} />} text="Analyze Shell distribution" />
            <BenefitItem icon={<Bell size={16} />} text="Real-time activity feed" />
          </ul>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          KEY METRICS OVERVIEW
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
            <BarChart3 size={20} className="text-oc-cyan" />
          </div>
          Key Metrics Overview
        </h2>
        <p className="text-oc-text/70 mb-8 max-w-3xl">
          Analytics Panel displays several key metrics that provide a quick overview of protocol status.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            icon={<Database size={24} />}
            title="Total Shells"
            description="Total number of Shell NFTs in the vault, including all statuses (Active, Hibernation, Dead)"
            example="1,284"
            color="cyan"
          />
          <MetricCard
            icon={<Ghost size={24} />}
            title="Hibernating"
            description="Shells stored in the vault and ready for rent or resurrection"
            example="1,089"
            color="purple"
          />
          <MetricCard
            icon={<Zap size={24} />}
            title="Active"
            description="Shells that have been resurrected and AI Agents are actively running"
            example="127"
            color="green"
          />
          <MetricCard
            icon={<DollarSign size={24} />}
            title="Total Revenue"
            description="Accumulated revenue from Molt fees, rentals, and resurrections"
            example="55.3 TOKEN"
            color="yellow"
          />
        </div>

        {/* Change Indicators */}
        <div className="mt-6 p-4 bg-oc-darker/50 rounded-xl border border-oc-border/30">
          <h3 className="text-oc-cyan font-mono text-sm mb-3">Understanding Change Indicators:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-green-400">
                <ArrowUpRight size={16} />
                <span className="font-mono">+12%</span>
              </div>
              <span className="text-oc-text/60 text-sm">Positive growth from previous period</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-red-400">
                <ArrowDownRight size={16} />
                <span className="font-mono">-5%</span>
              </div>
              <span className="text-oc-text/60 text-sm">Decline from previous period</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MOLT ACTIVITY CHART
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
              <BarChart3 size={20} className="text-oc-cyan" />
            </div>
            Molt Activity Chart
          </h2>
          <p className="text-oc-text/70 mb-4">
            Bar chart displaying daily Molt activity over the last 7 days.
          </p>

          <div className="space-y-4">
            <ChartInfo
              title="Daily Bars"
              description="Each bar shows the number of Molts completed on that day"
            />
            <ChartInfo
              title="Hover Tooltip"
              description="Hover over bar to see exact Molt count"
            />
            <ChartInfo
              title="Mini Stats"
              description="Summary stats above chart: Total Molts, Fees, Success Rate, Avg Time"
            />
            <ChartInfo
              title="Growth Indicator"
              description="Percentage growth compared to previous period"
            />
          </div>
        </div>

        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Activity size={20} className="text-green-400" />
            </div>
            Live Activity Feed
          </h2>
          <p className="text-oc-text/70 mb-4">
            Real-time feed displaying latest protocol activity.
          </p>

          <div className="space-y-3">
            <ActivityType
              icon={<Ghost size={16} />}
              type="Molt"
              description="New AI Agent successfully molted into Shell"
              color="cyan"
            />
            <ActivityType
              icon={<DollarSign size={16} />}
              type="Rental"
              description="Shell rented by user for data access"
              color="blue"
            />
            <ActivityType
              icon={<Zap size={16} />}
              type="Resurrect"
              description="Shell resurrected into active agent"
              color="green"
            />
          </div>

          <div className="mt-4 p-3 bg-oc-darker/50 rounded-lg">
            <p className="text-oc-text/50 text-xs">
              Feed displays: Agent name, activity type, value (TOKEN), and timestamp
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CURATOR LEADERBOARD
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <Award size={20} className="text-yellow-400" />
          </div>
          Top Curators Leaderboard
        </h2>
        <p className="text-oc-text/70 mb-6">
          Leaderboard displays top curators based on Shell count and revenue generated.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* What is a Curator */}
          <div className="bg-oc-darker/50 rounded-xl p-5 border border-oc-border/30">
            <h3 className="text-yellow-400 font-mono text-sm mb-4 flex items-center gap-2">
              <Users size={16} />
              What is a Curator?
            </h3>
            <p className="text-oc-text/70 text-sm mb-4">
              A Curator is an address responsible for managing one or more Shells.
              They can be direct owners or appointed managers.
            </p>
            <ul className="space-y-2 text-oc-text/60 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={12} className="text-yellow-400" />
                Manage Shell metadata
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={12} className="text-yellow-400" />
                Set rental pricing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={12} className="text-yellow-400" />
                Receive revenue share
              </li>
            </ul>
          </div>

          {/* Leaderboard Metrics */}
          <div className="bg-oc-darker/50 rounded-xl p-5 border border-oc-border/30">
            <h3 className="text-yellow-400 font-mono text-sm mb-4 flex items-center gap-2">
              <BarChart3 size={16} />
              Leaderboard Metrics
            </h3>
            <div className="space-y-3">
              <LeaderboardMetric
                rank={1}
                label="Gold"
                description="Top curator with most shells and revenue"
                color="yellow"
              />
              <LeaderboardMetric
                rank={2}
                label="Silver"
                description="Runner-up with consistent performance"
                color="gray"
              />
              <LeaderboardMetric
                rank={3}
                label="Bronze"
                description="Top 3 curator with solid track record"
                color="orange"
              />
            </div>
          </div>
        </div>

        {/* Leaderboard Info */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-oc-darker/30 rounded-lg text-center">
            <p className="text-oc-text/50 text-xs uppercase mb-2">Displayed Data</p>
            <p className="text-white font-mono">Wallet Address</p>
          </div>
          <div className="p-4 bg-oc-darker/30 rounded-lg text-center">
            <p className="text-oc-text/50 text-xs uppercase mb-2">Primary Metric</p>
            <p className="text-oc-cyan font-mono">Shell Count</p>
          </div>
          <div className="p-4 bg-oc-darker/30 rounded-lg text-center">
            <p className="text-oc-text/50 text-xs uppercase mb-2">Secondary Metric</p>
            <p className="text-green-400 font-mono">Total Revenue (TOKEN)</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SHELL DISTRIBUTION
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <PieChart size={20} className="text-purple-400" />
          </div>
          Shell Distribution Chart
        </h2>
        <p className="text-oc-text/70 mb-6">
          Donut chart displaying Shell distribution based on lifecycle status.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <DistributionCard
            color="purple"
            title="Hibernating"
            percentage="84.8%"
            description="Shells stored in vault, ready for rent or resurrection"
            icon={<Ghost size={24} />}
          />
          <DistributionCard
            color="green"
            title="Active"
            percentage="9.9%"
            description="Shells resurrected and agents actively running"
            icon={<Zap size={24} />}
          />
          <DistributionCard
            color="red"
            title="Archived"
            percentage="5.3%"
            description="Shells exceeded TTL, archive only"
            icon={<Skull size={24} />}
          />
        </div>

        <div className="mt-6 p-4 bg-oc-darker/50 rounded-xl border border-oc-border/30">
          <h3 className="text-oc-cyan font-mono text-sm mb-3">Reading the Chart:</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-oc-text/60 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              Purple segment = Hibernating Shells
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Green segment = Active Shells
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              Red segment = Archived Shells
            </li>
            <li className="flex items-center gap-2">
              <span className="text-oc-cyan">Center number</span> = Total Shells
            </li>
          </ul>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TIME RANGE & CONTROLS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Filter size={20} className="text-blue-400" />
          </div>
          Controls & Filters
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Time Range */}
          <div className="bg-oc-darker/50 rounded-xl p-5 border border-oc-border/30">
            <h3 className="text-blue-400 font-mono text-sm mb-4 flex items-center gap-2">
              <Calendar size={16} />
              Time Range Selector
            </h3>
            <p className="text-oc-text/70 text-sm mb-4">
              Select time range to view data for a specific period.
            </p>
            <div className="flex gap-2">
              <TimeRangeOption label="DAY" description="Last 24 hours data" />
              <TimeRangeOption label="WEEK" description="Last 7 days data" active />
              <TimeRangeOption label="MONTH" description="Last 30 days data" />
            </div>
          </div>

          {/* Refresh */}
          <div className="bg-oc-darker/50 rounded-xl p-5 border border-oc-border/30">
            <h3 className="text-blue-400 font-mono text-sm mb-4 flex items-center gap-2">
              <RefreshCw size={16} />
              Manual Refresh
            </h3>
            <p className="text-oc-text/70 text-sm mb-4">
              Data is automatically updated every 30 seconds. Use the refresh button for manual updates.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-oc-border flex items-center justify-center">
                <RefreshCw size={16} className="text-oc-text/50" />
              </div>
              <span className="text-oc-text/60 text-sm">Click to refresh data instantly</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          UNDERSTANDING THE DATA
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
            <Eye size={20} className="text-oc-cyan" />
          </div>
          Understanding the Data
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-oc-border">
                <th className="text-left py-3 px-4 text-oc-cyan font-mono text-sm">Metric</th>
                <th className="text-left py-3 px-4 text-oc-cyan font-mono text-sm">Definition</th>
                <th className="text-left py-3 px-4 text-oc-cyan font-mono text-sm">Interpretation</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <TableRow
                metric="Total Shells"
                definition="Total number of Shells in vault"
                interpretation="Overall protocol growth indicator"
              />
              <TableRow
                metric="Success Rate"
                definition="Percentage of successful Molts"
                interpretation="Shows system reliability (target: >98%)"
              />
              <TableRow
                metric="Avg Processing Time"
                definition="Average Molt duration"
                interpretation="System efficiency (ideal: <3 minutes)"
              />
              <TableRow
                metric="Total Revenue"
                definition="Accumulated fees collected"
                interpretation="Protocol financial health"
              />
              <TableRow
                metric="Daily Molts"
                definition="Number of Molts per day"
                interpretation="Daily activity and demand"
              />
              <TableRow
                metric="Monthly Growth"
                definition="This month vs previous growth"
                interpretation="Medium-term adoption trend"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TIPS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
            <BookOpen size={20} className="text-green-400" />
          </div>
          Data Analysis Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <TipCard
            number={1}
            title="Monitor Success Rate"
            description="Success rate below 95% may indicate system issues. Monitor and report if significant decline occurs."
          />
          <TipCard
            number={2}
            title="Track Revenue Trends"
            description="Use time range selector to compare revenue across periods and identify peak times."
          />
          <TipCard
            number={3}
            title="Watch Live Feed"
            description="Live feed provides real-time protocol pulse. Watch activity patterns for decision timing."
          />
          <TipCard
            number={4}
            title="Analyze Distribution"
            description="Hibernating vs Active ratio shows resurrection potential. Many Hibernating = many opportunities."
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Analyze Data?</h3>
        <p className="text-oc-text/70 mb-6 max-w-2xl mx-auto">
          Click the button below to open Analytics Panel and start exploring protocol data in real-time.
        </p>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-mono font-bold rounded-xl hover:bg-oc-cyan hover:text-black transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
        >
          <Activity size={20} />
          Open Analytics Panel
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
      <span className="text-green-400">{icon}</span>
      {text}
    </li>
  );
}

function MetricCard({ icon, title, description, example, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    cyan: "from-oc-cyan/20 to-oc-cyan/5 border-oc-cyan/30 text-oc-cyan",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400",
    green: "from-green-500/20 to-green-500/5 border-green-500/30 text-green-400",
    yellow: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30 text-yellow-400",
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-5`}>
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-oc-text/60 text-xs mb-3 leading-relaxed">{description}</p>
      <div className="font-mono text-lg">{example}</div>
    </div>
  );
}

function ChartInfo({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-oc-darker/30 rounded-lg">
      <CheckCircle size={16} className="text-oc-cyan mt-0.5 flex-shrink-0" />
      <div>
        <h4 className="text-white font-medium text-sm">{title}</h4>
        <p className="text-oc-text/60 text-xs">{description}</p>
      </div>
    </div>
  );
}

function ActivityType({ icon, type, description, color }: {
  icon: React.ReactNode;
  type: string;
  description: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    cyan: "bg-oc-cyan/10 text-oc-cyan",
    blue: "bg-blue-500/10 text-blue-400",
    green: "bg-green-500/10 text-green-400",
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-oc-darker/30 rounded-lg">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium text-sm">{type}</h4>
        <p className="text-oc-text/60 text-xs">{description}</p>
      </div>
    </div>
  );
}

function LeaderboardMetric({ rank, label, description, color }: {
  rank: number;
  label: string;
  description: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    yellow: "text-yellow-400 bg-yellow-400/10",
    gray: "text-gray-400 bg-gray-400/10",
    orange: "text-orange-400 bg-orange-400/10",
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${colors[color]}`}>
        #{rank}
      </div>
      <div>
        <span className="text-white text-sm">{label}</span>
        <p className="text-oc-text/50 text-xs">{description}</p>
      </div>
    </div>
  );
}

function DistributionCard({ color, title, percentage, description, icon }: {
  color: string;
  title: string;
  percentage: string;
  description: string;
  icon: React.ReactNode;
}) {
  const colors: Record<string, string> = {
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400",
    green: "from-green-500/20 to-green-500/5 border-green-500/30 text-green-400",
    red: "from-red-500/20 to-red-500/5 border-red-500/30 text-red-400",
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-5 text-center`}>
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="font-bold text-white mb-1">{title}</h3>
      <p className="text-2xl font-mono font-bold mb-2">{percentage}</p>
      <p className="text-oc-text/60 text-xs">{description}</p>
    </div>
  );
}

function TimeRangeOption({ label, description, active }: { label: string; description: string; active?: boolean }) {
  return (
    <div className={`flex-1 p-3 rounded-lg text-center ${active ? "bg-oc-cyan/10 border border-oc-cyan/30" : "bg-oc-darker/50"}`}>
      <span className={`font-mono text-sm ${active ? "text-oc-cyan" : "text-oc-text/50"}`}>{label}</span>
      <p className="text-oc-text/40 text-[10px] mt-1">{description}</p>
    </div>
  );
}

function TableRow({ metric, definition, interpretation }: { metric: string; definition: string; interpretation: string }) {
  return (
    <tr className="border-b border-oc-border/30 hover:bg-oc-cyan/5">
      <td className="py-3 px-4 font-mono text-oc-cyan">{metric}</td>
      <td className="py-3 px-4 text-oc-text/70">{definition}</td>
      <td className="py-3 px-4 text-oc-text/50">{interpretation}</td>
    </tr>
  );
}

function TipCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-oc-darker/30 rounded-xl">
      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-oc-text/60 text-sm">{description}</p>
      </div>
    </div>
  );
}
