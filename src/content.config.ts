// Content collection schema. Originally Design & Build Specification v1.1,
// §9.1; revised for the advisory site (advisory_based_specs/06).
//
// The schema checks structure only: that required fields exist and have the
// right shape. It cannot check that a source says what its label claims, that
// reports are independent, or that anyone will buy anything. Those need a
// person to read the sources.
//
// Articles are now plain research guidance. The old scoring fields
// (confidence, signalCount, weakSignalCount, evidenceWindow, candidateIds)
// are kept as optional historical records. They are never displayed, because
// the counts have not been reconciled with the full supporting records.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({ label: z.string(), href: z.string() });

const analysis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/analysis' }),
  schema: z.object({
    title: z.string().max(70),
    // The visible H1, usually phrased as the reader's question.
    question: z.string(),
    // Short teaser for cards on the home and research pages. Written by
    // hand so cards never show a clipped first sentence.
    cardSummary: z.string().max(140),
    description: z.string().min(110).max(160),
    section: z.enum(['evidence', 'diagnostics']),
    stage: z.enum(['before-build', 'finding-customers', 'after-launch']),
    published: z.date(),
    updated: z.date(),
    // Slug of one related article, rendered as a "Related article" link.
    related: z.string().optional(),
    // Link text for the related article. Defaults to that article's title.
    relatedLabel: z.string().optional(),
    // Where the "How I use research" link points. Defaults to /methodology/.
    methodHref: z.string().default('/methodology/'),
    cta: z.object({ primary: link, secondary: link.optional() }),
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
      platform: z.enum(['reddit', 'hn', 'indiehackers', 'web']),
      // What kind of source this is, so founder reports are not mixed up
      // with product pages or older background material.
      role: z.enum(['founder-report', 'product-reference', 'background']).default('founder-report'),
      // Optional plain note on what the source is about.
      note: z.string().optional(),
      // Calendar date the link was checked. Rendered in UTC.
      verifiedOn: z.date(),
    })).default([]),
    noindex: z.boolean().default(false),

    // Historical records from the research version. Not displayed.
    history: z.object({
      confidence: z.enum(['pain-validated', 'early-signal']).optional(),
      signalCount: z.number().int().optional(),
      weakSignalCount: z.number().int().optional(),
      evidenceWindow: z.object({ from: z.string(), to: z.string() }).optional(),
      candidateIds: z.array(z.string()).optional(),
      cluster: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { analysis };
