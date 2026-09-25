import type { CollectionEntry } from 'astro:content';

export function guideUrl(g: CollectionEntry<'guides'>) {
  return g.data.path ?? `/guides/${g.id}/`;
}
