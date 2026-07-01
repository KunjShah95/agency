"use client";

import { motion } from "framer-motion";
import HeroFX from "./HeroFX";
import TiltCard from "./TiltCard";

const stats = [
  { k: "1", v: "person, whole build" },
  { k: "2 to 6 wks", v: "typical timeline" },
  { k: "Ahmedabad", v: "based, working global" },
];

export default function Hero() {
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative overflow-hidden px-5 pb-24 pt-40 sm:px-8"
    >
      {/* grid + aurora backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mask-radial absolute inset-0 bg-grid" />
        <div className="aurora absolute left-1/2 top-[-160px] h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
      </div>
      <HeroFX />
      {/* cursor-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 20%), rgba(124,92,255,0.10), transparent 60%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            One person who does web, design, AI, and video
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl font-bold leading-[1.02] tracking-tight [text-shadow:0_0_40px_rgba(124,92,255,0.25)] sm:text-7xl"
          >
            You explain the idea.
            <br />
            <span className="gradient-text">I build the whole thing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-white/60"
          >
            Websites, interfaces, AI agents, and AI video. Instead of hiring four
            freelancers and stitching their work together, you talk to one person
            who builds all of it and ships it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-violet-glow/30 bg-violet-glow/10 px-4 py-2 text-sm text-white/85"
          >
            <span className="text-violet-300">⚡</span>
            Most MVPs ready to ship in 2 weeks
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="moving-border inline-block">
              <span className="block rounded-full px-6 py-3 text-sm font-medium text-white">
                Book a call
              </span>
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/40"
            >
              See services
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="text-xl font-semibold text-white">{s.k}</div>
                <div className="text-xs text-white/45">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* minimal services panel */}
        <TiltCard className="[transform-style:preserve-3d]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass relative overflow-hidden rounded-2xl p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-glow/20 blur-3xl" />
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                What I do
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/45">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                open for work
              </span>
            </div>

            <div className="mt-7 divide-y divide-white/5">
              {[
                ["01", "Web Development"],
                ["02", "Interface Design"],
                ["03", "AI Agents"],
                ["04", "Video Generation"],
              ].map(([n, label]) => (
                <div
                  key={n}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="font-mono text-xs text-white/30">{n}</span>
                  <span className="text-lg font-medium text-white/85">
                    {label}
                  </span>
                  <span className="ml-auto text-white/25 transition-colors group-hover:text-violet-300">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
}
