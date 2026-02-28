"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Wallet,
  ChevronDown,
  LogOut,
  Copy,
  ExternalLink,
  Check,
  Shield,
  Zap,
  Link2,
  X,
} from "lucide-react";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                      WALLET CONNECT                                ║
 * ║              Multi-chain Neural Link Interface                     ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

interface WalletConnectProps {
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

type NetworkType = "origin" | "vault";

interface WalletState {
  network: NetworkType;
  address: string;
  fullAddress: string;
  balance: string;
  networkName: string;
}

export function WalletConnect({
  isConnected,
  onConnect,
  onDisconnect,
}: WalletConnectProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNetworkSelector, setShowNetworkSelector] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [wallet, setWallet] = useState<WalletState>({
    network: "origin",
    address: "0x7aK3...9fTz",
    fullAddress: "0x7aK3mN8pR2wQ5vT9bZ4cD1fG6hJ0kL3sB9fTz",
    balance: "12.45",
    networkName: "Origin Network",
  });

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setShowNetworkSelector(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleConnect = async (network: NetworkType) => {
    setIsConnecting(true);
    setShowNetworkSelector(false);

    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    const newWallet: WalletState = {
      network,
      address: network === "origin" ? "0x7aK3...9fTz" : "0x4bC2...1d3E",
      fullAddress: network === "origin"
        ? "0x7aK3mN8pR2wQ5vT9bZ4cD1fG6hJ0kL3sB9fTz"
        : "0x4bC2nM7pQ3wR6vS8bY5cE2fH7iK1lN4oP1d3E",
      balance: network === "origin" ? "12.45" : "0.85",
      networkName: network === "origin" ? "Origin Network" : "Vault Network",
    };

    setWallet(newWallet);
    setIsConnecting(false);
    onConnect();
  };

  const handleDisconnect = () => {
    setShowDropdown(false);
    onDisconnect();
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(wallet.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSwitchNetwork = () => {
    setShowDropdown(false);
    setShowNetworkSelector(true);
  };

  // NOT CONNECTED STATE
  if (!isConnected) {
    return (
      <div className="relative" ref={dropdownRef}>
        {/* Connect Button */}
        <button
          onClick={() => setShowNetworkSelector(!showNetworkSelector)}
          disabled={isConnecting}
          className="
            flex items-center gap-2.5 px-5 py-2.5
            bg-gradient-to-r from-oc-cyan/10 to-oc-blue/10
            border border-oc-cyan text-oc-cyan
            rounded-xl font-mono text-sm font-medium
            transition-all duration-300
            hover:bg-oc-cyan hover:text-black
            hover:shadow-[0_0_25px_rgba(0,255,204,0.4)]
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:hover:bg-transparent disabled:hover:text-oc-cyan
          "
        >
          {isConnecting ? (
            <>
              <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
              <span>Connecting...</span>
            </>
          ) : (
            <>
              <Wallet size={18} />
              <span>Connect Wallet</span>
            </>
          )}
        </button>

        {/* Network Selector Modal */}
        {showNetworkSelector && !isConnecting && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowNetworkSelector(false)}
            />

            {/* Modal */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-oc-darker border border-oc-border rounded-2xl shadow-2xl z-50 overflow-hidden animate-fade-in">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-oc-border">
                <div>
                  <h3 className="text-lg font-mono font-bold text-oc-cyan">Connect Wallet</h3>
                  <p className="text-xs text-oc-text/50 mt-1">Select your network to continue</p>
                </div>
                <button
                  onClick={() => setShowNetworkSelector(false)}
                  className="p-2 rounded-lg text-oc-text/50 hover:text-oc-cyan hover:bg-oc-cyan/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Network Options */}
              <div className="p-4 space-y-3">
                {/* Origin Network */}
                <button
                  onClick={() => handleConnect("origin")}
                  className="w-full p-5 flex items-center gap-4 rounded-xl border border-oc-border bg-oc-darker/50 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-mono font-bold text-base">Origin Network</p>
                    <p className="text-oc-text/60 text-sm mt-0.5">Source chain for AI agents</p>
                  </div>
                  <div className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                    SOURCE
                  </div>
                </button>

                {/* Vault Network */}
                <button
                  onClick={() => handleConnect("vault")}
                  className="w-full p-5 flex items-center gap-4 rounded-xl border border-oc-border bg-oc-darker/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-mono font-bold text-base">Vault Network</p>
                    <p className="text-oc-text/60 text-sm mt-0.5">Permanent shell storage</p>
                  </div>
                  <div className="text-xs px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono">
                    VAULT
                  </div>
                </button>
              </div>

              {/* Footer */}
              <div className="p-4 bg-oc-gray/30 border-t border-oc-border">
                <p className="text-[11px] text-oc-text/40 text-center">
                  By connecting, you agree to the VoidClaw Protocol Terms of Service
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // CONNECTED STATE
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Connected Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`
          flex items-center gap-3 px-4 py-2.5
          bg-oc-darker border rounded-xl
          transition-all duration-300
          ${wallet.network === "origin"
            ? "border-emerald-500/40 hover:border-emerald-500"
            : "border-blue-500/40 hover:border-blue-500"
          }
          hover:shadow-lg
        `}
      >
        {/* Network Icon */}
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-lg ${
            wallet.network === "origin"
              ? "bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-emerald-500/20"
              : "bg-gradient-to-br from-blue-500 to-purple-500 shadow-blue-500/20"
          }`}
        >
          {wallet.network === "origin"
            ? <Zap size={16} className="text-white" />
            : <Shield size={16} className="text-white" />
          }
        </div>

        {/* Address & Balance */}
        <div className="text-left">
          <p className="text-oc-cyan font-mono text-sm font-medium">{wallet.address}</p>
          <div className="flex items-center gap-2">
            <span className="text-oc-text/70 text-xs">{wallet.balance} TOKEN</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
              wallet.network === "origin"
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-blue-500/20 text-blue-400"
            }`}>
              {wallet.network === "origin" ? "ORIGIN" : "VAULT"}
            </span>
          </div>
        </div>

        <ChevronDown
          size={16}
          className={`text-oc-text/60 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-80 bg-oc-darker border border-oc-border rounded-xl shadow-2xl shadow-black/50 z-50 overflow-hidden animate-fade-in">
          {/* Wallet Info Header */}
          <div className={`p-5 border-b border-oc-border ${
            wallet.network === "origin"
              ? "bg-gradient-to-br from-emerald-500/10 to-transparent"
              : "bg-gradient-to-br from-blue-500/10 to-transparent"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-oc-text/70 font-mono">CONNECTED</span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-mono ${
                wallet.network === "origin"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
              }`}>
                {wallet.networkName.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                wallet.network === "origin"
                  ? "bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-emerald-500/20"
                  : "bg-gradient-to-br from-blue-500 to-purple-500 shadow-blue-500/20"
              }`}>
                {wallet.network === "origin"
                  ? <Zap size={24} className="text-white" />
                  : <Shield size={24} className="text-white" />
                }
              </div>
              <div>
                <p className="text-oc-cyan font-mono text-lg font-bold">{wallet.address}</p>
                <p className="text-oc-text/60 text-sm">{wallet.balance} TOKEN</p>
              </div>
            </div>
          </div>

          {/* Menu Actions */}
          <div className="p-2">
            {/* Copy Address */}
            <button
              onClick={handleCopyAddress}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-oc-text/80 hover:text-oc-cyan hover:bg-oc-cyan/5 rounded-lg transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-green-400" />
                  <span className="text-green-400">Address Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            {/* View on Explorer */}
            <a
              href="#"
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-oc-text/80 hover:text-oc-cyan hover:bg-oc-cyan/5 rounded-lg transition-all duration-200"
            >
              <ExternalLink size={18} />
              <span>View on Explorer</span>
            </a>

            {/* Switch Network */}
            <button
              onClick={handleSwitchNetwork}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-oc-text/80 hover:text-oc-cyan hover:bg-oc-cyan/5 rounded-lg transition-all duration-200"
            >
              <Link2 size={18} />
              <span>Switch Network</span>
            </button>

            {/* Divider */}
            <div className="border-t border-oc-border my-2 mx-2" />

            {/* Disconnect */}
            <button
              onClick={handleDisconnect}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200"
            >
              <LogOut size={18} />
              <span>Disconnect Wallet</span>
            </button>
          </div>
        </div>
      )}

      {/* Network Selector (when switching) */}
      {showNetworkSelector && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowNetworkSelector(false)}
          />

          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-oc-darker border border-oc-border rounded-2xl shadow-2xl z-50 overflow-hidden animate-fade-in">
            <div className="flex items-center justify-between p-5 border-b border-oc-border">
              <div>
                <h3 className="text-lg font-mono font-bold text-oc-cyan">Switch Network</h3>
                <p className="text-xs text-oc-text/50 mt-1">Select network to switch</p>
              </div>
              <button
                onClick={() => setShowNetworkSelector(false)}
                className="p-2 rounded-lg text-oc-text/50 hover:text-oc-cyan hover:bg-oc-cyan/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-3">
              <button
                onClick={() => handleConnect("origin")}
                disabled={wallet.network === "origin"}
                className={`w-full p-5 flex items-center gap-4 rounded-xl border transition-all duration-300 group ${
                  wallet.network === "origin"
                    ? "border-emerald-500 bg-emerald-500/10 cursor-default"
                    : "border-oc-border bg-oc-darker/50 hover:border-emerald-500/50 hover:bg-emerald-500/5"
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Zap size={24} className="text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-white font-mono font-bold text-base">Origin Network</p>
                  <p className="text-oc-text/60 text-sm mt-0.5">Source chain for AI agents</p>
                </div>
                {wallet.network === "origin" && (
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check size={18} />
                    <span className="text-xs font-mono">CONNECTED</span>
                  </div>
                )}
              </button>

              <button
                onClick={() => handleConnect("vault")}
                disabled={wallet.network === "vault"}
                className={`w-full p-5 flex items-center gap-4 rounded-xl border transition-all duration-300 group ${
                  wallet.network === "vault"
                    ? "border-blue-500 bg-blue-500/10 cursor-default"
                    : "border-oc-border bg-oc-darker/50 hover:border-blue-500/50 hover:bg-blue-500/5"
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Shield size={24} className="text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-white font-mono font-bold text-base">Vault Network</p>
                  <p className="text-oc-text/60 text-sm mt-0.5">Permanent shell storage</p>
                </div>
                {wallet.network === "vault" && (
                  <div className="flex items-center gap-2 text-blue-400">
                    <Check size={18} />
                    <span className="text-xs font-mono">CONNECTED</span>
                  </div>
                )}
              </button>
            </div>

            <div className="p-4 bg-oc-gray/30 border-t border-oc-border">
              <p className="text-[11px] text-oc-text/40 text-center">
                Switching network will update your connection
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
