import { ImageResponse } from "next/og";
import { SocialCard, portraitDataUrl, socialImageSize } from "@/lib/social-card";

export const alt = "Revanth Kumar | Software Engineer";
export const size = socialImageSize;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <SocialCard
        eyebrow="Software Engineer"
        title="Revanth Kumar"
        subtitle="React · Next.js · TypeScript · Node.js"
        portrait={await portraitDataUrl()}
      />
    ),
    { ...size },
  );
}
