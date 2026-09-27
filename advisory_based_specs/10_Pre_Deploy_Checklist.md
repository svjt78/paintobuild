# Deploy checklist

Recorded 27 September 2026 for the first publish of the advisory site. Deploying replaces the live paintobuild.com.

## Before deploying (you)

- [ ] Open the Brief and Kit files and confirm they match their listings: 18 page Brief; 30 page guide, 11 page Starter Pack and 10 tab workbook in the Kit; Volume 1, July to September 2026.
- [ ] Read `/privacy/` and `/terms/` once. Both say "Last reviewed September 27, 2026". If you review them on a later date, change `lastReviewed` in `src/pages/privacy.astro` and `src/pages/terms.astro`.
- [ ] Look through the site locally:
  ```bash
  cd /Users/suvojitdutta/Documents/Rest/apps/apps/paintobuild-website/paintobuild-site
  npm run build
  npx wrangler dev        # http://localhost:8787, includes the redirect and 404 page
  ```
- [ ] Optional: if you deploy on a later date, set `updated:` in the three `src/content/analysis/*.md` files to the deploy date. It currently reads 2026-09-27.

## Deploying (ask Claude, or run it yourself)

- [ ] Commit the work on `advisory-site`, including `advisory_based_specs/`.
- [ ] Decide whether to merge `advisory-site` into `main` before deploying (recommended, so `main` matches the live site).
- [ ] Confirm `.env` holds `CLOUDFLARE_API_TOKEN`.
- [ ] Run `npm run deploy` (this builds, then runs `wrangler deploy`).

## After deploying: live checks

- [ ] `https://paintobuild.com/analysis/` redirects once (301) to `/advisory/`.
- [ ] A made-up address such as `https://paintobuild.com/does-not-exist/` shows the custom "That page could not be found" page, with a 404 status.
- [ ] Home, `/advisory/`, one article and `/resources/` look right on your phone and on a laptop. Open the mobile menu.
- [ ] `https://paintobuild.com/sitemap-index.xml` lists 16 pages. `robots.txt` has no `/thanks/` line.
- [ ] Social images load, e.g. `https://paintobuild.com/open-graph/advisory.png`. Optionally paste a page link into a social post preview.
- [ ] The Brief and Kit buy buttons open the right Gumroad products. Don't buy anything.
- [ ] Send a test email to hello@paintobuild.com from another account and confirm it reaches your Gmail.
- [ ] Click the download button on `/tools/evidence-ledger-template/` and confirm the Excel template downloads and opens.
- [ ] `https://paintobuild.com/thank-you/` redirects once (301) to the template page.
- [ ] After a day, check that Cloudflare Web Analytics is recording visits.
- [ ] If you use Google Search Console, resubmit the sitemap.

## After the site is live (separate tasks)

- [ ] Update the Gumroad profile and product descriptions (see `09_Implementation_Summary.md`).
- [ ] Complete the "before the first paid review" items in `08_Legal_and_Identity_Notes.md`.
- [ ] Prepare a written agreement template that covers everything listed in `07_Business_Decisions.md` under "Left to each client's written agreement".

## If something goes wrong

The previous site is commit `62fffd7` on `main`. If `advisory-site` isn't merged yet, go back to it and deploy again:

```bash
git switch main
npm run deploy
```

If `advisory-site` has already been merged into `main`, `main` no longer holds the old site. Check out `62fffd7` instead (`git switch --detach 62fffd7`), then run `npm run deploy`.

Note: `_redirects` and `not_found_handling` exist only in the new version. Going back also brings back the old `/analysis/` page and the old 404 behavior.
