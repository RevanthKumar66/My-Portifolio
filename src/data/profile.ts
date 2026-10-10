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
    src: "/images/revanth-kumar.jpg",
    alt: "Revanth Kumar, smiling, in a navy shirt in front of framed tech prints.",
    width: 1000,
    height: 1000,
  },
  avatar: {
    src: "/images/revanth-kumar-avatar.jpg",
    alt: "Revanth Kumar, smiling, in a navy shirt.",
    width: 256,
    height: 256,
  },
  aboutAvatar: {
    src: "/images/revanth-kumar-about-avatar.jpg",
    alt: "Revanth Kumar in a maroon shirt.",
    width: 256,
    height: 256,
  },
  aboutPortrait: {
    src: "/images/revanth-kumar-about.jpg",
    alt: "Revanth Kumar in a maroon shirt, facing the camera in a bright office.",
    width: 1145,
    height: 1374,
  },
  eyebrow: "Software Engineer · Hyderabad, India",
  headline: "I build software that solves",
  headlineAccent: "real problems.",
  summary: "I work across frontend, backend, APIs, and databases.",
  currentRole: "Software Development Intern at Fishin’ India Private Limited",
  intro:
    "Software engineer in Hyderabad. Intern at Fishin’ India Private Limited, previously a developer at Deepvibe IT Solutions.",
};

export const achievement: Achievement = {
  title: "100+ LeetCode problems",
  detail: "Solved with Python, covering core data structures and algorithms.",
  technology: "LeetCode",
};
