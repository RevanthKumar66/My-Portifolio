import { GraduationCap } from "lucide-react";
import { education, hasEducationDetails } from "@/data/education";
import { Reveal } from "@/components/ui/Reveal";

export function EducationTimeline() {
  const entries = education.filter(hasEducationDetails);

  return (
    <ol className="grid gap-3">
      {entries.map((entry, index) => (
        <li key={entry.level}>
          <Reveal
            delay={index * 60}
            className="grid grid-cols-1 gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-4 shadow-[var(--shadow-card)] sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-5 md:p-5"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-[12px] bg-primary-subtle text-primary">
              <GraduationCap className="size-[18px]" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-semibold tracking-[-0.015em]">{entry.qualification}</h3>
              <p className="mt-0.5 text-sm text-text-secondary">
                {entry.institution}
                {entry.location ? `, ${entry.location}` : null}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
              {entry.start || entry.end ? (
                <span className="text-[13px] font-medium text-text-primary">
                  {[entry.start, entry.end].filter(Boolean).join("–")}
                </span>
              ) : null}
              {entry.grade ? (
                <span className="inline-flex h-[22px] items-center rounded-full bg-surface-subtle px-2 text-[11.5px] font-medium text-text-secondary">
                  {entry.grade}
                </span>
              ) : null}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
