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
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
      serialize(item) {
        if (lastmod[item.url]) item.lastmod = lastmod[item.url];
        return item;
      },
    }),
  ],
});
