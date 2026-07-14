"use client";

import { motion } from "framer-motion";

/**
 * Realistic silhouettes for the drone-detection dashboard. Rendered as if
 * captured by a surveillance camera (neutral grayscale, real object shapes)
 * so each bounding box frames an actual-looking drone or bird — not a diagram.
 */

export function RealisticDrone({ className }: { className?: string }) {
  const props = [
    { cx: 26, cy: 30 },
    { cx: 74, cy: 30 },
    { cx: 26, cy: 74 },
    { cx: 74, cy: 74 },
  ];
  return (
    <svg viewBox="0 0 100 104" className={className} role="img" aria-label="Detected drone">
      <defs>
        <radialGradient id="det-drone-body" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#4a5158" />
          <stop offset="100%" stopColor="#1c2124" />
        </radialGradient>
      </defs>

      {/* Arms (X-frame) */}
      <g stroke="#20262b" strokeWidth="7" strokeLinecap="round">
        <line x1="50" y1="52" x2="26" y2="30" />
        <line x1="50" y1="52" x2="74" y2="30" />
        <line x1="50" y1="52" x2="26" y2="74" />
        <line x1="50" y1="52" x2="74" y2="74" />
      </g>

      {/* Motors + spinning propeller blur discs */}
      {props.map((p, i) => (
        <g key={i}>
          <motion.circle
            cx={p.cx}
            cy={p.cy}
            r="15"
            fill="#c7ced3"
            fillOpacity="0.16"
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 0.25, repeat: Infinity, delay: i * 0.05 }}
          />
          <circle cx={p.cx} cy={p.cy} r="15" fill="none" stroke="#3a4046" strokeWidth="1.5" />
          <circle cx={p.cx} cy={p.cy} r="4" fill="#20262b" />
        </g>
      ))}

      {/* Central body */}
      <rect x="37" y="40" width="26" height="24" rx="7" fill="url(#det-drone-body)" stroke="#5a6168" strokeWidth="1" />
      {/* Battery / top plate detail */}
      <rect x="42" y="45" width="16" height="10" rx="2" fill="#2b3136" />
      {/* Gimbal camera at the front-underside */}
      <path d="M44 64 L56 64 L54 74 L46 74 Z" fill="#20262b" stroke="#5a6168" strokeWidth="0.8" />
      <circle cx="50" cy="70" r="3" fill="#0e1113" stroke="#7a828a" strokeWidth="0.8" />
      {/* Landing legs */}
      <line x1="40" y1="63" x2="34" y2="84" stroke="#20262b" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="63" x2="66" y2="84" stroke="#20262b" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function RealisticBird({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Detected bird">
      <defs>
        <linearGradient id="det-bird-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#454b52" />
          <stop offset="100%" stopColor="#191d20" />
        </linearGradient>
      </defs>

      {/* The whole bird soars using a native SVG SMIL animation. This is
          intentionally NOT Framer Motion / CSS: on the deployed build those
          left the bird frozen, whereas SMIL runs in the browser's SVG engine
          (no JS/hydration) and is unaffected by the global prefers-reduced-motion
          CSS rule — so the bird reliably moves everywhere. */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 4 -7; 0 0; -4 5; 0 0"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
          dur="3s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
        />

        {/* Left wing — flaps by rotating around the shoulder joint (50,50).
            SMIL rotate is used (not Framer/CSS) so it runs reliably on Vercel. */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-14 50 50; 20 50 50; -14 50 50"
            dur="0.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
          />
          <path
            d="M50 50
               C 42 44 34 41 24 41
               C 22 40 20 41 21 43
               C 18 42 16 43 17 45
               C 14 45 13 46 14 48
               C 12 48 11 50 13 51
               C 22 51 34 52 44 54
               C 47 55 49 54 50 53 Z"
            fill="url(#det-bird-body)"
          />
        </g>

        {/* Right wing (mirror) — flaps in sync, opposite rotation direction */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="14 50 50; -20 50 50; 14 50 50"
            dur="0.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
          />
          <path
            d="M50 50
               C 58 44 66 41 76 41
               C 78 40 80 41 79 43
               C 82 42 84 43 83 45
               C 86 45 87 46 86 48
               C 88 48 89 50 87 51
               C 78 51 66 52 56 54
               C 53 55 51 54 50 53 Z"
            fill="url(#det-bird-body)"
          />
        </g>

        {/* Body */}
        <ellipse cx="50" cy="55" rx="4.5" ry="13" fill="url(#det-bird-body)" />
        {/* Head */}
        <circle cx="50" cy="43" r="3.6" fill="#3a4046" />
        {/* Beak */}
        <path d="M50 39.5 L48 35 L52 35 Z" fill="#2b3136" />
        {/* Tail */}
        <path d="M46.5 66 L53.5 66 L50 80 Z" fill="#2b3136" />
      </g>
    </svg>
  );
}
