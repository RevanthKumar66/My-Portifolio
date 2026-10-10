import { getTechnologyIcon } from "@/data/technologies";
import { cn } from "@/lib/utils";

function isNearBlack(hex: string) {
  const [r, g, b] = [0, 2, 4].map((offset) => {
    const channel = parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.06;
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const icon = getTechnologyIcon(name);
  if (!icon) return null;
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
  return Boolean(getTechnologyIcon(name));
}
