"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Counts up a numeric value when it scrolls into view. Non-numeric prefixes /
 * suffixes (e.g. "91%", "30+") are preserved.
 */
export default function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Parse once — deriving these inline every render created new object
  // references that thrashed the animation effect and froze it near zero.
  const { target, suffix, isNumeric } = useMemo(() => {
    const m = value.match(/^(\d+)(.*)$/);
    return m
      ? { target: parseInt(m[1], 10), suffix: m[2], isNumeric: true }
      : { target: 0, suffix: value, isNumeric: false };
  }, [value]);

  const [display, setDisplay] = useState(isNumeric ? `0${suffix}` : value);

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(`${target}${suffix}`);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${Math.round(eased * target)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, target, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
