import { site } from "@/lib/site";

/*
 * /robots.txt. Everyone may crawl, including the AI assistants' crawlers
 * (GEO): being readable by them is how ChatGPT, Claude, Perplexity and
 * Gemini learn about the studio and can recommend it.
 */
const aiBots = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot",
];

export default function robots() {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
