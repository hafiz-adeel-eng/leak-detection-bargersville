// Makes each page's lead image, named after its target keyword: public/images/<keyword-slug>.webp.
// Source photos are the base images in public/images/ (keywords.json -> base). Each output gets its own
// crop so the files are not byte-identical copies. Run: node scripts/keyword-images.mjs
import sharp from 'sharp';
import { readFileSync, existsSync } from 'node:fs';

const kws = JSON.parse(readFileSync('src/data/keywords.json', 'utf8'));
const slug = (kw) => kw.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
let i = 0, made = 0;
for (const [path, { kw, base }] of Object.entries(kws)) {
  const out = `public/images/${slug(kw)}.webp`;
  i++;
  if (existsSync(out) && !process.argv.includes('--force')) continue;
  const src = `public/images/${base}.webp`;
  const { width, height } = await sharp(src).metadata();
  // Crop 88-96% of the frame at a position that varies by page.
  const scale = 0.88 + ((i * 7) % 9) / 100;
  const w = Math.round(width * scale), h = Math.round(w * 9 / 16);
  const hh = Math.min(h, height);
  const left = Math.round((width - w) * (((i * 37) % 100) / 100));
  const top = Math.round((height - hh) * (((i * 53) % 100) / 100));
  await sharp(src).extract({ left, top, width: w, height: hh }).resize(1200, 675, { fit: 'cover' })
    .webp({ quality: 74 }).toFile(out);
  made++;
  console.log(path, '->', out);
}
console.log(`${made} images written`);
