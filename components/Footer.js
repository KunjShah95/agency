import { site, mailto, whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-5 pt-16 sm:px-8">
      <div className="mx-auto grid max-w-page gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
            A one person design and engineering studio in {site.city}. Websites,
            UI/UX, AI agents and AI video.
          </p>
          <a href={mailto("Project inquiry")} className="mt-5 inline-block font-mono text-sm text-white underline decoration-ember underline-offset-4">
            {site.email}
          </a>
          {site.whatsapp && (
            <a href={whatsappLink("Hi, I'd like to talk about a project.")} target="_blank" rel="noreferrer" className="mt-3 flex w-fit items-center gap-2 font-mono text-sm text-neutral-300 transition-colors hover:text-[#25d366]">
              <WhatsAppIcon /> {site.phone}
            </a>
          )}
        </div>
        <nav aria-label="Footer">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-600">Site</div>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map(([l, h]) => (
              <li key={h}><a href={h} className="text-neutral-400 transition-colors hover:text-white">{l}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-600">Next step</div>
          <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-ember">
            Start a project <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-2 text-sm text-neutral-500">Reply {site.replyTime}.</p>
        </div>
      </div>

      {/* oversized wordmark, fading into the page */}
      <div aria-hidden="true" className="relative mx-auto mt-20 max-w-page select-none text-center">
        <div className="bg-gradient-to-b from-white/20 to-transparent bg-clip-text pb-[0.08em] text-[26vw] font-semibold leading-[0.95] tracking-[-0.07em] text-transparent lg:text-[17rem]">
          srijan
        </div>
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-2 border-t border-white/10 py-6 font-mono text-[11px] text-neutral-600 sm:flex-row">
        <span>© {year} {site.name}</span>
        <span>{site.city}, working everywhere</span>
      </div>
    </footer>
  );
}
