import { ImageResponse } from "next/og";
import { SocialCard } from "@/lib/social-card";

export const alt = "Revanth Kumar, Software Engineer in Hyderabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialCard />, { ...size });
}
