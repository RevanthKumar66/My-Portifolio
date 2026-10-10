"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { CircleAlert, CircleCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastTone = "success" | "error";

type ToastItem = {
  id: number;
  message: string;
  tone: ToastTone;
};

type ShowToast = (message: string, tone?: ToastTone) => void;

const ToastContext = createContext<ShowToast | null>(null);

const AUTO_DISMISS_MS = 4500;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);
  const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>());

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
    const timer = timers.current.get(id);
    if (timer) clearTimeout(timer);
    timers.current.delete(id);
  }, []);

  const show = useCallback<ShowToast>(
    (message, tone = "success") => {
      nextId.current += 1;
      const id = nextId.current;
      setToasts((current) => [...current.slice(-2), { id, message, tone }]);
      timers.current.set(
        id,
        setTimeout(() => dismiss(id), AUTO_DISMISS_MS),
      );
    },
    [dismiss],
  );

  useEffect(() => {
    const active = timers.current;
    return () => active.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div
        role="region"
        aria-label="Notifications"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-center p-4 sm:justify-end sm:p-6"
      >
        <div role="status" aria-live="polite" className="w-full max-w-sm">
        <ol className="flex flex-col gap-2">
          {toasts.map((toast) => {
            const Icon = toast.tone === "success" ? CircleCheck : CircleAlert;
            return (
              <li
                key={toast.id}
                className="enter pointer-events-auto flex items-start gap-3 rounded-card border border-border bg-surface p-3.5 pr-2 text-sm text-text-primary shadow-[var(--shadow-float)]"
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 size-[18px] shrink-0",
                    toast.tone === "success" ? "text-success" : "text-error",
                  )}
                />
                <p className="flex-1 leading-snug">{toast.message}</p>
                <button
                  type="button"
                  onClick={() => dismiss(toast.id)}
                  className="-my-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-subtle hover:text-text-primary"
                >
                  <X aria-hidden="true" className="size-4" />
                  <span className="sr-only">Dismiss notification</span>
                </button>
              </li>
            );
          })}
        </ol>
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const show = useContext(ToastContext);
  if (!show) throw new Error("useToast must be used inside ToastProvider");
  return show;
}
