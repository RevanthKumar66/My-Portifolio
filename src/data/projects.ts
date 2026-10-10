import type { Project } from "@/types/portfolio";

const repositoryNote = "A public source repository is not available, so only the live site is linked.";

export const projects: Project[] = [
  {
    slug: "elite-real-estate",
    name: "Elite Real Estate",
    shortDescription: "Website for a luxury construction and development brand in Hyderabad.",
    description:
      "A website for Elite Realestate, a luxury construction and development brand in Gajularamaram, Hyderabad. The live site introduces the brand, presents its properties, and lets visitors get in touch or request a quote.",
    category: "Real estate website",
    problem:
      "A construction and development brand needs a public site that introduces its work and gives prospective buyers a direct way to get in touch.",
    users: "Prospective buyers and clients looking at properties in Hyderabad.",
    contribution: [
      "Built the website as a Next.js application.",
      "Built the About, Properties, and Contact sections and a request-a-quote call to action.",
      "Made the layout responsive across desktop, tablet, and phone screens.",
      "Deployed the site on Firebase Hosting.",
    ],
    technologies: ["Next.js", "Firebase"],
    features: ["About section", "Property listings", "Request a quote", "Contact details", "Responsive layout"],
    architecture:
      "A Next.js application served from Firebase Hosting. The source repository is not public, so implementation details beyond the live deployment are not listed here.",
    image: {
      src: "/projects/elite-real-estate.png",
      alt: "Elite Real Estate website on desktop, tablet, and phone, with the headline “Building Legacies in Hyderabad.”",
      width: 854,
      height: 384,
    },
    liveUrl: "https://elite-realestate.web.app/",
    note: repositoryNote,
  },
  {
    slug: "home-dream-interio",
    name: "Home Dream Interio",
    shortDescription: "Website for an interior design studio in Hyderabad.",
    description:
      "A website for Home Dream Interio, an interior design studio in Hyderabad. The live site covers the studio’s design services and featured work, with a WhatsApp button for enquiries.",
    category: "Interior design website",
    problem:
      "An interior design studio needs a site that shows its services and past work and makes it easy for homeowners to start a conversation.",
    users: "Homeowners in Hyderabad planning interior work.",
    contribution: [
      "Built the website as a Next.js application.",
      "Built the service sections for living rooms, bedrooms, modular kitchens, TV units, bathrooms, and full home interiors.",
      "Added a featured portfolio and a WhatsApp contact button.",
      "Made the layout responsive across desktop, tablet, and phone screens.",
    ],
    technologies: ["Next.js", "Vercel"],
    features: ["Design services", "Featured portfolio", "WhatsApp enquiries", "Responsive layout"],
    architecture:
      "A Next.js application deployed on Vercel. The source repository is not public, so implementation details beyond the live deployment are not listed here.",
    image: {
      src: "/projects/home-dream-interio.png",
      alt: "Home Dream Interio website on desktop, tablet, and phone, with the headline “Designing Spaces Where Luxury Meets Personal Expression”",
      width: 854,
      height: 384,
    },
    liveUrl: "https://home-dream-interio.vercel.app/",
    note: repositoryNote,
  },
  {
    slug: "cro-engine",
    name: "CRO Engine",
    shortDescription: "AI audits of Shopify storefronts for conversion rate optimization.",
    description:
      "An AI tool that audits Shopify storefronts for conversion rate optimization (CRO). It scans public storefront pages, uses Gemini to check layouts and copy against e-commerce heuristics, and returns prioritized recommendations.",
    category: "AI web app",
    problem:
      "Store owners often cannot tell which parts of a storefront cost them sales, such as missing calls to action, weak copy, or missing trust signals.",
    users: "Shopify store owners and the developers who work on their stores.",
    contribution: [
      "Built the application with Next.js and deployed it on Vercel.",
      "Built the scan step, which reads calls to action, headings, product layout, and copy from public storefront pages without installing anything on the store.",
      "Used Gemini to analyze those pages against e-commerce psychology heuristics.",
      "Added a score for each page type and recommendations ranked by impact and effort.",
    ],
    technologies: ["Next.js", "Google Gemini", "Vercel"],
    features: [
      "Storefront scan from a URL",
      "Gemini-based analysis",
      "Per-page CRO scores",
      "Trust, mobile UX, and copy checks",
      "Ranked recommendations",
    ],
    architecture:
      "A Next.js application deployed on Vercel. An audit runs in three steps: scan the public storefront pages, analyze them with Gemini, and return ranked recommendations. The source repository is not public.",
    image: {
      src: "/projects/cro-engine.png",
      alt: "CRO Engine website on desktop, tablet, and phone, with the headline “Find Conversion Bottlenecks Before Your Customers Do.”",
      width: 854,
      height: 384,
    },
    liveUrl: "https://cro-engine-seven.vercel.app/",
    note: repositoryNote,
  },
  {
    slug: "mentor-os-ai",
    name: "Mentor OS AI",
    shortDescription: "AI mentors for learning, coding, DSA practice, and data analysis.",
    description:
      "An AI learning platform that brings specialized mentors into one workspace. The live site, branded MentorAI OS, offers mentors for learning, coding, DSA, data science, research, and career and resume coaching.",
    category: "AI learning platform",
    problem:
      "Learners switch between separate tools for tutoring, coding practice, notes, and data analysis. This project brings those workflows into one workspace.",
    users: "Students, developers, job seekers, data scientists, and researchers.",
    contribution: [
      "Built the platform as a Next.js application and deployed it on Vercel.",
      "Built specialized mentors for learning, coding, DSA, data science, research, and career and resume coaching.",
      "Built a workspace covering chat and tutoring, a knowledge base, code review, and dataset analysis.",
    ],
    technologies: ["Next.js", "Vercel"],
    features: ["Specialized AI mentors", "Chat and tutoring", "Knowledge base", "Code review", "Dataset analysis", "DSA coaching"],
    architecture:
      "A Next.js application deployed on Vercel. The source repository is not public, so the AI provider and backend services are not listed here.",
    image: {
      src: "/projects/mentor-os-ai.png",
      alt: "Mentor OS AI website on desktop, tablet, and phone, with the headline “Meet your specialized AI Mentors.”",
      width: 854,
      height: 384,
    },
    liveUrl: "https://mentor-ai-web-chi.vercel.app/",
    note: repositoryNote,
  },
];
