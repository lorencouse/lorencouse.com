import {
  Frontmatter,
  FrontmatterWithDate,
  FrontmatterWithTags,
} from '@/types/frontmatters';

export function sortDateFn<T extends FrontmatterWithDate>(
  contentA: T,
  contentB: T
) {
  return (
    new Date(contentB.lastUpdated ?? contentB.publishedAt).valueOf() -
    new Date(contentA.lastUpdated ?? contentA.publishedAt).valueOf()
  );
}

export function sortByDate<T extends FrontmatterWithDate>(contents: Array<T>) {
  return contents.sort(sortDateFn);
}

export function sortTitleFn<T extends Frontmatter>(contentA: T, contentB: T) {
  return contentA.title.localeCompare(contentB.title);
}

export function sortByTitle<T extends Array<Frontmatter>>(contents: T): T {
  return contents.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  );
}

/**
 * Get tags of each post and remove duplicates
 */
export function getTags<T extends Array<FrontmatterWithTags>>(contents: T) {
  const tags = contents.reduce(
    (accTags: string[], content) => [...accTags, ...content.tags.split(',')],
    []
  );

  // Count occurrences of each tag
  const counts: Record<string, number> = {};
  for (const tag of tags) {
    counts[tag] = (counts[tag] || 0) + 1;
  }

  // Sort by count descending, return tag names
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
}
