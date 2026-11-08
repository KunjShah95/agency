"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./fx/SpotlightCard";
import Reveal from "./fx/Reveal";
import { Section, Heading, Serif } from "./fx/Section";
import { openBrief } from "@/lib/site";
import { track } from "@/lib/track";

/* ---------- tiny looping visuals, one per service ---------- */

function WebVisual() {
  const rows = [
    ["w-2/5", "bg-white/80"],
    ["w-4/5", "bg-white/15"],
    ["w-3/5", "bg-white/15"],
  ];
  return (
    <div className="relative h-full rounded-xl border border-white/10 bg-night p-4">
      <div className="mb-4 flex gap-1.5">
        {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-white/15" />)}
      </div>
      <div className="grid grid-cols-[1.4fr_1fr] gap-4">
        <div className="space-y-2.5">
          {rows.map(([w, c], i) => (
            <motion.div
              key={i}
              className={`h-2.5 rounded-full ${c} ${w}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-4 inline-flex h-7 items-center rounded-full bg-ember px-3 text-[10px] font-medium text-night"
          >
            Book a call →
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-lg bg-gradient-to-br from-ember/40 via-ember/10 to-transparent"
        />
      </div>
      <div className="absolute bottom-3 right-4 font-mono text-[10px] text-live">● live</div>
    </div>
  );
}

function AgentVisual() {
  const msgs = [
    { me: true, t: "Do you deliver to Bopal?" },
    { me: false, t: "Yes. Orders before 2 pm arrive today. Want me to start one?" },
    { me: true, t: "Yes, the usual." },
    { me: false, t: "Done. Order #2041 confirmed on WhatsApp ✓" },
  ];
  return (
    <div className="flex h-full flex-col justify-end gap-2.5 rounded-xl border border-white/10 bg-night p-4">
      {msgs.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.55, duration: 0.4 }}
          className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-snug ${
            m.me ? "self-end rounded-br-sm bg-white/10 text-neutral-200" : "self-start rounded-bl-sm border border-ember/30 bg-ember/10 text-neutral-100"
          }`}
        >
          {m.t}
        </motion.div>
      ))}
      <div className="mt-1 flex items-center gap-1 self-start pl-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-ember"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

function DesignVisual() {
  const sw = ["bg-ember", "bg-white", "bg-neutral-500", "bg-neutral-800"];
  return (
    <div className="relative flex h-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-night p-4">
      <div className="space-y-2">
        <div className="font-serif text-4xl italic text-white">Aa</div>
        <div className="flex gap-1.5">
          {sw.map((c) => <span key={c} className={`h-5 w-5 rounded-md border border-white/10 ${c}`} />)}
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-7 w-24 rounded-full bg-white text-center text-[10px] font-medium leading-7 text-night">Primary</div>
        <div className="h-7 w-24 rounded-full border border-white/20 text-center text-[10px] leading-7 text-neutral-300">Secondary</div>
      </div>
      <motion.svg
        viewBox="0 0 16 16"
        className="absolute h-4 w-4 text-ember"
        animate={{ x: [-40, 50, 20, -40], y: [10, -20, 25, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <path d="M1 1l5.5 13 2-5.5L14 6.5z" fill="currentColor" />
      </motion.svg>
    </div>
  );
}

function VideoVisual() {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-night p-4">
      <div className="grid grid-cols-4 gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="aspect-[9/14] rounded-md bg-gradient-to-b from-white/15 to-white/[0.03]" style={{ opacity: 1 - i * 0.15 }} />
        ))}
      </div>
      <div className="relative mt-3 h-6 rounded-md bg-white/5">
        <div className="absolute inset-y-1 left-1 right-1/3 rounded bg-ember/30" />
        <motion.div
          className="absolute -top-1 bottom-[-4px] w-px bg-ember shadow-[0_0_8px_rgba(255,91,46,0.9)]"
          animate={{ left: ["4%", "96%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

const services = [
  {
    id: "web",
    title: "Websites & web apps",
    body: "Fast, mobile first sites built in Next.js. They rank on Google, and you own every line of code. No Wix, no lock in.",
    tags: ["Marketing sites", "MVPs", "Stores"],
    price: "from ₹15,000",
    Visual: WebVisual,
    span: "lg:col-span-4",
  },
  {
    id: "agent",
    title: "AI agents",
    body: "Agents that do a real job: answer customers, take orders, run a workflow. Wired into your docs and tools, not a toy chatbot.",
    tags: ["Support", "WhatsApp", "RAG"],
    price: "from ₹15,000",
    Visual: AgentVisual,
    span: "lg:col-span-2 lg:row-span-2",
    tall: true,
  },
  {
    id: "design",
    title: "UI / UX design",
    body: "The screens people actually use, and a component set your product can grow into.",
    tags: ["Product", "Design systems"],
    price: "from ₹15,000",
    Visual: DesignVisual,
    span: "lg:col-span-2",
  },
  {
    id: "video",
    title: "AI video",
    body: "Launch reels, explainers and ad clips. Written, generated and delivered ready to post.",
    tags: ["Reels", "Ads"],
    price: "quoted per reel",
    Visual: VideoVisual,
    span: "lg:col-span-2",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Heading
        eyebrow="What I build"
        title={<>Four crafts. <Serif>One</Serif> pair of hands.</>}
        sub="Most projects need two or three of these together. That is easier when one person does all of them."
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(0,1fr)] lg:grid-cols-6">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.06} className={`${s.span} ${s.tall ? "sm:col-span-2 lg:col-span-2" : ""}`}>
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col p-5 sm:p-6">
                <div className={s.tall ? "h-80 lg:h-auto lg:min-h-80 lg:flex-1" : "h-48"}>
                  <s.Visual />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-neutral-400">{t}</span>
                  ))}
                </div>
                <div className={s.tall ? "h-6" : "min-h-6 flex-1"} />
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-xs text-neutral-500">{s.price}</span>
                  <button
                    type="button"
                    onClick={() => {
                      track("service_briefed", { service: s.id, source: "services" });
                      openBrief(s.id, "services");
                    }}
                    className="group/b inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    Brief this
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 transition-all group-hover/b:-rotate-45 group-hover/b:border-ember group-hover/b:bg-ember group-hover/b:text-night">→</span>
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
