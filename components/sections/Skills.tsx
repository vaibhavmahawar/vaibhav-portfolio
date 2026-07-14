"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { skillCategories, certifications } from "@/lib/data";
import { accentMap, cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-outline-variant/10 py-stack-lg">
      <SectionHeading kicker="// TECH_CAPABILITIES" title="Skills & Toolchain" align="center" />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => {
          const accent = accentMap[cat.accent];
          return (
            <Reveal key={cat.title} delayIndex={i % 4}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "glass-panel h-full rounded-lg border-l-2 p-5 transition-shadow",
                  accent.borderL,
                  accent.hoverShadow
                )}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className={cn("flex h-8 w-8 items-center justify-center rounded border", accent.iconWrap)}>
                    <Icon name={cat.icon} className={cn("h-4 w-4", accent.text)} />
                  </span>
                  <span className={cn("font-mono text-[11px] font-bold tracking-widest", accent.text)}>
                    {cat.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-outline-variant/25 bg-surface-container-high/60 px-2 py-1 font-mono text-[10px] text-on-surface-variant transition-colors hover:border-outline-variant/60 hover:text-on-surface"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-gutter grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delayIndex={i}>
            <div className="glass-panel flex h-full items-start gap-3 rounded-lg p-5">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-tertiary-fixed-dim" />
              <div>
                <div className="font-headline text-sm text-on-surface">{cert.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">{cert.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
