"use client";

import { SectionWrapper, SectionHeading } from "./section-wrapper";
import { personalInfo, stats } from "@/data/resume";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="A bit about who I am and what I do"
      />
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        <div className="md:col-span-2">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {personalInfo.bio}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m constantly exploring new technologies and methodologies to
            enhance my skillset and deliver efficient, high-impact solutions to
            complex problems. My work spans mobile development, backend systems,
            cloud architecture, and AI integrations.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:flex-col md:justify-start md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="w-[calc(50%-0.375rem)] min-w-[140px] rounded-xl border border-border bg-card p-4 text-center sm:w-[calc(50%-0.5rem)] md:w-auto md:p-6"
            >
              <p className="font-mono text-2xl font-bold text-accent md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
