import Link from "next/link";
import { site } from "@/lib/site";
import { pickHomePalette } from "@/lib/home-palettes";

// Fresh palette on every request / reload.
export const dynamic = "force-dynamic";

// Rotating headlines in the top ticker. Edit freely.
const tickerItems = [
  "The community is live — join us on Discord",
  "First member articles coming soon",
  "New: workshop on building a bioreactor from spare parts",
  "Browse curated resources for teens getting into biotech",
];

// The six pill buttons at the bottom = your six sub-pages.
const navPills = [
  { label: "About us ", href: "/about" },
  { label: "Founders", href: "/founders" },
  { label: "Updates", href: "/updates" },
  { label: "Events", href: "/events" },
  { label: "Articles", href: "/articles" },
  { label: "Resources", href: "/resources" },
];

export default function HomePage() {
  const palette = pickHomePalette();

  const theme = {
    backgroundColor: palette.bg,
    color: palette.text,
    ["--home-text" as string]: palette.text,
    ["--home-pill-bg" as string]: palette.pillBg,
    ["--home-pill-text" as string]: palette.pillText,
    ["--home-pill-hover" as string]: palette.pillHover,
    ["--home-muted" as string]: palette.muted,
    ["--home-line" as string]: palette.line,
    ["--home-blob" as string]: palette.blob,
  };

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={theme}
    >
      {/* Ticker strip */}
      <div
        className="overflow-hidden border-b py-3"
        style={{ borderColor: "var(--home-line)" }}
      >
        <div className="marquee flex whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-8 pr-8"
            >
              {tickerItems.map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--home-text)" }}
                >
                  {item}
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--home-text)" }}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Split wordmark — LOGO on the left, NAME on the right. Swap for real brand later. */}
      <div className="mx-auto flex w-full max-w-[100rem] items-start justify-between px-4 pt-6 sm:px-5 lg:px-6">
        <span
          className="display text-4xl sm:text-6xl lg:text-7xl"
          style={{ color: "var(--home-text)" }}
        >
          LOGO
        </span>
        <span
          className="display text-4xl sm:text-6xl lg:text-7xl"
          style={{ color: "var(--home-text)" }}
        >
          NAME
        </span>
      </div>

      {/* Center — huge headline + central visual placeholder */}
      <div className="relative mx-auto flex w-full max-w-[100rem] flex-1 flex-col items-center justify-center px-4 py-10 sm:px-5 lg:px-6">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 aspect-square w-[min(70vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm"
          style={{ backgroundColor: "var(--home-blob)" }}
        />
        <h1
          className="display relative text-center text-6xl leading-[0.9] sm:text-8xl lg:text-[9.5rem]"
          style={{ color: "var(--home-text)" }}
        >
          Growing the
          <br />
          future.
        </h1>
      </div>

      {/* 3×2 pill nav — near full-bleed like Hoxton */}
      <div className="mx-auto w-full max-w-[100rem] px-3 pb-3 sm:px-4 lg:px-5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 lg:gap-3">
          {navPills.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="home-pill flex min-h-[3.75rem] items-center justify-center rounded-full px-6 py-5 text-lg font-semibold lowercase transition sm:min-h-[4.5rem] sm:px-8 sm:py-6 sm:text-xl lg:min-h-[5.25rem] lg:text-2xl"
              style={{
                backgroundColor: "var(--home-pill-bg)",
                color: "var(--home-pill-text)",
              }}
            >
              {p.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="mx-auto flex w-full max-w-[100rem] flex-wrap justify-between gap-2 px-4 py-3 text-[10px] uppercase tracking-wider sm:px-5 lg:px-6"
        style={{ color: "var(--home-muted)" }}
      >
        <span>
          © {new Date().getFullYear()} {site.name} ·{" "}
          <a
            href="#"
            className="transition hover:opacity-100"
            style={{ color: "var(--home-text)", opacity: 0.7 }}
          >
            Privacy policy
          </a>
        </span>
        <span>Proudly building the future of food.</span>
      </div>
    </section>
  );
}
