# PainToBuild

Site for **PainToBuild**, a one person advisory service that helps founders
choose a problem to work on, decide what to build and work out what to try next
when a product is struggling. The starting service is the **Founder Decision
Review**: a written review of one product or idea and one decision, a suggested
test, one round of questions and one later review of the results. There is no
public price; the work, fee and timing are agreed before work starts.

Public research articles, a free research template and two paid guides (the
Builder Validation Brief and the Challenge Mining Kit, sold on Gumroad) are
secondary resources for people doing their own research.

Live site: <https://paintobuild.com>

Planning documents for the advisory version are in `advisory_based_specs/`
(`02_Replacement_Copy.md` is the approved wording).

## Stack

| Concern | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) 7.x, `output: 'static'` |
| Hosting | Cloudflare Workers Static Assets via `wrangler` |
| Content | Astro content collection + Zod schema, Markdown bodies |
| Fonts | Self hosted (`@fontsource-variable/figtree`, `@fontsource-variable/source-serif-4`) |
| Social images | [`astro-og-canvas`](https://github.com/delucis/astro-og-canvas), generated at build |
| Sitemap | `@astrojs/sitemap` with a hand maintained indexable path allowlist |
| Free template | Direct download: `public/downloads/evidence-ledger-template.xlsx` (no email signup) |
| Advisory inquiries | Email only (`hello@paintobuild.com`), no form |

## Getting started

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
```

| Command | Effect |
| --- | --- |
| `npm run dev` | Astro dev server |
| `npm run build` | Static build to `./dist`. This is the main check. |
| `npm run preview` | Serve `./dist` with Astro (no redirects or Cloudflare 404 handling) |
| `npx wrangler dev` | Serve `./dist` locally the way Cloudflare does, including `_redirects` and the 404 page. Local only. |
| `npm run deploy` | `astro build` then `wrangler deploy`. Publishes the live site. |

`.env` (gitignored) holds `CLOUDFLARE_API_TOKEN` for `wrangler deploy`.

## Routes

| Path | Source | Notes |
| --- | --- | --- |
| `/` | `pages/index.astro` | Three areas of help, the review, process, research, resources |
| `/advisory/` | `pages/advisory.astro` | Service page. Anchors: `#find-a-problem`, `#decide-what-to-build`, `#decide-what-to-try-next`, `#founder-decision-review` |
| `/analysis/` | `public/_redirects` | 301 to `/advisory/`. The old $349 Focused Analysis offer is retired. |
| `/methodology/` | `pages/methodology.astro` | Process first, then research rules. Keeps the old fragment IDs. |
| `/evidence/` | `pages/evidence.astro` | Research library, grouped by stage |
| `/evidence/<slug>/` | `pages/evidence/[...slug].astro` | Articles with `section: evidence` |
| `/diagnostics/<slug>/` | `pages/diagnostics/[...slug].astro` | Articles with `section: diagnostics` |
| `/about/`, `/contact/` | pages | Contact is the main inquiry route |
| `/resources/` | `pages/resources.astro` | Compares the template, Brief and Kit |
| `/brief/`, `/challenge-mining-kit/` | pages | Link to the Gumroad listings |
| `/tools/evidence-ledger-template/` | page | Template request form |
| `/example-review/` | page | A made up example review, labeled as such |
| `/everyday/`, `/404.html` | pages | `noindex`, not in the sitemap. `/everyday/` is a legacy notice. |
| `/privacy/`, `/terms/` | pages | Completed 2026-09-27 from the owner's answers. Review details live in each client's written agreement. |

## Content model

Articles live in `src/content/analysis/*.md`, with the schema in
[`src/content.config.ts`](src/content.config.ts). Key fields: `title`,
`question` (the H1), `cardSummary` (hand written teaser for cards),
`description`, `section`, `stage`, `published`, `updated`, `related`,
`cta.primary` / `cta.secondary`, and `sources[]` with a `role`
(`founder-report`, `product-reference`, `background`) and a `verifiedOn` date.
The article text is the Markdown body.

The old scoring fields (confidence tier, signal counts, evidence window,
candidate IDs) are kept under `history` for the record and are not displayed.
Counts should not be shown again unless they can be reconciled with the full
supporting records.

The schema checks structure only. A green build shows that required fields
exist and have the right shape. It cannot show that a source says what its
label claims, that reports are independent, or that anyone will buy anything.

To add an article:

1. Create `src/content/analysis/<slug>.md` with complete frontmatter.
2. It gets a page at `/<section>/<slug>/` and a social image automatically, and
   appears on `/evidence/` under its stage.
3. Add the path to `INDEXABLE_PATHS` in `astro.config.mjs`.

Shared routes and outside links (`articlePath`, Gumroad URLs, the inquiry
`mailto`, the main button) are in `src/lib/routes.ts`.

## Social (OG) images

`src/pages/open-graph/[...route].ts` generates PNGs at build time. Every page
that passes `ogImagePath` to `BaseLayout` needs an entry in its `pages` map, or
its `og:image` 404s. Article images are added from the collection.

## SEO

- Only finished pages are indexable. Other pages pass `noindex` to `BaseLayout`
  and are left out of `INDEXABLE_PATHS`.
- The sitemap has no `lastmod`, because the build time is not a content change
  date.
- `robots.txt` allows everything, so crawlers can read `noindex` tags.

## Events

Links and buttons carry `data-event` attributes, but **no script listens for
them and no analytics are wired up in this repository.** Any analytics set up in
Cloudflare is configured outside this code and has not been verified here.

| Event | Means only |
| --- | --- |
| `advisory_cta_click` | An internal link toward the service or contact page was clicked |
| `inquiry_email_click` | A `mailto` link was clicked. It does not mean an email was sent. |
| `resource_checkout_click` | A Gumroad product link was clicked. It is not a purchase. |
| `shop_link_click` | The Gumroad store link was clicked |
| `source_link_click` | A cited source was opened |
| `template_download_click` | The template download button was clicked |

## Email

MailerLite is no longer used by the site. The template became a direct
download on 2026-09-27, and the old signup form and confirmation page are kept
in `retired/` for reference only. `/thank-you/` redirects to the template page.
The MailerLite account is paused and only holds addresses from earlier signups.
Client email goes to hello@paintobuild.com (ImprovMX to Gmail). Guide
purchases are delivered by Gumroad.

## Deployment

`npm run deploy` builds and pushes `./dist` to Cloudflare. `wrangler.jsonc`
binds the `paintobuild.com` custom domain, serves `./dist` as static assets, and
sets `not_found_handling: "404-page"` so unknown paths get `404.html` with a 404
status. `public/_redirects` holds the permanent redirects.
