"use client";

import { Reveal, Section, SectionHeader } from "./ui";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    tag: "01",
    title: "Web Development",
    body: "Websites and web apps that load fast and don't fall apart on a phone. Built in Next.js, so they rank well on Google and you own the code. No Wix, no lock in.",
    points: ["Landing and marketing sites", "MVPs and web apps", "Online stores"],
    accent: "from-violet-glow/25",
  },
  {
    tag: "02",
    title: "Interface Design",
    body: "The screens people actually use. I map the flow, design the layout, and build a component set your product can grow into. Clean and usable, not clever for its own sake.",
    points: ["Product and app design", "Design systems", "Prototypes and flows"],
    accent: "from-sky-500/25",
  },
  {
    tag: "03",
    title: "AI Agents",
    body: "Agents that do an actual job. Answer support, pull research, run a workflow. Wired into your own docs and tools, not a toy chatbot. Something you would leave running.",
    points: ["Chat and support agents", "Workflow automation", "RAG and tool use"],
    accent: "from-emerald-500/25",
  },
  {
    tag: "04",
    title: "Video Generation",
    body: "Short AI made videos for launches and ads. Product reels, explainers, social clips. I write it, generate it, and hand you a file that is ready to post.",
    points: ["Product and promo reels", "Explainer videos", "Social ad content"],
    accent: "from-fuchsia-500/25",
  },
];

function Icon({ i }) {
  const paths = [
    "M4 6h16M4 12h16M4 18h10",
    "M4 5h16v10H4zM8 19h8",
    "M12 3v3m0 12v3m9-9h-3M6 12H3m4.5-4.5 2 2m5 5 2 2m0-9-2 2m-5 5-2 2",
    "M15 10l4.5-2.5v9L15 14M4 7h11v10H4z",
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-violet-300"
    >
      <path d={paths[i]} />
    </svg>
  );
}

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader eyebrow="What I build">
        Four things I do,{" "}
        <span className="text-white/50">and I do all of them myself.</span>
      </SectionHeader>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <SpotlightCard className="glass glass-hover group relative h-full overflow-hidden rounded-2xl p-7">
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:border-violet-glow/40">
                  <Icon i={i} />
                </div>
                <span className="font-mono text-sm text-white/30">{s.tag}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {s.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
