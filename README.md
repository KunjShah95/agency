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

## Deploy

Push to a Git repo and import into [Vercel](https://vercel.com/new). Framework preset: **Next.js**. No env vars needed.

## Structure

- `app/` — layout, page, global styles, favicon
- `components/` — page sections (Hero, Stack, Services, Work, Compare, Process, Packages, FAQ, CTA, Footer)
- `components/fx/` — self-contained effects (spotlight, moving border, tilt, tracing beam, lamp...)
- `public/work/` — project screenshots

## Editing

- Studio facts (email, WhatsApp, availability, reply time): `lib/site.js`
- Analytics events: `lib/track.js` (set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to enable)
- Research and design rationale: `docs/RESEARCH.md`

- Services and copy: `components/Services.js`
- Pricing (INR): `components/Packages.js`
- Case studies and testimonials: `components/Work.js` (+ images in `public/work/`)
- Brief form: `components/CTA.js`
