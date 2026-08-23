import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, MediaPlaceholder } from "@/components/Section";

export const metadata: Metadata = {
  title: "Founders",
  description: "Meet the people behind the community.",
};

// Replace with real people. Add or remove entries freely.
const founders = [
  {
    name: "Founder Name",
    role: "Founder & Lead",
    bio: "A short bio goes here — who they are, what they're studying or interested in, and why they started the community.",
  },
  {
    name: "Founder Name",
    role: "Co-founder",
    bio: "A short bio goes here — background, interests, and their role in the community.",
  },
  {
    name: "Founder Name",
    role: "Co-founder",
    bio: "A short bio goes here — background, interests, and their role in the community.",
  },
];

export default function FoundersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Meet the founders"
        title="The people behind the community"
        intro="A small team of students who wanted a place like this to exist — so they built it."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((f, i) => (
            <div key={i} className="card flex flex-col overflow-hidden">
              <MediaPlaceholder className="aspect-[4/3] w-full" />
              <div className="p-6">
                <h3 className="display text-xl text-white">{f.name}</h3>
                <p className="text-sm font-medium text-accent">{f.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
