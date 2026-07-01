# Kunj Shah Studio

Marketing site for a solo design and tech studio in Ahmedabad. Web development, interface design, AI agents, and AI video.

Built with **Next.js 14** (App Router), **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scroll.

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
- `components/` — page sections (Hero, Services, WhySolo, Process, Work, Packages, FAQ, CTA) and shared UI/motion helpers
- `public/work/` — project screenshots

## Editing

- Services and copy: `components/Services.js`
- Pricing (INR): `components/Packages.js`
- Real project / case study: `components/Work.js` (+ image in `public/work/`)
- Contact email: `components/CTA.js`
