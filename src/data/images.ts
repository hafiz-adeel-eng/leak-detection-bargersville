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
