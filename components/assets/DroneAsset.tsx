"use client";

import { motion } from "framer-motion";

/**
 * Stylized quadcopter drone — animated SVG in the mission-control palette.
 * Spinning rotors, blinking nav lights and a scanning camera gimbal.
 */
export default function DroneAsset({ className }: { className?: string }) {
  const rotors = [
    { cx: 40, cy: 45 },
    { cx: 160, cy: 45 },
    { cx: 40, cy: 105 },
    { cx: 160, cy: 105 },
  ];

  return (
    <svg viewBox="0 0 200 150" className={className} role="img" aria-label="Autonomous drone asset">
      <defs>
        <linearGradient id="drone-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a3a3a" />
          <stop offset="100%" stopColor="#0e1414" />
        </linearGradient>
      </defs>

      {/* Arms */}
      {rotors.map((r, i) => (
        <line
          key={`arm-${i}`}
          x1="100"
          y1="75"
          x2={r.cx}
          y2={r.cy}
          stroke="#3a494a"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}

      {/* Rotors — spinning propellers (SMIL for reliable SVG rotation) */}
      {rotors.map((r, i) => (
        <g key={`rotor-${i}`}>
          {/* Guard ring */}
          <circle cx={r.cx} cy={r.cy} r="20" fill="none" stroke="#00dce5" strokeOpacity="0.2" strokeWidth="1" />
          {/* Motion-blur disc */}
          <motion.circle
            cx={r.cx}
            cy={r.cy}
            r="17"
            fill="#00dce5"
            animate={{ opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.05 }}
          />
          {/* Spinning blades */}
          <g>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from={`0 ${r.cx} ${r.cy}`}
              to={`360 ${r.cx} ${r.cy}`}
              dur="0.35s"
              repeatCount="indefinite"
            />
            <ellipse cx={r.cx} cy={r.cy} rx="17" ry="2.6" fill="#00dce5" fillOpacity="0.65" />
            <ellipse cx={r.cx} cy={r.cy} rx="2.6" ry="17" fill="#00dce5" fillOpacity="0.4" />
          </g>
          {/* Hub */}
          <circle cx={r.cx} cy={r.cy} r="4" fill="#20201f" stroke="#00dce5" strokeOpacity="0.6" />
        </g>
      ))}

      {/* Body */}
      <rect x="80" y="60" width="40" height="30" rx="6" fill="url(#drone-body)" stroke="#00dce5" strokeOpacity="0.5" />
      {/* Camera gimbal */}
      <circle cx="100" cy="92" r="7" fill="#0e1414" stroke="#66dd8b" strokeOpacity="0.7" />
      <motion.circle
        cx="100"
        cy="92"
        r="2.5"
        fill="#66dd8b"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />

      {/* Nav lights */}
      <motion.circle cx="84" cy="66" r="2" fill="#ffb4ab" animate={{ opacity: [1, 0.1, 1] }} transition={{ duration: 1, repeat: Infinity }} />
      <motion.circle cx="116" cy="66" r="2" fill="#66dd8b" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 1, repeat: Infinity }} />
    </svg>
  );
}
