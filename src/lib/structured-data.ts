import { profile } from "@/data/profile";
import { highestEducation } from "@/data/education";
import { experiences } from "@/data/experience";
import { siteDescription } from "@/lib/metadata";
import type { Project } from "@/types/portfolio";

const personId = `${profile.url}/#person`;
const websiteId = `${profile.url}/#website`;
const currentRole = experiences.find((experience) => experience.current);

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: profile.fullName,
      jobTitle: profile.title,
      description: siteDescription,
      url: profile.url,
      image: `${profile.url}${profile.portrait.src}`,
      email: `mailto:${profile.email}`,
      telephone: profile.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      ...(currentRole
        ? { worksFor: { "@type": "Organization", name: currentRole.organization } }
        : {}),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: highestEducation.institution,
      },
      knowsAbout: [
        "Full-stack web development",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
      ],
      sameAs: [profile.linkedin, profile.github],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: profile.name,
      alternateName: `${profile.name} Portfolio`,
      url: profile.url,
      description: siteDescription,
      inLanguage: "en-IN",
      author: { "@id": personId },
      publisher: { "@id": personId },
    },
  ],
};

export function projectJsonLd(project: Project) {
  const url = `${profile.url}/projects/${project.slug}`;
  const image = project.visual.type === "illustration" ? undefined : `${profile.url}${project.visual.image.src}`;
  const links = [project.liveUrl, project.repositoryUrl].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: profile.url },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${profile.url}/projects` },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.name,
        description: project.description,
        url,
        genre: project.category,
        ...(image ? { image } : {}),
        ...(project.technologies.length > 0 ? { keywords: project.technologies.join(", ") } : {}),
        ...(links.length > 0 ? { sameAs: links } : {}),
        ...(project.kind === "personal"
          ? { author: { "@id": personId } }
          : {
              contributor: { "@id": personId },
              sourceOrganization: { "@type": "Organization", name: project.organization },
            }),
        isPartOf: { "@id": websiteId },
      },
    ],
  };
}
