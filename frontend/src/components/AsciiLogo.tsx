"use client";

import React from "react";
import Image from "next/image";

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║                        ASCII LOGO                                  ║
 * ║              The VoidClaw Crab/Claw ASCII Art                      ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

export function AsciiLogo() {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-oc-cyan/20 group-hover:shadow-oc-cyan/40 transition-all duration-300 group-hover:scale-110">
        <Image
          src="/logo.png"
          alt="VoidClaw Protocol"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-oc-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
}

/**
 * Large ASCII art for splash/loading screens
 */
export function AsciiLogoLarge() {
  return (
    <div className="ascii-art select-none text-center">
      <pre className="text-oc-cyan text-[6px] sm:text-[8px] md:text-[10px] leading-tight inline-block">
{`
██╗   ██╗ ██████╗ ██╗██████╗  ██████╗██╗      █████╗ ██╗    ██╗
██║   ██║██╔═══██╗██║██╔══██╗██╔════╝██║     ██╔══██╗██║    ██║
██║   ██║██║   ██║██║██║  ██║██║     ██║     ███████║██║ █╗ ██║
╚██╗ ██╔╝██║   ██║██║██║  ██║██║     ██║     ██╔══██║██║███╗██║
 ╚████╔╝ ╚██████╔╝██║██████╔╝╚██████╗███████╗██║  ██║╚███╔███╔╝
  ╚═══╝   ╚═════╝ ╚═╝╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝
`}
      </pre>
      <div className="mt-2 text-oc-text/60 text-xs font-mono tracking-[0.3em]">
        SHELL-AS-A-SERVICE PROTOCOL
      </div>
    </div>
  );
}

/**
 * Animated loading claw
 */
export function LoadingClaw() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl overflow-hidden animate-pulse">
          <Image
            src="/logo.png"
            alt="VoidClaw Protocol"
            width={64}
            height={64}
            className="w-full h-full object-cover animate-bounce"
          />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-oc-cyan/30 blur-2xl animate-pulse" />
      </div>
      <div className="text-oc-cyan font-mono text-sm animate-pulse">
        INITIALIZING...
      </div>
    </div>
  );
}

/**
 * Network status indicator with animated dots
 */
export function NetworkIndicator({ status }: { status: "online" | "syncing" | "offline" }) {
  const colors = {
    online: "bg-green-400",
    syncing: "bg-yellow-400",
    offline: "bg-red-400",
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className={`w-2 h-2 rounded-full ${colors[status]}`} />
        {status !== "offline" && (
          <div className={`absolute inset-0 w-2 h-2 rounded-full ${colors[status]} animate-ping`} />
        )}
      </div>
      <span className="text-xs font-mono text-oc-text uppercase">{status}</span>
    </div>
  );
}
