import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Compare from "@/components/Compare";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { faqSchema, JsonLd } from "@/lib/schema";
import { homeFaqs } from "@/lib/content";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Nav />
      <Hero />
      <Stack />
      <Services />
      <Work />
      <Compare />
      <Process />
      <Packages />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
      <JsonLd data={faqSchema(homeFaqs)} />
    </main>
  );
}
