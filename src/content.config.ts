import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(), // <title>, keep under ~60 characters
    description: z.string(), // meta description
    h1: z.string(),
    quickAnswer: z.string(), // 40–60 word answer shown first (AEO)
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()),
    service: z.object({ name: z.string(), url: z.string() }),
    image: z.object({ name: z.string(), alt: z.string() }).optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(z.string()).default([]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    order: z.number().default(99),
    path: z.string().optional(), // override URL (e.g. the cost page lives at /leak-detection-cost/)
  }),
});

// Real completed jobs only. Nothing is published until a file exists in src/content/cases/.
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(), // e.g. "Hot water slab leak under a kitchen in Greenwood"
    description: z.string(),
    service: z.string(), // service slug, e.g. "slab-leak-detection"
    town: z.string(), // e.g. "Greenwood"
    date: z.coerce.date(), // job date
    problem: z.string(), // what the homeowner noticed
    method: z.array(z.string()), // what was used to find it
    result: z.string(), // what was found and marked
    photos: z.array(z.object({ name: z.string(), alt: z.string() })).default([]), // files in public/images/cases/<name>.webp
    quote: z.object({ text: z.string(), name: z.string() }).optional(), // only with the customer's written permission
  }),
});

export const collections = { guides, cases };
