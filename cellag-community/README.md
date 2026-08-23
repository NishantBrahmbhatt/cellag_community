# Cellular Agriculture Community — website

A community website for students aged 15–18 interested in biotechnology and
cellular agriculture. Built with **Next.js 14 (App Router)**, **TypeScript**,
and **Tailwind CSS**.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy (free)

Push this folder to a GitHub repo, then import it at [vercel.com](https://vercel.com).
Vercel auto-detects Next.js — no configuration needed. Every push redeploys.

## Where things live

```
app/
  page.tsx              → Home
  about/page.tsx        → About us
  founders/page.tsx     → Meet the founders
  updates/page.tsx      → What we've been up to (timeline)
  articles/page.tsx     → Articles list
  articles/[slug]/…     → Individual article pages
  resources/page.tsx    → Resource library
components/              → Navbar, Footer, PageHeader, Section
lib/
  site.ts               → Site name, tagline, nav, email (edit to rebrand)
  articles.ts           → Add an article by adding an entry here
  updates.ts            → Add a community update here
  resources.ts          → Add resources here, grouped by category
```

## Common edits

- **Rename the site / change nav:** edit `lib/site.ts`
- **Change brand colours:** edit the `colors` block in `tailwind.config.ts`
- **Publish an article:** add an object to the `articles` array in `lib/articles.ts`
- **Post an update:** add an object to the top of `updates` in `lib/updates.ts`
- **Add a resource:** add an item under a category in `lib/resources.ts`

All page content is currently placeholder copy — swap it for the real thing as
the community's story, founders, and resources are finalised.
