import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const siteTitle = `${profile.name} | Full-Stack Software Engineer in Hyderabad`;

export const siteDescription =
  "Revanth Kumar is a full-stack software engineer in Hyderabad, India, working with React, Next.js, TypeScript, Node.js, and databases. See his projects and experience.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  // Routes with their own opengraph-image file must not set images here, or the file is ignored.
  hasOwnSocialImage?: boolean;
};

export function absoluteUrl(path: string) {
  return path === "/" ? profile.url : `${profile.url}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  hasOwnSocialImage = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} | ${profile.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: profile.name,
      locale: "en_IN",
      type: "website",
      ...(hasOwnSocialImage ? {} : { images: ["/opengraph-image"] }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      ...(hasOwnSocialImage ? {} : { images: ["/twitter-image"] }),
    },
  };
}
