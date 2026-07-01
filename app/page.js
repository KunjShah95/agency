import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhySolo from "@/components/WhySolo";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <WhySolo />
      <Process />
      <Work />
      <Packages />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
