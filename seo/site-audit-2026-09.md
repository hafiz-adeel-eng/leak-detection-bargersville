# Site audit — September 2026

Audit of the built site (`dist/`, 34 pages): technical SEO, on-page, schema, internal links, content depth, cannibalization, AEO/GEO.
The live domain could not be crawled from the audit environment, so hosting checks (apex→www, HTTPS) are listed as manual steps.

## Fixed in code

| Area | Problem | Fix |
|---|---|---|
| Meta descriptions | All 17 guides were 174–222 characters and got cut off in results | Rewritten to 133–160 characters |
| Titles | Home (63), FAQ (76), Guides (66), Service area (62) were too long | All pages now 38–60 characters |
| Cannibalization | The "choose a company" guide targeted `leak detection company` and "near me" terms that belong to the homepage | Guide now targets `how to choose a leak detection company` and question-style terms |
| Redirects | Old `/areas/<town>-in/` URLs redirected to `/service-area/#town` (fragments are dropped by Google) | They now 301 to the dedicated town pages |
| Duplicate hosts | `*.pages.dev` copies of the site were indexable | `public/_headers` sends `X-Robots-Tag: noindex` on pages.dev hosts |
| Caching / security | No headers | Long cache for `/_astro/*` and `/images/*`; nosniff, referrer, frame and permissions headers |
| Open Graph | Every page shared the same image and `og:type=website` | Guides use `og:type=article`, their own image and published/modified times; service pages use their photo; Twitter title/description/image added |
| Schema | Business had no description or coordinates; contact page had no page type | Business `description` + `geo`; `ContactPage` on /contact/ |
| Sitemap | No `lastmod` | Guides carry `lastmod` from their `updated` date |
| Internal links | 5 guides had only 2–3 inbound links; homepage linked to 1 guide | Homepage guides section (6 guides), more guides per service page, stronger `related` lists, "Where we offer…" town links on every service page, useful links on 404. Every guide now has 4+ inbound links |

## Checked and fine

- 0 broken internal links, 0 broken anchors, every internal link uses the trailing slash.
- One H1 per page, no skipped heading levels.
- Canonical tags correct on every page; sitemap matches the built pages exactly; 404 is `noindex`.
- All images have alt text and width/height.
- JSON-LD parses on every page (Business, WebSite, Service, Article, FAQPage, BreadcrumbList, ItemList, WebPage).
- `robots.txt` allows search and AI crawlers; `llms.txt` lists services, guides and town pages.
- Content depth: guides 826–1,649 words, town pages ~1,400, service pages ~730–950. No thin indexable pages (contact is short by design).

## Needs the owner (can't be done in code)

1. **Real phone number.** `(317) 555-0199` is a placeholder and is in the schema on every page. Google treats fake NAP as a trust problem. Update `src/data/site.ts`.
2. **Google Business Profile.** The biggest local ranking factor. Create/verify it as a service-area business, then paste the URLs into `gbpUrl` and `gbpReviewUrl`.
3. **Merge to `main`** so Cloudflare Pages deploys these changes.
4. **Cloudflare:** add a redirect rule from `leakdetectionbargersville.com/*` to `https://www.leakdetectionbargersville.com/$1` (301), and turn on **Crawler Hints** (sends IndexNow pings to Bing/Yandex on change).
5. **Search Console + Bing Webmaster Tools:** submit `https://www.leakdetectionbargersville.com/sitemap-index.xml`, then request indexing for the homepage, service pages and town pages.
6. **Trust claims:** turn on `sameDay`, `emergency247` and `licensedInsured` in `site.ts` only when they are true.
7. **E-E-A-T:** an About page with the owner's name, experience and equipment, and real case studies in `src/content/cases/` (template in `seo/case-study-template.md`). Real job photos beat stock images.
8. **Citations and reviews:** list the business with the same name/phone on Yelp, BBB, Angi, Apple Maps and Bing Places, and ask every customer for a Google review.
