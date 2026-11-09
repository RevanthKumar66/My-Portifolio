import type { Achievement, Profile, SocialProfile } from "@/types/portfolio";

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
    src: "/images/RevanthKumar.jpg",
    alt: "Revanth Kumar, software engineer in Hyderabad.",
    width: 988,
    height: 988,
  },
  avatar: {
    src: "/images/RevanthKumar.jpg",
    alt: "Revanth Kumar, software engineer.",
    width: 988,
    height: 988,
  },
  aboutAvatar: {
    src: "/images/RevanthKumar-Full.png",
    alt: "Revanth Kumar, software engineer.",
    width: 1024,
    height: 1536,
  },
  aboutPortrait: {
    src: "/images/RevanthKumar-Full.png",
    alt: "Revanth Kumar, software engineer in Hyderabad.",
    width: 1024,
    height: 1536,
  },
  eyebrow: "Software Engineer · Hyderabad, India",
  headline: "I build software that solves",
  headlineAccent: "real problems.",
  summary: "I work across frontend, backend, APIs, and databases.",
  currentRole: "Software Development Intern at Fishin’ India Private Limited",
  intro:
    "Software engineer in Hyderabad. Intern at Fishin’ India Private Limited, previously a developer at Deepvibe IT Solutions.",
};

export const socialProfiles: SocialProfile[] = [
  { label: "GitHub", group: "developer", href: profile.github, handle: "RevanthKumar66" },
  { label: "LinkedIn", group: "developer", href: profile.linkedin, handle: "in/revanthkumar66" },
  {
    label: "HackerRank",
    group: "developer",
    href: "https://www.hackerrank.com/profile/revanthkumar66",
    handle: "revanthkumar66",
  },
  { label: "LeetCode", group: "developer", href: "https://leetcode.com/u/revanthkumar66/", handle: "revanthkumar66" },
  {
    label: "Instagram",
    group: "social",
    href: "https://www.instagram.com/revanthkumar.co.in?cplk=MWJxeDdlZDN5bXBrMA==",
    canonicalHref: "https://www.instagram.com/revanthkumar.co.in/",
    handle: "@revanthkumar.co.in",
  },
  { label: "Facebook", group: "social", href: "https://www.facebook.com/share/1C325myawt/", handle: "View profile" },
  { label: "X", group: "social", href: "https://x.com/Revanth_Kumar46", handle: "@Revanth_Kumar46" },
];

export const socialGroups = [
  { id: "developer", title: "Developer" },
  { id: "social", title: "Social" },
] as const;

export const achievement: Achievement = {
  title: "100+ LeetCode problems",
  detail: "Solved with Python, covering core data structures and algorithms.",
  technology: "LeetCode",
};
