"use client";

import { SectionWrapper, SectionHeading } from "./section-wrapper";
import { skillCategories } from "@/data/resume";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/30"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
