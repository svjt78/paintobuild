import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Only finished pages are indexable. Redirects (/analysis/), the thank-you
// page, the legacy /everyday/ notice and the 404 page carry noindex and stay off this list, so the sitemap never
// lists them. Research articles are listed explicitly; add new ones here.
const INDEXABLE_PATHS = [
  '/', '/advisory/', '/methodology/', '/evidence/',
  '/evidence/reddit-product-validation/',
  '/evidence/community-access-is-not-buyer-access/',
  '/diagnostics/signups-no-core-feature-use/',
  '/about/', '/resources/', '/brief/', '/challenge-mining-kit/',
  '/tools/evidence-ledger-template/', '/example-review/', '/contact/',
  '/privacy/', '/terms/',
];

export default defineConfig({
  site: 'https://paintobuild.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return INDEXABLE_PATHS.includes(path);
      },
      // No lastmod: the build time is not a content change date, and this
      // integration cannot read per-page modification dates.
    }),
  ],
});
