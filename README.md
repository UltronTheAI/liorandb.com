# LioranDB Landing Page

Production-style single-page marketing site for LioranDB, built with Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Commands used for validation

```bash
npm run lint
npx tsc --noEmit
```

## Project notes

- Main landing page: `app/page.tsx`
- Shared metadata and JSON-LD: `app/layout.tsx`
- Theme and visual system: `app/globals.css`
- SEO helpers: `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`
- Reusable landing components: `components/landing/*`
- Typed content/config: `data/site.ts`

## Sitemap guidance

The project includes `app/sitemap.ts` for the root route. Update `siteConfig.url` in `data/site.ts` if the production canonical domain changes.
