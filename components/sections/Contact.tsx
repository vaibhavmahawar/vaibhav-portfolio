"use client";

import { Mail, Github, Linkedin, FileDown, MapPin, CircleDot } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { icon: Github, label: "GitHub", value: "vaibhavmahawar", href: profile.github, external: true },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vaibhavkumarmahawar",
    href: profile.linkedin,
    external: true,
  },
  { icon: FileDown, label: "Resume", value: "Download PDF", href: profile.resumeUrl, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-outline-variant/10 py-stack-lg">
      <Reveal>
        <div className="glass-panel relative overflow-hidden rounded-lg p-6 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,220,229,0.08),transparent_65%)]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="font-mono text-label-caps uppercase tracking-[0.3em] text-primary-fixed-dim">
              {"// INITIALIZE_COMMUNICATION"}
            </div>
            <h2 className="mt-3 font-display text-3xl text-on-surface sm:text-4xl">Let&apos;s build intelligent systems</h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-body-md text-on-surface-variant">
              Open to opportunities in AI engineering, computer vision, and scalable backend systems.
              Reach out — the uplink is ready for incoming transmissions.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-on-surface-variant">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary-fixed-dim" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CircleDot className="h-3.5 w-3.5 text-tertiary-fixed-dim animate-node-pulse" />
                {profile.availability}
              </span>
            </div>

            <div className="mt-8 flex justify-center">
              <MagneticButton href={`mailto:${profile.email}`} variant="primary">
                <Mail className="h-4 w-4" /> Initiate Handshake
              </MagneticButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="glass-panel glass-panel-hover group flex flex-col items-center gap-2 rounded-lg p-4"
                >
                  <c.icon className="h-5 w-5 text-on-surface-variant transition-colors group-hover:text-primary-fixed-dim" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-fixed-dim">
                    {c.label}
                  </span>
                  <span className="truncate text-[11px] text-on-surface-variant">{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
