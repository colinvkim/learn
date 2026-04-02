import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const courses = defineCollection({
  loader: glob({
    base: "./src/content/courses",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["draft", "published"]),
    sortOrder: z.number().int().nonnegative(),
    topics: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([]),
  }),
});

const lessons = defineCollection({
  loader: glob({
    base: "./src/content/lessons",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    course: reference("courses"),
    order: z.number().int().positive(),
    status: z.enum(["draft", "published"]),
  }),
});

export const collections = { courses, lessons };
