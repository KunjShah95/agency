import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import Script from "next/script";
import Motion from "@/components/Motion";
import { themeScript } from "@/components/ThemeToggle";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/lib/site";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

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

export const metadata = {
  ...(site.url && { metadataBase: new URL(site.url), alternates: { canonical: "/" } }),
  title: "Srijan Studio · Website, UI/UX and AI agent studio in Ahmedabad",
  description:
    "A one person design and engineering studio in Ahmedabad. Websites, UI/UX, AI agents and AI video for founders and small businesses. Fixed price, live in weeks.",
  openGraph: {
    title: "Srijan Studio · Websites, products and AI, built by one person",
    description: "A one person design and engineering studio in Ahmedabad. Fixed price, live in 7 days.",
    type: "website",
    siteName: "Srijan Studio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srijan Studio · Websites, products and AI, built by one person",
    description: "A one person design and engineering studio in Ahmedabad. Fixed price, live in 7 days.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <Motion>{children}</Motion>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
