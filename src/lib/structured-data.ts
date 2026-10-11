import { profile, socialProfiles } from "@/data/profile";
import { highestEducation } from "@/data/education";
import { experiences } from "@/data/experience";
import { absoluteUrl, siteDescription } from "@/lib/metadata";
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
      jobTitle: ["Software Engineer", "Software Developer", "Full-Stack Engineer"],
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
        "Software engineering",
        "Full-stack web development",
        "Web application development",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
      ],
      sameAs: socialProfiles.map((social) => social.canonicalHref ?? social.href),
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

function breadcrumbList(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    ...breadcrumbList([{ name, path }]),
  };
}

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "About", path: "/about" }]),
    {
      "@type": "ProfilePage",
      "@id": `${absoluteUrl("/about")}#profile`,
      url: absoluteUrl("/about"),
      name: `About ${profile.name}`,
      inLanguage: "en-IN",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId, "@type": "Person", name: profile.name },
    },
  ],
};

export function projectJsonLd(project: Project) {
  const url = `${profile.url}/projects/${project.slug}`;
  const links = [project.liveUrl, project.repositoryUrl].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbList([
        { name: "Projects", path: "/projects" },
        { name: project.name, path: `/projects/${project.slug}` },
      ]),
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.name,
        description: project.description,
        url,
        genre: project.category,
        image: `${profile.url}${project.image.src}`,
        ...(project.technologies.length > 0 ? { keywords: project.technologies.join(", ") } : {}),
        sameAs: links,
        author: { "@id": personId },
        isPartOf: { "@id": websiteId },
      },
    ],
  };
}
