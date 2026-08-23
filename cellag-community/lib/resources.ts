// Resource library. Grouped by category. Add entries under any category,
// or add new categories. Fill this out once the site structure is locked.

export type Resource = {
  name: string;
  description: string;
  href: string;
  tag?: string;
};

export type ResourceGroup = {
  category: string;
  blurb: string;
  items: Resource[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    category: "Learn the basics",
    blurb: "Start here if cellular agriculture is new to you.",
    items: [
      {
        name: "Resource placeholder",
        description: "A short description of what this resource is and why it's useful for teens.",
        href: "#",
        tag: "Free",
      },
      {
        name: "Resource placeholder",
        description: "Swap in a real course, video series, or intro guide.",
        href: "#",
        tag: "Course",
      },
    ],
  },
  {
    category: "Competitions & programs",
    blurb: "Opportunities to apply what you learn and meet others.",
    items: [
      {
        name: "Resource placeholder",
        description: "A competition, fellowship, or summer program relevant to 15–18 year olds.",
        href: "#",
        tag: "Ages 15–18",
      },
    ],
  },
  {
    category: "Reading & research",
    blurb: "Go deeper with reports, papers, and newsletters.",
    items: [
      {
        name: "Resource placeholder",
        description: "A report or newsletter that keeps you current on the field.",
        href: "#",
        tag: "Newsletter",
      },
    ],
  },
  {
    category: "Communities & people to follow",
    blurb: "Where the conversation is happening.",
    items: [
      {
        name: "Resource placeholder",
        description: "An organisation, forum, or person worth following in cellular agriculture.",
        href: "#",
      },
    ],
  },
];
