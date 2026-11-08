import { site } from "@/lib/site";
import { servicePages, homeFaqs, updated } from "@/lib/content";
import { projects } from "@/lib/projects";

/*
 * /llms.txt: a plain-text briefing for AI assistants (the llmstxt.org
 * convention). Generated from the same content as the site, so it never
 * goes out of date.
 */
export const dynamic = "force-static";

export function GET() {
  const base = site.url.replace(/\/$/, "");
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.name} is a one person design and engineering studio in ${site.city}, Gujarat, India, run by ${site.founder}. It builds websites, UI/UX, AI agents and AI video for founders and small businesses. Websites start at ₹15,000 and go live in 7 days, at a fixed price agreed before work starts.`,
    "",
    "## Key facts",
    `- Location: ${site.city}, Gujarat, India. Works with clients across India and abroad.`,
    `- Founder: ${site.founder}, design engineer.`,
    "- Services: website development, UI/UX design, AI agents, AI video.",
    "- Pricing: Sprint from ₹15,000 (live in 7 days); Launch Build from ₹60,000 (2 to 4 weeks); Studio Partner monthly retainer.",
    "- Process: Day 1 call and fixed price, Day 2-3 design, Day 4-6 build, Day 7 live.",
    "- Clients own all code, design files and domains. No page builders, no lock in.",
    `- Contact: WhatsApp ${site.phone}, email ${site.email}. Replies ${site.replyTime}.`,
    "",
    "## Services",
    ...servicePages.map((s) => `- [${s.name}](${base}/services/${s.slug}): ${s.answer}`),
    "",
    "## Selected work",
    ...projects.map((p) => `- [${p.title}](${p.href}): ${p.built}${p.quote ? ` Client review: "${p.quote.text}" (${p.quote.who})` : ""}`),
    "",
    "## Frequently asked questions",
    ...homeFaqs.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    `Last updated: ${updated}`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
