import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, why we exist, and what the community is working toward.",
};

const goals = [
  {
    title: "Make the science accessible",
    body: "Cellular agriculture is usually taught at university level or locked inside company labs. We translate it into something a motivated 15–18 year old can actually get into.",
  },
  {
    title: "Give young people real work",
    body: "Not just reading — writing, building, and contributing. Members leave with things they've made and can point to.",
  },
  {
    title: "Build a network early",
    body: "Connect students who care about the future of food to each other, and eventually to the people already working in the field.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A community for the next generation of cellular agriculture"
        intro="We're a group of young people who believe the future of food shouldn't wait for us to grow up. This page is a placeholder — the real story goes here."
      />

      <Section
        eyebrow="Our story"
        title="Why this exists"
        intro="Replace this with the real origin story: how the community started, who it's for, and what sparked it."
      >
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            Cellular agriculture — growing meat, dairy, and other animal products directly from
            cells — is one of the most important shifts happening in how the world makes food. But
            almost nothing about it is built for teenagers who want to get involved early.
          </p>
          <p>
            This community exists to change that. We bring together curious students, break the
            field down into things you can actually learn and do, and give members a platform to
            share what they discover.
          </p>
          <p className="text-base text-white/40">
            (This is placeholder copy — swap it for your own once the site structure is locked.)
          </p>
        </div>
      </Section>

      <section className="border-t border-line">
        <Section eyebrow="What we're working toward" title="Our goals">
          <div className="grid gap-6 md:grid-cols-3">
            {goals.map((g) => (
              <div key={g.title} className="card p-6">
                <h3 className="display text-xl text-white">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{g.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
