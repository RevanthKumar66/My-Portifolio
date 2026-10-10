import { profile } from "@/data/profile";
import { highestEducation } from "@/data/education";
import type { Project } from "@/types/portfolio";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.fullName,
  jobTitle: profile.title,
  url: profile.url,
  email: `mailto:${profile.email}`,
  telephone: "+918978391962",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: highestEducation.institution,
  },
  sameAs: [profile.linkedin, profile.github],
  description: profile.summary,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${profile.name} Portfolio`,
  url: profile.url,
  description:
    "Software Engineer in Hyderabad, India, focused on full-stack development, backend engineering, enterprise applications, and scalable web experiences.",
};

export function breadcrumbJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Projects",
        item: `${profile.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.name,
        item: `${profile.url}/projects/${project.slug}`,
      },
    ],
  };
}
