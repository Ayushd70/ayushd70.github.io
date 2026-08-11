"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Work
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Things I&apos;ve built and contributed to
          </p>
          <div className="mt-5 h-px w-20 bg-accent" />
        </div>
        <Link
          href="/work/"
          className="inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent/80"
        >
          View all
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}
          className="mb-10"
        >
          <Link
            href={`/work/${featured.slug}/`}
            className="group relative block overflow-hidden border border-border bg-card/60 p-6 transition-colors hover:border-accent/40 sm:p-8 md:p-10"
          >
            <div className="atmosphere pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                  Featured · {featured.category}
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
              <p className="mt-6 text-sm text-accent">Read case study →</p>
            </div>
          </Link>
        </motion.div>
      )}

      <div className="divide-y divide-border border-y border-border">
        {rest.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}/`}
            className="group flex flex-col gap-3 py-5 transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:py-6"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display inline-flex items-center gap-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                  {project.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </h3>
              </div>
              <p className="mt-2 max-w-2xl pl-8 text-sm leading-relaxed text-muted-foreground sm:pl-9">
                {project.description}
              </p>
              <p className="mt-2 pl-8 font-mono text-[11px] tracking-wide text-muted-foreground/80 uppercase sm:pl-9">
                {project.category}
              </p>
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
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
