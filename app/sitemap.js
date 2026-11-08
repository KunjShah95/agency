import { site } from "@/lib/site";
import { servicePages, updated } from "@/lib/content";

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
  ];
}
