# Competitor and reference research

What other studios do, what is worth taking, and where it ended up on this site.
Patterns were adapted to Srijan's own paper, ink and vermillion look. No layouts,
copy or assets were lifted.

## Ahmedabad

| Studio | What stands out | Taken |
| --- | --- | --- |
| **Ideaboat** (ideaboat.in) | Casual, jokey voice ("a website that doesn't look like it was built in 2005"). Numbered services with sub-bullets, a double marquee ("Stop blending in / Start making waves"), a 4-step process, stat counters, FAQ, testimonials with name and city. Stock Elementor template underneath. | The voice and naming testimonials by city. Not the template look. |
| **TechSentinals** (techsentinals.in) | The closest competitor: a small team with "no handoffs". Strong editorial copy, and a **delivery board** showing day ranges (Day 01–07, 08–21...) for a 60-day build. Team grid that names who does what. | Delivery board, rebuilt as a 7-day timeline with a scroll-linked tracing beam in `Process.js`. |
| **Digitorium** (digitorium.in) | "Less pitch. More proof." Every case study goes **what was broken → what changed**, with real numbers. Phone number above the fold, bookings over WhatsApp. "Most agencies start at step three." | Proof-first case format in `Work.js`. WhatsApp sending in the brief form. |
| **DC Technolabs** (dctechnolabs.in) | Built hard for conversion: a quote form in the hero, "we respond within 24 hours", a **starting price on every service**, a client logo strip, a guarantee. Looks generic. | Prices on service cards, reply time shown everywhere, the guarantees strip. |
| KrishaWeb, Elsner, Bacancy, Hidden Brains | Big companies. Pages lean on award badges and counters like "2400+ projects". | Nothing. This is the "200 person agency" the site positions against. |

## Global studios and product sites

| Reference | Pattern | Taken |
| --- | --- | --- |
| **basement.studio** | Each piece of work leads with its outcome ("sold out inventory in hours"). Dense client wall. | Every case ends on one big result line. |
| **Locomotive** | Playful wordmarks, huge type, a personality-first footer. | Oversized cropped wordmark in the footer. |
| **Linear** | Real product UI as the hero image; small "Fig 0.1" labels; calm mono metadata. | The hero **status card** (a working UI element, not a stock illustration). Mono labels throughout. |
| Personal studio sites (Rauno, etc.) | Live local time and availability. | Live IST clock, "Booking new projects" status. |
| Apple / product pages | Text that reveals word by word as you scroll. | `ScrollWords` manifesto in the WhySolo section. |

## Conversion changes

1. **One primary action, repeated:** "Start a project" in the nav, hero, packages, sticky mobile bar and footer.
2. **Quick-start buttons:** service buttons in the hero and "Brief this" on every service card pre-fill the brief form.
3. **3-step brief instead of a bare mailto:** each step is a tap (what → budget/timeline → name). It opens a pre-written email, or a WhatsApp message once a number is set, so there is no backend.
4. **Risk reversal:** fixed price, you own it, no lock in, live preview link.
5. **Proof near the CTA:** "Page 1 on Google" in the hero trust row.
6. **Funnel events** (`lib/track.js`): `cta_clicked`, `service_briefed`, `brief_started`, `brief_submitted`, `work_opened`, each with a `source`. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to turn them on.
7. **SEO:** ProfessionalService JSON-LD and a sharper title and description.

## Redesign v2: dark, Aceternity-style (rebuilt from scratch)

More references studied: **Siya Digi Tech** (testimonials that name a specific result, e.g. "enquiries grew 3x"), **7Span** (each case study is need → build → 4 outcome metrics; "In the era of AI, human intelligence is the advantage"), **Udaan Works** (sells speed: "MVP in 14 days"), **Techify** (scale numbers, a hire-engineers model). Component patterns follow Aceternity UI, 21st.dev and similar libraries, written from scratch in `components/fx/`:

| Effect | File | Used in |
| --- | --- | --- |
| Spotlight sweep + dot grid | `Spotlight.js` | Hero |
| Text generate (blur-in words) | `TextGenerate.js` | Hero headline |
| Container scroll (screen tilts flat) | `ContainerScroll.js` | Hero showcase |
| Infinite marquee | `Marquee.js` | Tool strip |
| Bento grid + cursor spotlight cards | `SpotlightCard.js` | Services |
| 3D tilt card | `TiltCard.js` | Work |
| Tracing beam | `TracingBeam.js` | Process |
| Moving border | `MovingBorder.js` | Nav CTA, featured price |
| Lamp | `Lamp.js` | Contact |

Palette: near-black `#050505`, neutral greys, one ember accent `#ff5b2e`. Type: Geist Sans and Mono, with Instrument Serif italic for accent words.

Speed is now the headline promise, answering Udaan Works: a website goes live in **7 days**. Bigger builds take 2 to 4 weeks.

## Still to do

- Put a WhatsApp number in `lib/site.js`. In Ahmedabad this is likely the highest-converting channel.
- Add more real client testimonials. Swarnika Jewellery's is live; ask the other clients for one.
- Replace the typographic stand-ins (Swarnika, Aarav Sen) with real screenshots in `public/work/`.
- Set `NEXT_PUBLIC_SITE_URL` once a domain is connected.
