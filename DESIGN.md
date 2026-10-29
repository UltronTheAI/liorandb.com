# LioranDB website design system

## Product positioning

LioranDB is a Rust-powered document database for developers building backend applications and practical infrastructure. The site is a technical home: it explains the engine, exposes honest benchmark context, routes developers to maintained docs, and separates self-hosted, cloud, and commercial decisions.

The content voice is precise, confident, and restrained. It does not claim universal speed, enterprise adoption, guaranteed durability, or production readiness without evidence.

## Visual principles

- Quiet infrastructure editorial: a warm paper canvas, near-black ink, subdued hairlines, and one restrained teal accent.
- Technical surfaces are useful, not decorative: code, diagrams, tables, benchmark bars, and operational notes carry meaning.
- No founder-centric storytelling, fake testimonials, vanity metrics, invented dashboards, or hype gradients.
- Cards are compact and structural. Borders do more work than shadows.
- Dark mode is a first-class theme, not an inverted afterthought.

## Tokens

### Color roles

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | `#ffffff` | `#0e0e10` | Page background |
| Soft canvas | `#fafafa` | `#141416` | Alternating sections |
| Ink | `#171717` | `#f4f4f6` | Headings and primary text |
| Body | `#60646c` | `#9da1aa` | Supporting copy |
| Hairline | `#f0f0f3` | `#232328` | Dividers and card edges |
| Strong hairline | `#dcdee0` | `#2e2e36` | Tables, controls, focus contexts |
| Accent | `#0f766e` | `#5eead4` | Links, status, chart bars |
| Accent soft | `#d9f1ed` | `#123c3a` | Callouts and icon plates |
| Code surface | `#101820` | `#0b1117` | Code and terminal-like surfaces |

### Typography

- Inter is the UI and editorial family, loaded with `next/font/google`.
- JetBrains Mono is used for commands, package names, benchmark values, and code.
- Display sizes are fluid from mobile to desktop, with negative tracking and a maximum weight of 650.
- Body copy is 14–18px with a comfortable 1.6–1.75 line height.
- Eyebrows are 11px uppercase labels with tracked lettering.

### Shape and spacing

- 4px base rhythm.
- 8px control radius, 10–12px panel radius, 999px status-pill radius.
- Standard page container: `1180px`, with a 20px mobile gutter.
- Major sections use 64–96px vertical rhythm; dense panels use 16–24px internal spacing.
- One shadow tier is reserved for navigation popovers and rare elevated states.

## Responsive behavior

- Below 900px the homepage hero becomes one column.
- Below 1024px desktop navigation collapses into an accessible menu.
- Benchmark charts use horizontally scrollable tabs but never require horizontal scrolling for the chart itself.
- Tables use a bordered scroll container and a readable minimum width; they do not distort column content.
- Touch targets are at least 40px high; focus indicators use the ink/accent contrast.

## Component patterns

- `PublicLayout` owns the site header and footer for all public product pages.
- `PageIntro` provides a consistent route-level hierarchy.
- `Panel`, `Pill`, `SectionHeading`, and `StatCard` are the basic content primitives.
- `CodeBlock` renders a labeled, scrollable, copyable code surface. Copy is progressive enhancement and does not hide the text.
- `BenchmarkCharts` uses CSS bars and accessible tabs. Values remain understandable without animation.
- `ArchitectureDiagram` is a semantic step sequence with a visual connector, not a decorative image.
- Server components are the default. Client components are limited to theme state, mobile navigation, copying, and chart tab selection.

## Navigation and routes

Primary navigation groups: Product, Developers, Resources, Benchmarks, and Pricing.

Public routes:

`/`, `/benchmarks`, `/benchmarks/methodology`, `/architecture`, `/features`, `/developers`, `/drivers`, `/deployment`, `/cloud`, `/pricing`, `/changelog`, `/community`.

Legal routes remain available: `/terms`, `/privacy`, `/cookies`, `/refund`, `/shipping`, `/license`, and `/contact`. The retired founder route is removed from the sitemap and no longer renders a page.

External destinations are official product surfaces: `docs.liorandb.com`, `app.liorandb.com`, `studio.liorandb.com`, and the Lioran Group GitHub organization.

## Themes and motion

The initial theme script reads the saved `liorandb-theme` preference, then falls back to `prefers-color-scheme`. The toggle persists the user choice and sets `color-scheme` on the root element. All theme-aware surfaces use semantic CSS variables.

Motion is limited to navigation and control state changes. `prefers-reduced-motion: reduce` disables transitions and smooth scrolling. Charts do not depend on animation to communicate values.

## Technical content and benchmark disclosure

Benchmark content is sourced from one typed object in `data/content.ts`. Every value is labeled as observed, calculated, or unrecorded. The current comparison is explicitly a user-reported local development result on an HP Omen Windows laptop.

The site keeps peak throughput separate from full-run average, never combines independent read and write numbers into a sustained mixed rate, and does not turn WAL plus checkpointing into an fsync-per-write guarantee. It calls out missing hardware, MongoDB, indexing, query-shape, cache, threading, acknowledgement, and Docker details. Disabling secondary/text indexes is described as a specialized raw-ingestion condition.

Local benchmark measurements are never used as managed-cloud guarantees. Pricing and plan limits remain commercial terms and are presented separately from performance charts.

## Accessibility

- Semantic landmarks, headings, tables, lists, and links are used throughout.
- Icon-only controls have accessible labels.
- Chart tabs expose `role="tab"` and selected state.
- Color is not the only carrier of benchmark meaning; labels and values remain textual.
- Focus-visible outlines are retained on controls.
- Code remains selectable and readable on narrow screens.
