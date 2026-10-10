import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/data/profile";

export const socialImageSize = { width: 1200, height: 630 };

export async function portraitDataUrl() {
  const file = await readFile(join(process.cwd(), "public", profile.portrait.src));
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

export function SocialCard({
  eyebrow,
  title,
  subtitle,
  portrait,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  portrait?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 56,
        background: "#F8F7F4",
        color: "#171717",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", flex: 1 }}>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: "#4F46E5", textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 48, height: 4, background: "#4F46E5", marginBottom: 28 }} />
          <div style={{ display: "flex", fontSize: 64, fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.05 }}>
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 28, color: "#525252", lineHeight: 1.35 }}>
            {subtitle}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#737373" }}>
          {`${profile.name} · revanthkumar.co.in`}
        </div>
      </div>
      {portrait ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={portrait}
          alt=""
          width={340}
          height={340}
          style={{ borderRadius: 9999, border: "8px solid #FFFFFF", boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
        />
      ) : null}
    </div>
  );
}
