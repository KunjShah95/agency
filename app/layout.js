import "./globals.css";
import { Bricolage_Grotesque, Instrument_Sans, Space_Mono } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import Motion from "@/components/Motion";
import { site } from "@/lib/site";

// Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN in Vercel to turn on privacy friendly
// analytics (no cookie banner needed). See lib/track.js for the events.
const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  ...(site.url && { url: site.url }),
  email: site.email,
  description:
    "A one person design and engineering studio in Ahmedabad building websites, interfaces, AI agents and AI video.",
  areaServed: ["Ahmedabad", "Gujarat", "India", "Worldwide"],
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
  priceRange: "₹15,000+",
  knowsAbout: ["Web development", "UI/UX design", "AI agents", "AI video", "Next.js", "SEO"],
};

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  ...(site.url && { metadataBase: new URL(site.url), alternates: { canonical: "/" } }),
  title: "Srijan Studio · Website, UI/UX and AI agent studio in Ahmedabad",
  description:
    "A one person design and engineering studio in Ahmedabad. Websites, UI/UX, AI agents and AI video for founders and small businesses. Fixed price, live in weeks.",
  openGraph: {
    title: "Srijan Studio",
    description:
      "Websites, interfaces, AI agents, and AI video, built by one person.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="grain font-sans antialiased">
        <SmoothScroll />
        <Motion>{children}</Motion>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {plausible && (
          <>
            <Script defer data-domain={plausible} src="https://plausible.io/js/script.tagged-events.js" strategy="afterInteractive" />
            <Script id="plausible-q" strategy="afterInteractive">
              {"window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
