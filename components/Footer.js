import { site, mailto } from "@/lib/site";

const links = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Packages", "#packages"],
  ["FAQ", "#faq"],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden border-t border-ink/14 px-6 pt-16 sm:px-10">
      <div className="mx-auto grid max-w-page gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-600">
            A one person design and engineering studio in {site.city}. Web,
            interface design, AI agents and AI video.
          </p>
          <a href={mailto("Project inquiry")} className="link-underline mt-5 inline-block pb-0.5 font-mono text-sm text-ink">
            {site.email}
          </a>
        </div>
        <nav aria-label="Footer">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">Site</div>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="link-underline pb-0.5 text-ink-600 hover:text-ink">{l}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">Next step</div>
          <a href="#contact" className="display mt-4 inline-flex items-center gap-2 text-2xl font-semibold transition-colors hover:text-vermillion">
            Start a project <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-2 text-sm text-ink-500">Reply {site.replyTime}.</p>
        </div>
      </div>

      {/* oversized wordmark, cropped by the page edge */}
      <div aria-hidden="true" className="display mx-auto mt-16 max-w-page select-none text-center text-[24vw] font-semibold leading-[0.78] tracking-[-0.06em] text-ink sm:text-[19vw] lg:text-[15rem]">
        Srijan<span className="text-vermillion">.</span>
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-2 border-t border-ink/14 py-6 font-mono text-[11px] text-ink-400 sm:flex-row">
        <span>© {year} {site.name}</span>
        <span>{site.city}, working everywhere</span>
      </div>
    </footer>
  );
}
