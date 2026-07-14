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
    <div className="border-y border-ink/12 py-6">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <span
              key={i}
              className="shrink-0 font-mono text-sm uppercase tracking-wide text-ink-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
