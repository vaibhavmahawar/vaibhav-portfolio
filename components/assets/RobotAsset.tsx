"use client";

import { motion } from "framer-motion";

/**
 * Friendly AI robot bust — animated SVG in the mission-control palette.
 * Blinking scanning eyes, pulsing antenna and an animated voice waveform.
 */
export default function RobotAsset({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 170" className={className} role="img" aria-label="AI assistant robot">
      <defs>
        <linearGradient id="robot-head" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#232b2b" />
          <stop offset="100%" stopColor="#101414" />
        </linearGradient>
      </defs>

      {/* Antenna */}
      <line x1="100" y1="30" x2="100" y2="46" stroke="#3a494a" strokeWidth="3" strokeLinecap="round" />
      <motion.circle
        cx="100"
        cy="26"
        r="5"
        fill="#00dce5"
        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.25, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />

      {/* Head */}
      <rect x="50" y="46" width="100" height="80" rx="18" fill="url(#robot-head)" stroke="#00dce5" strokeOpacity="0.45" strokeWidth="1.5" />
      {/* Face screen */}
      <rect x="60" y="58" width="80" height="46" rx="10" fill="#0a0f0f" stroke="#3a494a" />

      {/* Eyes */}
      {[80, 120].map((cx) => (
        <motion.rect
          key={cx}
          x={cx - 9}
          y={72}
          width="18"
          height="18"
          rx="9"
          fill="#00dce5"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 2.6 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}

      {/* Voice waveform (mouth) */}
      <g>
        {[70, 84, 98, 112, 126].map((x, i) => (
          <motion.rect
            key={x}
            x={x}
            y={110}
            width="4"
            height="8"
            rx="2"
            fill="#66dd8b"
            animate={{ height: [4, 12, 4], y: [112, 106, 112] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}
      </g>

      {/* Shoulders / body hint */}
      <path d="M55 126 Q100 150 145 126 L150 150 L50 150 Z" fill="url(#robot-head)" stroke="#00dce5" strokeOpacity="0.3" strokeWidth="1.5" />
      {/* Ear modules */}
      <rect x="42" y="70" width="8" height="26" rx="4" fill="#20201f" stroke="#00dce5" strokeOpacity="0.4" />
      <rect x="150" y="70" width="8" height="26" rx="4" fill="#20201f" stroke="#00dce5" strokeOpacity="0.4" />
    </svg>
  );
}
