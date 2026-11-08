import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Spotlight from "@/components/fx/Spotlight";
import { Serif } from "@/components/fx/Section";
import { servicePages } from "@/lib/content";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main" className="relative overflow-x-clip">
      <Nav />
      <section className="relative overflow-hidden px-5 pb-24 pt-40 sm:px-8 sm:pt-48">
        <Spotlight className="-left-10 -top-40 md:-left-32 md:-top-20" fill="#ff8a63" />
        <div aria-hidden="true" className="dots fade-edges pointer-events-none absolute inset-0 h-[700px]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">Error 404</p>
          <h1 className="text-silver mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-7xl">
            This page doesn&apos;t <Serif>exist.</Serif>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-neutral-400">
            The link may be old or mistyped. Everything else is one click away.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/" className="inline-flex h-12 items-center gap-2 rounded-full bg-white pl-6 pr-2 text-sm font-medium text-night transition-transform active:scale-[0.98]">
              Back to home
              <span className="grid h-8 w-8 place-items-center rounded-full bg-night text-white">→</span>
            </a>
            <a href="/#contact" className="inline-flex h-12 items-center rounded-full border border-white/10 px-6 text-sm text-neutral-300 hover:border-white/25 hover:text-white">
              Start a project
            </a>
          </div>
          <ul className="mt-14 flex flex-wrap justify-center gap-2">
            {servicePages.map((s) => (
              <li key={s.slug}>
                <a href={`/services/${s.slug}`} className="inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-white/25 hover:text-white">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
