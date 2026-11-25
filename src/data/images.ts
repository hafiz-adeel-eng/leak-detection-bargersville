import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

// Returns the public URL of /images/<name>.webp when the file exists, otherwise null.
// Drop AI-generated images into public/images/ and they appear on the next build.
// The ?v= suffix is a hash of the file, so a replaced image is never served stale from cache.
export function image(name: string): string | null {
  const file = join(process.cwd(), 'public', 'images', `${name}.webp`);
  if (!existsSync(file)) return null;
  const v = createHash('md5').update(readFileSync(file)).digest('hex').slice(0, 8);
  return `/images/${name}.webp?v=${v}`;
}

import keywords from './keywords.json';

type Kw = { kw: string; base: string };
const kwMap = keywords as Record<string, Kw>;

// Target keyword for a page path (see src/data/keywords.json and scripts/keyword-audit.py).
export const pageKeyword = (path: string): string | undefined => kwMap[path]?.kw;

export const kwSlug = (kw: string) =>
  kw.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// The page's lead image: /images/<keyword-slug>.webp (made by scripts/keyword-images.mjs from the page's
// base photo), with alt text that starts with the target keyword and then describes the photo.
export function pageImage(path: string, desc: string): { src: string; alt: string } | null {
  const k = kwMap[path];
  if (!k) return null;
  const src = image(kwSlug(k.kw));
  if (!src) return null;
  const d = desc.trim().replace(/\.$/, '');
  return { src, alt: `${k.kw}: ${d.charAt(0).toLowerCase()}${d.slice(1)}` };
}

// Default photo descriptions for each base image, used when a page has no alt text of its own.
export const baseAlt: Record<string, string> = {
  hero: 'technician with headphones listening for a buried water line leak with an acoustic ground microphone on a front lawn',
  'slab-leak-detection': 'technician listening through a tile floor with an acoustic ground microphone to pinpoint a leak under the slab',
  'underground-water-leak-detection': 'water escaping from a cracked buried pipe while a technician reads an acoustic leak detector',
  'hidden-water-leak-detection': 'technician checking a floor and cabinet with an acoustic sensor for a hidden plumbing leak',
  'thermal-imaging-inspection': 'technician holding a thermal camera that shows a cool moisture pattern on a water-stained wall',
  'pool-spa-leak-detection': 'technician lowering an underwater acoustic sensor into a backyard pool',
  'irrigation-leak-detection': 'technician using an acoustic detector beside an exposed sprinkler line leaking at a fitting',
};
export const pageBaseAlt = (path: string) => baseAlt[kwMap[path]?.base ?? 'hero'] ?? baseAlt.hero;
