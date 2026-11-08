import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Process from "@/components/Process";
import Reveal from "@/components/fx/Reveal";
import Spotlight from "@/components/fx/Spotlight";
import { Section, Heading, Serif } from "@/components/fx/Section";
import { Case } from "@/components/Work";
import { projects } from "@/lib/projects";
import { servicePages } from "@/lib/content";
import { serviceSchema, JsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = servicePages.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: { absolute: `${s.metaTitle} | Srijan Studio` },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}`, type: "website" },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDescription },
  };
}

function Check() {
  return (
    <svg viewBox="0 0 12 12" className="mt-1.5 h-3 w-3 shrink-0 text-ember" aria-hidden="true">
      <path d="M2 6.5 4.8 9 10 3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function ServicePage({ params }) {
  const s = servicePages.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const proof = s.proof && projects.find((p) => p.id === s.proof);
  const others = servicePages.filter((x) => x.slug !== s.slug);

  return (
    <main className="relative overflow-x-clip">
      <Nav />

      <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <Spotlight className="-left-10 -top-40 md:-left-32 md:-top-20" fill="#ff8a63" />
        <div aria-hidden="true" className="dots fade-edges pointer-events-none absolute inset-0 h-[700px]" />
        <div className="relative mx-auto max-w-page">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-neutral-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/#services" className="hover:text-white">Services</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-neutral-300">{s.name}</li>
            </ol>
          </nav>
          <h1 className="text-silver mt-8 max-w-4xl text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {s.h1}
          </h1>
          {/* Direct answer first: this is the paragraph Google and AI assistants quote. */}
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300">{s.answer}</p>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {[["Price", s.price], ["Timeline", s.timeline], ["Based in", site.city]].map(([k, v]) => (
              <div key={k} className="bg-night-900 p-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">{k}</dt>
                <dd className="mt-1 font-semibold text-white">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-white pl-6 pr-2 text-sm font-medium text-night">
              Get a fixed price
              <span className="grid h-8 w-8 place-items-center rounded-full bg-night text-white">→</span>
            </a>
            <a href="#included" className="inline-flex h-12 items-center rounded-full border border-white/10 px-6 text-sm text-neutral-300 hover:border-white/25 hover:text-white">
              What&apos;s included
            </a>
          </div>
        </div>
      </section>

      <Section id="included">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Who it&apos;s for</h2>
            <ul className="mt-6 space-y-3">
              {s.forWho.map((x) => (
                <li key={x} className="flex gap-3 text-neutral-300"><Check />{x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">What&apos;s included</h2>
            <ul className="mt-6 space-y-3">
              {s.included.map((x) => (
                <li key={x} className="flex gap-3 text-neutral-300"><Check />{x}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {proof && (
        <Section id="work">
          <Heading eyebrow="Proof" title={<>A real one, <Serif>live now.</Serif></>} />
          <div className="mt-16">
            <Case p={proof} i={0} />
          </div>
        </Section>
      )}

      <Process />

      <FAQ faqs={s.faqs} title={`${s.name}: common questions`} />

      <CTA initialService={s.id} />

      <Section className="!pt-0">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">Other services</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <a href={`/services/${o.slug}`} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-night-900 p-5 transition-colors hover:border-white/25">
                <span>
                  <span className="block font-medium text-white">{o.name}</span>
                  <span className="text-sm text-neutral-500">{o.price}</span>
                </span>
                <span aria-hidden="true" className="text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-ember">→</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Footer />
      <JsonLd data={serviceSchema(s)} />
    </main>
  );
}
