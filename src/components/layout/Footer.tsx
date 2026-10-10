import Link from "next/link";
import { ArrowUp, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { TechIcon } from "@/components/ui/TechIcon";
import { Wordmark } from "@/components/ui/Wordmark";
import { whatsappLabel } from "@/components/ui/WhatsAppLink";
import { cn } from "@/lib/utils";

const socials = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
];

const linkClass =
  "inline-flex min-h-9 items-center gap-2 text-[13.5px] text-text-secondary transition-colors duration-150 hover:text-text-primary";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">{children}</p>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer border-t border-border">
      <Container className="grid grid-cols-1 gap-x-4 gap-y-8 py-10 min-[360px]:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10 md:py-12">
        <div className="min-[360px]:col-span-2 md:col-span-1">
          <Link href="/" className="inline-flex min-h-9 items-center rounded-md transition-opacity duration-150 hover:opacity-75">
            <Wordmark className="text-lg" typeOnView />
            <span className="sr-only">, home</span>
          </Link>
          <p className="mt-2 max-w-[34ch] text-[13.5px] leading-relaxed text-text-secondary">
            {profile.title} in {profile.location}.
          </p>
          <ul className="mt-4 flex gap-1.5">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  title={label}
                  className="relative inline-flex size-[34px] items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-[color,border-color] duration-150 ease-out before:absolute before:-inset-[5px] before:content-[''] hover:border-border-strong hover:text-text-primary"
                >
                  <TechIcon name={label} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <ColumnTitle>Pages</ColumnTitle>
          <ul className="mt-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnTitle>Contact</ColumnTitle>
          <ul className="mt-2">
            <li>
              <a className={cn(linkClass, "break-all")} href={`mailto:${profile.email}`}>
                <TechIcon name="Email" className="size-3.5" />
                {profile.email}
              </a>
            </li>
            <li>
              <a className={linkClass} href={profile.phoneHref}>
                <TechIcon name="Phone" className="size-3.5" />
                {profile.phone}
              </a>
            </li>
            <li>
              <a className={linkClass} href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={whatsappLabel}>
                <TechIcon name="WhatsApp" className="size-3.5" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className={cn(linkClass, "font-medium text-text-primary hover:text-primary")}
                href={profile.resumePath}
                download={profile.resumeFilename}
              >
                <Download className="size-3.5" aria-hidden="true" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <div className="flex items-center justify-between gap-4 border-t border-border py-4">
          <p className="text-[12.5px] text-text-muted">
            © {year} {profile.name}
          </p>
          <a
            href="#top"
            className="inline-flex min-h-9 items-center gap-1.5 text-[12.5px] text-text-muted transition-colors duration-150 hover:text-text-primary"
          >
            <ArrowUp className="size-3.5" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
