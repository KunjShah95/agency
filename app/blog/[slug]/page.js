import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import { servicePages } from "@/lib/content";
import { site } from "@/lib/site";
import { faqSchema, JsonLd, ORG_ID, PERSON_ID } from "@/lib/schema";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getAllPosts().find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: { absolute: `${p.title} | Srijan Studio` },
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    authors: [{ name: site.founder }],
    openGraph: { type: "article", title: p.title, description: p.description, url: `/blog/${p.slug}`, publishedTime: p.date, modifiedTime: p.updated, authors: [site.founder] },
    twitter: { card: "summary_large_image", title: p.title, description: p.description },
  };
}

export default function Post({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const base = site.url.replace(/\/$/, "");
  const url = `${base}/blog/${p.slug}`;
  const service = servicePages.find((s) => s.slug === p.service);
  const more = getAllPosts().filter((x) => x.slug !== p.slug).slice(0, 3);
  const firstName = site.founder.split(" ")[0];

  return (
    <main id="main" className="relative overflow-x-clip">
      <Nav />
      <article>
        <header className="relative px-5 pb-12 pt-36 sm:px-8 sm:pt-44">
          <div aria-hidden="true" className="dots fade-edges pointer-events-none absolute inset-0 h-[600px]" />
          <div className="relative mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="font-mono text-xs text-neutral-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li aria-hidden="true">/</li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
              </ol>
            </nav>
            <h1 className="text-silver mt-8 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">{p.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-400">{p.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-sm text-neutral-500">
              <span className="flex items-center gap-2 text-neutral-300">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ember font-serif text-sm italic text-night" aria-hidden="true">
                  {firstName[0].toLowerCase()}
                </span>
                {site.founder}
              </span>
              <time dateTime={p.date}>{formatDate(p.date)}</time>
              {p.updated !== p.date && <span>Updated <time dateTime={p.updated}>{formatDate(p.updated)}</time></span>}
              <span>{p.minutes} min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-page gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1fr_15rem]">
          <div className="prose-srijan mx-auto w-full max-w-3xl lg:mx-0 lg:ml-auto" dangerouslySetInnerHTML={{ __html: p.html }} />
          {p.toc.length > 2 && (
            <aside className="hidden lg:block">
              <nav aria-label="On this page" className="sticky top-28">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">On this page</p>
                <ul className="mt-4 space-y-2 border-l border-white/10 text-sm">
                  {p.toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="-ml-px block border-l border-transparent pl-4 text-neutral-400 transition-colors hover:border-ember hover:text-white">
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
        </div>

        {service && (
          <div className="mx-auto max-w-3xl px-5 pb-8 sm:px-8 lg:max-w-page">
            <a href={`/services/${service.slug}`} className="group flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-night-900 p-6 transition-colors hover:border-white/25 sm:flex-row sm:items-center sm:p-8">
              <span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">Related service</span>
                <span className="mt-2 block text-xl font-semibold text-white">{service.name}, {service.price}</span>
                <span className="mt-1 block text-sm text-neutral-400">{service.timeline} · fixed price · you own everything</span>
              </span>
              <span className="text-sm text-white">See what&apos;s included <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
            </a>
          </div>
        )}
      </article>

      {p.faq.length > 0 && <FAQ faqs={p.faq} title="Quick answers" />}

      <CTA initialService={service?.id} />

      {more.length > 0 && (
        <section aria-label="More posts" className="mx-auto max-w-page px-5 pb-24 sm:px-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">Keep reading</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {more.map((m) => (
              <li key={m.slug}>
                <a href={`/blog/${m.slug}`} className="group block h-full rounded-2xl border border-white/10 bg-night-900 p-5 transition-colors hover:border-white/25">
                  <span className="block font-medium text-white transition-colors group-hover:text-ember">{m.title}</span>
                  <span className="mt-2 block text-sm text-neutral-500">{m.minutes} min read</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              "@id": `${url}#post`,
              headline: p.title,
              description: p.description,
              url,
              mainEntityOfPage: url,
              datePublished: p.date,
              dateModified: p.updated,
              inLanguage: "en-IN",
              image: `${base}/opengraph-image`,
              keywords: p.tags.join(", "),
              wordCount: p.content.split(/\s+/).length,
              author: { "@id": PERSON_ID, "@type": "Person", name: site.founder, url: base },
              publisher: { "@id": ORG_ID },
              ...(service && { about: { "@type": "Service", name: service.name, url: `${base}/services/${service.slug}` } }),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
                { "@type": "ListItem", position: 3, name: p.title, item: url },
              ],
            },
          ],
        }}
      />
      {p.faq.length > 0 && <JsonLd data={faqSchema(p.faq)} />}
    </main>
  );
}
