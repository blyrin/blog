import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: z
        .object({
          image: image().optional(),
        })
        .optional(),
      draft: z.boolean().optional().default(false),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/notes" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: z
        .object({
          image: image().optional(),
        })
        .optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = { posts, notes };
