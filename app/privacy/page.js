import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site, mailto } from "@/lib/site";
import { updated } from "@/lib/content";

export const metadata = {
  title: "Privacy",
  description: "How the Srijan Studio website handles your information: no cookies, no form database, messages go straight to WhatsApp or email.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    h: "The short version",
    p: [
      "This site does not use cookies, does not store what you type, and does not sell or share anything. When you send a brief, it opens your own WhatsApp or email app with the message written out, and you choose whether to send it.",
    ],
  },
  {
    h: "The brief form",
    p: [
      "The answers you pick and the name you type stay in your browser until you press send. They are then placed into a WhatsApp or email message addressed to the studio. Nothing is sent to or saved on this website's server.",
      `If you do send the message, it reaches ${site.name} through WhatsApp (${site.phone}) or email (${site.email}), and is used only to reply to you about your project.`,
    ],
  },
  {
    h: "Analytics",
    p: [
      "If analytics are switched on, the site uses Plausible, which counts visits and button clicks without cookies and without collecting personal data. It cannot identify you.",
    ],
  },
  {
    h: "Hosting",
    p: [
      "The site is hosted on Vercel, which keeps standard server logs (such as IP address and browser type) for security and reliability, under its own privacy policy.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "Your theme choice (light or dark) is remembered in your own browser only. To have any message you sent deleted, just ask on WhatsApp or email and it will be removed.",
    ],
  },
];

export default function Privacy() {
  return (
    <main id="main" className="relative overflow-x-clip">
      <Nav />
      <article className="mx-auto max-w-2xl px-5 pb-24 pt-40 sm:px-8 sm:pt-48">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">Last updated {updated}</p>
        <h1 className="text-silver mt-5 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">Privacy</h1>
        {sections.map((s) => (
          <section key={s.h} className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white">{s.h}</h2>
            {s.p.map((t) => (
              <p key={t} className="mt-4 leading-relaxed text-neutral-400">{t}</p>
            ))}
          </section>
        ))}
        <p className="mt-12 text-neutral-400">
          Questions? <a href={mailto("Privacy question")} className="text-white underline decoration-ember underline-offset-4">{site.email}</a>
        </p>
      </article>
      <Footer />
    </main>
  );
}
