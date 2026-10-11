"use client";

import { Fragment, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { socialGroups, socialProfiles } from "@/data/profile";
import { buttonClasses } from "@/components/ui/Button";
import { TechIcon } from "@/components/ui/TechIcon";
import { useToast } from "@/components/ui/Toast";
import { writeToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";
import type { SocialProfile } from "@/types/portfolio";

const VIEWPORT_MARGIN = 8;

function useCopyUrl(profile: SocialProfile) {
  const showToast = useToast();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (await writeToClipboard(profile.href)) {
      setCopied(true);
      showToast(`${profile.label} profile URL copied to the clipboard.`);
      setTimeout(() => setCopied(false), 2000);
    } else {
      showToast(`Couldn’t copy automatically. The ${profile.label} URL is ${profile.href}`, "error");
    }
  };

  return { copied, copy };
}

export function CopyUrlButton({ profile, className }: { profile: SocialProfile; className?: string }) {
  const { copied, copy } = useCopyUrl(profile);
  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${profile.label} profile URL`}
      title="Copy URL"
      className={buttonClasses({ variant: "icon", className })}
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}

const actionClass =
  "inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-[9px] px-2.5 text-[12.5px] font-medium text-text-secondary transition-colors duration-150 hover:bg-surface-subtle hover:text-text-primary";

/**
 * Opens the profile on click. Hover, keyboard focus, or a first tap on touch screens reveals a
 * popover with Copy URL and Open profile actions.
 */
function SocialIconLink({ profile }: { profile: SocialProfile }) {
  const [open, setOpen] = useState(false);
  const { copied, copy } = useCopyUrl(profile);
  const popoverId = useId();
  const rootRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const pointerType = useRef("");
  const restoringFocus = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const setOpenAfter = (next: boolean, delay: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(next), delay);
  };

  const close = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        clearTimeout(timer.current);
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Keep the popover inside the viewport: shift it sideways, and flip it below when there is no room above.
  useLayoutEffect(() => {
    const popover = popoverRef.current;
    if (!open || !popover) return;
    popover.style.setProperty("--shift", "0px");
    popover.dataset.side = "top";
    const rect = popover.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const overflowLeft = VIEWPORT_MARGIN - rect.left;
    const overflowRight = rect.right - (viewportWidth - VIEWPORT_MARGIN);
    const shift = overflowLeft > 0 ? overflowLeft : overflowRight > 0 ? -overflowRight : 0;
    popover.style.setProperty("--shift", `${shift}px`);
    if (rect.top < VIEWPORT_MARGIN) popover.dataset.side = "bottom";
  }, [open]);

  return (
    <li
      ref={rootRef}
      className="relative"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setOpenAfter(true, 80);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setOpenAfter(false, 160);
      }}
      onFocus={(event) => {
        if (restoringFocus.current) {
          restoringFocus.current = false;
          return;
        }
        if (event.target.matches(":focus-visible")) {
          clearTimeout(timer.current);
          setOpen(true);
        }
      }}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && !rootRef.current?.contains(next)) close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.stopPropagation();
          close();
          if (document.activeElement !== triggerRef.current) {
            restoringFocus.current = true;
            triggerRef.current?.focus();
          }
        }
      }}
    >
      <a
        ref={triggerRef}
        href={profile.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${profile.label} (opens in a new tab)`}
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
        onPointerDown={(event) => {
          pointerType.current = event.pointerType;
        }}
        onClick={(event) => {
          // On touch screens the first tap reveals the actions; tapping the icon again opens the profile.
          if (pointerType.current !== "mouse" && pointerType.current !== "" && !open) {
            event.preventDefault();
            clearTimeout(timer.current);
            setOpen(true);
          }
          pointerType.current = "";
        }}
        className={cn(
          "relative inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-[color,border-color,background-color] duration-150 ease-out before:absolute before:-inset-1 before:content-[''] hover:border-border-strong hover:bg-surface-subtle hover:text-text-primary",
          open && "border-border-strong bg-surface-subtle text-text-primary",
        )}
      >
        <TechIcon name={profile.label} className="size-[17px]" />
      </a>

      {open ? (
        <div
          ref={popoverRef}
          id={popoverId}
          role="group"
          aria-label={`${profile.label} profile actions`}
          className="absolute bottom-full left-1/2 z-40 w-max translate-x-[calc(-50%+var(--shift,0px))] pb-2 data-[side=bottom]:bottom-auto data-[side=bottom]:top-full data-[side=bottom]:pb-0 data-[side=bottom]:pt-2"
        >
          <div className="popover-pop rounded-[12px] border border-border bg-surface p-1 shadow-[var(--shadow-float)]">
            <p className="flex items-baseline gap-1.5 px-2.5 pb-1 pt-1.5 text-[12.5px]">
              <span className="font-semibold text-text-primary">{profile.label}</span>
              <span className="text-text-muted">{profile.handle}</span>
            </p>
            <div className="flex gap-0.5">
              <button type="button" onClick={copy} className={actionClass}>
                {copied ? (
                  <Check aria-hidden="true" className="size-3.5 text-success" />
                ) : (
                  <Copy aria-hidden="true" className="size-3.5" />
                )}
                Copy URL<span className="sr-only"> for {profile.label}</span>
              </button>
              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={actionClass}
              >
                <ExternalLink aria-hidden="true" className="size-3.5" />
                Open profile<span className="sr-only"> on {profile.label} (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
}

export function SocialIconLinks({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-2", className)}>
      {socialGroups.map((group) => {
        const labelId = `footer-${group.id}-profiles`;
        return (
          <Fragment key={group.id}>
            <p id={labelId} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
              {group.title}
              <span className="sr-only"> profiles</span>
            </p>
            <ul aria-labelledby={labelId} className="flex flex-wrap gap-2">
              {socialProfiles
                .filter((profile) => profile.group === group.id)
                .map((profile) => (
                  <SocialIconLink key={profile.label} profile={profile} />
                ))}
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
}
