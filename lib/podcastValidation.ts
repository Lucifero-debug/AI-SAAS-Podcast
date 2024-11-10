import { z } from "zod";

export const podcastSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  desc: z.string().min(1, { message: "Description is required!" }),
  category:z.array(z.string()),
  podcastPrompt:z.string().min(10, { message: "Podcast Prompt is required!" }),
  thumbnailPrompt:z.string().min(10, { message: "Thumbnail Prompt is required!" }),
});

export type PodcastSchema = z.infer<typeof podcastSchema>;