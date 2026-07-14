"use client";

import { motion } from "framer-motion";
import { Reveal, Section, SectionHeader } from "./ui";

const services = [
  {
    tag: "01",
    title: "Web Development",
    body: "Websites and web apps that load fast and hold up on a phone. Built in Next.js, so they rank on Google and you own the code. No Wix, no lock in.",
    points: ["Landing and marketing sites", "MVPs and web apps", "Online stores"],
  },
  {
    tag: "02",
    title: "Interface Design",
    body: "The screens people actually use. I map the flow, design the layout, and build a component set your product can grow into. Clean and usable, not clever for its own sake.",
    points: ["Product and app design", "Design systems", "Prototypes and flows"],
  },
  {
    tag: "03",
    title: "AI Agents",
    body: "Agents that do a real job. Answer support, pull research, run a workflow. Wired into your own docs and tools, not a toy chatbot. Something you would leave running.",
    points: ["Chat and support agents", "Workflow automation", "RAG and tool use"],
  },
  {
    tag: "04",
    title: "AI Video",
    body: "Short AI made videos for launches and ads. Product reels, explainers, social clips. I write it, generate it, and hand you a file that is ready to post.",
    points: ["Product and promo reels", "Explainer videos", "Social ad content"],
  },
];

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader kicker="What I build">
        Four things I do, and I do
        <br className="hidden sm:block" /> all of them myself.
      </SectionHeader>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group h-full rounded-editorial border border-ink/14 bg-paper-100 p-8 text-center transition-colors hover:border-vermillion"
            >
              <div className="display text-5xl font-semibold text-ink-400 transition-colors duration-300 group-hover:text-vermillion">
                {s.tag}
              </div>
              <h3 className="display mt-5 text-2xl font-semibold">{s.title}</h3>
              <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-ink-600">
                {s.body}
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="font-mono text-[11px] uppercase tracking-wide text-ink-500"
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
