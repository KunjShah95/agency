import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Kunj Shah Studio. Web, Design, AI, and Video.",
  description:
    "A solo design and tech studio in Ahmedabad. I build websites, interfaces, AI agents, and AI video for founders and small businesses who want it done fast.",
  openGraph: {
    title: "Kunj Shah Studio",
    description:
      "Websites, interfaces, AI agents, and AI video, built by one person.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SmoothScroll />
        <Background />
        {children}
      </body>
    </html>
  );
}
