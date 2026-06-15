"use client";

import React from "react";
import Link from "next/link";

export default function PlaygroundPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden relative">
      {/* Subtle ambient background dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[24px_24px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center gap-6">
        {/* Title */}
        <div className="text-4xl md:text-5xl font-bold tracking-tight">
          🧪 Component Playground
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg">
          Thank you new user for testing out the awesomeness that is brewed by
          Premier League Champion Isaac Gichuhi. Stay tuned for more winnings
          and Cuppings.
        </p>

        {/* Status chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-2 text-sm">
          <span className="px-3 py-1 border border-white/20 rounded-full">
            ⚙️ UI Tests
          </span>
          <span className="px-3 py-1 border border-white/20 rounded-full">
            🎬 Motion Experiments
          </span>
          <span className="px-3 py-1 border border-white/20 rounded-full">
            🧩 Component Lab
          </span>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <Link href="/">
            <button className="px-6 py-3 bg-white text-black font-semibold hover:scale-95 transition-transform">
              🏠 Home
            </button>
          </Link>

          <Link href="/dummy_page">
            <button className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors">
              📁 Archive
            </button>
          </Link>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-xs text-white/40">
          Always remember — Arsenal is the current Premier League Champion 🧠
        </div>
      </div>
    </div>
  );
}
