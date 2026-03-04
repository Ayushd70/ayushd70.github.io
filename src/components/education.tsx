"use client";

import { SectionWrapper, SectionHeading } from "./section-wrapper";
import { education } from "@/data/resume";
import { ExternalLink, GraduationCap } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading title="Education" />
      <div className="rounded-xl border border-border bg-card p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
            <GraduationCap size={22} className="text-accent" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{education.degree}</h3>
                {education.url ? (
                  <a
                    href={education.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent/80"
                    aria-label={`Visit ${education.school}`}
                  >
                    {education.school}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <p className="text-sm text-accent">{education.school}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  {education.location}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-xs text-muted-foreground">
                  {education.period}
                </p>
                <p className="mt-1 font-mono text-sm font-semibold text-accent">
                  GPA: {education.gpa}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
