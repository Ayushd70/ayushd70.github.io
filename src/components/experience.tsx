"use client";

import { SectionWrapper, SectionHeading } from "./section-wrapper";
import { experiences } from "@/data/resume";
import { ExternalLink } from "lucide-react";

function StoreLinks({
  playStoreUrl,
  appStoreUrl,
}: {
  playStoreUrl?: string;
  appStoreUrl?: string;
}) {
  if (!playStoreUrl && !appStoreUrl) return null;

  return (
    <div className="mt-2 flex flex-wrap items-center gap-3">
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
        >
          Play Store
        </a>
      )}
      {playStoreUrl && appStoreUrl && (
        <span className="text-border">·</span>
      )}
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
        >
          App Store
        </a>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey so far"
      />
      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-border md:left-[9px]" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10 md:pl-12">
              <div className="absolute top-2 left-0 h-4 w-4 border-2 border-accent bg-background md:h-5 md:w-5" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {exp.title}
                  </h3>
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent/80"
                      aria-label={`Visit ${exp.company}`}
                    >
                      {exp.company}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-accent">{exp.company}</p>
                  )}
                  <StoreLinks
                    playStoreUrl={exp.playStoreUrl}
                    appStoreUrl={exp.appStoreUrl}
                  />
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </p>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
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
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
