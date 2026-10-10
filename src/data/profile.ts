import type { Achievement, Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Revanth Kumar",
  fullName: "Revanth Kumar Bandi",
  title: "Software Engineer",
  location: "Hyderabad, India",
  email: "bandi@revanthkumar.co.in",
  phone: "+91 89783 91962",
  phoneHref: "tel:+918978391962",
  whatsapp: "https://wa.me/918978391962",
  linkedin: "https://linkedin.com/in/revanthkumar66",
  github: "https://github.com/RevanthKumar66",
  url: "https://revanthkumar.co.in",
  resumePath: "/resume/RevanthkumarResume.pdf",
  resumeFilename: "Revanth-Kumar-Resume.pdf",
  portrait: {
    src: "/images/revanth-kumar-portrait.webp",
    alt: "Portrait of Revanth Kumar outdoors, smiling, in a light checked shirt.",
    width: 880,
    height: 1100,
  },
  eyebrow: "Software Engineer · Hyderabad, India",
  headline: "I build software that solves",
  headlineAccent: "real problems.",
  summary: "I work across frontend, backend, APIs, and databases.",
  currentRole: "Software Development Intern at The Fishin Company",
  intro:
    "Software engineer in Hyderabad. Intern at The Fishin Company, previously a developer at Deepvibe IT Solutions.",
};

export const achievement: Achievement = {
  title: "100+ LeetCode problems",
  detail: "Solved with Python, covering core data structures and algorithms.",
  technology: "LeetCode",
};
