"use client";

import { SectionWrapper, SectionHeading } from "./section-wrapper";
import { education } from "@/data/resume";
import { ExternalLink } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading title="Education" />
      <div className="border-l-2 border-accent pl-5 sm:pl-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {education.degree}
            </h3>
            {education.url ? (
              <a
                href={education.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent/80"
                aria-label={`Visit ${education.school}`}
              >
                {education.school}
                <ExternalLink size={14} />
              </a>
            ) : (
              <p className="mt-1 text-sm text-accent">{education.school}</p>
            )}
            <p className="text-xs text-muted-foreground">{education.location}</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-mono text-xs text-muted-foreground">
              {education.period}
            </p>
            <p className="mt-1 font-mono text-sm font-semibold text-accent">
              CGPA: {education.cgpa}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
