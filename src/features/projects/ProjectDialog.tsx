"use client";

import { useId, useRef } from "react";
import { Maximize2, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";

export function ProjectDialog({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pressedBackdrop = useRef(false);
  const titleId = useId();

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.documentElement.dataset.scrollLocked = "dialog";
  };

  const close = () => dialogRef.current?.close();

  const handleClose = () => {
    delete document.documentElement.dataset.scrollLocked;
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={open}
        className={buttonClasses({ variant: "secondary", size: "sm" })}
      >
        View details
        <Maximize2 className="size-3" aria-hidden="true" />
        <span className="sr-only">for {title}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="project-dialog"
        onClose={handleClose}
        onPointerDown={(event) => {
          pressedBackdrop.current = event.target === event.currentTarget;
        }}
        onClick={(event) => {
          if (pressedBackdrop.current && event.target === event.currentTarget) close();
          pressedBackdrop.current = false;
        }}
      >
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-3.5 sm:px-6">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">{eyebrow}</p>
              <h2 id={titleId} className="mt-0.5 text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                {title}
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              className={buttonClasses({ variant: "icon", className: "-mr-1 shrink-0" })}
            >
              <X className="size-4" aria-hidden="true" />
              <span className="sr-only">Close project details</span>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">
            {children}
          </div>
        </div>
      </dialog>
    </>
  );
}
