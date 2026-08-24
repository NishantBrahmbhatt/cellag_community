export type HomePalette = {
  bg: string;
  text: string;
  pillBg: string;
  pillText: string;
  pillHover: string;
  muted: string;
  line: string;
  blob: string;
};

/** Curated landing schemes — mix of light/dark and high-contrast pairs. */
export const homePalettes: HomePalette[] = [
  // neon green on dark navy
  {
    bg: "#0a1628",
    text: "#39ff14",
    pillBg: "#39ff14",
    pillText: "#0a1628",
    pillHover: "#2de00f",
    muted: "rgba(57, 255, 20, 0.45)",
    line: "rgba(57, 255, 20, 0.2)",
    blob: "rgba(57, 255, 20, 0.12)",
  },
  // light blue on pearly white
  {
    bg: "#f7f5f2",
    text: "#5ba8d8",
    pillBg: "#5ba8d8",
    pillText: "#f7f5f2",
    pillHover: "#4a97c7",
    muted: "rgba(91, 168, 216, 0.55)",
    line: "rgba(91, 168, 216, 0.25)",
    blob: "rgba(91, 168, 216, 0.15)",
  },
  // gold on light blue
  {
    bg: "#c5e4f3",
    text: "#c9a227",
    pillBg: "#c9a227",
    pillText: "#1a1608",
    pillHover: "#b8911f",
    muted: "rgba(201, 162, 39, 0.55)",
    line: "rgba(201, 162, 39, 0.3)",
    blob: "rgba(201, 162, 39, 0.18)",
  },
  // coral on cream
  {
    bg: "#fff8f0",
    text: "#e85d4c",
    pillBg: "#e85d4c",
    pillText: "#fff8f0",
    pillHover: "#d44c3b",
    muted: "rgba(232, 93, 76, 0.5)",
    line: "rgba(232, 93, 76, 0.22)",
    blob: "rgba(232, 93, 76, 0.12)",
  },
  // hot pink on charcoal
  {
    bg: "#1a1a1a",
    text: "#ff2d95",
    pillBg: "#ff2d95",
    pillText: "#1a1a1a",
    pillHover: "#e82585",
    muted: "rgba(255, 45, 149, 0.45)",
    line: "rgba(255, 45, 149, 0.22)",
    blob: "rgba(255, 45, 149, 0.12)",
  },
  // deep purple on soft lavender
  {
    bg: "#ede7f6",
    text: "#4a148c",
    pillBg: "#4a148c",
    pillText: "#ede7f6",
    pillHover: "#3d1075",
    muted: "rgba(74, 20, 140, 0.5)",
    line: "rgba(74, 20, 140, 0.2)",
    blob: "rgba(74, 20, 140, 0.1)",
  },
  // electric cyan on near-black
  {
    bg: "#050505",
    text: "#00f0ff",
    pillBg: "#00f0ff",
    pillText: "#050505",
    pillHover: "#00d4e0",
    muted: "rgba(0, 240, 255, 0.45)",
    line: "rgba(0, 240, 255, 0.2)",
    blob: "rgba(0, 240, 255, 0.1)",
  },
  // burnt orange on sage
  {
    bg: "#d4ddd0",
    text: "#c45c26",
    pillBg: "#c45c26",
    pillText: "#f5f0e8",
    pillHover: "#a94d1f",
    muted: "rgba(196, 92, 38, 0.55)",
    line: "rgba(196, 92, 38, 0.25)",
    blob: "rgba(196, 92, 38, 0.14)",
  },
  // butter yellow on ink
  {
    bg: "#12141a",
    text: "#f5e66e",
    pillBg: "#f5e66e",
    pillText: "#12141a",
    pillHover: "#e0d25a",
    muted: "rgba(245, 230, 110, 0.45)",
    line: "rgba(245, 230, 110, 0.2)",
    blob: "rgba(245, 230, 110, 0.1)",
  },
  // forest green on warm ivory
  {
    bg: "#faf6ee",
    text: "#1b5e3b",
    pillBg: "#1b5e3b",
    pillText: "#faf6ee",
    pillHover: "#154d30",
    muted: "rgba(27, 94, 59, 0.5)",
    line: "rgba(27, 94, 59, 0.2)",
    blob: "rgba(27, 94, 59, 0.1)",
  },
  // magenta on pale mint
  {
    bg: "#e8f5f0",
    text: "#c2185b",
    pillBg: "#c2185b",
    pillText: "#e8f5f0",
    pillHover: "#a9144e",
    muted: "rgba(194, 24, 91, 0.5)",
    line: "rgba(194, 24, 91, 0.22)",
    blob: "rgba(194, 24, 91, 0.12)",
  },
  // white on royal blue
  {
    bg: "#1a3a8f",
    text: "#f4f7ff",
    pillBg: "#f4f7ff",
    pillText: "#1a3a8f",
    pillHover: "#dde4f5",
    muted: "rgba(244, 247, 255, 0.5)",
    line: "rgba(244, 247, 255, 0.25)",
    blob: "rgba(244, 247, 255, 0.12)",
  },
  // terracotta on dusty rose
  {
    bg: "#f0d6d0",
    text: "#8b3a2a",
    pillBg: "#8b3a2a",
    pillText: "#f0d6d0",
    pillHover: "#733024",
    muted: "rgba(139, 58, 42, 0.55)",
    line: "rgba(139, 58, 42, 0.25)",
    blob: "rgba(139, 58, 42, 0.14)",
  },
  // lime on plum
  {
    bg: "#2d1b2e",
    text: "#c6ff4a",
    pillBg: "#c6ff4a",
    pillText: "#2d1b2e",
    pillHover: "#b3e642",
    muted: "rgba(198, 255, 74, 0.45)",
    line: "rgba(198, 255, 74, 0.2)",
    blob: "rgba(198, 255, 74, 0.1)",
  },
  // classic caramel on black (site default vibe)
  {
    bg: "#111111",
    text: "#d8a56d",
    pillBg: "#d8a56d",
    pillText: "#1b1305",
    pillHover: "#c8945b",
    muted: "rgba(216, 165, 109, 0.45)",
    line: "rgba(255, 255, 255, 0.12)",
    blob: "rgba(216, 165, 109, 0.1)",
  },
  // sky on peach
  {
    bg: "#ffe8d6",
    text: "#2b6cb0",
    pillBg: "#2b6cb0",
    pillText: "#ffe8d6",
    pillHover: "#245a94",
    muted: "rgba(43, 108, 176, 0.5)",
    line: "rgba(43, 108, 176, 0.22)",
    blob: "rgba(43, 108, 176, 0.12)",
  },
];

export function pickHomePalette(): HomePalette {
  const i = Math.floor(Math.random() * homePalettes.length);
  return homePalettes[i]!;
}
