import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number().int().positive(),
    company: z.string(),
    listTitle: z.string(),
    subtitle: z.string(),
    previewFocus: z.string(),
    previewBg: z.string(),
    previewFg: z.string(),
    published: z.boolean(),
    headline: z.string().optional(),
    dek: z.string().optional(),
    description: z.string().optional(),
    ctaTitle: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
  }),
});

const explorations = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/explorations' }),
  schema: z.object({
    order: z.number().int().positive(),
    published: z.boolean(),
    listTitle: z.string(),
    listMeta: z.string(),
    title: z.string(),
    description: z.string(),
    dek: z.string(),
    type: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string(),
    sourceUrl: z.url().optional(),
    ctaTitle: z.string(),
    ctaBody: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
  }),
});

export const collections = { work, explorations };
