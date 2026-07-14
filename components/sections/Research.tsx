"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { research } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Radar from "@/components/ui/Radar";

export default function Research() {
  return (
    <section id="research" className="scroll-mt-24 border-t border-outline-variant/10 py-stack-lg">
      <SectionHeading kicker={research.kicker} title={research.heading} align="center" />

      <div className="mt-12 grid grid-cols-1 gap-gutter lg:grid-cols-3">
        {/* Featured drone research with radar */}
        <Reveal className="lg:col-span-1">
          <div className="glass-panel glass-panel-hover relative flex h-full flex-col overflow-hidden rounded-lg p-6">
            <Radar className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 opacity-40" />
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded border border-primary-fixed-dim/30 bg-primary-fixed-dim/10">
                  <Icon name={research.areas[0].icon} className="h-4 w-4 text-primary-fixed-dim" />
                </span>
                <span className="font-mono text-[11px] font-bold tracking-widest text-primary-fixed-dim">
                  {research.areas[0].title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant">{research.areas[0].body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {research.areas[0].tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-0.5 font-mono text-[10px] text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Remaining areas */}
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:col-span-2">
          {research.areas.slice(1).map((area, i) => (
            <Reveal key={area.title} delayIndex={i}>
              <motion.div className="glass-panel glass-panel-hover h-full rounded-lg p-5" whileHover={{ y: -4 }}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded border border-tertiary-fixed-dim/30 bg-tertiary-fixed-dim/10">
                    <Icon name={area.icon} className="h-4 w-4 text-tertiary-fixed-dim" />
                  </span>
                  <span className="font-mono text-[11px] font-bold tracking-widest text-tertiary-fixed-dim">
                    {area.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-on-surface-variant">{area.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-0.5 font-mono text-[10px] text-on-surface-variant"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Publications — truthful note only, no fabricated citations */}
      <Reveal className="mt-gutter">
        <div className="glass-panel flex flex-col gap-3 rounded-lg border-l-2 border-l-primary-fixed-dim p-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 shrink-0 text-primary-fixed-dim" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary-fixed-dim">
              Publications
            </span>
          </div>
          <p className="text-sm leading-relaxed text-on-surface-variant">{research.publicationsNote}</p>
        </div>
      </Reveal>
    </section>
  );
}
