"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn(
        "fixed inset-x-0 top-3 z-50 mx-auto flex w-[95%] max-w-container items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 sm:px-8",
        scrolled
          ? "border-outline-variant/30 bg-surface-container/70 shadow-[0_0_15px_rgba(0,220,229,0.12)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <a href="#home" className="font-display text-base tracking-tighter text-primary-fixed-dim sm:text-lg">
        V.K.M<span className="hidden text-on-surface-variant sm:inline"> MISSION CONTROL</span>
      </a>

      <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "relative font-mono text-label-caps uppercase tracking-widest transition-colors",
              active === link.href
                ? "text-primary-fixed-dim"
                : "text-on-surface-variant hover:text-primary-fixed-dim"
            )}
          >
            {link.label}
            {active === link.href && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-primary-fixed-dim shadow-glow-cyan"
              />
            )}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="hidden text-on-surface-variant transition-colors hover:text-primary-fixed-dim sm:block"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="hidden text-on-surface-variant transition-colors hover:text-primary-fixed-dim sm:block"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-on-surface-variant transition-colors hover:text-primary-fixed-dim md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel absolute right-0 top-16 w-56 rounded-lg p-4 md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded px-3 py-2 font-mono text-label-caps uppercase tracking-widest transition-colors",
                      active === link.href
                        ? "bg-primary-fixed-dim/10 text-primary-fixed-dim"
                        : "text-on-surface-variant hover:text-primary-fixed-dim"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
