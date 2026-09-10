import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Only pages with real, finished content are indexable right now.
// Phase-0/placeholder stub pages (nav/footer targets not yet built out)
// carry <meta name="robots" content="noindex, follow"> and are
// deliberately excluded here so the sitemap never lists thin pages.
const INDEXABLE_PATHS = [
  '/', '/about/', '/brief/',
  '/methodology/', '/evidence/',
  '/evidence/reddit-product-validation/',
  '/evidence/community-access-is-not-buyer-access/',
  '/diagnostics/signups-no-core-feature-use/',
  '/tools/evidence-ledger-template/',
  '/analysis/', '/contact/', '/privacy/', '/terms/',
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
      serialize(item) {
        // Static build: approximate lastmod with the build timestamp.
        // Update this if/when the sitemap integration is swapped for one
        // that reads per-page source mtimes.
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
