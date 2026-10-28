"use client";

import { motion } from "framer-motion";
import { Reveal, Section, SectionHeader } from "./ui";

const services = [
  {
    tag: "01",
    title: "Web Development",
    body: "Websites and web apps that load fast and hold up on a phone. Built in Next.js, so they rank on Google and you own the code. No Wix, no lock in.",
    points: ["Landing and marketing sites", "MVPs and web apps", "Online stores"],
    motif: "<web/>",
    tone: "bg-[#e8e4da]",
  },
  {
    tag: "02",
    title: "Interface Design",
    body: "The screens people actually use. I map the flow, design the layout, and build a component set your product can grow into. Clean and usable, not clever for its own sake.",
    points: ["Product and app design", "Design systems", "Prototypes and flows"],
    motif: "Aa",
    tone: "bg-[#f3dfd3]",
  },
  {
    tag: "03",
    title: "AI Agents",
    body: "Agents that do a real job. Answer support, pull research, run a workflow. Wired into your own docs and tools, not a toy chatbot. Something you would leave running.",
    points: ["Chat and support agents", "Workflow automation", "RAG and tool use"],
    motif: "✳",
    tone: "bg-[#dce3d8]",
  },
  {
    tag: "04",
    title: "AI Video",
    body: "Short AI made videos for launches and ads. Product reels, explainers, social clips. I write it, generate it, and hand you a file that is ready to post.",
    points: ["Product and promo reels", "Explainer videos", "Social ad content"],
    motif: "▶",
    tone: "bg-[#e5e0ed]",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader kicker="What I build" sub="A small, connected set of capabilities, tailored to what your business needs next.">
        One partner, from the first
        <br className="hidden sm:block" /> idea to the finished product.
      </SectionHeader>

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className={`group relative isolate h-full min-h-[310px] overflow-hidden rounded-editorial border border-ink/10 ${s.tone} p-7 text-left sm:p-9`}
            >
              <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,59,30,0.18),transparent_68%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.16em] text-ink-500">{s.tag} / 04</span>
                <span aria-hidden="true" className="display text-3xl text-ink/55 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:text-vermillion">{s.motif}</span>
              </div>
              <h3 className="display mt-10 text-3xl font-semibold tracking-tight sm:text-4xl">{s.title}</h3>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-600">
                {s.body}
              </p>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/15 pt-4">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="font-mono text-[10px] uppercase tracking-wide text-ink-500"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
