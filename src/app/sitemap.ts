import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { getProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-10");
  const staticRoutes = ["", "/projects", "/about", "/contact"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${profile.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...getProjects().map((project) => ({
      url: `${profile.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
