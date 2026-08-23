import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ArticleList } from "@/components/ArticleList";
import { articles, categories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Ideas and experiments from our members, written by the next generation.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Fresh from the lab"
        intro="Ideas and experiments from our members, written by the next generation."
        center
      />
      <section className="container-page py-16 sm:py-20">
        <ArticleList articles={articles} categories={categories} />
      </section>
    </>
  );
}
