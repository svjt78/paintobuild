import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
import { articleOgKey } from '../../lib/routes';

// Per §10.6 of the design doc: OG images are generated at build time from
// the dark shell gradient + white mark + page title in Figtree. No runtime
// image service, no external calls, no stock imagery (D8).
//
// Every page that passes ogImagePath needs an entry here, or its og:image
// 404s. Keys map to /open-graph/<key>.png. Article images are built from the
// content collection so new articles are covered automatically.
const pages: Record<string, { title: string; description: string }> = {
  index: {
    title: 'Get help deciding what to build or what to try next',
    description: 'Help for founders choosing a problem, planning a product or working out why it is struggling.',
  },
  advisory: {
    title: 'Help with the decision in front of you',
    description: 'A written review of one product or idea, a suggested test and one later review of the results.',
  },
  methodology: {
    title: 'How I work with you',
    description: 'Understand the question, review the information, choose a test and review the results.',
  },
  evidence: {
    title: 'Research on common founder questions',
    description: 'Checking product ideas, finding possible customers and understanding why people stop using a product.',
  },
  about: {
    title: 'About PainToBuild',
    description: 'I help founders choose what to work on and decide what to try when a product is struggling.',
  },
  resources: {
    title: 'Guides and tools for your own research',
    description: 'A free research template, the Builder Validation Brief and the Challenge Mining Kit.',
  },
  brief: {
    title: 'The Builder Validation Brief',
    description: 'Four examples of research into founder problems. A PDF with 18 pages, $19.',
  },
  'challenge-mining-kit': {
    title: 'The Challenge Mining Kit',
    description: 'A guide, Starter Pack and workbook for doing problem research yourself. $39.',
  },
  'tools-evidence-ledger-template': {
    title: 'Keep your problem research in one place',
    description: 'A free template for recording what people say about a problem and where you found it.',
  },
  'example-review': {
    title: 'What a Founder Decision Review looks like',
    description: 'A made up example showing how I compare explanations and suggest a small test.',
  },
  privacy: {
    title: 'Privacy and your information',
    description: 'How PainToBuild handles messages, client information, email subscriptions and purchases.',
  },
  terms: {
    title: 'Terms for reviews, guides and tools',
    description: 'How reviews are agreed, and the payment, delivery and cancellation terms that apply.',
  },
  contact: {
    title: 'Tell me what you need help with',
    description: 'Send a short message about your idea or product and where you are stuck.',
  },
};

for (const entry of await getCollection('analysis')) {
  pages[articleOgKey(entry)] = { title: entry.data.question, description: entry.data.cardSummary };
}

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,

  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/brand/mark-white-1024.png',
      size: [96],
    },
    bgGradient: [
      [12, 18, 32], // --surface-dark-deep #0C1220
      [23, 35, 58], // --surface-dark-raised #17233A
    ],
    border: {
      color: [255, 138, 61], // --pain-on-dark #FF8A3D
      width: 8,
      side: 'block-start',
    },
    padding: 64,
    font: {
      title: {
        color: [247, 245, 239], // --on-dark #F7F5EF
        size: 60,
        weight: 'Bold',
        families: ['Figtree'],
        lineHeight: 1.2,
      },
      description: {
        color: [199, 203, 214], // --on-dark-muted #C7CBD6
        size: 30,
        weight: 'Normal',
        families: ['Figtree'],
        lineHeight: 1.4,
      },
    },
    fonts: [
      './src/assets/fonts/figtree-regular.ttf',
      './src/assets/fonts/figtree-bold.ttf',
    ],
  }),
});
