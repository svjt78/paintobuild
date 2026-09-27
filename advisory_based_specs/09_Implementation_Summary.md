# Implementation summary

Recorded 27 September 2026. The work is local and uncommitted on branch `advisory-site`, created from `main` at `62fffd7`. **Not deployed.**

The full handoff, with detailed tables and check output, is at `/Users/suvojitdutta/Documents/Rest/cowork/Ideas/PainToBuild_Advisory_Audit/06_Implementation_Handoff.md`. Screenshots are in the `screenshots/` folder next to it.

## What changed

- **Positioning:** the site moved from research publishing to founder advisory. The main button everywhere is "Tell me what you need help with", which leads to `/contact/` (an email inquiry, not a form).
- **Menu:** Work with me, How it works, Research, Guides and tools, About. The same items appear on desktop and mobile. The footer has three groups.
- **New pages:**
  - `/advisory/`, with the anchors `#find-a-problem`, `#decide-what-to-build`, `#decide-what-to-try-next` and `#founder-decision-review`
  - `/resources/`
  - `/challenge-mining-kit/`
  - `/example-review/`, labeled "made up"
- **Retired page:** `/analysis/` now permanently redirects (301) to `/advisory/` through `public/_redirects`. The $349 Focused Analysis offer, its Gumroad link and its stock claim are gone from the page text and metadata.
- **Rewritten pages:** home, methodology, research, about, brief, template, thank-you, contact, everyday, 404, privacy and terms, all using `02_Replacement_Copy.md`. Methodology keeps all 11 old anchor links.
- **Articles:** all three are rewritten as plain guidance.
  - Signal counts and confidence scores are no longer shown. The old values are kept in the files under `history`.
  - Sources are grouped by type, and each has a short note.
  - Both article sections (`/evidence/` and `/diagnostics/`) are now generated from the content collection.
- **Technical fixes:**
  - A social image now exists for every page that references one.
  - Source dates no longer shift by a day.
  - Article `noindex` settings are respected.
  - The build date is no longer shown as a review date.
  - The sitemap has no fake `lastmod`.
  - The stale `/thanks/` rule is gone from robots.txt.
  - Unknown pages return 404 with the custom page (`not_found_handling` in `wrangler.jsonc`).
  - Event names describe clicks only. The template form reports errors accessibly.
- **Shared code:** routes and outside links are in `src/lib/routes.ts`. Shared styles are in `src/styles/base.css`.
- **Docs:** `README.md` is rewritten. `CLAUDE.md` is updated too, but it's gitignored, so git won't show the change.
- **Dependencies:** `node_modules` was incomplete, so I reinstalled it with `npm ci`. `package.json` and the lockfile are unchanged.

## Pages

**Indexed and in the sitemap (16):**
- `/`, `/advisory/`, `/methodology/`, `/evidence/`
- the two articles under `/evidence/` and the one under `/diagnostics/`
- `/about/`, `/resources/`, `/brief/`, `/challenge-mining-kit/`
- `/tools/evidence-ledger-template/`, `/example-review/`, `/contact/`
- `/privacy/`, `/terms/`

**Not indexed:** `/thank-you/`, `/everyday/`, `404.html`, and the `/analysis/` redirect.

## Checks run (all passing at the last run)

- `npm run build`: 19 pages and 16 social images.
- **Content scan of the built site:** no em or en dashes, old prices, old service links, owner notes, placeholders, "we/our/us", jargon or compound hyphens. It checked page text, metadata, and alt and aria text.
- **Copy coverage:** 688 of 688 approved sentences and labels are on their pages.
- **Links and metadata:** every internal link and anchor resolves. Titles, descriptions, canonical URLs and social images are correct. Structured data is valid, and the heading order is correct.
- **Local Cloudflare runtime (`wrangler dev`):** `/analysis/` gives one 301 to `/advisory/`, and unknown paths return 404 with the custom page.
- **Browser checks (110, in Chrome):**
  - 19 pages at 360, 768, 1024 and 1440px with no sideways scrolling
  - keyboard focus through the header and the mobile menu
  - six template-form cases with MailerLite mocked

## Gumroad findings (read only, 27 September 2026)

| Listing | Result |
|---|---|
| Brief | $19, 18 page PDF, Vol. 1 2026 Q3, future volumes not included. Matches the site. |
| Kit | $39, 30 page guide, 11 page Starter Pack, 10 tab workbook, same four examples as the Brief plus one. Matches the site. |
| Store | Two products |
| `/l/focused-analysis` | 404. The site no longer links to it. |

I checked the listings only, not the files themselves.

## Proposed Gumroad edits (not made)

- **Profile bio:** "I help founders think through product and business decisions. The guides here help you do your own research. For help with your idea or product, visit paintobuild.com." Set the website link to `https://paintobuild.com/advisory/` if Gumroad supports it.
- **Brief description:** remove "our", the scores and signal counts, "Pain-Evidence Confirmed" and "validate". Keep the file details.
- **Kit description:** remove "validate", the scoring gate language and the slogans. State the overlap with the Brief plainly.
- **Old Focused Analysis listing:** leave it unpublished. Don't add a review price until one is decided.

## Sources

All 16 article source links return a page. The six Indie Hackers titles match the cited posts. The eight Reddit links only show a generic Reddit page to a script, so their content couldn't be confirmed. A working link doesn't prove the post supports the article.
