import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { updates } from "@/lib/updates";

export const metadata: Metadata = {
  title: "Updates",
  description: "What the community has been up to.",
};

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="What we've been up to"
        intro="A running log of milestones, launches, and news from the community."
      />

      <section className="container-page py-16 sm:py-24">
        <ol className="relative mx-auto max-w-3xl border-l border-line">
          {updates.map((u, i) => (
            <li key={i} className="mb-12 ml-6 last:mb-0">
              <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-bg" />
              <p className="eyebrow text-accent">{u.date}</p>
              <h3 className="display mt-2 text-2xl text-white">{u.title}</h3>
              <p className="mt-2 leading-relaxed text-white/60">{u.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
