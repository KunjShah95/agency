import { site } from "@/lib/site";
import { servicePages, updated } from "@/lib/content";
import { getAllPosts } from "@/lib/blog";

/* /sitemap.xml: the list of pages search engines should index. */
export default function sitemap() {
  const base = site.url.replace(/\/$/, "");
  return [
    { url: `${base}/`, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    ...servicePages.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    { url: `${base}/blog`, lastModified: getAllPosts()[0]?.updated || updated, changeFrequency: "weekly", priority: 0.7 },
    ...getAllPosts().map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.updated, changeFrequency: "monthly", priority: 0.6 })),
    { url: `${base}/privacy`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
  ];
}
