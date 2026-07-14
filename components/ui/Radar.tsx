"use client";

import { motion } from "framer-motion";

/**
 * Decorative mission-control radar sweep with concentric rings and blips.
 */
export default function Radar({ className }: { className?: string }) {
  const blips = [
    { cx: 68, cy: 42, delay: 0 },
    { cx: 40, cy: 70, delay: 0.8 },
    { cx: 74, cy: 78, delay: 1.6 },
    { cx: 52, cy: 30, delay: 2.4 },
  ];

  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <radialGradient id="radar-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00dce5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00dce5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sweep" x1="50%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#00dce5" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00dce5" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="48" fill="url(#radar-fade)" />
        {[16, 30, 44].map((r) => (
          <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#3a494a" strokeWidth="0.4" />
        ))}
        <line x1="50" y1="2" x2="50" y2="98" stroke="#3a494a" strokeWidth="0.3" />
        <line x1="2" y1="50" x2="98" y2="50" stroke="#3a494a" strokeWidth="0.3" />

        <motion.g
          style={{ transformOrigin: "50px 50px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        >
          <path d="M50 50 L98 50 A48 48 0 0 0 74 8 Z" fill="url(#sweep)" />
        </motion.g>

        {blips.map((b, i) => (
          <motion.circle
            key={i}
            cx={b.cx}
            cy={b.cy}
            r="1.4"
            fill="#66dd8b"
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: b.delay }}
          />
        ))}
      </svg>
    </div>
  );
}
