import "./globals.css";
import { Bricolage_Grotesque, Instrument_Sans, Space_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: "Srijan Studio. Web, Design, AI, and Video.",
  description:
    "A solo design and tech studio in Ahmedabad. I build websites, interfaces, AI agents, and AI video for founders and small businesses who want it done fast.",
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
        {children}
      </body>
    </html>
  );
}
