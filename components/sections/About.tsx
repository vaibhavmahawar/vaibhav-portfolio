"use client";

import { GraduationCap } from "lucide-react";
import { about, education } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-stack-lg">
      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="font-mono text-label-caps uppercase tracking-[0.3em] text-primary-fixed-dim">
              {about.kicker}
            </h2>
            <h3 className="mt-4 font-headline text-headline-lg text-on-surface">{about.heading}</h3>
          </Reveal>

          <Reveal delayIndex={1} className="mt-6 space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="glass-panel rounded-lg p-4">
                <div className="mb-1 flex items-center gap-2 text-primary-fixed-dim">
                  <GraduationCap className="h-4 w-4" />
                  <span className="font-mono text-[10px] tracking-widest">{edu.period}</span>
                </div>
                <div className="font-headline text-sm text-on-surface">{edu.degree}</div>
                <div className="mt-1 text-xs text-on-surface-variant">{edu.school}</div>
                <div className="mt-1 font-mono text-[11px] text-tertiary-fixed-dim">{edu.score}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="space-y-6 lg:col-span-8">
          <Reveal className="glass-panel rounded-lg p-6 sm:p-8">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 font-body text-body-md leading-relaxed text-on-surface last:mb-0">
                {p}
              </p>
            ))}
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {about.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delayIndex={i}>
                <div className="glass-panel glass-panel-hover h-full rounded-lg p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded border border-primary-fixed-dim/30 bg-primary-fixed-dim/10">
                      <Icon name={pillar.icon} className="h-4 w-4 text-primary-fixed-dim" />
                    </span>
                    <span className="font-mono text-[11px] font-bold tracking-widest text-primary-fixed-dim">
                      {pillar.title}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-on-surface-variant">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
