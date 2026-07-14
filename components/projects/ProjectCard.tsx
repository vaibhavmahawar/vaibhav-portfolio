"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronDown,
  Cpu,
  ListChecks,
  Network,
  GraduationCap,
  ImageIcon,
} from "lucide-react";
import type { Project } from "@/lib/data";
import Diagram from "@/components/diagrams";
import DroneDashboard from "./DroneDashboard";
import { cn } from "@/lib/utils";

function DetailBlock({
  icon: IconCmp,
  title,
  items,
}: {
  icon: typeof ListChecks;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary-fixed-dim">
        <IconCmp className="h-3.5 w-3.5" />
        {title}
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-xs leading-relaxed text-on-surface-variant">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-tertiary-fixed-dim" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);

  if (featured) {
    return (
      <article className="glass-panel glass-panel-hover overflow-hidden rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            {project.diagram === "drone" ? (
              <DroneDashboard />
            ) : (
              <Diagram kind={project.diagram} className="min-h-[360px] p-6" />
            )}
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5">
            <div className="mb-2 font-mono text-[10px] tracking-widest">
              <span className="text-primary-fixed-dim">
                {project.index} {"//"} {project.codename}
              </span>
            </div>
            <h3 className="font-headline text-headline-lg text-on-surface">{project.name}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-tertiary-fixed-dim">
              {project.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-0.5 font-mono text-[10px] text-on-surface-variant"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-outline-variant/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-on-surface transition-colors hover:border-primary-fixed-dim hover:text-primary-fixed-dim"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-primary-fixed-dim"
              >
                {open ? "Collapse" : "Deep Dive"}
                <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-6 border-t border-outline-variant/20 p-6 sm:p-8 md:grid-cols-2">
                <DetailBlock icon={ListChecks} title="Features" items={project.features} />
                <DetailBlock icon={Cpu} title="Engineering Challenges" items={project.challenges} />
                <DetailBlock icon={Network} title="System Architecture" items={project.architecture} />
                <DetailBlock icon={GraduationCap} title="Lessons Learned" items={project.lessons} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    );
  }

  return (
    <article className="glass-panel glass-panel-hover overflow-hidden rounded-lg">
      {/* Header / preview */}
      <div className="relative aspect-video overflow-hidden border-b border-outline-variant/20 bg-surface-container-lowest">
        <Diagram kind={project.diagram} className="p-4" />
        <div className="absolute left-3 top-3 font-mono text-[10px] tracking-widest text-primary-fixed-dim">
          {project.index} {"//"} {project.codename}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-headline text-headline-md text-on-surface">{project.name}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-tertiary-fixed-dim">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-0.5 font-mono text-[10px] text-on-surface-variant"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-outline-variant/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-on-surface transition-colors hover:border-primary-fixed-dim hover:text-primary-fixed-dim"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-outline-variant/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-on-surface transition-colors hover:border-primary-fixed-dim hover:text-primary-fixed-dim"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded border border-outline-variant/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant/50">
              <ExternalLink className="h-3.5 w-3.5" /> Demo Soon
            </span>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-primary-fixed-dim"
          >
            {open ? "Collapse" : "Deep Dive"}
            <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid grid-cols-1 gap-6 border-t border-outline-variant/20 pt-6 md:grid-cols-2">
                <DetailBlock icon={ListChecks} title="Features" items={project.features} />
                <DetailBlock icon={Cpu} title="Engineering Challenges" items={project.challenges} />
                <DetailBlock icon={Network} title="System Architecture" items={project.architecture} />
                <DetailBlock icon={GraduationCap} title="Lessons Learned" items={project.lessons} />
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary-fixed-dim">
                  <ImageIcon className="h-3.5 w-3.5" /> Screenshots
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[0, 1, 2].map((n) => (
                    <div
                      key={n}
                      className="flex aspect-video items-center justify-center rounded border border-dashed border-outline-variant/30 bg-surface-container-lowest font-mono text-[9px] tracking-widest text-on-surface-variant/40"
                    >
                      IMG_0{n + 1}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
