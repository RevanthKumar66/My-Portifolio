"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { isActivePath, navigation } from "@/data/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Wordmark } from "@/components/ui/Wordmark";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };
    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-surface-glass backdrop-blur-md">
      <div className="mx-auto flex h-[52px] w-full max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center rounded-md transition-opacity duration-150 hover:opacity-75"
        >
          <Wordmark className="text-[15px] md:text-base" />
          <span className="sr-only">, home</span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex h-[34px] items-center gap-0.5 rounded-full border border-border bg-surface/60 p-[2px]">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex h-7 items-center rounded-full px-3.5 text-[13px] transition-colors duration-150 ease-out",
                      active
                        ? "bg-text-primary font-medium text-background"
                        : "text-text-secondary hover:bg-surface-subtle hover:text-text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative flex items-center gap-2">
          <a
            href={profile.resumePath}
            download={profile.resumeFilename}
            className="hidden h-[34px] items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 text-[13px] font-medium leading-none text-text-primary transition-[border-color,background-color,transform] duration-150 ease-out hover:border-border-strong hover:bg-surface-subtle active:scale-[0.98] md:inline-flex"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Resume
          </a>
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            className="relative inline-flex size-[34px] items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-[border-color,background-color] duration-150 before:absolute before:-inset-[5px] before:content-[''] hover:border-border-strong hover:bg-surface-subtle md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>

          {open ? (
            <nav
              ref={menuRef}
              id={menuId}
              aria-label="Mobile"
              className="menu-pop absolute right-0 top-[calc(100%+8px)] w-[min(13.5rem,calc(100vw-2.5rem))] rounded-[16px] border border-border bg-surface p-1.5 shadow-[var(--shadow-float)] md:hidden"
            >
              <ul className="flex flex-col">
                {navigation.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex h-10 items-center justify-between rounded-[10px] px-3 text-[14.5px] font-medium transition-colors duration-150",
                          active ? "bg-primary-subtle text-primary" : "text-text-primary hover:bg-surface-subtle",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                        {active ? <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" /> : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-1.5 border-t border-border pt-1.5">
                <a
                  href={profile.resumePath}
                  download={profile.resumeFilename}
                  className="flex h-10 items-center gap-2 rounded-[10px] px-3 text-[14.5px] font-medium text-text-primary transition-colors duration-150 hover:bg-surface-subtle"
                  onClick={() => setOpen(false)}
                >
                  <Download className="size-4 text-primary" aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
