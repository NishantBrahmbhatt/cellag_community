// Central site config — edit these values to rebrand or restructure navigation.

export const site = {
  name: "Cellular Agriculture Community",
  shortName: "CellAg Community",
  tagline: "Grow the future from a single cell.",
  description:
    "A community of students aged 15–18 learning to grow real meat, dairy, and fat from cells — learning the science, building projects, and publishing their work.",
  email: "hello@example.com",
  // Wordmark text shown in the navbar/footer (styled as a script logo placeholder).
  logo: "Logo",
  discordUrl: "https://discord.gg/A85Yj7Q8k",
};

export type NavItem = { label: string; href: string };

// Primary top-level nav links.
export const primaryNav: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Founders", href: "/founders" },
  { label: "Updates", href: "/updates" },
];

// Items grouped under the "Explore" dropdown.
export const exploreNav: NavItem[] = [
  { label: "Events", href: "/events" },
  { label: "Articles", href: "/articles" },
  { label: "Resources", href: "/resources" },
];

// Full list used in the footer.
export const footerNav: NavItem[] = [...primaryNav, ...exploreNav];
