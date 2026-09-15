import { journalData } from "./journalData";

/**
 * Backwards-compatible homepage adapter.
 * The legacy journal dataset was removed; homepage cards now read from the
 * same 21-post CMS dataset used by /journal.
 */
export const journalPosts = journalData.map((post) => ({
  ...post,
  excerpt: post.metaDescription,
  image: post.hero,
}));

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
