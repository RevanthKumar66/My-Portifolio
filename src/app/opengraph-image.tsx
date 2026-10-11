import { ImageResponse } from "next/og";
import { SocialCard, portraitDataUrl, socialImageSize } from "@/lib/social-card";

export const alt = "Revanth Kumar, software engineer and full-stack developer in Hyderabad";
export const size = socialImageSize;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <SocialCard
        eyebrow="Software Engineer · Full-Stack Developer"
        title="Revanth Kumar"
        subtitle="Web applications with React, Next.js, TypeScript, and Node.js"
        portrait={await portraitDataUrl()}
      />
    ),
    { ...size },
  );
}
