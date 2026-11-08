import Marquee from "./fx/Marquee";

const tools = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Node.js", "Vercel", "OpenAI", "Claude", "Supabase", "Postgres", "Playwright"];

export default function Stack() {
  return (
    <div className="relative mx-auto max-w-page px-5 py-14 sm:px-8">
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
        Built with the tools serious product teams use
      </p>
      <Marquee className="mt-8" duration="45s">
        {tools.map((t) => (
          <span key={t} className="whitespace-nowrap text-lg font-medium tracking-tight text-neutral-500 transition-colors hover:text-white">
            {t}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
