/*
 * Content that both the page and the search/AI markup read from, so what
 * people see and what Google / AI assistants read can never drift apart.
 *
 * Writing rules (AEO / GEO):
 *  - Every answer opens with a one sentence direct answer, then detail.
 *  - Use real numbers (₹, days) instead of adjectives.
 *  - Name the place (Ahmedabad, Gujarat) where it is natural.
 */

export const updated = "2026-11-08";

export const homeFaqs = [
  {
    q: "How much does a website cost in Ahmedabad?",
    a: "A focused website from Srijan Studio starts at ₹15,000 and a full multi page build starts at ₹60,000. You get a fixed price in writing after a short call, before any work starts, so the number never moves halfway through.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard website goes live in 7 days: plan on day one, design by day three, built by day six, live on day seven. Bigger builds with web apps or AI agents take two to four weeks.",
  },
  {
    q: "I'm not technical. Can you still help?",
    a: "Yes, most clients are not technical. I handle the design, the code, the AI and the video, and explain every decision in plain words. You bring the idea and the business knowledge.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Srijan Studio does four things: websites, UI/UX design, AI agents and AI video. Many projects combine two or three, which is simpler when one person builds all of them.",
  },
  {
    q: "What is an AI agent, and does my business need one?",
    a: "An AI agent is software that answers customers or runs a task on its own, using your own documents and tools. It is worth it when you answer the same questions or repeat the same steps many times a day, for example on WhatsApp.",
  },
  {
    q: "Do I own the website after it's built?",
    a: "Yes. You own the code, the design files and the domain. Nothing is locked to a page builder, so you can host it anywhere and change it whenever you like.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "You approve the design before anything is built, and every package includes revision rounds. The design step exists so there are no surprises at launch.",
  },
];

/* One page per service, each targeting the search a real client types. */
export const servicePages = [
  {
    slug: "website-development-ahmedabad",
    id: "web",
    name: "Website development",
    h1: "Website development in Ahmedabad, live in 7 days",
    metaTitle: "Website Development in Ahmedabad · From ₹15,000",
    metaDescription:
      "Fast, mobile first websites for Ahmedabad businesses, built in Next.js and live in 7 days. Fixed price from ₹15,000. You own the code.",
    answer:
      "Srijan Studio builds fast, mobile first websites for businesses in Ahmedabad and across India. A standard site costs from ₹15,000, goes live in 7 days, ranks on Google from day one, and you own every line of code.",
    price: "from ₹15,000",
    priceValue: 15000,
    timeline: "7 days",
    forWho: [
      "Shops, clinics, advisors and studios that need to be found on Google",
      "Founders who need a launch site or landing page this week",
      "Businesses stuck on Wix or WordPress that load slowly on phones",
    ],
    included: [
      "Custom design for your brand, approved before build",
      "Mobile first build in Next.js, hosted on Vercel",
      "Google ready: titles, descriptions, sitemap, structured data",
      "WhatsApp and call buttons where your customers expect them",
      "Speed tuned for Indian mobile networks",
      "Code, domain and accounts handed over to you",
    ],
    proof: "jigisha",
    faqs: [
      {
        q: "How much does a business website cost in Ahmedabad?",
        a: "A focused business website starts at ₹15,000 and a larger multi page site from ₹60,000. The price is fixed in writing before work starts.",
      },
      {
        q: "Will my website show up on Google?",
        a: "Yes. Every site is built for search from the start: proper titles, a sitemap, structured data and fast loading. One client site ranks on page 1 for local LIC advisor searches in Ahmedabad.",
      },
      {
        q: "Do you use WordPress or Wix?",
        a: "No. Sites are built in Next.js, which loads faster and has no plugin or monthly builder fees. You own the code and can host it anywhere.",
      },
      {
        q: "Can customers contact me on WhatsApp from the site?",
        a: "Yes. Most sites include WhatsApp buttons and forms that open a pre-filled WhatsApp message, because that is how customers in Gujarat prefer to reach a business.",
      },
    ],
  },
  {
    slug: "ui-ux-design-ahmedabad",
    id: "design",
    name: "UI / UX design",
    h1: "UI/UX design for apps and products, from Ahmedabad",
    metaTitle: "UI/UX Designer in Ahmedabad · App & Product Design",
    metaDescription:
      "UI/UX design for apps, SaaS products and websites. Flows, screens and design systems by a designer who also builds them. From ₹15,000.",
    answer:
      "Srijan Studio designs the screens and flows of apps, SaaS products and websites, then builds them. Design work starts from ₹15,000, with clickable designs in days and a component system your product can grow into.",
    price: "from ₹15,000",
    priceValue: 15000,
    timeline: "3 to 10 days",
    forWho: [
      "Startups that need an MVP designed before development",
      "Products whose users get lost or drop off",
      "Teams that need a consistent design system",
    ],
    included: [
      "User flows mapped before any screens",
      "Clickable designs you can test on your phone",
      "Design system: colours, type, buttons, forms",
      "Developer ready files, or the build itself",
      "Accessibility checks for contrast and tap targets",
    ],
    proof: "swarnika",
    faqs: [
      {
        q: "How much does UI/UX design cost?",
        a: "Focused UI/UX work starts at ₹15,000. A full product design with a design system is usually part of a ₹60,000+ launch build.",
      },
      {
        q: "Do you also develop the design?",
        a: "Yes. The same person designs and builds it, so nothing gets lost between design and code.",
      },
      {
        q: "What do I get at the end of a design project?",
        a: "Clickable designs, a design system, and files ready for development, or a finished, working product if you choose the build too.",
      },
    ],
  },
  {
    slug: "ai-agent-development",
    id: "agent",
    name: "AI agents",
    h1: "AI agent development for small businesses in India",
    metaTitle: "AI Agent Development India · WhatsApp & Support Bots",
    metaDescription:
      "Custom AI agents that answer customers, take orders and run workflows, wired into your WhatsApp, documents and tools. Built in Ahmedabad. From ₹15,000.",
    answer:
      "Srijan Studio builds custom AI agents that answer customers, take orders and run repeat tasks, connected to your own WhatsApp, documents and tools. Agents start from ₹15,000 and are tested on your real questions before launch.",
    price: "from ₹15,000",
    priceValue: 15000,
    timeline: "1 to 3 weeks",
    forWho: [
      "Businesses answering the same customer questions all day",
      "Teams copying data between sheets, forms and WhatsApp",
      "Founders who want an AI feature inside their product",
    ],
    included: [
      "A short audit of which tasks are worth automating",
      "An agent trained on your documents (RAG), not generic answers",
      "Connections to WhatsApp, Google Sheets, email or your app",
      "Guardrails: it hands over to a human when unsure",
      "Testing on your real customer questions before launch",
    ],
    proof: null,
    faqs: [
      {
        q: "What is an AI agent?",
        a: "An AI agent is software that understands a request, looks up the right information in your documents or tools, and acts on it, like answering a customer or creating an order.",
      },
      {
        q: "Can an AI agent work on WhatsApp?",
        a: "Yes. Agents can answer on WhatsApp, a website chat or inside your own app, and pass the conversation to you when a human is needed.",
      },
      {
        q: "How much does an AI agent cost?",
        a: "A single focused agent starts at ₹15,000. Running costs for the AI model are usually small and billed to your own account.",
      },
      {
        q: "Will it make things up?",
        a: "Agents are built to answer only from your own information and to say when they don't know. They are tested on real questions before going live.",
      },
    ],
  },
  {
    slug: "ai-video-production",
    id: "video",
    name: "AI video",
    h1: "AI video production for launches, ads and reels",
    metaTitle: "AI Video Production · Product Reels & Ads",
    metaDescription:
      "Short AI made videos for product launches, ads and Instagram reels. Scripted, generated and delivered ready to post. Quoted per reel.",
    answer:
      "Srijan Studio makes short AI videos for product launches, ads and Instagram reels: scripted, generated, edited and delivered ready to post. Pricing is quoted per reel, and a first cut usually arrives within days.",
    price: "quoted per reel",
    priceValue: null,
    timeline: "2 to 5 days per reel",
    forWho: [
      "Brands launching a product without a film shoot budget",
      "Businesses that need steady reels for Instagram",
      "Startups that need a short explainer for their site",
    ],
    included: [
      "Script and storyboard written for your audience",
      "AI generated visuals and voice, edited together",
      "Formats for reels, stories, YouTube and your website",
      "One round of changes on the first cut",
    ],
    proof: null,
    faqs: [
      {
        q: "What is an AI video?",
        a: "A video whose visuals, voice or both are generated with AI tools, then scripted and edited like a normal production. It is much faster and cheaper than a shoot for short content.",
      },
      {
        q: "How much does an AI video cost?",
        a: "AI videos are quoted per reel, based on length and how much custom footage is needed. You get the number before work starts.",
      },
      {
        q: "Can I use the videos in ads?",
        a: "Yes. Videos are delivered in the right formats for Instagram, Facebook, YouTube and Google ads.",
      },
    ],
  },
];

export const servicePageById = Object.fromEntries(servicePages.map((s) => [s.id, s]));
