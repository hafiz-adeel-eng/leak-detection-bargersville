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

export const collections = { guides };
