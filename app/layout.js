import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import Script from "next/script";
import Motion from "@/components/Motion";
import { themeScript } from "@/components/ThemeToggle";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/lib/site";
import { orgGraph, JsonLd } from "@/lib/schema";

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

const description =
  "Srijan Studio is a one person web design and AI studio in Ahmedabad. Websites from ₹15,000, live in 7 days. UI/UX, AI agents and AI video for founders and small businesses.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Website Design & AI Studio in Ahmedabad | Srijan Studio",
    template: "%s | Srijan Studio",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.founder, url: site.url }],
  creator: site.founder,
  keywords: [
    "website design Ahmedabad",
    "web developer Ahmedabad",
    "freelance web designer Ahmedabad",
    "UI UX designer Ahmedabad",
    "AI agent development India",
    "Next.js developer India",
    "AI video production",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Srijan Studio · Websites, products and AI, built by one person",
    description: "A one person design and engineering studio in Ahmedabad. Fixed price, live in 7 days.",
    url: "/",
    type: "website",
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srijan Studio · Websites, products and AI, built by one person",
    description: "A one person design and engineering studio in Ahmedabad. Fixed price, live in 7 days.",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  // Paste the codes from Google Search Console / Bing Webmaster Tools into
  // these environment variables in Vercel to verify you own the site.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } }),
  },
  category: "business",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ember focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-night"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Motion>{children}</Motion>
        <JsonLd data={orgGraph()} />
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
