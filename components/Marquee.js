"use client";

const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "Node.js",
  "Vercel",
  "OpenAI",
  "Playwright",
  "Supabase",
  "Postgres",
];

export default function Marquee() {
  const row = [...tools, ...tools];
  return (
    <div className="relative py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.18em] text-white/35">
        The tools I build with
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-glow/80" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
