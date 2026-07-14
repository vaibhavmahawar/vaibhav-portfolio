"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type DiagramNode = {
  id: string;
  label: string;
  x: number; // 0-100 (%)
  y: number; // 0-100 (%)
  accent?: "cyan" | "emerald" | "blue" | "muted";
  w?: number; // width in %
};

export type DiagramEdge = {
  from: string;
  to: string;
};

const accentStroke: Record<NonNullable<DiagramNode["accent"]>, string> = {
  cyan: "#00dce5",
  emerald: "#66dd8b",
  blue: "#b8c3ff",
  muted: "#849495",
};

const accentClass: Record<NonNullable<DiagramNode["accent"]>, string> = {
  cyan: "border-primary-fixed-dim/60 bg-primary-fixed-dim/10 text-primary-fixed-dim",
  emerald: "border-tertiary-fixed-dim/60 bg-tertiary-fixed-dim/10 text-tertiary-fixed-dim",
  blue: "border-secondary-fixed-dim/60 bg-secondary-fixed-dim/10 text-secondary-fixed-dim",
  muted: "border-outline-variant/40 bg-white/5 text-on-surface-variant",
};

/**
 * Reusable animated SVG architecture diagram. Nodes are positioned on a
 * percentage grid; edges are drawn as flowing dashed connectors between
 * node centers. Fully responsive — scales with its container.
 */
export default function ArchitectureDiagram({
  nodes,
  edges,
  className,
  label,
}: {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  className?: string;
  label?: string;
}) {
  const byId = new Map(nodes.map((n) => [n.id, n]));

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)} role="img" aria-label={label}>
      {/* Connectors */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {edges.map((e, i) => {
          const a = byId.get(e.from);
          const b = byId.get(e.to);
          if (!a || !b) return null;
          const stroke = accentStroke[a.accent ?? "cyan"];
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={stroke}
              strokeOpacity={0.5}
              strokeWidth={0.4}
              strokeDasharray="2 2"
              className="animate-dash-flow"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* Nodes — outer wrapper handles centering (translate) so it never
          conflicts with Framer Motion's transform used for the entrance. */}
      {nodes.map((n, i) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <motion.div
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded border px-2.5 py-1 text-center font-mono text-[9px] leading-tight tracking-wide sm:text-[10px]",
              accentClass[n.accent ?? "cyan"]
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            {n.label}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
