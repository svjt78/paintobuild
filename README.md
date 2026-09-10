# PainToBuild

Marketing and content site for **PainToBuild** — evidence-based product-validation
research. Each published analysis tests a founder problem against first-person
public forum evidence (Reddit, Hacker News, IndieHackers) under a fixed
methodology, and states plainly what the evidence does *not* prove.

Live site: <https://paintobuild.com>

## Stack

| Concern | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) 7.x, `output: 'static'` |
| Hosting | Cloudflare (Workers Assets) via `wrangler` |
| Content | Astro content collections + Zod schema, Markdown bodies |
| Fonts | Self-hosted (`@fontsource-variable/figtree`, `@fontsource-variable/source-serif-4`) |
| Social images | [`astro-og-canvas`](https://github.com/delucis/astro-og-canvas), generated at build |
| Sitemap | `@astrojs/sitemap` with a hand-maintained indexable-path allowlist |
| Email capture | Native HTML form POSTing to a MailerLite JSONP endpoint |

## Getting started

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
```

### Scripts

| Command | Effect |
| --- | --- |
| `npm run dev` | Astro dev server |
| `npm run build` | Static build to `./dist` |
| `npm run preview` | Serve the built `./dist` locally |
| `npm run deploy` | `astro build` then `wrangler deploy` to Cloudflare |

### Environment

- `.env` (gitignored) holds `CLOUDFLARE_API_TOKEN` for `wrangler deploy`.

## Project layout

```
src/
  content.config.ts          Zod schema for the `analysis` collection
  content/analysis/*.md       One Markdown file per published analysis
  layouts/
    BaseLayout.astro          <head>, canonical, OG/Twitter tags, favicons
    AnalysisLayout.astro       Answer-first template for evidence/diagnostic pages
    ComingSoonLayout.astro     Honest, noindexed stub for unbuilt nav targets
  pages/
    index.astro                Home
    evidence/[...slug].astro   Dynamic route over the `analysis` collection (section: evidence)
    diagnostics/…              Diagnostic pages (section: diagnostics)
    open-graph/[...route].ts    Build-time OG image generation
    methodology, about, brief, analysis, contact, privacy, terms, 404, thank-you, everyday …
  components/
    shell/     SiteHeader, SiteFooter, SkipLink
    content/   Kicker, ConfidenceTag, SourceList
    convert/   Button, CtaBand, EmailCapture
  styles/
    tokens.css  Design tokens (colors, type scale, spacing) — "Design & Build Spec v1.1 §5"
    base.css    Reset + element defaults + shared utility classes
public/
  brand/       Wordmark and mark assets (light/dark)
  favicon*, apple-touch-icon, robots.txt
```

## Content model

Analyses live in `src/content/analysis/*.md`. The frontmatter schema in
[`src/content.config.ts`](src/content.config.ts) enforces the site's evidence
rules rather than relying on editorial discipline — e.g. `notProven` must have at
least one entry, every source needs a `verifiedOn` date, and `description` is
length-bounded for SEO.

Key fields: `question`, `shortAnswer`, `section` (`evidence` | `diagnostics`),
`cluster`, `confidence` (`pain-validated` | `early-signal`), `signalCount` /
`weakSignalCount`, `evidenceWindow`, `sources[]`, `notProven[]`, `nextTest`.

The Markdown body carries the free-form narrative (what the conclusion is based
on, what the evidence shows, what it probably means, decision criteria); the
structured fields render from the schema.

To add an analysis:

1. Create `src/content/analysis/<slug>.md` with complete frontmatter.
2. `evidence` entries get a page automatically at `/evidence/<slug>/`.
   `diagnostics` entries need an explicit page under `src/pages/diagnostics/`.
3. Add the new path to `INDEXABLE_PATHS` in `astro.config.mjs` so it enters the
   sitemap.
4. Add matching entries to `ctaMap` / `relatedMap` in
   `src/pages/evidence/[...slug].astro` if it is an evidence page.
5. Add an OG image entry — see below.

## Social (OG) images

`src/pages/open-graph/[...route].ts` generates PNGs at build time from the dark
brand gradient + wordmark + page title. **Every page that passes an `ogImagePath`
to `BaseLayout` must have a corresponding entry here**, or the `og:image` URL will
404. Static pages are listed in the `pages` map; collection-backed pages must be
expanded from `getCollection('analysis')`.

## SEO

- Only finished pages are indexable. Stub pages carry
  `<meta name="robots" content="noindex, follow">` (via `noindex` prop on
  `BaseLayout` / `ComingSoonLayout`) and are excluded from the sitemap by the
  `INDEXABLE_PATHS` allowlist in `astro.config.mjs`.
- Home and analysis pages emit JSON-LD (`Organization` / `WebSite` / `Article`).

## Analytics

CTAs carry `data-event-*` attributes (`data-event`, `data-event-page`,
`data-event-cta-id`, …) as hooks for an analytics handler that is not yet wired up.

## Deployment

`npm run deploy` builds and pushes `./dist` to Cloudflare. `wrangler.jsonc`
binds the `paintobuild.com` custom domain and serves `./dist` as static assets.
