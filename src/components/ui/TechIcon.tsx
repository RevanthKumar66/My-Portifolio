import { useId } from "react";
import { getTechnologyIcon } from "@/data/technologies";
import { cn } from "@/lib/utils";

function isNearBlack(hex: string) {
  const [r, g, b] = [0, 2, 4].map((offset) => {
    const channel = parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.06;
}

/** Google's 2020 multicolor Gmail mark, with its official colors. */
function GmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="52 42 88 66" aria-hidden="true" focusable="false" className={cn("size-4 shrink-0", className)}>
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  );
}

/** Instagram's glyph with the gradient from its brand guidelines. */
function InstagramIcon({ path, className }: { path: string; className?: string }) {
  const gradientId = `${useId()}-instagram`;

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn("size-4 shrink-0", className)}>
      <defs>
        <radialGradient id={gradientId} cx="7.2" cy="25.7" r="30.7" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fdf497" />
          <stop offset="0.05" stopColor="#fdf497" />
          <stop offset="0.45" stopColor="#fd5949" />
          <stop offset="0.6" stopColor="#d6249f" />
          <stop offset="0.9" stopColor="#285aeb" />
        </radialGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d={path} />
    </svg>
  );
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  if (name === "Email") return <GmailIcon className={className} />;

  const icon = getTechnologyIcon(name);
  if (!icon) return null;
  if (name === "Instagram") return <InstagramIcon path={icon.path} className={className} />;

  const monochrome = isNearBlack(icon.hex);

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("size-4 shrink-0", !monochrome && "dark:brightness-[1.3]", className)}
      fill={monochrome ? "currentColor" : `#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}

export function hasTechIcon(name: string) {
  return name === "Email" || Boolean(getTechnologyIcon(name));
}
