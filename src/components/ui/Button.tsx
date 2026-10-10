import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "text" | "icon";

const variants: Record<Variant, string> = {
  primary:
    "border border-transparent bg-primary-solid text-on-primary shadow-[0_1px_2px_rgb(30_27_75/0.2),inset_0_1px_0_rgb(255_255_255/0.16)] hover:bg-primary-solid-hover",
  secondary:
    "border border-border-strong bg-surface text-text-primary hover:border-text-muted hover:bg-surface-subtle",
  text: "border border-transparent bg-transparent text-primary hover:text-primary-hover",
  icon: "border border-border bg-surface text-text-secondary hover:border-border-strong hover:text-text-primary",
};

const sizes = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  download?: boolean | string;
  "aria-label"?: string;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return cn(
    "group/btn inline-flex select-none items-center justify-center gap-1.5 rounded-full font-medium transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
    variants[variant],
    (variant === "primary" || variant === "secondary") && "hover:-translate-y-px active:translate-y-0",
    variant === "text" && "h-auto min-h-10 px-0",
    variant === "icon" && "size-9 p-0",
    variant !== "text" && variant !== "icon" && sizes[size],
    className,
  );
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = buttonClasses({ variant, size, className });

  if ("href" in props && typeof props.href === "string") {
    const { href, external, download } = props;

    if (external || download || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={classes}
          download={download}
          aria-label={props["aria-label"]}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={props["aria-label"]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={classes}
      disabled={props.disabled}
      onClick={props.onClick}
      id={props.id}
      name={props.name}
      aria-label={props["aria-label"]}
    >
      {children}
    </button>
  );
}
