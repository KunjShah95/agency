---
name: srijan-landing-design
description: Design and conversion system for the Srijan Studio site. Use whenever building, editing, styling, reviewing or writing copy for any page, section or component in this repo (home, service pages, 404, privacy, new landing pages), even if the request doesn't mention design or conversion. Consult it before choosing sections, headlines, CTAs, colours, type sizes, spacing, radii, icons or motion. Pairs with the seo-aeo-geo skill for anything content or search related.
---

# Srijan landing design

Adapted from `landing-page-design` by elayadesign (MIT, original in `docs/vendor/elayadesign-landing-page-design/`). The strategy, conversion, copy, states and ship rules follow the original. The visual values below are Srijan's own and take precedence over the original wherever the two differ.

**Order of authority:**
1. The user's explicit request
2. This file
3. Framework defaults

---

# Part A: strategy (what the page says)

## A1. Every page has one job
- **Home:** start a project. Primary action: the 3-step brief → WhatsApp.
- **Service page:** get a fixed price for that service. Same brief, preset via `<CTA initialService=…>`.
- **New landing pages** (ads, campaigns): one offer, one audience, one action. Use `noindex` if the page is ad-only or time-bound.

The primary CTA wording stays identical across a page: "Start a project" (home) or "Get a fixed price" (service pages). Secondary actions ("See live work") are visually quieter. Never put two filled buttons side by side above the fold.

## A2. Page structure

**Above the fold, all required:**
1. Headline: outcome plus audience
2. Specific subheadline: price, timeline or place
3. Primary CTA
4. **One proof signal:** a real review, a stat or a live-site chip
5. Hero visual: real work, never stock

**Mid page:**
6. Problem → solution
7. 3–5 outcome-driven benefits
8. How it works (the 7-day process)
9. Proof placed beside the claim it supports
10. **Tagline reveal** (A6)

**Bottom:**
11. FAQ, 6–12 questions, answer-first (see the seo-aeo-geo skill)
12. Risk reversal: fixed price, you own it, no lock-in
13. Final CTA, identical to the top one

## A3. Conversion rules
- **Benefit first and specific.** "Live in 7 days from ₹15,000" beats "fast and affordable".
- **CTA = verb + what they get.** Never "Learn more" or "Submit".
- **Mirror the source.** If traffic comes from an ad or a LinkedIn post, the hero repeats its promise.
- **Objections are a section, not a footnote.**
- **Every CTA fires a `track()` event with a `source`** (see `lib/track.js`).

## A4. Copy rules
- Sentence case for headings and buttons.
- No hyphens or dashes joining clauses in copy. Rewrite the sentence instead. Number ranges like "Day 2–3" are fine.
- **Banned words:** revolutionize, supercharge, cutting edge, effortless, transform your workflow, next level, harness the power, world class, seamless, unlock.
- **Never invent facts.** Prices, timelines, stats, client names, logos and testimonials must come from the owner or a real source. If missing, use a visible placeholder like `{{testimonial}}` and say so. Third-party reviews (e.g. Jigisha's clients) are labelled as such.
- System messages are calm and specific. No exclamation marks.

## A5. Build order
Hero → benefits → how it works → proof → FAQ → final CTA. Change one section per iteration, so diffs stay reviewable.

## A6. Tagline reveal (one per landing page)
- A large type section of at least two lines stating the core benefit, placed mid page, not directly under the hero.
- Words go from muted (45% opacity, which keeps WCAG 3:1 contrast for large text in both themes; lower fails Lighthouse) to full colour one by one as it scrolls through. The motion is scroll-linked, never a timed fade.
- Use `ScrollWords` from `components/fx/ScrollWords.js`. Under reduced motion it shows full colour (handled in CSS, no hydration branching).

---

# Part B: Srijan visual system (overrides the original)

## B1. Type
- **Geist Sans** for everything. **Geist Mono** for labels, data and metadata.
- **Instrument Serif italic** is the single accent: one phrase per heading at most, in ember, via `<Serif>`. It never appears in body copy or buttons.
- No ultra-bold weights; the cap is semibold (600).
- Headings get `text-wrap: balance` and body copy `text-wrap: pretty`. Both are global in `app/globals.css`, so no orphaned words.
- Prefer Tailwind scale steps for new text. The hero's fluid display sizes are deliberate exceptions.

## B2. Colour, always through tokens
- Use only the theme tokens: `night`, `night-900/800/700`, `white` (= foreground), `neutral-*`, `ember`, `live`.
- **Never hardcode hex** in components. The tokens switch automatically between dark and light (`app/globals.css`).
- Ember is for emphasis only: the accent word, the active state, the key dot. Never a large fill except the primary brief button.
- **Gradients:**
  - Allowed: on headline text (`.text-silver`) and as soft decorative glows (blurred, low opacity, `aria-hidden`).
  - Not allowed: as a section's flat background.
- Body text contrast must be ≥ 4.5:1 in **both** themes. Lighthouse Accessibility stays at 100.

## B3. Spacing and radius
- Spacing from the Tailwind scale only. Section rhythm: `py-24 lg:py-32` via `<Section>`.
- Radius: pills `rounded-full`, cards `rounded-3xl`, inner elements follow **inner radius = outer − gap** when the gap is under 32px.
- Borders go all the way around (`border-white/10`), never on one side of a card.

## B4. Motion
- **Base curve:** `cubic-bezier(0.22, 1, 0.36, 1)`. It's the Tailwind default (`transition` utilities pick it up) and the `ease` in Framer variants.
- Durations:
  - 300ms for colour and opacity
  - 500–700ms for position
  - never under 200ms
- Animate `transform` and `opacity` only.
- **Scroll reveals:** `<Reveal>` (rise 24px, fade and unblur, once). Never use raw `scroll` listeners; use `whileInView` or `useScroll`.
- **One signature effect per section.** The existing set lives in `components/fx/`: spotlight, text generate, container scroll, marquee, spotlight card, tilt, tracing beam, moving border, lamp. Don't stack two on one element.
- Respect reduced motion. `<Motion>` sets `reducedMotion="user"` and the global CSS kills keyframes. Never branch rendered markup on `useReducedMotion` (it causes hydration mismatches); branch styles instead.

## B5. Navigation
- A floating pill that tightens on scroll, with a theme toggle and a moving-border CTA.
- The mobile menu is a full-height panel. Links stagger in (60ms apart, 24px rise, 400ms total cap), and the icon morphs between states.
- The current page is indicated (`aria-current="page"`).

## B6. States, for every interactive element
- **Hover:** colour or border shift.
- **Active:** `active:scale-[0.98]`.
- **Focus:** the global ember `:focus-visible` ring. Never remove it.
- **Disabled:** reduced opacity plus `cursor-not-allowed`.
- **Errors:** inline and specific.
- No dead links. A button with no destination is visibly disabled.

## B7. Ship requirements
- Skip-to-content link
- Branded `not-found.js`
- Privacy page linked in the footer
- Favicon
- Title, description and OG image on every page
- Alt text on meaningful images, `aria-hidden` on decorative ones
- Semantic `<main>`, `<nav>`, `<section>`, `<article>`, `<address>`
- Checked at **390px**: no horizontal overflow, and the primary action is visible in the first screen

---

# Verify before finishing
```bash
npm run build
(npx next start -p 3123 &) && sleep 5
```
- Screenshot at 1440px and at 390px (iPhone 13), in **both** themes (`colorScheme: 'light' | 'dark'`). Confirm `document.documentElement.scrollWidth === 390` on mobile.
- No console errors, especially hydration warnings.
- Lighthouse: SEO 100 and Accessibility 100 on changed pages (command in the seo-aeo-geo skill).

## Quick checklist
- [ ] One primary action, the same wording top and bottom, tracked
- [ ] A proof signal above the fold
- [ ] Specific numbers, no banned words, no invented facts
- [ ] Tagline reveal present on landing pages
- [ ] Tokens only, no hex; contrast OK in both themes
- [ ] Serif accent used at most once per heading
- [ ] Base curve, transform/opacity only, reduced motion respected
- [ ] Skip link, 404, privacy link, current nav item
- [ ] 390px check passes
