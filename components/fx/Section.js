import Reveal from "./Reveal";

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-page scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

/* Small pill label + big silver headline + muted sub. */
export function Heading({ eyebrow, title, sub, align = "center" }) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_2px_rgba(255,91,46,0.6)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-silver mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {sub && <p className={`mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg ${center ? "mx-auto max-w-xl" : "max-w-lg"}`}>{sub}</p>}
    </Reveal>
  );
}

export function Serif({ children }) {
  return <span className="font-serif font-normal italic tracking-normal text-ember">{children}</span>;
}
