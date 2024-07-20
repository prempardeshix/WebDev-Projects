import { z } from "zod";

export const postBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type PostBlogInput = z.infer<typeof postBlogInput>;

export const putBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type PutBlogInput = z.infer<typeof putBlogInput>;
