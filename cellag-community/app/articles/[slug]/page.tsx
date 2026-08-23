import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <article>
      <header className="border-b border-line">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Link href="/articles" className="btn-link">
              ← All articles
            </Link>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
              <span className="rounded bg-white/10 px-2 py-0.5 font-medium text-white/80">
                {article.category}
              </span>
              <span>{article.readingTime}</span>
            </div>
            <h1 className="display mt-4 text-4xl text-white sm:text-5xl">{article.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/50">
              <span className="font-medium text-white/80">By {article.author}</span>
              <span aria-hidden>·</span>
              <span>{formatDate(article.date)}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-white/80">
          {article.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
