# SEO, AEO and GEO for Srijan Studio: a beginner's guide

This is written for someone new to the terms. It covers what each one means, what is already done on the site, and what only you can do (most clients will come from the second list).

## The three terms in one minute

| Term | Stands for | The goal | Example |
| --- | --- | --- | --- |
| **SEO** | Search Engine Optimisation | Rank on Google's normal results | Someone searches *"website designer Ahmedabad"* and sees your site |
| **AEO** | Answer Engine Optimisation | Get *quoted* in Google's answer boxes, "People also ask" and voice answers | Someone asks *"how much does a website cost in Ahmedabad"* and Google shows your answer |
| **GEO** | Generative Engine Optimisation | Get *recommended* by AI assistants (ChatGPT, Perplexity, Gemini, Claude) | Someone asks ChatGPT *"suggest a freelance web designer in Ahmedabad"* and it names Srijan Studio |

They overlap. All three reward the same things: clear facts, real proof, fast pages, and other websites mentioning you.

## What is already built into the site

**SEO**
- A title and description per page, written around what clients actually search, e.g. *"Website Development in Ahmedabad · From ₹15,000"*.
- Four service pages, one per search intent:
  - `/services/website-development-ahmedabad`
  - `/services/ui-ux-design-ahmedabad`
  - `/services/ai-agent-development`
  - `/services/ai-video-production`
- `/sitemap.xml` lists every page for Google, and `/robots.txt` points to it.
- Canonical URLs, one `<h1>` per page, a breadcrumb trail, internal links between every service.
- Pages are pre-rendered HTML (fast, and readable without JavaScript).
- Lighthouse scores: SEO 100, Accessibility 100, Best Practices 100.

**AEO**
- Every page opens with a one-sentence **direct answer** (price, timeline, place). This is the sentence Google likes to quote.
- FAQs written as the questions people type (*"How much does a website cost in Ahmedabad?"*), answered in the first sentence.
- `FAQPage` structured data on the home page and every service page. Answers stay in the HTML even when collapsed.

**GEO**
- `/llms.txt`: a plain-text briefing for AI assistants covering who you are, prices, process, services, work and FAQs. It is generated from the site content, so it never goes stale.
- `robots.txt` explicitly **allows** the AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others). Many sites block them by accident.
- Structured data for the business (`ProfessionalService`), founder (`Person`), services with prices, breadcrumbs and FAQs. It states the same facts everywhere: name, city, phone, prices.
- Real, checkable proof: live client sites and a real client review.

## What only you can do (this is where clients come from)

Do these in order. Week 1 matters most.

### Week 1: get found locally
1. **Merge the PR** so the changes are live on srijanstudio.vercel.app.
2. **Google Search Console** (free, search.google.com/search-console):
   - Add the site.
   - Choose the "HTML tag" method and copy the code inside `content="..."`.
   - In Vercel → Settings → Environment Variables, add `NEXT_PUBLIC_GOOGLE_VERIFICATION` with that code, then redeploy and press Verify.
   - Submit `https://srijanstudio.vercel.app/sitemap.xml`.
3. **Bing Webmaster Tools** (bing.com/webmasters): you can import from Search Console in one click. Bing also feeds ChatGPT search. Optionally add `NEXT_PUBLIC_BING_VERIFICATION`.
4. **Google Business Profile** (business.google.com). This is the single biggest lever for "near me" and "in Ahmedabad" searches.
   - Category: *Website designer*. Add *Graphic designer* and *Software company* as extra categories.
   - Mark it a **service-area business** (you can hide your home address) serving Ahmedabad and Gujarat.
   - Use exactly the same name, phone (+91 91068 78258) and website as the site.
   - Add 5 or more photos or screenshots of your work.
5. **Ask every past client for a Google review.** Swarnika and Jigisha first. Send them the review link from your Business Profile. Reviews are the strongest local signal, and AI assistants read them too.

### Week 2: get mentioned (backlinks and citations)
6. Ask clients to add **"Website by Srijan Studio"** in their site footer, linked to your site. Each client site becomes a backlink. Do this on every new project.
7. Create profiles with the **same name, phone and description** on:
   - LinkedIn (personal and company page)
   - Clutch.co, GoodFirms and DesignRush (agency directories that AI assistants often cite)
   - Justdial and IndiaMART (local India)
   - Behance or Dribbble (design work)
   - Upwork, Contra and Fiverr Pro (freelance marketplaces)
8. Add each profile URL to `profiles` in `lib/site.js`. That updates the `sameAs` structured data, which tells Google and AI assistants these profiles are all you.

### Ongoing: publish proof
9. **Add every finished project** to `lib/projects.js` with real numbers (*"enquiries up 2x"*, *"page 1 for X"*). Specific numbers get quoted; adjectives don't.
10. **Write one short post a month** answering a question clients ask you, e.g. *"Wix vs custom website for a small business in India"*. Each one is a new way to be found. Ask Claude to add a `/blog` when you're ready.
11. **Post your work on LinkedIn** with a link back. AI assistants weight what is discussed publicly.

## How to check it's working

| Check | Where | When |
| --- | --- | --- |
| Pages indexed, searches you appear for, clicks | Google Search Console → Pages and Performance | After 1 to 2 weeks |
| Business Profile calls, direction requests, website clicks | Google Business Profile → Performance | Monthly |
| Do AI assistants know you? | Ask ChatGPT, Perplexity and Gemini: *"Who are good freelance web designers in Ahmedabad?"* and *"What is Srijan Studio?"* | Monthly; it takes weeks to months |
| Structured data valid | search.google.com/test/rich-results with your URL | After every content change |
| Enquiries by source | Plausible (set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`), events `brief_started`, `brief_submitted`, `whatsapp_clicked` | Weekly |

**Be patient.** SEO takes weeks to months. The Business Profile and reviews give the fastest local results. GEO grows as more websites mention you.

## Where things live in the code

| What | File |
| --- | --- |
| Business facts (name, phone, city, profiles) | `lib/site.js` |
| FAQs and service page content | `lib/content.js` |
| Case studies | `lib/projects.js` |
| Structured data | `lib/schema.jsx` |
| Service pages | `app/services/[slug]/page.js` |
| Sitemap, robots, llms.txt | `app/sitemap.js`, `app/robots.js`, `app/llms.txt/route.js` |
| Share image | `app/opengraph-image.js` |
| Rules for future Claude sessions | `.claude/skills/seo-aeo-geo/SKILL.md` |
