// Content collection schema — Design & Build Specification v1.1, §9.1.
// notProven requires at least one entry, and each source requires a
// verification date — the schema enforces the site's evidence rules
// rather than relying on editorial discipline.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const analysis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/analysis' }),
  schema: z.object({
    title: z.string().max(70),
    question: z.string(),
    shortAnswer: z.string(),
    // Optional early "is this the right page for you" callout — not in the
    // original §9.1 field list, added because §8.5/§8.6 both call for a
    // ForYouIf card and the two pages need to distinguish themselves.
    forYouIf: z.string().optional(),
    description: z.string().min(110).max(160),
    section: z.enum(['evidence', 'diagnostics']),
    cluster: z.enum(['validation', 'customer-access', 'demand-testing', 'activation', 'manual-service']),
    confidence: z.enum(['pain-validated', 'early-signal']),
    signalCount: z.number().int(),
    weakSignalCount: z.number().int().default(0),
    evidenceWindow: z.object({ from: z.string(), to: z.string() }),
    candidateIds: z.array(z.string()),
    published: z.date(),
    updated: z.date(),
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
      platform: z.enum(['reddit', 'hn', 'indiehackers', 'web']),
      verifiedOn: z.date(),
    })),
    notProven: z.array(z.string()).min(1),
    nextTest: z.string(),
    relatedSlugs: z.array(z.string()).default([]),
    noindex: z.boolean().default(false),
  }),
});

export const collections = { analysis };
