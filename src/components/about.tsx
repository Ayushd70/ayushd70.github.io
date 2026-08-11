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
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {personalInfo.bio}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m constantly exploring on-device intelligence, scalable Flutter
            architecture, and AI-assisted engineering to ship high-impact
            products. My work spans mobile, backend systems, and privacy-first
            AI.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:col-span-5 md:grid-cols-1 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-accent pl-4">
              <p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
