import Link from "next/link";
import { MediaPlaceholder } from "@/components/Section";
import { articles } from "@/lib/articles";

const pillars = [
  {
    title: "Learn the science",
    body: "Master the fundamentals of cell biology, tissue engineering, and bioprocess design through guided pathways.",
  },
  {
    title: "Build projects",
    body: "Design experiments, prototype ideas, and get hands-on with the tools shaping the future of food.",
  },
  {
    title: "Publish your work",
    body: "Write articles, share findings, and contribute to a growing body of knowledge by young researchers.",
  },
];

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function HomePage() {
  const latest = articles.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <h1 className="display text-5xl text-white sm:text-7xl">
              Grow the future from a single cell
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              We are a community of students learning to grow real meat, dairy, and fat from cells.
              Start building the science that could feed the world.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/articles" className="btn-primary">
                Articles
              </Link>
              <Link href="/about" className="btn-ghost">
                Join us
              </Link>
            </div>
          </div>
          <MediaPlaceholder className="mt-16 aspect-[16/9] w-full rounded-xl" />
        </div>
      </section>

      {/* What is cellular agriculture */}
      <section className="border-b border-line">
        <div className="container-page grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Explain</span>
            <h2 className="display mt-4 text-4xl text-white sm:text-5xl">
              What is cellular agriculture anyway
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              It is the science of growing real animal products from cells instead of animals. We
              take a few cells, feed them nutrients in a bioreactor, and watch them become meat,
              milk, or fat.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <Link href="/about" className="btn-ghost">
                Learn
              </Link>
              <Link href="/resources" className="btn-link">
                Read <Chevron />
              </Link>
            </div>
          </div>
          <MediaPlaceholder className="aspect-square w-full rounded-xl" />
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-line">
        <div className="container-page grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <MediaPlaceholder className="order-last aspect-square w-full rounded-xl lg:order-first" />
          <div>
            <span className="eyebrow">Mission</span>
            <h2 className="display mt-4 text-4xl text-white sm:text-5xl">
              We build scientists, not just students
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              We give young people the tools to learn the science, build real projects, and publish
              work that matters.
            </p>
            <div className="mt-8 space-y-5">
              {pillars.map((p) => (
                <div key={p.title} className="border-t border-line pt-4">
                  <h3 className="display text-xl text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-5">
              <Link href="/about" className="btn-ghost">
                About
              </Link>
              <Link href="/about" className="btn-link">
                Read <Chevron />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="border-b border-line">
        <div className="container-page py-16 sm:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Blog</span>
              <h2 className="display mt-4 text-4xl text-white sm:text-5xl">Latest articles</h2>
              <p className="mt-4 max-w-lg text-lg text-white/70">
                New writing from our community, published every week.
              </p>
            </div>
            <Link href="/articles" className="btn-ghost hidden shrink-0 sm:inline-flex">
              View all
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latest.map((a) => (
              <article key={a.slug} className="card flex flex-col overflow-hidden">
                <MediaPlaceholder className="aspect-[4/3] w-full" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <span className="rounded bg-white/10 px-2 py-0.5 font-medium text-white/80">
                      {a.category}
                    </span>
                    <span>{a.readingTime}</span>
                  </div>
                  <h3 className="display mt-3 text-lg leading-tight text-white">
                    <Link href={`/articles/${a.slug}`} className="transition hover:text-accent">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{a.excerpt}</p>
                  <Link href={`/articles/${a.slug}`} className="btn-link mt-4">
                    Read more <Chevron />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="display text-4xl text-white sm:text-6xl">Start building the future today</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Join a community of students learning to grow real meat, dairy, and fat from cells. No
              lab required.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/about" className="btn-primary">
                Join
              </Link>
              <Link href="/about" className="btn-ghost">
                Learn
              </Link>
            </div>
          </div>
          <MediaPlaceholder className="mt-16 aspect-[16/9] w-full rounded-xl" />
        </div>
      </section>
    </>
  );
}
