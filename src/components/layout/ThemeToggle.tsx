"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot(): Theme | null {
  return null;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const update = () => {
    root.dataset.theme = theme;
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && typeof document.startViewTransition === "function") {
    document.startViewTransition(update);
  } else {
    update();
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label = theme ? `Switch to ${nextTheme} theme` : "Toggle color theme";

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      applyTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const target = getSnapshot() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_STORAGE_KEY, target);
    } catch {
      // Storage can be unavailable in private modes; the theme still applies for this visit.
    }
    applyTheme(target);
  };

  return (
    <div className={cn("group relative flex", className)}>
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        className="relative grid size-[34px] place-items-center rounded-full border border-border bg-surface text-text-secondary transition-[color,border-color,background-color,transform] duration-150 ease-out before:absolute before:-inset-[5px] before:content-[''] hover:border-border-strong hover:bg-surface-subtle hover:text-text-primary active:scale-95"
      >
        <Moon
          aria-hidden="true"
          className="col-start-1 row-start-1 size-4 transition-[opacity,transform] duration-200 ease-out dark:scale-75 dark:opacity-0"
        />
        <Sun
          aria-hidden="true"
          className="col-start-1 row-start-1 size-4 scale-75 opacity-0 transition-[opacity,transform] duration-200 ease-out dark:scale-100 dark:opacity-100"
        />
      </button>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-full z-50 mt-2 whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-[12px] text-text-secondary opacity-0 shadow-[var(--shadow-card)] transition-opacity duration-150 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100"
      >
        <span className="dark:hidden">Dark theme</span>
        <span className="hidden dark:inline">Light theme</span>
      </span>
    </div>
  );
}
