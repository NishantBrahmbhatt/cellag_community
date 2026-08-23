// Community updates / timeline. Add newest entries at the top.

export type Update = {
  date: string; // human-readable, e.g. "August 2026"
  title: string;
  body: string;
};

export const updates: Update[] = [
  {
    date: "August 2026",
    title: "The community goes live",
    body: "We launched our website — a home for everything we're learning and building in cellular agriculture. This is the first of many updates.",
  },
  {
    date: "Coming soon",
    title: "First member articles",
    body: "Members are working on their first pieces. Once they're published, they'll appear on the Articles page and be announced here.",
  },
  {
    date: "Coming soon",
    title: "Resource library expands",
    body: "We're curating the best courses, competitions, and reading for teens interested in biotech. Watch this space.",
  },
];
