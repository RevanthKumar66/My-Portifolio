"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

async function writeToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // The async Clipboard API can be blocked by permissions policy (embedded browsers, iframes).
    const previousFocus = document.activeElement as HTMLElement | null;
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    previousFocus?.focus();
    return copied;
  }
}

export function CopyEmailButton({
  email,
  variant = "secondary",
  className,
}: {
  email: string;
  variant?: "secondary" | "icon";
  className?: string;
}) {
  const showToast = useToast();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (await writeToClipboard(email)) {
      setCopied(true);
      showToast("Email address copied to the clipboard.");
      setTimeout(() => setCopied(false), 2000);
    } else {
      showToast(`Couldn’t copy automatically. The address is ${email}.`, "error");
    }
  };

  const Icon = copied ? Check : Copy;

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        title="Copy email address"
        className={buttonClasses({ variant: "icon", className })}
      >
        <Icon aria-hidden="true" className="size-4" />
      </button>
    );
  }

  return (
    <button type="button" onClick={copy} className={buttonClasses({ variant: "secondary", className })}>
      <Icon aria-hidden="true" className="size-4" />
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
