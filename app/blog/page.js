import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/fx/Reveal";
import { Serif } from "@/components/fx/Section";
import { getAllPosts, formatDate } from "@/lib/blog";
import { site } from "@/lib/site";
import { JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Blog: websites, SEO and AI for small businesses",
  description:
    "Plain-English guides on website costs, getting found on Google, and using AI in a small business, from a web design and AI studio in Ahmedabad.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const base = site.url.replace(/\/$/, "");
  return (
    <main id="main" className="relative overflow-x-clip">
      <Nav />
      <section className="relative px-5 pb-10 pt-36 sm:px-8 sm:pt-44">
        <div aria-hidden="true" className="dots fade-edges pointer-events-none absolute inset-0 h-[600px]" />
        <div className="relative mx-auto max-w-page">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">Blog</p>
          <h1 className="text-silver mt-5 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl">
            Straight answers about websites, <Serif>search</Serif> and AI.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-400">
            Written for founders and small business owners in Ahmedabad and across India. Real prices, no jargon.
          </p>
        </div>
      </section>

      <section aria-label="Posts" className="px-5 pb-28 sm:px-8">
        <ul className="mx-auto grid max-w-page gap-4 md:grid-cols-2">
          {posts.map((p, i) => (
            <li key={p.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <Reveal delay={i * 0.05} className="h-full">
                <a
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-night-900 p-6 transition-colors hover:border-white/25 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 normal-case tracking-normal">{t}</span>
                    ))}
                    <span className="ml-auto">{p.minutes} min read</span>
                  </div>
                  <h2 className={`mt-6 font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-ember ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-neutral-400">{p.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-8 text-sm text-neutral-500">
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:text-ember">Read →</span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${base}/blog#blog`,
          name: `${site.name} blog`,
          url: `${base}/blog`,
          publisher: { "@id": `${base}/#studio` },
          blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${base}/blog/${p.slug}`, datePublished: p.date })),
        }}
      />
    </main>
  );
}
