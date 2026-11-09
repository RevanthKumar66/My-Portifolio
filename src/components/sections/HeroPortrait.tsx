import Image from "next/image";
import { profile } from "@/data/profile";

export function HeroPortrait() {
  return (
    <figure
      className="enter relative mx-auto w-full max-w-[300px] rounded-full border border-border bg-surface p-1.5 shadow-[var(--shadow-raised)]"
      style={{ "--enter-delay": "100ms" } as React.CSSProperties}
    >
      <div className="group/portrait relative aspect-square overflow-hidden rounded-full bg-surface-subtle">
        <Image
          src={profile.portrait.src}
          alt={profile.portrait.alt}
          fill
          priority
          sizes="(min-width: 1024px) 300px, (min-width: 768px) 27vw, 1px"
          className="object-cover transition-transform duration-500 ease-out group-hover/portrait:scale-[1.015]"
        />
      </div>
    </figure>
  );
}

export function HeroAvatar() {
  return (
    <span className="relative inline-flex size-[5.5rem] shrink-0 overflow-hidden rounded-full border border-border bg-surface-subtle shadow-[var(--shadow-card)] sm:size-[6rem]">
      <Image
        src={profile.avatar.src}
        alt={profile.avatar.alt}
        fill
        priority
        sizes="(min-width: 640px) 96px, 88px"
        className="object-cover object-[50%_18%]"
      />
    </span>
  );
}
