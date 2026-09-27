// One place for article routes and shared outside links, so pages, related
// links and the social image generator never disagree about an address.
import type { CollectionEntry } from 'astro:content';

type Entry = CollectionEntry<'analysis'>;

/** Public path for an article: /evidence/<id>/ or /diagnostics/<id>/. */
export const articlePath = (entry: Entry) => `/${entry.data.section}/${entry.id}/`;

/** Key used for the article's generated social image. */
export const articleOgKey = (entry: Entry) => `${entry.data.section}-${entry.id}`;

export const stageLabel: Record<Entry['data']['stage'], string> = {
  'before-build': 'Before you build',
  'finding-customers': 'Finding customers',
  'after-launch': 'After launch',
};

export const stageOrder: Entry['data']['stage'][] = ['before-build', 'finding-customers', 'after-launch'];

export const EMAIL = 'hello@paintobuild.com';
export const INQUIRY_MAILTO = `mailto:${EMAIL}?subject=Founder%20advisory%20inquiry`;
export const SHOP_URL = 'https://paintobuild.gumroad.com/';
export const BRIEF_URL = 'https://paintobuild.gumroad.com/l/the-builder-validation-brief';
export const KIT_URL = 'https://paintobuild.gumroad.com/l/the-challenge-mining-kit';

/** The main button used across the site. */
export const MAIN_CTA = { label: 'Tell me what you need help with', href: '/contact/' };
