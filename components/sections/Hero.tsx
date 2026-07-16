"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile, stats } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import TypingText from "@/components/ui/TypingText";
import Counter from "@/components/ui/Counter";
import RobotAsset from "@/components/assets/RobotAsset";
import DroneAsset from "@/components/assets/DroneAsset";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center pt-28 sm:pt-24">
      <div className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
        <div className="z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-fixed-dim/30 bg-primary-fixed-dim/10 px-3 py-1"
          >
            <span className="h-2 w-2 rounded-full bg-primary-fixed-dim animate-node-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-primary-fixed-dim">
              SYSTEM STATUS: OPERATIONAL // V.K.M
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 font-display text-4xl leading-[1.02] tracking-tight text-primary-fixed-dim sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-5 font-mono text-sm tracking-wide text-tertiary-fixed-dim sm:text-base"
          >
            <span className="text-on-surface-variant">&gt; </span>
            <TypingText phrases={[...profile.roles]} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mb-4 max-w-2xl font-headline text-headline-md text-on-surface"
          >
            {profile.headline[0]} <span className="italic text-primary-fixed-dim">{profile.headline[1]}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 max-w-2xl font-body text-body-md text-on-surface-variant"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-12 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={profile.github} variant="ghost" external ariaLabel="GitHub">
              <Github className="h-4 w-4" /> GitHub
            </MagneticButton>
            <MagneticButton href={profile.linkedin} variant="ghost" external ariaLabel="LinkedIn">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </MagneticButton>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.a
                key={stat.label}
                href={stat.href}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4 }}
                className="group glass-panel glass-panel-hover block rounded border-l-2 border-l-primary-fixed-dim p-4"
                title={`${stat.hint} — click to view`}
                aria-label={`${stat.label}: ${stat.value}. ${stat.hint}. Jump to section.`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-primary-fixed-dim">
                  {stat.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-1 font-display text-2xl font-semibold text-on-surface">
                  <Counter value={stat.value} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Asset bay — robot + drone */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 mt-8 grid grid-cols-2 gap-gutter lg:col-span-5 lg:mt-0 lg:grid-cols-1"
        >
          <div className="group relative overflow-hidden rounded-lg glass-panel glass-panel-hover p-1">
            <div className="relative flex items-center justify-center rounded bg-surface-container-lowest/80 py-4">
              <RobotAsset className="h-40 w-full max-w-[220px]" />
              <div className="scan-line opacity-60" />
              <div className="pointer-events-none absolute inset-0 rounded border border-primary-fixed-dim/20" />
            </div>
            <div className="absolute bottom-2 left-2 border border-primary-fixed-dim/30 bg-black/60 px-2 py-1 font-mono text-[8px] text-primary-fixed-dim">
              ASSET_ID: AI_CORE {"//"} STATUS: ONLINE
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg glass-panel glass-panel-hover p-1">
            <div className="relative flex items-center justify-center rounded bg-surface-container-lowest/80 py-4">
              <DroneAsset className="h-40 w-full max-w-[240px]" />
              <div className="scan-line opacity-60" />
              <div className="pointer-events-none absolute inset-0 rounded border border-primary-fixed-dim/20" />
            </div>
            <div className="absolute bottom-2 left-2 border border-primary-fixed-dim/30 bg-black/60 px-2 py-1 font-mono text-[8px] text-primary-fixed-dim">
              ASSET_ID: DRONE_V3 {"//"} STATUS: STANDBY
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-on-surface-variant/60 md:flex"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-primary-fixed-dim to-transparent"
        />
      </motion.div>
    </section>
  );
}
