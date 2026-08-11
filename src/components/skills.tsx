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
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-3 font-mono text-xs tracking-[0.18em] text-accent uppercase">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
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
