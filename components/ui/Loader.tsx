"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Boot-sequence loading animation. Runs once on first mount, then reveals
 * the site. Kept short so it never hurts perceived performance.
 */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }
    const start = performance.now();
    const duration = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 220);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="font-display text-2xl tracking-tighter text-primary-fixed-dim"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              V.K.M
            </motion.div>
            <div className="h-px w-56 overflow-hidden bg-outline-variant/30">
              <motion.div
                className="h-full bg-primary-fixed-dim shadow-glow-cyan"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-on-surface-variant">
              INITIALIZING MISSION CONTROL · {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
