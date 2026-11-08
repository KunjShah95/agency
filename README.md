# Srijan Studio

Marketing site for a solo design and tech studio in Ahmedabad. Web development, interface design, AI agents, and AI video.

Built with **Next.js 14** (App Router), **Tailwind CSS**, **Framer Motion**, **Geist** and **Lenis** smooth scroll. Dark, Aceternity-style effects live in `components/fx/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Contact form → WhatsApp

The 3-step brief ends with "Send my brief on WhatsApp": a direct `wa.me` link to the studio number in `lib/site.js` (+91 91068 78258) with the brief already typed out. The visitor lands in a WhatsApp chat with you and presses send. Email is offered as a fallback.

## Share preview

`app/opengraph-image.js` and `app/twitter-image.js` draw the link preview card at build time (fonts in `assets/og/`).

## Deploy

Push to a Git repo and import into [Vercel](https://vercel.com/new). Framework preset: **Next.js**. No env vars needed.

## Structure

- `app/` — layout, page, global styles, favicon
- `components/` — page sections (Hero, Stack, Services, Work, Compare, Process, Packages, FAQ, CTA, Footer)
- `components/fx/` — self-contained effects (spotlight, moving border, tilt, tracing beam, lamp...)
- `public/work/` — project screenshots

## Editing

- Studio facts (email, WhatsApp, availability, reply time, site URL): `lib/site.js`
- Light and dark themes: colour tokens in `app/globals.css` (`:root` is dark, `:root.light` is light). Components only use the shared classes, so both themes stay in sync automatically.
- Analytics events: `lib/track.js` (set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to enable)
- Research and design rationale: `docs/RESEARCH.md`

- Services and copy: `components/Services.js`
- Pricing (INR): `components/Packages.js`
- Case studies and testimonials: `components/Work.js` (+ images in `public/work/`)
- Brief form: `components/CTA.js`
