---
name: seo-aeo-geo
description: Keep the Srijan Studio site optimised for Google (SEO), answer boxes and voice (AEO) and AI assistants like ChatGPT, Perplexity and Claude (GEO). Use whenever adding or editing a page, service, case study, FAQ, price, or any business fact (name, phone, city, timeline), and before opening a PR that touches content.
---

# SEO / AEO / GEO rules for this repo

Beginner explanation and the off-site plan: `docs/SEO-AEO-GEO-GUIDE.md`.

## Single sources of truth (never hardcode these elsewhere)
- Business facts: `lib/site.js` (name, founder, phone, email, city, url, profiles).
- FAQs and service pages: `lib/content.js` (`homeFaqs`, `servicePages`, `updated`).
- Case studies: `lib/projects.js`.
- Structured data builders: `lib/schema.jsx`.
- `/sitemap.xml`, `/robots.txt` and `/llms.txt` are generated from these files. Editing the data updates all of them.

## When you add or change content
1. **New service page:** add an entry to `servicePages` in `lib/content.js`. That gives it a route, sitemap entry, footer link, `Service` + `BreadcrumbList` + `FAQPage` schema, and an llms.txt line. Each entry needs:
   - `slug`: keyword-bearing, e.g. `seo-services-ahmedabad`
   - `metaTitle` of 60 characters or less, primary keyword first
   - `metaDescription` of 155 characters or less, with a price or timeline
   - `answer`: a 1–2 sentence direct answer naming the service, place, price and timeline
   - 3–5 `faqs` phrased as real searches
2. **New FAQ:** the first sentence must answer the question on its own. Use numbers (₹, days), not adjectives.
3. **New case study:** add to `lib/projects.js`.
   - Only true, checkable results.
   - Quotes must come from the client about the studio's work. Label third-party reviews as such (see `siteReviews`).
4. **Changed a fact** (price, timeline, phone): change it in `lib/site.js` / `lib/content.js`, bump `updated`, and grep the repo for the old value.
5. **New profile** (LinkedIn, Clutch, Google Business Profile...): add the URL to `site.profiles`. That feeds `sameAs`.

## Page rules
- One `<h1>` per page. Headings never skip a level.
- Each page sets its own `title`, `description` and `alternates.canonical` via `generateMetadata` / `metadata`.
- Content must be in the server-rendered HTML. Never put answers only behind client state. The FAQ keeps collapsed answers in the DOM.
- Real `<a href>` links for navigation. Descriptive anchor text, never "click here".
- Images: meaningful `alt`. Decorative visuals get `aria-hidden`.
- Never block AI crawlers in `app/robots.js`.
- No fake reviews, ratings, client logos or numbers. No `Review` / `AggregateRating` schema for the studio's own site (Google treats it as self-serving).

## Verify before you finish
```bash
npm run build && (npx next start -p 3123 &) && sleep 5
curl -s localhost:3123/<path> | grep -o '<title>[^<]*'      # unique title
curl -s localhost:3123/<path> | grep -c '<h1'                # exactly 1
curl -s localhost:3123/sitemap.xml | grep -o '<loc>[^<]*'     # new page listed
curl -s localhost:3123/llms.txt | head -30                   # facts correct
```
- Parse every `application/ld+json` block as JSON.
- Lighthouse (Chromium is at `/opt/pw-browsers/chromium`): SEO 100 and Accessibility ≥ 95 on changed pages:
  `npx -y lighthouse@12 <url> --only-categories=seo,accessibility --chrome-path=/opt/pw-browsers/chromium --chrome-flags="--headless --no-sandbox"`
