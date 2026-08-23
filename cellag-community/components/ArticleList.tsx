"use client";

import Link from "next/link";
import { useState } from "react";
import { MediaPlaceholder } from "@/components/Section";
import type { Article, ArticleCategory } from "@/lib/articles";

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export function ArticleList({
  articles,
  categories,
}: {
  articles: Article[];
  categories: ArticleCategory[];
}) {
  const [filter, setFilter] = useState<string>("All Posts");
  const [open, setOpen] = useState(false);

  const options = ["All Posts", ...categories];
  const shown = filter === "All Posts" ? articles : articles.filter((a) => a.category === filter);

  return (
    <div>
      {/* Filter */}
      <div className="relative inline-block">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-48 items-center justify-between rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium text-white"
          aria-expanded={open}
        >
          {filter}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        {open && (
          <div className="absolute left-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-md border border-line bg-surface py-1 shadow-xl">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setFilter(opt);
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* List */}
      <div className="mt-10 divide-y divide-line border-t border-line">
        {shown.map((a) => (
          <article key={a.slug} className="grid gap-6 py-8 sm:grid-cols-[16rem_1fr]">
            <Link href={`/articles/${a.slug}`}>
              <MediaPlaceholder className="aspect-[4/3] w-full rounded-lg" />
            </Link>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span className="rounded bg-white/10 px-2 py-0.5 font-medium text-white/80">
                  {a.category}
                </span>
                <span>{a.readingTime}</span>
              </div>
              <h2 className="display mt-3 text-2xl text-white">
                <Link href={`/articles/${a.slug}`} className="transition hover:text-accent">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">{a.excerpt}</p>
              <Link href={`/articles/${a.slug}`} className="btn-link mt-4">
                Read more <Chevron />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
