import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Returns the public URL of /images/<name>.webp when the file exists, otherwise null.
// Drop AI-generated images into public/images/ and they appear on the next build.
export function image(name: string): string | null {
  const file = join(process.cwd(), 'public', 'images', `${name}.webp`);
  return existsSync(file) ? `/images/${name}.webp` : null;
}
