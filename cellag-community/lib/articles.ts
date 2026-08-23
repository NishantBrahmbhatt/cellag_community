// Article data. To publish a new article, add an entry to this array.
// Later this can be swapped for a CMS or MDX files — the page components
// only depend on the shape below.

export type ArticleCategory = "Science" | "Project" | "Opinion" | "Interview";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  category: ArticleCategory;
  date: string; // ISO string, e.g. "2026-08-20"
  readingTime: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "what-exactly-is-a-growth-medium",
    title: "What exactly is a growth medium",
    excerpt: "The liquid that feeds cells is more complex than you think. Here is what goes into it.",
    author: "Community Team",
    category: "Science",
    date: "2026-08-18",
    readingTime: "6 min read",
    body: [
      "This is a placeholder article. Replace it with the real thing once members start publishing.",
      "Growth medium is the nutrient-rich liquid that keeps cultured cells alive and dividing. It combines sugars, amino acids, vitamins, salts, and growth factors — and getting the recipe right is one of the central challenges of cellular agriculture.",
      "Future articles from members will go deeper into each ingredient, why serum-free media matters, and how costs are coming down.",
    ],
  },
  {
    slug: "how-we-grew-fat-cells-at-home",
    title: "How we grew fat cells at home",
    excerpt: "A step-by-step account of our first successful culture, including every mistake we made along the way.",
    author: "Community Team",
    category: "Project",
    date: "2026-08-12",
    readingTime: "8 min read",
    body: [
      "This is a placeholder article. Replace it with a real member write-up.",
      "In this piece a member documents a home cell-culture project end to end: sourcing, sterile technique, the setbacks, and what finally worked.",
    ],
  },
  {
    slug: "a-conversation-with-a-researcher",
    title: "A conversation with a cellular agriculture researcher",
    excerpt: "We spoke with a scientist about why she left traditional pharma to grow meat.",
    author: "Community Team",
    category: "Interview",
    date: "2026-08-05",
    readingTime: "5 min read",
    body: [
      "This is a placeholder interview. Replace it with a real conversation.",
      "A researcher shares her path into the field, what a day in the lab looks like, and her advice for teenagers who want to get involved early.",
    ],
  },
  {
    slug: "why-cells-are-the-new-farm-animals",
    title: "Why cells are the new farm animals",
    excerpt: "A look at how a single biopsy could feed a neighborhood.",
    author: "Community Team",
    category: "Science",
    date: "2026-07-28",
    readingTime: "5 min read",
    body: [
      "This is a placeholder article. Replace it with the real thing.",
      "One small sample of cells can, in principle, be multiplied into an enormous amount of meat. This piece explains the biology that makes that possible.",
    ],
  },
  {
    slug: "building-a-bioreactor-from-spare-parts",
    title: "Building a bioreactor from spare parts",
    excerpt: "One student's guide to growing cells on a budget.",
    author: "Community Team",
    category: "Project",
    date: "2026-07-20",
    readingTime: "7 min read",
    body: [
      "This is a placeholder project write-up. Replace it with a real one.",
      "A member walks through a low-cost bioreactor build, what worked, what didn't, and what they'd do differently next time.",
    ],
  },
  {
    slug: "the-ethics-of-meat-without-slaughter",
    title: "The ethics of meat without slaughter",
    excerpt: "What young people think about the future of protein.",
    author: "Community Team",
    category: "Opinion",
    date: "2026-07-10",
    readingTime: "4 min read",
    body: [
      "This is a placeholder opinion piece. Replace it with a member's perspective.",
      "Cultivated meat raises real questions about animals, the environment, and what we choose to eat. Here a member lays out how they think about it.",
    ],
  },
];

export const categories: ArticleCategory[] = ["Science", "Project", "Opinion", "Interview"];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
