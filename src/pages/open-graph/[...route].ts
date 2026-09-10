import { OGImageRoute } from 'astro-og-canvas';

// Per §10.6 of the design doc: OG images are generated at build time from
// the dark shell gradient + white mark + page title in Figtree. No runtime
// image service, no external calls, no stock imagery (D8).
export const { getStaticPaths, GET } = await OGImageRoute({
  pages: {
    index: {
      title: 'PainToBuild — Evidence Before You Build',
      description:
        'PainToBuild helps early-stage founders check an idea for recurring pain, reachable buyers and real demand before writing a line of code.',
    },
    about: {
      title: 'About | PainToBuild',
      description:
        'What PainToBuild is, the weekly evidence system behind it, and why the operator writes under a pseudonym instead of a named byline.',
    },
    brief: {
      title: 'The Builder Validation Brief — $19 | PainToBuild',
      description:
        'Four worked evidence entries showing how the PainToBuild evidence ledger tests a real founder problem before you build. More entries added quarterly.',
    },
  },

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
