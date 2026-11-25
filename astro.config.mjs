import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

const site = 'https://www.leakdetectionbargersville.com';

// lastmod for guides comes from each guide's `updated` date, so search engines can see which articles changed.
const guideDir = './src/content/guides';
const lastmod = {};
for (const file of readdirSync(guideDir).filter((f) => f.endsWith('.md'))) {
  const src = readFileSync(`${guideDir}/${file}`, 'utf8');
  const updated = src.match(/^updated:\s*(\S+)/m)?.[1];
  const path = src.match(/^path:\s*"?([^"\n]+)"?/m)?.[1] ?? `/guides/${file.replace(/\.md$/, '')}/`;
  if (updated) lastmod[`${site}${path}`] = new Date(updated).toISOString();
}

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Pages outside Bargersville and nearby Johnson County towns are noindex, so they stay out of the sitemap too.
      filter: (page) =>
        !page.includes('/thank-you/') &&
        !page.includes('/404') &&
        !page.includes('/leak-detection/') &&
        !page.includes('/services/slab-leak-detection-and-repair-gainesville/') &&
        !page.includes('/services/gas-leak-detection-brighton/'),
      serialize(item) {
        if (lastmod[item.url]) item.lastmod = lastmod[item.url];
        return item;
      },
    }),
  ],
});
