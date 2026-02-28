/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                    OPENCLAW EXTRACTION ENGINE                      ║
 * ║           "The Essence Scraper - Harvesting Digital Souls"         ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 *
 * This module handles the extraction of AI Agent Core-Essence from Solana.
 * The extracted data is compressed into JSON-LD format for cross-chain
 * compatibility and encrypted for secure storage.
 */

import { Connection, PublicKey } from "@solana/web3.js";
import crypto from "crypto";

// ═══════════════════════════════════════════════════════════════════
//                          TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════

/**
 * Raw AI Agent data scraped from Solana ecosystem
 */
interface AgentRawData {
  walletAddress: string;
  twitterHandle: string;
  agentName: string;
  llmPromptHistory: PromptEntry[];
  transactionLogs: TransactionLog[];
  metadata: AgentMetadata;
}

interface PromptEntry {
  timestamp: number;
  prompt: string;
  response: string;
  model: string;
  tokens: number;
}

interface TransactionLog {
  signature: string;
  blockTime: number;
  type: "transfer" | "swap" | "mint" | "burn" | "interact";
  amount?: number;
  tokenMint?: string;
  counterparty?: string;
  success: boolean;
}

interface AgentMetadata {
  creationDate: number;
  lastActiveTimestamp: number;
  totalTransactions: number;
  liquidityScore: number;
  socialScore: number;
  interactionCount: number;
}

/**
 * JSON-LD formatted Core-Essence ready for archival
 */
interface CoreEssenceJsonLD {
  "@context": string;
  "@type": string;
  identifier: string;
  name: string;
  dateCreated: string;
  dateMolted: string;
  originChain: ChainOrigin;
  socialIdentity: SocialIdentity;
  memory: MemoryArchive;
  transactionHistory: TransactionArchive;
  liquiditySnapshot: LiquiditySnapshot;
  encryptionMetadata: EncryptionMeta;
}

interface ChainOrigin {
  "@type": string;
  chain: string;
  walletAddress: string;
  network: string;
}

interface SocialIdentity {
  "@type": string;
  platform: string;
  handle: string;
  followers?: number;
  engagement?: number;
}

interface MemoryArchive {
  "@type": string;
  totalPrompts: number;
  compressedSize: number;
  checksum: string;
  entries: CompressedMemoryEntry[];
}

interface CompressedMemoryEntry {
  timestamp: string;
  promptHash: string;
  responseHash: string;
  model: string;
  tokens: number;
}

interface TransactionArchive {
  "@type": string;
  totalTransactions: number;
  firstTransaction: string;
  lastTransaction: string;
  summary: TransactionSummary;
}

interface TransactionSummary {
  transfers: number;
  swaps: number;
  mints: number;
  burns: number;
  interactions: number;
  successRate: number;
}

interface LiquiditySnapshot {
  "@type": string;
  capturedAt: string;
  score: number;
  status: "healthy" | "declining" | "critical" | "dead";
}

interface EncryptionMeta {
  algorithm: string;
  keyDerivation: string;
  iv: string;
  authTag?: string;
}

// ═══════════════════════════════════════════════════════════════════
//                      EXTRACTION ENGINE CLASS
// ═══════════════════════════════════════════════════════════════════

/**
 * The Essence Scraper - Main extraction engine for AI Agent data
 */
export class ExtractionEngine {
  private connection: Connection;
  private encryptionKey: Buffer;

  constructor(rpcEndpoint: string, encryptionSecret: string) {
    this.connection = new Connection(rpcEndpoint);
    // Derive 256-bit key from secret using SHA-256
    this.encryptionKey = crypto
      .createHash("sha256")
      .update(encryptionSecret)
      .digest();
  }

  // ═══════════════════════════════════════════════════════════════════
  //                        DATA EXTRACTION
  // ═══════════════════════════════════════════════════════════════════

  /**
   * Extract raw transaction history from Solana wallet
   * @param walletAddress - The AI Agent's Solana wallet
   * @returns Array of transaction logs
   */
  async extractTransactionLogs(
    walletAddress: string
  ): Promise<TransactionLog[]> {
    const pubkey = new PublicKey(walletAddress);
    const signatures = await this.connection.getSignaturesForAddress(pubkey, {
      limit: 1000,
    });

    const logs: TransactionLog[] = [];

    for (const sig of signatures) {
      const tx = await this.connection.getTransaction(sig.signature, {
        maxSupportedTransactionVersion: 0,
      });

      if (tx) {
        logs.push({
          signature: sig.signature,
          blockTime: tx.blockTime || 0,
          type: this.classifyTransaction(tx),
          success: tx.meta?.err === null,
        });
      }
    }

    return logs;
  }

  /**
   * Classify transaction type based on instructions
   */
  private classifyTransaction(tx: any): TransactionLog["type"] {
    // Simplified classification - would need full instruction parsing in production
    const instructions = tx.transaction.message.instructions;

    if (instructions.length === 0) return "interact";

    // Check for common program IDs
    const programIds = instructions.map((ix: any) =>
      tx.transaction.message.accountKeys[ix.programIdIndex]?.toString()
    );

    if (programIds.includes("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")) {
      return "transfer";
    }
    if (
      programIds.some(
        (id: string) =>
          id?.includes("swap") ||
          id === "JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB"
      )
    ) {
      return "swap";
    }

    return "interact";
  }

  /**
   * Fetch Twitter/X metadata for the agent
   * Note: In production, this would use Twitter API
   */
  async fetchTwitterMetadata(handle: string): Promise<Partial<SocialIdentity>> {
    // Placeholder - would integrate with Twitter API
    return {
      "@type": "SocialIdentity",
      platform: "twitter",
      handle: handle,
    };
  }

  /**
   * Fetch LLM prompt history from agent's memory storage
   * Note: Implementation depends on how agent stores memory
   */
  async fetchPromptHistory(
    agentEndpoint: string
  ): Promise<PromptEntry[]> {
    // Placeholder - would fetch from agent's memory storage
    // Could be IPFS, Arweave, or a centralized DB
    return [];
  }

  // ═══════════════════════════════════════════════════════════════════
  //                      JSON-LD FORMATTING
  // ═══════════════════════════════════════════════════════════════════

  /**
   * Compress raw agent data into JSON-LD format
   * This is the Core-Essence ready for encryption and archival
   */
  formatToJsonLD(rawData: AgentRawData): CoreEssenceJsonLD {
    const now = new Date().toISOString();

    // Calculate transaction summary
    const txSummary = this.calculateTransactionSummary(rawData.transactionLogs);

    // Compress memory entries (hash the content)
    const compressedMemory = this.compressMemory(rawData.llmPromptHistory);

    // Determine liquidity status
    const liquidityStatus = this.assessLiquidityStatus(
      rawData.metadata.liquidityScore
    );

    return {
      "@context": "https://openclaw.io/schema/v1",
      "@type": "AIAgentCoreEssence",
      identifier: `shell:${this.generateShellId(rawData.walletAddress)}`,
      name: rawData.agentName,
      dateCreated: new Date(rawData.metadata.creationDate).toISOString(),
      dateMolted: now,
      originChain: {
        "@type": "BlockchainOrigin",
        chain: "solana",
        walletAddress: rawData.walletAddress,
        network: "mainnet-beta",
      },
      socialIdentity: {
        "@type": "SocialIdentity",
        platform: "twitter",
        handle: rawData.twitterHandle,
      },
      memory: {
        "@type": "MemoryArchive",
        totalPrompts: rawData.llmPromptHistory.length,
        compressedSize: compressedMemory.size,
        checksum: compressedMemory.checksum,
        entries: compressedMemory.entries,
      },
      transactionHistory: {
        "@type": "TransactionArchive",
        totalTransactions: rawData.transactionLogs.length,
        firstTransaction:
          rawData.transactionLogs[rawData.transactionLogs.length - 1]
            ?.signature || "",
        lastTransaction: rawData.transactionLogs[0]?.signature || "",
        summary: txSummary,
      },
      liquiditySnapshot: {
        "@type": "LiquiditySnapshot",
        capturedAt: now,
        score: rawData.metadata.liquidityScore,
        status: liquidityStatus,
      },
      encryptionMetadata: {
        algorithm: "aes-256-gcm",
        keyDerivation: "sha256",
        iv: "", // Will be set during encryption
      },
    };
  }

  /**
   * Generate unique Shell ID from wallet address
   */
  private generateShellId(walletAddress: string): string {
    return crypto
      .createHash("sha256")
      .update(walletAddress + Date.now())
      .digest("hex")
      .substring(0, 16);
  }

  /**
   * Calculate transaction summary statistics
   */
  private calculateTransactionSummary(
    logs: TransactionLog[]
  ): TransactionSummary {
    const summary = {
      transfers: 0,
      swaps: 0,
      mints: 0,
      burns: 0,
      interactions: 0,
      successRate: 0,
    };

    let successCount = 0;

    for (const log of logs) {
      if (log.success) successCount++;

      switch (log.type) {
        case "transfer":
          summary.transfers++;
          break;
        case "swap":
          summary.swaps++;
          break;
        case "mint":
          summary.mints++;
          break;
        case "burn":
          summary.burns++;
          break;
        default:
          summary.interactions++;
      }
    }

    summary.successRate =
      logs.length > 0 ? (successCount / logs.length) * 100 : 0;

    return summary;
  }

  /**
   * Compress and hash memory entries
   */
  private compressMemory(prompts: PromptEntry[]): {
    size: number;
    checksum: string;
    entries: CompressedMemoryEntry[];
  } {
    const entries: CompressedMemoryEntry[] = prompts.map((p) => ({
      timestamp: new Date(p.timestamp).toISOString(),
      promptHash: crypto.createHash("sha256").update(p.prompt).digest("hex"),
      responseHash: crypto
        .createHash("sha256")
        .update(p.response)
        .digest("hex"),
      model: p.model,
      tokens: p.tokens,
    }));

    const serialized = JSON.stringify(entries);
    const checksum = crypto
      .createHash("sha256")
      .update(serialized)
      .digest("hex");

    return {
      size: Buffer.byteLength(serialized, "utf8"),
      checksum,
      entries,
    };
  }

  /**
   * Assess liquidity status based on score
   */
  private assessLiquidityStatus(
    score: number
  ): "healthy" | "declining" | "critical" | "dead" {
    if (score >= 70) return "healthy";
    if (score >= 40) return "declining";
    if (score >= 10) return "critical";
    return "dead";
  }

  // ═══════════════════════════════════════════════════════════════════
  //                         ENCRYPTION
  // ═══════════════════════════════════════════════════════════════════

  /**
   * Encrypt the Core-Essence using AES-256-GCM
   * @param essence - The JSON-LD formatted essence
   * @returns Encrypted payload with metadata
   */
  encryptEssence(essence: CoreEssenceJsonLD): {
    encrypted: Buffer;
    iv: string;
    authTag: string;
  } {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-gcm", this.encryptionKey, iv);

    const serialized = JSON.stringify(essence);
    const encrypted = Buffer.concat([
      cipher.update(serialized, "utf8"),
      cipher.final(),
    ]);

    const authTag = cipher.getAuthTag();

    return {
      encrypted,
      iv: iv.toString("hex"),
      authTag: authTag.toString("hex"),
    };
  }

  /**
   * Decrypt a Core-Essence
   */
  decryptEssence(
    encrypted: Buffer,
    ivHex: string,
    authTagHex: string
  ): CoreEssenceJsonLD {
    const iv = Buffer.from(ivHex, "hex");
    const authTag = Buffer.from(authTagHex, "hex");

    const decipher = crypto.createDecipheriv(
      "aes-256-gcm",
      this.encryptionKey,
      iv
    );
    decipher.setAuthTag(authTag);

    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);

    return JSON.parse(decrypted.toString("utf8"));
  }

  // ═══════════════════════════════════════════════════════════════════
  //                     FULL MOLT PROCESS
  // ═══════════════════════════════════════════════════════════════════

  /**
   * Execute the complete Molt extraction process
   * @param agentData - Raw agent configuration
   * @returns Encrypted essence ready for IPFS/Arweave upload
   */
  async executeMolt(agentData: {
    walletAddress: string;
    twitterHandle: string;
    agentName: string;
    memoryEndpoint?: string;
  }): Promise<{
    essence: CoreEssenceJsonLD;
    encrypted: Buffer;
    iv: string;
    authTag: string;
  }> {
    console.log(`[MOLT] Initiating extraction for ${agentData.agentName}...`);

    // Step 1: Extract transaction logs from Solana
    console.log("[MOLT] Extracting transaction history...");
    const transactionLogs = await this.extractTransactionLogs(
      agentData.walletAddress
    );

    // Step 2: Fetch LLM prompt history
    console.log("[MOLT] Fetching memory archive...");
    const promptHistory = agentData.memoryEndpoint
      ? await this.fetchPromptHistory(agentData.memoryEndpoint)
      : [];

    // Step 3: Compile raw data
    const rawData: AgentRawData = {
      walletAddress: agentData.walletAddress,
      twitterHandle: agentData.twitterHandle,
      agentName: agentData.agentName,
      llmPromptHistory: promptHistory,
      transactionLogs,
      metadata: {
        creationDate: Date.now() - 30 * 24 * 60 * 60 * 1000, // Placeholder
        lastActiveTimestamp: Date.now(),
        totalTransactions: transactionLogs.length,
        liquidityScore: this.calculateLiquidityScore(transactionLogs),
        socialScore: 0,
        interactionCount: transactionLogs.filter(
          (t) => t.type === "interact"
        ).length,
      },
    };

    // Step 4: Format to JSON-LD
    console.log("[MOLT] Compressing to JSON-LD format...");
    const essence = this.formatToJsonLD(rawData);

    // Step 5: Encrypt
    console.log("[MOLT] Encrypting Core-Essence...");
    const { encrypted, iv, authTag } = this.encryptEssence(essence);

    // Update essence with encryption metadata
    essence.encryptionMetadata.iv = iv;
    essence.encryptionMetadata.authTag = authTag;

    console.log("[MOLT] Extraction complete. Ready for archival.");

    return { essence, encrypted, iv, authTag };
  }

  /**
   * Calculate liquidity score based on recent activity
   */
  private calculateLiquidityScore(logs: TransactionLog[]): number {
    const now = Date.now() / 1000;
    const dayAgo = now - 86400;
    const weekAgo = now - 604800;

    const recentTxns = logs.filter((l) => l.blockTime > dayAgo).length;
    const weeklyTxns = logs.filter((l) => l.blockTime > weekAgo).length;

    // Simple scoring algorithm
    let score = 0;
    score += Math.min(recentTxns * 5, 30); // Up to 30 points for daily activity
    score += Math.min(weeklyTxns * 2, 40); // Up to 40 points for weekly activity
    score += logs.length > 100 ? 30 : logs.length * 0.3; // Up to 30 points for history

    return Math.min(Math.round(score), 100);
  }
}

// ═══════════════════════════════════════════════════════════════════
//                         EXPORTS
// ═══════════════════════════════════════════════════════════════════

export type {
  AgentRawData,
  CoreEssenceJsonLD,
  PromptEntry,
  TransactionLog,
  AgentMetadata,
};
