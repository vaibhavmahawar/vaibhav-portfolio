"use client";

import dynamic from "next/dynamic";

const AICore = dynamic(() => import("@/components/three/AICore"), { ssr: false });

/**
 * Fixed full-viewport backdrop: the three.js "AI Core" scene (rotating wireframe
 * icosahedron + orbiting data-particle field) plus layered vignettes so there's
 * always depth even before WebGL boots.
 */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,105,110,0.12),transparent_60%)]" />
      <div className="absolute inset-0 terminal-grid opacity-[0.15]" />
      <div className="absolute inset-0 opacity-50">
        <AICore variant="background" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,10,10,0.9)_100%)]" />
    </div>
  );
}
