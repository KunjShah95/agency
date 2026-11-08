/*
 * Case studies. Each one: what was missing, what got built, what changed.
 * Only write results that are true and checkable.
 */

export const swarnikaQuote =
  "Had a wonderful experience working with you on our jewellery website! The website has turned out beautifully, with an elegant, premium and professional look that perfectly reflects our brand. Your creativity, attention to detail, patience and dedication throughout the process are truly appreciated. You understood our vision and brought it to life exactly the way we wanted. Thank you for your excellent work and support. Highly recommended!";

export const projects = [
  {
    id: "swarnika",
    href: "https://swarnika-jewellery-phi.vercel.app/",
    poster: "swarnika",
    category: "Web design · Jewellery",
    year: "2026",
    title: "Swarnika Jewellery, Manek Chowk",
    before: "A wholesale gold and diamond counter whose buyers had no way to browse designs before a call or a visit.",
    built: "A premium catalogue site: 9K and 18K designs with weights and price ranges, a diamond cut picker, and wholesale quotes in one WhatsApp message.",
    results: [
      ["Catalogue", "weights and price ranges online"],
      ["1 message", "WhatsApp wholesale quote"],
      ["Premium", "in the client's own words"],
    ],
    quote: { text: swarnikaQuote, who: "Swarnika Jewellery", where: "Wholesale jeweller, Ahmedabad" },
  },
  {
    id: "jigisha",
    href: "https://jigishakiranshah.in/",
    img: "/work/jigisha.jpeg",
    alt: "Jigisha Kiran Shah, LIC advisor website",
    category: "Web · Local SEO",
    year: "2025",
    title: "Jigisha Kiran Shah, LIC Advisor",
    before: "An advisor with 22+ years and 2,700+ families behind her, and no way to be found by people searching on Google.",
    built: "A fast, search-first site on her own domain: a goal picker that opens WhatsApp pre-filled, a cover assessment form, and her clients' reviews and 5.0 Google rating up front.",
    results: [
      ["Page 1", "Google, local LIC searches"],
      ["6 goals", "each one a pre-filled WhatsApp"],
      ["Visit ↗", "jigishakiranshah.in", "https://jigishakiranshah.in/"],
    ],
    // Reviews from Jigisha's own clients, shown on the testimonials section
    // built for her site. Labelled as such: they praise her, not the studio.
    siteReviews: {
      label: "From the reviews section I built for her",
      items: [
        { text: "She guided me through every detail and helped me choose the best plan for long-term security.", who: "Dev Chhajed", where: "Ranip, Ahmedabad" },
        { text: "Jigisha ben personally guided me through every step and ensured our claim was settled within 20 days.", who: "Meena Shah", where: "Daxini Society, Ahmedabad" },
        { text: "Three generations of our family trust Jigisha ben with our financial protection.", who: "Kunj Shah", where: "Ahmedabad" },
      ],
    },
    // Add a line from Jigisha herself about the website once she sends one:
    // quote: { text: "...", who: "Jigisha Kiran Shah", where: "LIC Advisor, Ahmedabad" },
  },
  {
    id: "aaravsen",
    href: "https://aaravsen.vercel.app/",
    poster: "aarav",
    category: "Web design · Book launch",
    year: "2025",
    title: "Aarav Sen, Shattered Skies",
    before: "A debut genre bending novel that needed to feel like a real release, not a link in a bio.",
    built: "A typography led, atmospheric launch site around a strong author brand, with one clear path to pre order.",
    results: [
      ["Live", "author launch site"],
      ["Type led", "atmosphere over clutter"],
      ["1 path", "straight to pre order"],
    ],
  },
];
