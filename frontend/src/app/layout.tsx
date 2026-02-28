import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "VoidClaw | Shell-as-a-Service Protocol",
  description: "Digital Immortality for AI Agents. Molt your dying agents into permanent Shells on Base.",
  keywords: ["AI", "Web3", "Solana", "Base", "NFT", "Agent", "Archive"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scanlines bg-oc-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
