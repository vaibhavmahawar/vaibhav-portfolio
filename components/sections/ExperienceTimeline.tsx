"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-outline-variant/10 py-stack-lg">
      <SectionHeading kicker="// COMMS_LOG · HISTORY" title="Experience" align="center" />

      <div className="relative mx-auto mt-12 max-w-3xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary-fixed-dim/50 via-outline-variant/20 to-transparent" />

        {experience.map((exp, i) => (
          <Reveal key={exp.company} delayIndex={i} className="relative mb-8 pl-12 last:mb-0">
            <motion.span
              className="absolute left-[9px] top-6 h-3 w-3 rounded-full bg-primary-fixed-dim shadow-glow-cyan"
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <article className="glass-panel glass-panel-hover rounded-lg p-6">
              <div className="mb-1 flex items-center gap-2 font-mono text-[11px] tracking-widest text-primary-fixed-dim">
                <Briefcase className="h-3.5 w-3.5" />
                {exp.period}
              </div>
              <h3 className="font-headline text-headline-md text-on-surface">{exp.role}</h3>
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                {exp.company} · {exp.location}
              </div>
              <p className="mb-4 text-sm text-on-surface-variant">{exp.summary}</p>
              <ul className="mb-4 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-on-surface-variant">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-tertiary-fixed-dim" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-outline-variant/30 bg-surface-container-high px-2.5 py-0.5 font-mono text-[10px] text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
