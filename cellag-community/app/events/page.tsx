import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { upcomingEvents, pastEvents, type CommunityEvent } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Workshops, talks, and meetups from the community.",
};

function dateParts(iso: string) {
  const d = new Date(iso);
  return {
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
    day: d.toLocaleDateString("en-GB", { day: "numeric" }),
    year: d.toLocaleDateString("en-GB", { year: "numeric" }),
  };
}

function EventCard({ event }: { event: CommunityEvent }) {
  const { month, day, year } = dateParts(event.date);
  return (
    <article className="card grid gap-6 p-6 sm:grid-cols-[6rem_1fr]">
      <div className="flex flex-col items-center justify-center rounded-lg bg-white/5 py-4 text-center">
        <span className="eyebrow text-accent">{month}</span>
        <span className="display text-3xl text-white">{day}</span>
        <span className="text-xs text-white/50">{year}</span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-xs text-white/50">
          <span className="rounded bg-white/10 px-2 py-0.5 font-medium text-white/80">
            {event.type}
          </span>
          {event.time && <span>{event.time}</span>}
        </div>
        <h3 className="display mt-3 text-2xl text-white">{event.title}</h3>
        <p className="mt-1 text-sm font-medium text-white/70">{event.location}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">{event.description}</p>
        {event.url && (
          <a
            href={event.url}
            target={event.url.startsWith("http") ? "_blank" : undefined}
            rel={event.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="btn-primary mt-5 self-start"
          >
            Register
          </a>
        )}
      </div>
    </article>
  );
}

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Where the community meets"
        intro="Workshops, talks, and meetups — online and in person. Come learn, build, and connect with other young people in cellular agriculture."
      />

      <section className="container-page py-16 sm:py-24">
        <h2 className="display text-2xl text-white sm:text-3xl">Upcoming</h2>
        {upcomingEvents.length > 0 ? (
          <div className="mt-8 space-y-6">
            {upcomingEvents.map((e, i) => (
              <EventCard key={i} event={e} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-white/60">
            No events scheduled right now — check back soon.
          </p>
        )}

        {pastEvents.length > 0 && (
          <>
            <h2 className="display mt-20 text-2xl text-white sm:text-3xl">Past events</h2>
            <div className="mt-8 divide-y divide-line border-t border-line">
              {pastEvents.map((e, i) => {
                const { month, day, year } = dateParts(e.date);
                return (
                  <div key={i} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-5">
                    <span className="w-28 shrink-0 text-sm text-white/50">
                      {month} {day}, {year}
                    </span>
                    <span className="display text-lg text-white">{e.title}</span>
                    <span className="text-sm text-white/50">{e.location}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>
    </>
  );
}
