"use client";

import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";
import { getFeaturedPosts, formatPostDate } from "@/data/blog";
import { ArrowUpRight } from "lucide-react";

export function BlogPreview() {
  const featured = getFeaturedPosts();

  return (
    <SectionWrapper id="blog">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Posts
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Notes on what I build, ship, and extract into packages
          </p>
          <div className="mt-5 h-px w-20 bg-accent" />
        </div>
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent/80"
        >
          View all
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="divide-y divide-border border-y border-border">
        {featured.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            className="group grid gap-3 py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-8 sm:py-7"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {formatPostDate(post.date)}
            </span>
            <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
              {post.title}
            </h3>
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase sm:text-right">
              {post.category}
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
