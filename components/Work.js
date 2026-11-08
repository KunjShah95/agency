"use client";

import TiltCard from "./fx/TiltCard";
import Reveal from "./fx/Reveal";
import { Section, Heading, Serif } from "./fx/Section";
import { track } from "@/lib/track";

/*
 * Each case: what was missing, what got built, what changed.
 * Only write results that are true and checkable.
 */
export const swarnikaQuote =
  "Had a wonderful experience working with you on our jewellery website! The website has turned out beautifully, with an elegant, premium and professional look that perfectly reflects our brand. Your creativity, attention to detail, patience and dedication throughout the process are truly appreciated. You understood our vision and brought it to life exactly the way we wanted. Thank you for your excellent work and support. Highly recommended!";

const projects = [
  {
    id: "swarnika",
    href: "https://swarnika-jewellery-phi.vercel.app/",
    poster: "swarnika",
    category: "Web design · Jewellery",
    year: "2026",
    title: "Swarnika Jewellery, Manek Chowk",
    before: "A wholesale gold and diamond counter whose buyers had no way to browse designs before a call or a visit.",
    built: "A premium catalogue site: 9K and 18K designs with weights and price ranges, a diamond cut picker, and wholesale quotes in one WhatsApp message.",
    results: [
      ["Catalogue", "weights and price ranges online"],
      ["1 message", "WhatsApp wholesale quote"],
      ["Premium", "in the client's own words"],
    ],
    quote: { text: swarnikaQuote, who: "Swarnika Jewellery", where: "Wholesale jeweller, Ahmedabad" },
  },
  {
    id: "jigisha",
    href: "https://jigishakiranshah.in/",
    img: "/work/jigisha.jpeg",
    alt: "Jigisha Kiran Shah, LIC advisor website",
    category: "Web · Local SEO",
    year: "2025",
    title: "Jigisha Kiran Shah, LIC Advisor",
    before: "An advisor with 22+ years and 2,700+ families behind her, and no way to be found by people searching on Google.",
    built: "A fast, search-first site on her own domain: a goal picker that opens WhatsApp pre-filled, a cover assessment form, and her clients' reviews and 5.0 Google rating up front.",
    results: [
      ["Page 1", "Google, local LIC searches"],
      ["6 goals", "each one a pre-filled WhatsApp"],
      ["Visit ↗", "jigishakiranshah.in", "https://jigishakiranshah.in/"],
    ],
    // Reviews from Jigisha's own clients, shown on the testimonials section
    // built for her site. Labelled as such: they praise her, not the studio.
    siteReviews: {
      label: "From the reviews section I built for her",
      items: [
        { text: "She guided me through every detail and helped me choose the best plan for long-term security.", who: "Dev Chhajed", where: "Ranip, Ahmedabad" },
        { text: "Jigisha ben personally guided me through every step and ensured our claim was settled within 20 days.", who: "Meena Shah", where: "Daxini Society, Ahmedabad" },
        { text: "Three generations of our family trust Jigisha ben with our financial protection.", who: "Kunj Shah", where: "Ahmedabad" },
      ],
    },
    // Add a line from Jigisha herself about the website once she sends one:
    // quote: { text: "...", who: "Jigisha Kiran Shah", where: "LIC Advisor, Ahmedabad" },
  },
  {
    id: "aaravsen",
    href: "https://aaravsen.vercel.app/",
    poster: "aarav",
    category: "Web design · Book launch",
    year: "2025",
    title: "Aarav Sen, Shattered Skies",
    before: "A debut genre bending novel that needed to feel like a real release, not a link in a bio.",
    built: "A typography led, atmospheric launch site around a strong author brand, with one clear path to pre order.",
    results: [
      ["Live", "author launch site"],
      ["Type led", "atmosphere over clutter"],
      ["1 path", "straight to pre order"],
    ],
  },
];

/* Typographic stand-ins until real screenshots are added to public/work/. */
function SwarnikaPoster() {
  return (
    <div className="theme-dark relative grid aspect-[16/10] place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,#3a2a12_0%,#17110a_45%,#070605_85%)]">
      <div aria-hidden="true" className="absolute inset-6 rounded-[14px] border border-[#d9b36c]/20" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/3 h-28 w-28 -translate-x-1/2 rounded-full bg-[#d9b36c]/25 blur-3xl" />
      <div className="relative px-6 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#d9b36c]/70">Wholesale · Manek Chowk</div>
        <div className="mt-3 font-serif text-4xl leading-none text-[#f3e3c0] sm:text-6xl">
          Swarnika <span className="italic text-[#d9b36c]">at</span> Manek Chowk.
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["9K · 18K", "BIS hallmarked", "IGI / GIA"].map((c) => (
            <span key={c} className="rounded-full border border-[#d9b36c]/30 px-3 py-1 text-[11px] text-[#e9d3a4]">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Poster() {
  return (
    <div className="theme-dark relative grid aspect-[16/10] place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_120%,#3b1d14_0%,#120b09_45%,#050505_80%)]">
      <div aria-hidden="true" className="dots absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-[18%] h-24 w-24 -translate-x-1/2 rounded-full bg-ember/40 blur-3xl" />
      <div className="relative text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-500">A novel by Aarav Sen</div>
        <div className="mt-3 font-serif text-5xl italic leading-none text-white sm:text-6xl">Shattered</div>
        <div className="font-serif text-5xl italic leading-none text-ember sm:text-6xl">Skies</div>
        <div className="mx-auto mt-5 w-fit rounded-full border border-white/20 px-4 py-1.5 text-[11px] text-neutral-300">Pre order →</div>
      </div>
    </div>
  );
}

function Case({ p, i }) {
  const flip = i % 2 === 1;
  return (
    <Reveal>
      <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <TiltCard className={flip ? "lg:order-2" : ""}>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("work_opened", { project: p.id, source: "image" })}
            className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-night-800 p-2 shadow-[0_30px_80px_-30px_rgba(255,91,46,0.35)]"
          >
            <div className="overflow-hidden rounded-[18px] border border-white/10">
              {p.poster === "swarnika" ? (
                <SwarnikaPoster />
              ) : p.poster ? (
                <Poster />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.img} alt={p.alt} loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" />
              )}
            </div>
            <span style={{ transform: "translateZ(40px)" }} className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-night shadow-lg transition-colors group-hover:bg-ember">
              Open live site ↗
            </span>
          </a>
        </TiltCard>

        <div className={flip ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
            <span className="text-ember">{p.category}</span>
            <span className="h-px w-8 bg-white/15" />
            <span className="text-neutral-500">{p.year}</span>
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">{p.title}</h3>
          <dl className="mt-8 space-y-5">
            {[["What was missing", p.before], ["What I built", p.built]].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">{k}</dt>
                <dd className="mt-1.5 leading-relaxed text-neutral-300">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {p.results.map(([k, v, href]) =>
              href ? (
                <a
                  key={k}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track("work_opened", { project: p.id, source: "result_link" })}
                  className="group/link bg-night-900 p-4 transition-colors hover:bg-night-800"
                >
                  <div className="text-xl font-semibold tracking-tight text-ember sm:text-2xl">{k}</div>
                  <div className="mt-1 break-all text-xs leading-snug text-neutral-300 underline decoration-ember/40 underline-offset-2 group-hover/link:decoration-ember">{v}</div>
                </a>
              ) : (
                <div key={k} className="bg-night-900 p-4">
                  <div className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{k}</div>
                  <div className="mt-1 text-xs leading-snug text-neutral-500">{v}</div>
                </div>
              )
            )}
          </div>
          {p.siteReviews && (
            <div className="mt-8">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                <span className="text-ember">★ 5.0</span> {p.siteReviews.label}
              </div>
              <ul className="mt-3 space-y-2.5">
                {p.siteReviews.items.map((r) => (
                  <li key={r.text} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <p className="text-sm leading-relaxed text-neutral-300">&ldquo;{r.text}&rdquo;</p>
                    <p className="mt-1.5 text-xs text-neutral-500">
                      <span className="text-neutral-300">{r.who}</span> · {r.where}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {p.quote && (
            <figure className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-6">
              <div className="flex gap-0.5 text-ember" aria-label="5 out of 5">
                {[0, 1, 2, 3, 4].map((i) => <span key={i} aria-hidden="true">★</span>)}
              </div>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-neutral-300">&ldquo;{p.quote.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-medium text-white">{p.quote.who}</span>
                <span className="text-neutral-500"> · {p.quote.where}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <Section id="work">
      <Heading
        eyebrow="Selected work"
        title={<>Less pitch. <Serif>More proof.</Serif></>}
        sub="Real sites you can open right now. Each one starts with what was missing and ends with what changed."
      />
      <div className="mt-20 space-y-28">
        {projects.map((p, i) => <Case key={p.id} p={p} i={i} />)}
      </div>
    </Section>
  );
}
