"use client";

import { SectionWrapper, SectionHeading } from "./section-wrapper";
import { experiences } from "@/data/resume";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey so far"
      />
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border md:left-[23px]" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 md:pl-16">
              <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:h-12 md:w-12">
                <Briefcase size={18} className="text-accent" />
              </div>

              <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/30 md:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-accent">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
