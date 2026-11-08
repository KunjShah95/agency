import { site } from "./site";
import { servicePages, updated } from "./content";

/*
 * schema.org JSON-LD. Search engines and AI assistants read this to know
 * exactly who the studio is, what it sells, where, and at what price.
 * Validate changes at https://search.google.com/test/rich-results
 */

const base = site.url.replace(/\/$/, "");
export const ORG_ID = `${base}/#studio`;
export const PERSON_ID = `${base}/#founder`;

export function orgGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: site.name,
        alternateName: "Srijan",
        url: `${base}/`,
        logo: `${base}/icon.svg`,
        image: `${base}/opengraph-image`,
        email: site.email,
        telephone: site.phone.replace(/\s/g, ""),
        description:
          "A one person design and engineering studio in Ahmedabad building websites, UI/UX, AI agents and AI video for founders and small businesses. Fixed price, websites live in 7 days.",
        slogan: "Websites, products and AI, built by one person.",
        priceRange: "₹15,000+",
        currenciesAccepted: "INR",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "State", name: "Gujarat" },
          { "@type": "Country", name: "India" },
        ],
        founder: { "@id": PERSON_ID },
        knowsAbout: ["Web development", "Next.js", "UI/UX design", "AI agents", "Retrieval augmented generation", "AI video", "Local SEO"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: site.phone.replace(/\s/g, ""),
          email: site.email,
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: servicePages.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, url: `${base}/services/${s.slug}` },
            ...(s.priceValue && {
              priceSpecification: { "@type": "PriceSpecification", minPrice: s.priceValue, priceCurrency: "INR" },
            }),
          })),
        },
        // Add your profile URLs here (LinkedIn, GitHub, Google Business
        // Profile, Clutch...). AI assistants use these to confirm who you are.
        sameAs: site.profiles,
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.founder,
        jobTitle: "Design engineer",
        worksFor: { "@id": ORG_ID },
        address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
        sameAs: site.profiles,
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: site.name,
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
        dateModified: updated,
      },
    ],
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s) {
  const url = `${base}/services/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.answer,
        url,
        provider: { "@id": ORG_ID },
        areaServed: [{ "@type": "City", name: "Ahmedabad" }, { "@type": "Country", name: "India" }],
        ...(s.priceValue && {
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: s.priceValue,
            priceSpecification: { "@type": "PriceSpecification", minPrice: s.priceValue, priceCurrency: "INR" },
            availability: "https://schema.org/InStock",
          },
        }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${base}/#services` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
      faqSchema(s.faqs),
    ],
  };
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
