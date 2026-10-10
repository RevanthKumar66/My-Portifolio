import { ImageResponse } from "next/og";
import { SocialCard, portraitDataUrl, socialImageSize } from "@/lib/social-card";

export const alt = "Revanth Kumar, full-stack software engineer in Hyderabad";
export const size = socialImageSize;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <SocialCard
        eyebrow="Software Engineer · Hyderabad"
        title="Revanth Kumar"
        subtitle="Full-stack development with React, Next.js, TypeScript, and Node.js"
        portrait={await portraitDataUrl()}
      />
    ),
    { ...size },
  );
}
