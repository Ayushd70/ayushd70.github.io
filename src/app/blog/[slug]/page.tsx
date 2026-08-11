import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  formatPostDate,
  getAllPostSlugs,
  getPostBySlug,
} from "@/data/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog — Ayush Dubey" };

  return {
    title: `${post.title} — Ayush Dubey`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-8 sm:pt-32">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
              {post.category}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {formatPostDate(post.date)}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              · {post.readingTime}
            </span>
          </div>

          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 space-y-10 border-t border-border pt-10">
            {post.sections.map((section, index) => (
              <section key={`${section.title ?? "p"}-${index}`}>
                {section.title && (
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                )}
                <p
                  className={`text-sm leading-relaxed text-muted-foreground sm:text-base ${
                    section.title ? "mt-4" : ""
                  }`}
                >
                  {section.body}
                </p>
                {section.code && (
                  <pre className="mt-5 overflow-x-auto border border-border bg-card p-4 font-mono text-xs leading-relaxed text-foreground sm:text-sm">
                    <code>{section.code}</code>
                  </pre>
                )}
              </section>
            ))}
          </div>

          {post.relatedWorkSlug && (
            <div className="mt-14 border-t border-border pt-8">
              <Link
                href={`/work/${post.relatedWorkSlug}/`}
                className="group inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent/80"
              >
                View related work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
