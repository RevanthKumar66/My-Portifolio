import { profile } from "@/data/profile";
import { PortraitLightbox } from "@/components/ui/PortraitLightbox";

export function HeroPortrait() {
  return (
    <figure
      className="enter relative mx-auto w-full max-w-[300px] rounded-full border border-border bg-surface p-1.5 shadow-[var(--shadow-raised)]"
      style={{ "--enter-delay": "100ms" } as React.CSSProperties}
    >
      <PortraitLightbox
        image={profile.portrait}
        priority
        sizes="(min-width: 1024px) 300px, (min-width: 768px) 27vw, 1px"
        className="w-full rounded-full"
        frameClassName="group/portrait aspect-square rounded-full bg-surface-subtle"
        imageClassName="object-cover transition-transform duration-500 ease-out group-hover/portrait:scale-[1.015]"
      />
    </figure>
  );
}

export function HeroAvatar() {
  return (
    <figure className="relative size-[6.25rem] shrink-0 rounded-full border border-border bg-surface-subtle shadow-[var(--shadow-card)] sm:size-[6.75rem]">
      <PortraitLightbox
        image={profile.avatar}
        priority
        sizes="(min-width: 640px) 108px, 100px"
        className="size-full rounded-full"
        frameClassName="size-full rounded-full"
        imageClassName="object-cover object-[50%_18%]"
      />
    </figure>
  );
}
