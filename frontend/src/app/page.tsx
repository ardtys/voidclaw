"use client";

import { useState } from "react";
import { MoltbookDashboard } from "@/components/MoltbookDashboard";
import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return (
      <main className="min-h-screen bg-oc-black bg-grid">
        <MoltbookDashboard onBackToLanding={() => setShowDashboard(false)} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-oc-black">
      <LandingPage onEnterApp={() => setShowDashboard(true)} />
    </main>
  );
}
