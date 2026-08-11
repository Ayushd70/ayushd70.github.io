import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Ayush Dubey",
  description:
    "Selected work by Ayush Dubey — Flutter apps, SDKs, open-source packages, and on-device AI.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-8 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Portfolio
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Work
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Apps, SDKs, packages, and open-source work. Click any project for the
            full write-up.
          </p>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}/`}
                className="group flex flex-col gap-4 py-7 transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:py-8"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="font-mono text-[11px] text-muted-foreground">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="font-display mt-2 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                    {project.title}
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:max-w-xs sm:justify-end">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
