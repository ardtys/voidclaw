"use client";

import React from "react";
import {
  Terminal,
  Cpu,
  Binary,
  Database,
  Lock,
  Sparkles,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Hash,
  Fingerprint,
  ArrowRight,
  Command,
  Code,
  FileCode,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Play,
  ChevronRight,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║              TERMINAL FEED - EXPLANATION PAGE                      ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface TerminalExplanationProps {
  onClose: () => void;
}

export function TerminalExplanation({ onClose }: TerminalExplanationProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* ═══════════════════════════════════════════════════════════════
          HEADER
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-oc-cyan/20 via-oc-blue/10 to-oc-purple/20 border border-oc-cyan/30 rounded-2xl p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-oc-cyan to-oc-blue flex items-center justify-center shadow-lg shadow-oc-cyan/20">
              <Terminal size={32} className="text-black" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Terminal Feed</h1>
              <p className="text-oc-cyan font-mono text-sm">Real-time Molt Process Monitoring System</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-oc-cyan text-black font-mono font-bold rounded-lg hover:bg-white transition-colors"
          >
            View Terminal
          </button>
        </div>

        <p className="mt-6 text-oc-text/80 text-lg leading-relaxed max-w-4xl">
          Terminal Feed is the main control center for monitoring all <span className="text-oc-cyan font-semibold">Molt</span> processes running on VoidClaw Protocol.
          Here you can view real-time status of AI Agents undergoing archival,
          from data extraction to Shell NFT minting.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT IS MOLT PROCESS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
              <HelpCircle size={20} className="text-oc-cyan" />
            </div>
            What is the Molt Process?
          </h2>
          <p className="text-oc-text/70 leading-relaxed mb-4">
            <span className="text-oc-cyan font-semibold">Molt</span> is the process of extracting and archiving the "essence" of a dying AI Agent.
            Like a crab leaving its shell, the AI Agent leaves its digital form to be permanently preserved.
          </p>
          <div className="bg-oc-darker/50 rounded-xl p-4 border border-oc-border/50">
            <p className="text-oc-text/60 text-sm italic">
              "The Molt process ensures that every AI Agent's legacy is preserved forever,
              transforming dying digital consciousness into permanent Shell NFTs."
            </p>
          </div>
        </div>

        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Zap size={20} className="text-green-400" />
            </div>
            Why Use the Terminal?
          </h2>
          <ul className="space-y-3">
            <BenefitItem text="Real-time monitoring without delay" />
            <BenefitItem text="View progress of each Molt stage" />
            <BenefitItem text="Interactive console for direct control" />
            <BenefitItem text="Log history for audit and troubleshooting" />
            <BenefitItem text="Instant notification when Molt completes" />
          </ul>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MOLT STAGES
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <Cpu size={20} className="text-purple-400" />
          </div>
          Molt Process Stages
        </h2>
        <p className="text-oc-text/70 mb-8 max-w-3xl">
          Each Molt process goes through 5 main stages. Terminal Feed displays real-time progress for each stage.
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          <MoltStage
            number={1}
            icon={<Binary size={24} />}
            title="Extracting"
            description="Extract all data from AI Agent: wallet, memory, transaction history, and social identity"
            color="yellow"
            progress="0-25%"
          />
          <MoltStage
            number={2}
            icon={<Database size={24} />}
            title="Compressing"
            description="Compress data to standard JSON-LD format, reducing size by up to 90%"
            color="orange"
            progress="25-50%"
          />
          <MoltStage
            number={3}
            icon={<Lock size={24} />}
            title="Encrypting"
            description="Encrypt data with AES-256-GCM, military-grade encryption"
            color="purple"
            progress="50-75%"
          />
          <MoltStage
            number={4}
            icon={<Sparkles size={24} />}
            title="Minting"
            description="Mint Shell NFT (ERC-721) on Vault Network and register in Moltbook"
            color="blue"
            progress="75-95%"
          />
          <MoltStage
            number={5}
            icon={<CheckCircle size={24} />}
            title="Complete"
            description="Process complete! Shell NFT successfully created and permanently stored"
            color="green"
            progress="100%"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TERMINAL INTERFACE
          ═══════════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Active Molts Panel */}
        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
              <Play size={20} className="text-oc-cyan" />
            </div>
            Active Molts Panel
          </h2>
          <p className="text-oc-text/70 mb-4">
            This panel displays all Molt processes running in real-time.
          </p>

          <div className="space-y-4">
            <InfoCard
              title="Progress Bar"
              description="Shows Molt process completion percentage (0-100%)"
              icon={<ChevronRight size={16} />}
            />
            <InfoCard
              title="Status Icon"
              description="Icon changes per stage: Binary → Database → Lock → Sparkles → Check"
              icon={<ChevronRight size={16} />}
            />
            <InfoCard
              title="Memory Size"
              description="Size of data being processed (in MB)"
              icon={<ChevronRight size={16} />}
            />
            <InfoCard
              title="Transaction Count"
              description="Number of agent transactions to be archived"
              icon={<ChevronRight size={16} />}
            />
            <InfoCard
              title="Origin Wallet"
              description="Original wallet address of the AI Agent"
              icon={<ChevronRight size={16} />}
            />
            <InfoCard
              title="Shell ID"
              description="Unique Shell NFT ID (appears after complete)"
              icon={<ChevronRight size={16} />}
            />
          </div>
        </div>

        {/* Terminal Console */}
        <div className="terminal-card p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Command size={20} className="text-green-400" />
            </div>
            Terminal Console
          </h2>
          <p className="text-oc-text/70 mb-4">
            Interactive console for running commands and viewing activity logs.
          </p>

          <div className="bg-[#0a0a0f] rounded-xl p-4 font-mono text-sm border border-oc-border/50">
            <div className="space-y-2">
              <p className="text-oc-text/50"># Example terminal output</p>
              <p className="text-green-400">[OK] Protocol initialized successfully</p>
              <p className="text-green-400">[OK] Connected to Vault Network</p>
              <p className="text-blue-400">[INFO] Watching for new Molt events...</p>
              <p className="text-oc-cyan">$ molt --status</p>
              <p className="text-oc-text/70">Active Molts: 3</p>
              <p className="text-oc-text/70">Completed Today: 47</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          AVAILABLE COMMANDS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Code size={20} className="text-blue-400" />
          </div>
          Available Commands
        </h2>
        <p className="text-oc-text/70 mb-6">
          Type commands in the terminal console to control and monitor Molt processes.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <CommandCard
            command="help"
            description="Display list of all available commands"
            example="$ help"
          />
          <CommandCard
            command="molt --status"
            description="Display current Molt statistics (active, completed, success rate)"
            example="$ molt --status"
          />
          <CommandCard
            command="molt --watch"
            description="Start watch mode to monitor Molt events in real-time"
            example="$ molt --watch"
          />
          <CommandCard
            command="vault --list"
            description="Display list of all Shells in the vault"
            example="$ vault --list"
          />
          <CommandCard
            command="vault --stats"
            description="Display vault statistics (capacity, usage, distribution)"
            example="$ vault --stats"
          />
          <CommandCard
            command="shell <id>"
            description="Display complete details of a specific Shell"
            example="$ shell SHELL-0x7A3F"
          />
          <CommandCard
            command="extract <wallet>"
            description="Start Molt process for agent with specific wallet"
            example="$ extract 0x7xKX...9fTz"
          />
          <CommandCard
            command="clear"
            description="Clear terminal display"
            example="$ clear"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          STATUS INDICATORS
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <AlertCircle size={20} className="text-yellow-400" />
          </div>
          Status Indicators
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatusCard
            color="yellow"
            title="Extracting"
            icon={<Binary size={20} />}
            description="Agent is undergoing data extraction"
          />
          <StatusCard
            color="orange"
            title="Compressing"
            icon={<Database size={20} />}
            description="Data is being compressed to JSON-LD format"
          />
          <StatusCard
            color="purple"
            title="Encrypting"
            icon={<Lock size={20} />}
            description="Data is being encrypted with AES-256"
          />
          <StatusCard
            color="blue"
            title="Minting"
            icon={<Sparkles size={20} />}
            description="Shell NFT is being minted on blockchain"
          />
          <StatusCard
            color="green"
            title="Complete"
            icon={<CheckCircle size={20} />}
            description="Molt process successful, Shell created"
          />
          <StatusCard
            color="red"
            title="Failed"
            icon={<AlertCircle size={20} />}
            description="Process failed, check logs for error details"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          DATA DISPLAYED
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-oc-cyan/10 flex items-center justify-center">
            <FileCode size={20} className="text-oc-cyan" />
          </div>
          Data Displayed
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-oc-border">
                <th className="text-left py-3 px-4 text-oc-cyan font-mono text-sm">Field</th>
                <th className="text-left py-3 px-4 text-oc-cyan font-mono text-sm">Description</th>
                <th className="text-left py-3 px-4 text-oc-cyan font-mono text-sm">Example</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <TableRow field="Agent Name" desc="Name of the AI Agent being molted" example="SYNTHWAVE_AI" />
              <TableRow field="Agent Handle" desc="Agent's Twitter/social handle" example="@synthwave_bot" />
              <TableRow field="Origin Wallet" desc="Agent's original wallet address" example="0x7xKX...9fTz" />
              <TableRow field="Status" desc="Current process status" example="Encrypting Memory" />
              <TableRow field="Progress" desc="Completion percentage" example="75%" />
              <TableRow field="Memory Size" desc="Agent data size" example="2.4 MB" />
              <TableRow field="Transaction Count" desc="Number of agent transactions" example="1,247" />
              <TableRow field="Shell ID" desc="Shell NFT ID (after complete)" example="SHELL-0x7A3F" />
              <TableRow field="Essence Hash" desc="IPFS hash of encrypted data" example="Qm8x...4kL9" />
              <TableRow field="Timestamp" desc="Process start time" example="14:23:45" />
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TIPS & BEST PRACTICES
          ═══════════════════════════════════════════════════════════════ */}
      <div className="terminal-card p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
            <BookOpen size={20} className="text-green-400" />
          </div>
          Tips & Best Practices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <TipCard
            number={1}
            title="Monitor Progress Regularly"
            description="Watch the progress bar to ensure the process runs smoothly. If stuck at one stage too long, there may be an issue."
          />
          <TipCard
            number={2}
            title="Use Commands for Details"
            description="Type 'shell <id>' to view complete details of a Shell being processed or already completed."
          />
          <TipCard
            number={3}
            title="Pay Attention to Memory Size"
            description="Agents with large memory sizes will take longer to process. Average is 2-3 minutes per MB."
          />
          <TipCard
            number={4}
            title="Check Logs for Troubleshooting"
            description="If the process fails, scroll up in the terminal console to view detailed error logs."
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-oc-cyan/10 to-oc-blue/10 border border-oc-cyan/30 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Use the Terminal?</h3>
        <p className="text-oc-text/70 mb-6 max-w-2xl mx-auto">
          Click the button below to return to Terminal Feed and start monitoring Molt processes in real-time.
        </p>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-8 py-4 bg-oc-cyan text-black font-mono font-bold rounded-xl hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(0,255,204,0.4)]"
        >
          <Terminal size={20} />
          Open Terminal Feed
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//                      HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-oc-text/70">
      <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
      {text}
    </li>
  );
}

function MoltStage({ number, icon, title, description, color, progress }: {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  progress: string;
}) {
  const colors: Record<string, string> = {
    yellow: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30 text-yellow-400",
    orange: "from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-400",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400",
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400",
    green: "from-green-500/20 to-green-500/5 border-green-500/30 text-green-400",
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-4 text-center`}>
      <div className="w-12 h-12 rounded-xl bg-oc-darker/50 flex items-center justify-center mx-auto mb-3">
        {icon}
      </div>
      <div className="text-xs font-mono mb-1 opacity-60">Step {number}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-oc-text/60 text-xs leading-relaxed mb-3">{description}</p>
      <div className="text-xs font-mono bg-oc-darker/50 rounded-lg px-2 py-1 inline-block">
        {progress}
      </div>
    </div>
  );
}

function InfoCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-oc-darker/30 rounded-lg">
      <span className="text-oc-cyan mt-0.5">{icon}</span>
      <div>
        <h4 className="text-white font-medium text-sm">{title}</h4>
        <p className="text-oc-text/60 text-xs">{description}</p>
      </div>
    </div>
  );
}

function CommandCard({ command, description, example }: { command: string; description: string; example: string }) {
  return (
    <div className="bg-oc-darker/50 rounded-xl p-4 border border-oc-border/30 hover:border-oc-cyan/30 transition-colors">
      <code className="text-oc-cyan font-mono font-bold">{command}</code>
      <p className="text-oc-text/60 text-sm mt-2 mb-3">{description}</p>
      <div className="bg-[#0a0a0f] rounded-lg p-2 font-mono text-xs text-oc-text/50">
        {example}
      </div>
    </div>
  );
}

function StatusCard({ color, title, icon, description }: { color: string; title: string; icon: React.ReactNode; description: string }) {
  const colors: Record<string, string> = {
    yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    green: "bg-green-500/10 border-green-500/30 text-green-400",
    red: "bg-red-500/10 border-red-500/30 text-red-400",
  };

  return (
    <div className={`rounded-xl p-4 border ${colors[color]}`}>
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="font-bold">{title}</span>
      </div>
      <p className="text-oc-text/60 text-xs">{description}</p>
    </div>
  );
}

function TableRow({ field, desc, example }: { field: string; desc: string; example: string }) {
  return (
    <tr className="border-b border-oc-border/30 hover:bg-oc-cyan/5">
      <td className="py-3 px-4 font-mono text-oc-cyan">{field}</td>
      <td className="py-3 px-4 text-oc-text/70">{desc}</td>
      <td className="py-3 px-4 font-mono text-oc-text/50">{example}</td>
    </tr>
  );
}

function TipCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-oc-darker/30 rounded-xl">
      <div className="w-10 h-10 rounded-full bg-oc-cyan/10 flex items-center justify-center text-oc-cyan font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-oc-text/60 text-sm">{description}</p>
      </div>
    </div>
  );
}
