"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "./section-wrapper";
import { projects } from "@/data/resume";
import { ArrowUpRight, Github } from "lucide-react";

function StoreLinks({
  playStoreUrl,
  appStoreUrl,
}: {
  playStoreUrl?: string;
  appStoreUrl?: string;
}) {
  if (!playStoreUrl && !appStoreUrl) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-3 pl-8 sm:pl-9">
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

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Things I've built and contributed to"
      />

      {featured && (
        <motion.a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}
          className="group relative mb-10 block overflow-hidden border border-border bg-card/60 p-6 transition-colors hover:border-accent/40 sm:p-8 md:p-10"
        >
          <div className="atmosphere pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                Featured
              </span>
              <span className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <h3 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              {featured.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1">
              {featured.tags.map((tag, i) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-muted-foreground"
                >
                  {i > 0 && <span className="mr-2 text-border">·</span>}
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
              <Github size={16} />
              View on GitHub
            </p>
          </div>
        </motion.a>
      )}

      <div className="divide-y divide-border border-y border-border">
        {rest.map((project, i) => (
          <div
            key={project.title}
            className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:py-6"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      {project.title}
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
              </div>
              <p className="mt-2 max-w-2xl pl-8 text-sm leading-relaxed text-muted-foreground sm:pl-9">
                {project.description}
              </p>
              <StoreLinks
                playStoreUrl={project.playStoreUrl}
                appStoreUrl={project.appStoreUrl}
              />
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 pl-8 sm:max-w-xs sm:justify-end sm:pl-0">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-muted-foreground"
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
