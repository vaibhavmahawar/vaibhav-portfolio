import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-lowest/60">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-margin py-6 md:flex-row">
        <div className="font-mono text-[11px] tracking-wide text-tertiary-fixed-dim">
          © {year} {profile.name.toUpperCase()} {"//"} SYSTEM STATUS: OPTIMAL
        </div>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-on-surface-variant/70 transition-colors hover:text-primary-fixed-dim"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-on-surface-variant/70 transition-colors hover:text-primary-fixed-dim"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-on-surface-variant/70 transition-colors hover:text-primary-fixed-dim"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
