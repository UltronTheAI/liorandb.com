# LioranDB developer infrastructure site

The LioranDB website is a multi-page, developer-first technical surface for a Rust-powered document database. It covers the engine, architecture, local development, drivers, deployment, cloud paths, pricing, release notes, community, and benchmark methodology. LioranDB currently provides official SDK support for JavaScript and TypeScript through `@liorandb/driver`.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Inter and JetBrains Mono via `next/font`
- Lucide React
- Framer Motion remains available for compatible existing code, but the new site keeps motion restrained

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Project map

- `app/` — App Router routes, metadata, sitemap, robots, and legal pages
- `components/site/` — shared technical layout, UI primitives, charts, code blocks, and architecture diagram
- `data/content.ts` — typed navigation, product content, benchmark object, driver matrix, pricing terms, and changelog entries
- `app/globals.css` — semantic light/dark tokens and responsive component styles
- `DESIGN.md` — implementation-level design system and benchmark disclosure standards
- `public/benchmark_ldb/` — related raw benchmark artifacts; the matched comparison on the site is labeled as user-reported pending publication of complete raw evidence

## Content accuracy

The maintained technical reference is [docs.liorandb.com](https://docs.liorandb.com). The official developer destinations are:

- [Documentation](https://docs.liorandb.com)
- [Dashboard](https://app.liorandb.com)
- [Studio](https://studio.liorandb.com)
- [GitHub organization](https://github.com/LioranGroupOfficial)

Commercial terms remain on `/pricing` and the linked legal pages. Local benchmark results are scoped to their workload and are not managed-cloud performance guarantees.
