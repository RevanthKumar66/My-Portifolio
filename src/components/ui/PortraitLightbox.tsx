"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import type { ImageAsset } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export function PortraitLightbox({
  image,
  priority = false,
  sizes,
  className,
  frameClassName,
  imageClassName,
  label,
}: {
  image: ImageAsset;
  priority?: boolean;
  sizes: string;
  className?: string;
  frameClassName?: string;
  imageClassName?: string;
  /** Accessible name for the open action */
  label?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pressedBackdrop = useRef(false);
  const titleId = useId();
  const openLabel = label ?? `View larger photo of ${image.alt}`;

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.documentElement.dataset.scrollLocked = "dialog";
  };

  const close = () => dialogRef.current?.close();

  const handleClose = () => {
    delete document.documentElement.dataset.scrollLocked;
    triggerRef.current?.focus({ preventScroll: true });
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={openLabel}
        onClick={open}
        className={cn(
          "block cursor-zoom-in appearance-none border-0 bg-transparent p-0 text-left outline-none transition-opacity duration-150",
          "focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        <span className={cn("relative block overflow-hidden", frameClassName)}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className={imageClassName}
          />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="image-preview-dialog"
        onClose={handleClose}
        onPointerDown={(event) => {
          pressedBackdrop.current = event.target === event.currentTarget;
        }}
        onClick={(event) => {
          if (pressedBackdrop.current && event.target === event.currentTarget) close();
          pressedBackdrop.current = false;
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") close();
        }}
      >
        <p id={titleId} className="sr-only">
          {image.alt}
        </p>
        <button
          type="button"
          className="flex h-dvh w-screen cursor-zoom-out items-center justify-center bg-transparent p-4 sm:p-6 md:p-8"
          aria-label="Close photo preview"
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution preview without layout constraints */}
          <img
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            className="max-h-[min(90dvh,920px)] max-w-[min(92vw,680px)] rounded-[16px] object-contain shadow-[0_24px_64px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
            draggable={false}
          />
        </button>
      </dialog>
    </>
  );
}
