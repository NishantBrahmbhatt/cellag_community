// Community events. To add an event, add an entry to this array and set
// status to "upcoming" or "past". Newest / soonest first.

export type EventStatus = "upcoming" | "past";
export type EventType = "Workshop" | "Talk" | "Meetup" | "Online" | "Competition";

export type CommunityEvent = {
  title: string;
  date: string; // ISO string, e.g. "2026-09-15"
  time?: string; // e.g. "18:00–19:30 BST"
  location: string; // e.g. "Online (Zoom)" or "London, UK"
  type: EventType;
  description: string;
  url?: string; // registration or details link
  status: EventStatus;
};

export const events: CommunityEvent[] = [
  {
    title: "Intro to cellular agriculture — live session",
    date: "2026-09-15",
    time: "18:00–19:30 BST",
    location: "Online (Zoom)",
    type: "Online",
    description:
      "A beginner-friendly walkthrough of what cellular agriculture is and how young people can get involved. Placeholder event — replace with a real one.",
    url: "#",
    status: "upcoming",
  },
  {
    title: "Bioreactor build workshop",
    date: "2026-10-04",
    time: "13:00–16:00 BST",
    location: "London, UK",
    type: "Workshop",
    description:
      "Hands-on session building a simple bioreactor from low-cost parts. Placeholder — swap for your real event details.",
    url: "#",
    status: "upcoming",
  },
  {
    title: "Community launch meetup",
    date: "2026-08-20",
    time: "17:00 BST",
    location: "Online (Zoom)",
    type: "Meetup",
    description:
      "Our first get-together to kick off the community. Placeholder past event.",
    status: "past",
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
