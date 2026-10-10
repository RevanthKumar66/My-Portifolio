"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const [firstName, ...rest] = profile.name.split(" ");
const lastName = rest.join(" ");
const typedLength = firstName.length + (lastName ? lastName.length + 1 : 0);

function Letters({ text, offset, className }: { text: string; offset: number; className: string }) {
  return [...text].map((letter, index) => (
    <span
      key={`${letter}-${index}`}
      className={cn("wordmark-char", className)}
      style={{ "--i": offset + index } as React.CSSProperties}
    >
      {letter}
    </span>
  ));
}

/**
 * Logo treatment for the header and footer only. Uppercase is visual, and the letters are hidden from
 * assistive tech in favour of the plain name. With `typeOnView`, typing waits until the mark is visible.
 */
export function Wordmark({ className, typeOnView = false }: { className?: string; typeOnView?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!typeOnView || !element) return;

    if (!("IntersectionObserver" in window)) {
      element.dataset.typed = "true";
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        element.dataset.typed = "true";
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [typeOnView]);

  return (
    <span
      ref={ref}
      className={cn("wordmark inline-flex items-center whitespace-nowrap uppercase leading-none", className)}
      data-type-on-view={typeOnView ? "" : undefined}
      style={{ "--n": typedLength } as React.CSSProperties}
    >
      <span className="sr-only">{profile.name}</span>
      <span aria-hidden="true" className="inline-flex items-center">
        <Letters text={firstName} offset={0} className="font-bold text-text-primary" />
        {lastName ? (
          <>
            <span className="wordmark-char wordmark-space" style={{ "--i": firstName.length } as React.CSSProperties} />
            <Letters text={lastName} offset={firstName.length + 1} className="font-medium text-text-muted" />
          </>
        ) : null}
        <span className="wordmark-caret" />
      </span>
    </span>
  );
}
