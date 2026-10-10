import type { Metadata } from "next";
import { profile } from "@/data/profile";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? profile.url : `${profile.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: profile.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
