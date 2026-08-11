import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Work — Ayush Dubey" };

  return {
    title: `${project.title} — Ayush Dubey`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-8 sm:pt-32">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/work/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
              {project.category}
            </span>
            {project.period && (
              <span className="font-mono text-xs text-muted-foreground">
                {project.period}
              </span>
            )}
            {project.role && (
              <span className="font-mono text-xs text-muted-foreground">
                · {project.role}
              </span>
            )}
          </div>

          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {project.overview}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {project.pubUrl && (
              <a
                href={project.pubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <ExternalLink size={16} />
                pub.dev
              </a>
            )}
            {project.url &&
              project.url !== project.githubUrl &&
              project.url !== project.pubUrl && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <ExternalLink size={16} />
                  Website
                </a>
              )}
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                Play Store
              </a>
            )}
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                App Store
              </a>
            )}
          </div>

          <div className="mt-12 border-t border-border pt-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Highlights
            </h2>
            <ul className="mt-5 space-y-3">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {project.sections.map((section) => (
            <div key={section.title} className="mt-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {section.body}
              </p>
            </div>
          ))}

          <div className="mt-10 border-t border-border pt-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Stack
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-border pt-10">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                More work
              </h2>
              <div className="mt-6 divide-y divide-border border-y border-border">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/work/${item.slug}/`}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div>
                      <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
                        {item.category}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold transition-colors group-hover:text-accent">
                        {item.title}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
