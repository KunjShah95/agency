import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

/*
 * Blog posts are plain Markdown files in content/blog/. To publish a post,
 * add a file there with this frontmatter (see existing posts):
 *
 *   ---
 *   title: "Question your client actually searches?"
 *   description: "One or two sentences, under 155 characters."
 *   date: "2026-11-08"
 *   updated: "2026-11-08"         # optional
 *   tags: ["Websites", "Pricing"]
 *   service: website-development-ahmedabad   # optional, links the matching service page
 *   faq:                          # optional, becomes FAQ rich results
 *     - q: "..."
 *       a: "..."
 *   ---
 *
 * The file name becomes the URL: content/blog/my-post.md -> /blog/my-post
 */

const DIR = path.join(process.cwd(), "content/blog");

const slugify = (t) =>
  String(t)
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function render(markdown) {
  const toc = [];
  const md = new Marked({ gfm: true });
  md.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const id = slugify(text);
        if (depth === 2) toc.push({ id, text: text.replace(/<[^>]+>/g, "") });
        return `<h${depth} id="${id}"><a href="#${id}" class="anchor" aria-hidden="true" tabindex="-1">#</a>${text}</h${depth}>`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href) && !href.includes("srijanstudio.vercel.app");
        return `<a href="${href}"${title ? ` title="${title}"` : ""}${external ? ' target="_blank" rel="noopener"' : ""}>${text}</a>`;
      },
    },
  });
  return { html: md.parse(markdown), toc };
}

function readingTime(text) {
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}

export function getAllPosts() {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title,
        description: data.description,
        date: String(data.date),
        updated: String(data.updated || data.date),
        tags: data.tags || [],
        service: data.service || null,
        faq: data.faq || [],
        draft: Boolean(data.draft),
        minutes: readingTime(content),
        content,
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return null;
  return { ...post, ...render(post.content) };
}

export function formatDate(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
