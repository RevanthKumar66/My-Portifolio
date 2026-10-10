import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    id: "fishin",
    organization: "The Fishin Company",
    title: "Software Development Intern",
    start: "July 2026",
    end: "Present",
    current: true,
    monogram: "FC",
    logo: {
      src: "/logos/fishin.png",
      alt: "Fishin logo",
      width: 150,
      height: 90,
    },
    summary: "Contributing to a full-stack ERP for aquaculture operations, from interface to backend and database.",
    highlights: [
      "Contributing to five or more ERP modules, including authentication, role-based access control, and tenant management.",
      "Working on multi-tenant architecture with tenant-level data isolation, and supporting AWS deployment.",
      "Working with a custom design system and reusable UI components.",
    ],
  },
  {
    id: "deepvibe",
    organization: "Deepvibe IT Solutions Pvt. Ltd.",
    title: "Software Developer",
    start: "August 2025",
    end: "July 2026",
    monogram: "DV",
    logo: {
      src: "/logos/deepvibe-mark.webp",
      alt: "Deepvibe IT Solutions logo",
      width: 192,
      height: 190,
    },
    summary: "Primary developer on a driver-booking platform with customer, driver, and admin workflows.",
    highlights: [
      "Implemented customer, driver, and admin workflows, including booking management and dashboards.",
      "Built REST APIs and MongoDB models with Node.js and Express.js, with authentication, role-based access, and input validation.",
      "Worked across six or more core modules, including real-time updates and PWA support.",
    ],
  },
];
