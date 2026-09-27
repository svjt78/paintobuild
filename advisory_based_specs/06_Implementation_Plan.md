# PainToBuild: research site → founder advisory site (local implementation)

## Context

`advisory_based_specs/05_Website_Implementation_Prompt.md` asks for PainToBuild to be repositioned from a research-publishing site into a founder advisory business (Founder Decision Review, no public price). Research, the $19 Brief, the $39 Kit and the free template become secondary. The approved wording is `02_Replacement_Copy.md` (19 page drafts plus nav/footer). Strategy, link and acceptance context: `/Users/suvojitdutta/Documents/Rest/cowork/Ideas/PainToBuild_Advisory_Audit/01_…md`, `03_Link_Register.md`, `04_Implementation_and_Acceptance.md`.

Hard limits: local only. No deploy, push, Gumroad/MailerLite/Cloudflare edits, real form submissions or new analytics. No invented business facts. Mandatory writing rules apply everywhere, including metadata, alt text and aria labels: no em dashes, no team voice, no jargon, and only the hyphens that are required.

Working directory: the current checkout (`…/paintobuild-website/paintobuild-site`, branch `main`, clean except untracked `advisory_based_specs/`).

## Decisions confirmed with you
- **Sources (Q1):** keep the article citations under a "Source material" section, grouped by role (founder reports, product references, background), with the original checked-on dates in UTC and no counts. Recheck each URL read-only and list unreachable ones in the handoff.
- **Policies (Q2):** make minimal fixes to `privacy.astro` and `terms.astro`. Remove the Focused Analysis and $349 references and the auto date, add `noindex`, and remove them from `INDEXABLE_PATHS`. Save the full §18 and §19 drafts to `…/PainToBuild_Advisory_Audit/drafts/`.
- **Git:** create local branch `advisory-site` from `main` and leave all changes uncommitted. Nothing is pushed.
- **Tooling:** use `npx wrangler dev` locally (no deploy) and Playwright installed in the scratchpad, not added to `package.json`.

## Current state (verified in source)

- Astro 7 static site. Deployed to Cloudflare Workers Assets (`wrangler.jsonc`, no `_redirects`, no `not_found_handling`).
- Header nav: Evidence, Methodology, The Brief, Everyday Audits, Analysis. CTAs are the template and "Shop on Gumroad". Mobile uses `<details>` below 1100px.
- Footer prints the build date as "Site last reviewed". `privacy.astro` and `terms.astro` also use `new Date()`.
- `analysis.astro` offers $349 with `capacityStatus`, JSON-LD `InStock` and a Gumroad `focused-analysis` link.
- The OG generator declares only `index`, `about` and `brief`. `analysis`, `evidence`, `methodology`, `tools-evidence-ledger-template`, `evidence-*` and `diagnostics-*` PNGs are referenced but never built.
- `AnalysisLayout` ignores `data.noindex`, always shows ConfidenceTag counts and an "Evidence window", and has hardcoded "Scored using… validation methodology" text. The diagnostic page is hand-written. CTA and related maps are hardcoded in `evidence/[...slug].astro` while `relatedSlugs` goes unused.
- `SourceList` formats dates with a local-timezone `toLocaleDateString`, which can shift them by one day.
- `EmailCapture` puts `data-event="email_submit_success"` on the submit button, and its error message uses "we'll".
- `robots.txt` still has `Disallow: /thanks/`. The sitemap sets `lastmod` to the build time.
- Home cards take the first sentence of `shortAnswer`, which gives "No." for one article.

## Implementation steps

### 0. Save the plan and branch
Copy this plan to `advisory_based_specs/06_Implementation_Plan.md` in the repo. Then create the local branch `advisory-site` and start implementing.

### 1. Shared shell and components
- **SiteHeader.astro**: nav becomes Work with me `/advisory/`, How it works `/methodology/`, Research `/evidence/`, Guides and tools `/resources/`, About `/about/`. One primary button, "Tell me what you need help with" → `/contact/`. Remove the template and shop buttons. Mirror the same items in the mobile `<details>`. Re-measure the desktop breakpoint because the labels are now longer (keep 1100px or raise it). Add a visible `:focus-visible` style. Change the wordmark `alt` to "PainToBuild".
- **SiteFooter.astro**: three groups exactly as in the copy doc, with the footer text as written. Remove the build date and the em-dash tagline.
- **Button.astro / CtaBand.astro**: add an optional secondary link, `data-event-cta-id`, and `external` handling (`target` and `rel`) so page-local anchor buttons can be retired.
- **Event names**: `inquiry_email_click` for mailto, `advisory_cta_click` for internal links, `resource_checkout_click` for Gumroad links and `template_form_submit` on submit. Accepted responses fire through a `data-*` state only, and nothing claims a confirmed or delivered subscription. No listener is added.
- **EmailCapture.astro**: keep the MailerLite action. Use the copy doc's button, helper text and error text. Put the error in an `role="alert"` region, move focus to it and add `aria-describedby`. Validate on the client for empty or invalid input.
- **SourceList.astro**: format dates in UTC (`timeZone: 'UTC'`) and change "verified" to "checked on". Group sources by role (Q1).
- **BaseLayout.astro**: unchanged apart from an optional `ogType` prop (`article` for articles).

### 2. Content model and article routing
- **`content.config.ts`**: make `confidence`, `signalCount`, `weakSignalCount`, `evidenceWindow` and `candidateIds` optional as historical data that is never displayed. Add `cardSummary` (a required short teaser), `stage` (`before-build | finding-customers | after-launch`), and `cta` ({label, href, secondaryLabel, secondaryHref}). Make `related` a {slug} reference that replaces the hardcoded maps. Add an optional `role` on each source (`founder-report | product-reference | background`). Make `notProven`, `nextTest` and `shortAnswer` optional so the guidance articles render entirely from Markdown copy.
- **Route helper** `src/lib/routes.ts`: `articlePath(entry)` returns `/${section}/${id}/`. It is used by home, `/evidence/`, related links and the OG generator.
- **`src/pages/diagnostics/[...slug].astro`**: generate diagnostic pages from the collection, mirroring `evidence/[...slug].astro`. Delete the hand-written diagnostic page. Both routes read the CTA and related link from frontmatter.
- **AnalysisLayout.astro**: pass `noindex`. Drop ConfidenceTag, the evidence window, "Short answer", "Scored using…" and the fixed "Recommended next test" and "What it does not prove" sections, and render them only when the fields are present. The breadcrumb says "Research". A "Source material" section renders `SourceList` when sources exist. Show the published date, and the updated date when it differs.
- **Rewrite all three `.md` files** with the copy doc text (§5, §6, §7), including the new title, description (110 to 160 characters under the schema), `cardSummary`, `stage` and `cta`. Keep the original `published` date and set `updated` to the rewrite date (flagged in the handoff). Keep historical counts in frontmatter, undisplayed, so version history and the internal record survive. Remove the dossier-selling test, competitor funding and price claims, and the old summaries.
- Remove `ConfidenceTag` usage on home and `/evidence/`. Keep the component file only if it is still referenced; otherwise delete it.

### 3. Pages (copy from `02_Replacement_Copy.md`, owner notes excluded)
| Route | File | Work |
|---|---|---|
| `/` | `index.astro` | Full rewrite (§1). Hero plus three help cards linking to `#find-a-problem`, `#decide-what-to-build` and `#decide-what-to-try-next`. Review section, 4-step process, research list from the collection via `cardSummary` and `articlePath`, a do-it-yourself section, and a CTA band. H1 → H2 → H3 order. JSON-LD Organization and WebSite (no prices). |
| `/advisory/` | new `advisory.astro` | §2, with IDs `find-a-problem`, `decide-what-to-build`, `decide-what-to-try-next` and `founder-decision-review`. JSON-LD `Service` without `offers`. |
| `/analysis/` | delete `analysis.astro`; add `public/_redirects` | `/analysis /advisory/ 301` and `/analysis/ /advisory/ 301` (Workers Static Assets `_redirects`). The Gumroad focused-analysis link is removed everywhere. |
| `/methodology/` | `methodology.astro` | §3. All 11 anchor IDs kept (the copy doc maps each one, e.g. `#evidence-categories` → "Review the information"). |
| `/evidence/` | `evidence.astro` | §4. Three stage groups built from the collection, with no counts. |
| `/about/` | `about.astro` | §8 |
| `/resources/` | new `resources.astro` | §9. Comparison table that scrolls horizontally inside a wrapper on narrow screens. |
| `/brief/` | `brief.astro` | §10. Gumroad button with a note that it opens Gumroad, `resource_checkout_click`, and Product JSON-LD with a $19 offer only if the listing matches. |
| `/challenge-mining-kit/` | new | §11, same pattern as the Brief ($39). |
| `/tools/evidence-ledger-template/` | existing | §12, with a made up example row in a table. |
| `/thank-you/` | existing | §13. Keep `noindex`. |
| `/contact/` | existing | §14. Mailto button (with subject), visible address, no reply-time promise. |
| `/everyday/` | existing | §15. Keep `noindex` and stop using ComingSoonLayout, because the new copy is a real notice with links. |
| `/404.html` | `404.astro` | §16. Keep `noindex`. |
| `/example-review/` | new | §17. A visible "This example is made up" banner near the top. |
| `/privacy/`, `/terms/` | existing | Minimal fix plus noindex (Q2). Full drafts from §18 and §19 go to `…/PainToBuild_Advisory_Audit/drafts/` (outside the route tree). |

### 4. Metadata, OG images, sitemap, robots, hosting
- **OG generator**: entries for every page that passes `ogImagePath`: index, advisory, methodology, evidence, about, resources, brief, challenge-mining-kit, tools-evidence-ledger-template, example-review and contact. Article entries are built from `getCollection('analysis')` using `articlePath`, keyed `evidence-<id>` or `diagnostics-<id>`. Titles and descriptions come from the copy doc, with no em dashes and no prices except on the Brief and Kit.
- **`astro.config.mjs`**: the `INDEXABLE_PATHS` list adds `/advisory/`, `/resources/`, `/challenge-mining-kit/` and `/example-review/`, and removes `/analysis/`, `/privacy/` and `/terms/`. `/thank-you/`, `/everyday/` and 404 stay out. Remove the build-time `lastmod` so no `lastmod` is emitted.
- **`robots.txt`**: remove `Disallow: /thanks/`.
- **`wrangler.jsonc`**: add `"not_found_handling": "404-page"` under `assets` so unknown paths serve `404.html` with status 404. This is a config change that takes effect only on deploy; flag it in the handoff.
- **README.md and CLAUDE.md**: document the advisory purpose, the route map, the content model, what schema checks can and cannot prove, `_redirects`, event names with no listener, the unverified external analytics, and the MailerLite endpoint reserved for template requests. Remove the stale "Known issues" entries once they are fixed.

### 5. External checks (read-only)
WebFetch the Brief, Kit, store and `focused-analysis` Gumroad URLs. Record the product name, price, edition and stated contents, and report any conflicts with the copy (18 pages, 30-page guide, ten-tab workbook, 11-page Starter Pack, Volume 1 July to September 2026). Fetch the retained source URLs from the articles and record each as reachable, blocked or gone, without inferring that blocked means fabricated. Nothing is purchased.

## Verification
1. `npm run build` passes.
2. **Scan script** (run from the scratchpad, not added to the repo unless you want it) over `dist/**/*.html`:
   - em and en dashes in visible text and meta
   - `$99` and `$349`
   - `focused-analysis`
   - "we", "our" and "us" outside quotes
   - jargon list: MVP, traction, activation, acquisition, deliverable, validate
   - `Owner note`, `[` placeholders and `→`
   - `InStock`
   - every internal `href` and `#fragment` resolved against `dist`
   - every `og:image` present in `dist`
   - canonical, title and description on each page
   - `noindex` on thank-you, everyday and 404
   - sitemap matches `INDEXABLE_PATHS`
3. **Hosting runtime**: `npx wrangler dev` (local only, no deploy). Use `curl -I` to check that `/analysis/` and `/analysis` return 301 → `/advisory/` without a loop, and that `/nope/` returns 404 with the custom body.
4. **Form mocks**: Playwright route interception of the MailerLite URL for invalid email, 500 or network failure (error shown and announced), and `{"success":true}` (redirects to `/thank-you/`). No real requests.
5. **Responsive and a11y**: Playwright screenshots at 360, 768, 1024 and 1440 pixels for every page. Check for overflow (`scrollWidth > innerWidth`), tab through the header and mobile menu to check focus is visible, check the heading order, and check that tables scroll. Save screenshots of home, advisory, resources, one article and the open mobile nav to the reference dir `screenshots/`.
6. Read every rendered page for natural language against the writing rules.
7. **Handoff** `…/PainToBuild_Advisory_Audit/06_Implementation_Handoff.md` with all 8 required sections, the route coverage table, link register reconciliation, Gumroad proposals marked "not performed", and the open business questions. It stops there and waits for your answers.

## Business questions (asked at the end, per the prompt)
- Written only or calls as well?
- Limits on material, product testing and research?
- Delivery time and capacity?
- Results deadline, and what happens if no test is run?
- Quote and payment route, when work starts, cancellation and refunds?
- Client data storage, retention and deletion?
- Use of AI tools with client material?
- Operator disclosure?
- Permission to publish client examples?
- Is Cloudflare Web Analytics actually on?
- Have the product files been verified?
