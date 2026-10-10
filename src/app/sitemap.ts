import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { getProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-10");
  const staticRoutes = [
    { path: "", images: [profile.portrait.src] },
    { path: "/projects", images: [] },
    { path: "/about", images: [profile.aboutPortrait.src] },
    { path: "/contact", images: [] },
  ];

  return [
    ...staticRoutes.map(({ path, images }) => ({
      url: `${profile.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      ...(images.length > 0 ? { images: images.map((src) => `${profile.url}${src}`) } : {}),
    })),
    ...getProjects().map((project) => ({
      url: `${profile.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${profile.url}${project.image.src}`],
    })),
  ];
}
