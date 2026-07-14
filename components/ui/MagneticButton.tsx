"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "icon";

const base =
  "relative inline-flex items-center justify-center gap-2 font-mono text-label-caps tracking-widest uppercase transition-colors focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-container text-on-primary-container px-6 py-3 rounded hover:bg-primary-fixed shadow-glow-cyan",
  ghost:
    "border border-outline-variant/40 text-on-surface px-6 py-3 rounded hover:border-primary-fixed-dim hover:text-primary-fixed-dim hover:shadow-glow-cyan",
  icon: "w-12 h-12 glass-panel rounded text-on-surface-variant hover:text-primary-fixed-dim hover:border-primary-fixed-dim/40",
};

/**
 * Button/anchor with a subtle magnetic pull toward the cursor.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  ariaLabel,
  download,
  external,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
  download?: boolean;
  external?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ x: sx, y: sy }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        whileTap={{ scale: 0.96 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
