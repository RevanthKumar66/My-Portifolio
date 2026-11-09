import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const siteTitle = `${profile.name} | Software Engineer`;

export const siteDescription =
  "Software engineer in Hyderabad building web apps with React, Next.js, TypeScript, and Node.js.";

export const siteKeywords = [
  "Revanth Kumar",
  "Software Engineer",
  "Full-Stack Developer",
  "React",
  "Next.js",
  "Hyderabad",
];

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

  const portraitImage = {
    url: profile.portrait.src,
    width: profile.portrait.width,
    height: profile.portrait.height,
    alt: profile.portrait.alt,
  };

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
      // Portrait first so link previews and crawlers can use the named photo.
      ...(hasOwnSocialImage ? {} : { images: [portraitImage, { url: "/opengraph-image", alt: socialTitle }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      ...(hasOwnSocialImage ? {} : { images: [profile.portrait.src, "/twitter-image"] }),
    },
  };
}
