import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { themeColors } from "@/lib/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} | ${profile.title}`,
    short_name: profile.name,
    description: `${profile.title} in ${profile.location}.`,
    start_url: "/",
    display: "standalone",
    background_color: themeColors.light,
    theme_color: themeColors.light,
    lang: "en",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
