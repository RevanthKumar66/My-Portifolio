import { ArrowUpRight, Download } from "lucide-react";
import { profile, socialGroups, socialProfiles } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CopyUrlButton } from "@/components/ui/SocialLinks";
import { TechIcon } from "@/components/ui/TechIcon";
import { whatsappLabel } from "@/components/ui/WhatsAppLink";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Contact Revanth Kumar | Software Engineer in Hyderabad",
  description:
    "Contact Revanth Kumar, a software engineer and full-stack developer in Hyderabad, by email, phone, or WhatsApp, or find him on GitHub, LinkedIn, LeetCode, and HackerRank.",
  path: "/contact",
  absoluteTitle: true,
});

const channels = [
  { label: "Phone", value: profile.phone, href: profile.phoneHref, ariaLabel: undefined },
  { label: "WhatsApp", value: "Message me on WhatsApp", href: profile.whatsapp, ariaLabel: whatsappLabel },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("Contact", "/contact")) }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Get in"
        accent="touch."
        description="Email or WhatsApp is the quickest way to reach me."
      />
      <Section labelledBy="channels-heading" className="pt-2 md:pt-4 lg:pt-6">
        <Container className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-4">
          <h2 id="channels-heading" className="sr-only">
            Contact channels
          </h2>

          <Reveal className="bg-panel-glow flex flex-col justify-between gap-6 rounded-[var(--radius-panel)] border border-border p-5 shadow-[var(--shadow-card)] sm:p-7">
            <div>
              <span className="inline-flex size-9 items-center justify-center rounded-[11px] border border-border bg-surface">
                <TechIcon name="Email" className="size-[18px]" />
              </span>
              <p className="mt-4 text-[13px] text-text-muted">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-0.5 inline-block break-all text-lg font-semibold tracking-[-0.02em] text-text-primary underline decoration-border-strong underline-offset-[5px] transition-colors duration-150 hover:text-primary hover:decoration-primary sm:text-xl"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href={`mailto:${profile.email}`}>
                Write an email
              </Button>
              <CopyEmailButton email={profile.email} />
            </div>
          </Reveal>

          <Reveal delay={60} className="flex flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-1.5 shadow-[var(--shadow-card)]">
            <ul className="divide-y divide-border">
              {channels.map(({ label, value, href, ariaLabel }) => {
                const external = href.startsWith("http");
                return (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={ariaLabel}
                      className="group flex min-h-14 items-center gap-3 rounded-[14px] px-3 py-2 transition-colors duration-150 hover:bg-surface-subtle"
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors group-hover:text-text-primary">
                        <TechIcon name={label} className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11.5px] text-text-muted">{label}</span>
                        <span className="block text-sm font-medium leading-snug text-text-primary [overflow-wrap:anywhere]">{value}</span>
                      </span>
                      {external ? (
                        <>
                          <ArrowUpRight
                            className="size-3.5 shrink-0 text-text-muted transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
                            aria-hidden="true"
                          />
                          {ariaLabel ? null : <span className="sr-only">(opens in a new tab)</span>}
                        </>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto p-2.5 pt-3">
              <Button
                href={profile.resumePath}
                download={profile.resumeFilename}
                variant="secondary"
                className="w-full"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </Button>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="grid grid-cols-1 rounded-[var(--radius-panel)] border border-border bg-surface p-1.5 shadow-[var(--shadow-card)] md:grid-cols-2 md:gap-1.5 lg:col-span-2"
          >
            {socialGroups.map((group) => (
              <div key={group.id}>
                <h3 className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  {group.title} profiles
                </h3>
                <ul className="divide-y divide-border">
                  {socialProfiles
                    .filter((social) => social.group === group.id)
                    .map((social) => (
                      <li key={social.label} className="flex items-center gap-1 pr-1.5">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex min-h-14 min-w-0 flex-1 items-center gap-3 rounded-[14px] px-3 py-2 transition-colors duration-150 hover:bg-surface-subtle"
                        >
                          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-text-primary">
                            <TechIcon name={social.label} className="size-4" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[11.5px] text-text-muted">{social.label}</span>
                            <span className="block truncate text-sm font-medium leading-snug text-text-primary">
                              {social.handle}
                            </span>
                          </span>
                          <ArrowUpRight
                            className="size-3.5 shrink-0 text-text-muted transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
                            aria-hidden="true"
                          />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                        <CopyUrlButton profile={social} />
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
