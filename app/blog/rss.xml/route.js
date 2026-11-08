import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

/* /blog/rss.xml: lets feed readers, aggregators and AI tools pick up new posts. */
export const dynamic = "force-static";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const base = site.url.replace(/\/$/, "");
  const items = getAllPosts()
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${base}/blog/${p.slug}</link>
      <guid>${base}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date + "T09:00:00+05:30").toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(site.name)} blog</title>
    <link>${base}/blog</link>
    <description>Websites, SEO and AI for small businesses, from Ahmedabad.</description>
    <language>en-IN</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
