import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { resourceGroups } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "A curated list of resources for teens interested in biotech and cellular agriculture.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="The best places to start"
        intro="A curated, growing list of courses, competitions, reading, and communities for young people getting into biotech and cellular agriculture. (Currently placeholders — real links coming.)"
      />

      <section className="container-page py-16 sm:py-24">
        <div className="space-y-16">
          {resourceGroups.map((group) => (
            <div key={group.category}>
              <div className="max-w-2xl">
                <h2 className="display text-2xl text-white sm:text-3xl">{group.category}</h2>
                <p className="mt-2 text-white/60">{group.blurb}</p>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {group.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="card group flex flex-col p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="display text-lg text-white transition group-hover:text-accent">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="shrink-0 rounded bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
