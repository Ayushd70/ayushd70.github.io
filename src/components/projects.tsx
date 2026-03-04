"use client";

import { SectionWrapper, SectionHeading } from "./section-wrapper";
import { projects } from "@/data/resume";
import { ExternalLink, FolderOpen } from "lucide-react";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Things I've built and contributed to"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 md:p-6"
          >
            <div className="flex items-start justify-between">
              <FolderOpen
                size={22}
                className="text-accent"
              />
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                  aria-label={`Visit ${project.title}`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            <h3 className="mt-4 text-base font-semibold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
