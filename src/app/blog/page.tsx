import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { formatPostDate, posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Ayush Dubey",
  description:
    "Writing by Ayush Dubey on Flutter, on-device AI, SDKs, and open-source packages.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-8 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Musings & notes
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Documenting what I build, what breaks, and what I extract into
            packages along the way.
          </p>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group grid gap-3 py-7 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-8 sm:py-8"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {formatPostDate(post.date)}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    {post.description}
                  </p>
                </div>
                <span className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase sm:text-right">
                  {post.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
