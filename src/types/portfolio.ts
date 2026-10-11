export type ProfileLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  fullName: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  url: string;
  resumePath: string;
  resumeFilename: string;
  portrait: ImageAsset;
  avatar: ImageAsset;
  aboutPortrait: ImageAsset;
  aboutAvatar: ImageAsset;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  summary: string;
  currentRole: string;
  intro: string;
};

export type SocialProfile = {
  /** Brand name; also the key for its icon. */
  label: string;
  group: "developer" | "social";
  href: string;
  /** Profile URL without share-tracking parameters, for structured data. */
  canonicalHref?: string;
  handle: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Experience = {
  id: string;
  organization: string;
  title: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  monogram: string;
  logo?: ImageAsset;
};

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  problem: string;
  users: string;
  contribution: string[];
  technologies: string[];
  features: string[];
  architecture: string;
  /** Device mockup of the live site, stored locally. */
  image: ImageAsset;
  liveUrl: string;
  repositoryUrl?: string;
  note?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type EducationLevel = "undergraduate" | "intermediate" | "secondary";

export type Education = {
  level: EducationLevel;
  qualification: string;
  institution?: string;
  location?: string;
  start?: string;
  end?: string;
  grade?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  technology?: string;
  image?: ImageAsset;
};

export type Achievement = {
  title: string;
  detail: string;
  technology?: string;
};
