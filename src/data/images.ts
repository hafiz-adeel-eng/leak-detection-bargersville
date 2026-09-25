import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Returns the public URL of /images/<name>.webp when the file exists, otherwise null.
// Drop AI-generated images into public/images/ and they appear on the next build.
// The ?v= suffix changes whenever the file changes, so a replaced image is never served stale from cache.
export function image(name: string): string | null {
  const file = join(process.cwd(), 'public', 'images', `${name}.webp`);
  if (!existsSync(file)) return null;
  const v = Math.floor(statSync(file).mtimeMs).toString(36);
  return `/images/${name}.webp?v=${v}`;
}
