import Image from "next/image";
import { CarFront, ShieldCheck, UserRound, type LucideIcon } from "lucide-react";
import type { Project, ProjectVisual } from "@/types/portfolio";
import { TechIcon } from "@/components/ui/TechIcon";
import { cn } from "@/lib/utils";

type IllustrationVariant = Extract<ProjectVisual, { type: "illustration" }>["variant"];

const illustrationLabels: Record<IllustrationVariant, string> = {
  "booking-roles":
    "Schematic of the customer, driver, and admin workflows sharing one REST API and a MongoDB database.",
  "corporate-site": "Schematic of a corporate website layout with the Deepvibe logo and service, company, and contact sections.",
  "ml-pipeline": "Schematic of the eight notebook stages, from data exploration to a model ensemble, classifying X-rays as normal or pneumonia.",
};

function Line({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-border", className)} />;
}

function BrowserBar({ label }: { label?: string }) {
  return (
    <div className="flex h-6 shrink-0 items-center gap-1 border-b border-border bg-surface px-2.5">
      <span className="size-1.5 rounded-full bg-border-strong" />
      <span className="size-1.5 rounded-full bg-border-strong" />
      <span className="size-1.5 rounded-full bg-border-strong" />
      {label ? (
        <span className="mx-auto truncate rounded-full bg-surface-subtle px-2.5 py-px text-[9.5px] text-text-muted">
          {label}
        </span>
      ) : null}
    </div>
  );
}

const roles: { label: string; icon: LucideIcon; lines: string[] }[] = [
  { label: "Customer", icon: UserRound, lines: ["w-4/5", "w-3/5", "w-2/3"] },
  { label: "Driver", icon: CarFront, lines: ["w-3/4", "w-4/5", "w-1/2"] },
  { label: "Admin", icon: ShieldCheck, lines: ["w-2/3", "w-3/4", "w-3/5"] },
];

function BookingRoles() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-[6%] @sm:gap-3">
      <div className="grid grid-cols-3 gap-1.5 @sm:gap-2.5 @md:gap-4">
        {roles.map(({ label, icon: Icon, lines }, index) => (
          <div
            key={label}
            className={cn(
              "rounded-[10px] border border-border bg-surface px-1.5 py-2 shadow-[var(--shadow-card)] transition-transform duration-300 ease-out @sm:rounded-[12px] @sm:p-2.5 @md:p-3.5",
              index === 1 && "-translate-y-1 group-hover/media:-translate-y-1.5 @sm:-translate-y-2 @sm:group-hover/media:-translate-y-2.5",
            )}
          >
            <div className="flex items-center gap-1.5">
              <span className="hidden size-6 shrink-0 items-center justify-center rounded-md bg-primary-subtle text-primary @sm:inline-flex @md:size-7">
                <Icon className="size-3.5 @md:size-4" />
              </span>
              <span className="truncate text-[9.5px] font-semibold text-text-primary @sm:text-[10px] @md:text-xs">{label}</span>
            </div>
            <div className="mt-2 space-y-1.5 @sm:mt-2.5 @md:mt-3.5">
              {lines.map((width, lineIndex) => (
                <Line key={width} className={cn(width, lineIndex === 2 && "hidden @sm:block")} />
              ))}
            </div>
            <span className="mt-2 block h-3.5 w-1/2 rounded-full bg-primary-subtle @sm:mt-2.5 @sm:h-4 @md:mt-3.5 @md:h-5" />
          </div>
        ))}
      </div>
      <div className="mx-[10%] hidden grid-cols-3 @sm:grid" aria-hidden="true">
        {roles.map(({ label }) => (
          <span key={label} className="mx-auto h-3 w-px bg-border-strong @md:h-4" />
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 rounded-[10px] border border-border bg-surface px-2.5 py-1.5 @sm:rounded-[12px] @sm:px-3 @sm:py-2 @md:px-4 @md:py-2.5">
        <span className="flex min-w-0 items-center gap-1.5 text-[10px] font-medium text-text-secondary @md:text-xs">
          <TechIcon name="Node.js" className="size-3.5" />
          <TechIcon name="Express.js" className="size-3.5" />
          REST API · Auth · RBAC
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-medium text-text-secondary @md:text-xs">
          <TechIcon name="MongoDB" className="size-3.5" />
          MongoDB
        </span>
      </div>
    </div>
  );
}

function CorporateSite() {
  return (
    <div className="flex h-full items-center justify-center p-[7%]">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[12px] border border-border bg-surface shadow-[var(--shadow-card)]">
        <BrowserBar />
        <div className="flex items-center justify-between px-3 py-2">
          <Line className="w-10 bg-border-strong" />
          <span className="flex gap-2">
            <Line className="w-6" />
            <Line className="w-6" />
            <Line className="w-6" />
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4">
          <span className="rounded-[10px] bg-white px-3 py-2 ring-1 ring-black/5">
            <Image
              src="/logos/deepvibe.webp"
              alt=""
              width={676}
              height={338}
              className="h-auto w-[92px] @md:w-[128px]"
              sizes="128px"
            />
          </span>
          <span className="flex flex-wrap justify-center gap-1.5">
            {["Services", "Company", "Contact"].map((section) => (
              <span
                key={section}
                className="rounded-full border border-border bg-surface-subtle px-2 py-0.5 text-[10px] text-text-secondary @md:text-[11px]"
              >
                {section}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

const stages = ["Explore", "Prep", "Classic ML", "CNN", "Transfer", "Evaluate", "Grad-CAM", "Ensemble"];

function MlPipeline() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-[6%] @md:gap-4">
      <ol className="grid grid-cols-4 gap-1.5 @md:gap-2.5">
        {stages.map((stage, index) => (
          <li
            key={stage}
            className={cn(
              "rounded-[10px] border bg-surface px-2 py-1.5 @md:px-2.5 @md:py-2",
              index === 7 ? "border-primary/40 bg-primary-subtle" : "border-border",
            )}
          >
            <span className="block font-mono text-[9px] text-text-muted @md:text-[10px]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="block text-[10px] font-medium leading-tight text-text-primary @md:text-xs">{stage}</span>
          </li>
        ))}
      </ol>
      <div className="flex items-center justify-between gap-2 rounded-[12px] border border-border bg-surface px-3 py-2">
        <span className="flex items-center gap-2 text-text-primary">
          <TechIcon name="TensorFlow" className="size-3.5 @md:size-4" />
          <TechIcon name="Scikit-learn" className="size-3.5 @md:size-4" />
          <TechIcon name="Jupyter" className="size-3.5 @md:size-4" />
        </span>
        <span className="flex gap-1.5">
          <span className="rounded-full bg-surface-subtle px-2 py-0.5 font-mono text-[9px] text-text-secondary @md:text-[10px]">NORMAL</span>
          <span className="rounded-full bg-primary-subtle px-2 py-0.5 font-mono text-[9px] text-primary @md:text-[10px]">PNEUMONIA</span>
        </span>
      </div>
    </div>
  );
}

function Illustration({ variant }: { variant: IllustrationVariant }) {
  switch (variant) {
    case "booking-roles":
      return <BookingRoles />;
    case "corporate-site":
      return <CorporateSite />;
    case "ml-pipeline":
      return <MlPipeline />;
  }
}

export function ProjectMedia({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw",
  className,
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const { visual } = project;

  return (
    <div
      className={cn(
        "group/media @container relative aspect-[16/10] overflow-hidden rounded-[var(--radius-media)] border border-border bg-showcase",
        className,
      )}
    >
      {visual.type === "screenshot" ? (
        <div className="absolute inset-[6%] bottom-0 flex origin-bottom flex-col overflow-hidden rounded-t-[10px] border border-b-0 border-border bg-surface shadow-[var(--shadow-raised)] transition-transform duration-300 ease-out group-hover/media:scale-[1.02]">
          <BrowserBar label={project.liveUrl ? new URL(project.liveUrl).hostname.replace(/^www\./, "") : undefined} />
          <div className="relative flex-1">
            <Image
              src={visual.image.src}
              alt={visual.image.alt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover object-top"
            />
          </div>
        </div>
      ) : visual.type === "mockup" ? (
        <div className="absolute inset-x-[4%] inset-y-[6%] transition-transform duration-300 ease-out group-hover/media:scale-[1.02] dark:bg-[radial-gradient(closest-side,rgb(255_255_255/0.09),transparent)]">
          <Image
            src={visual.image.src}
            alt={visual.image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-contain drop-shadow-[0_12px_18px_rgb(0_0_0/0.14)]"
          />
        </div>
      ) : (
        <div role="img" aria-label={illustrationLabels[visual.variant]} className="absolute inset-0">
          <Illustration variant={visual.variant} />
        </div>
      )}
    </div>
  );
}
