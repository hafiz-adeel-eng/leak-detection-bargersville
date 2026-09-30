# Leak Detection Bargersville

Website for www.leakdetectionbargersville.com, built with [Astro](https://astro.build) as a static site.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Edit content

- Business details (name, phone, email): `src/data/site.ts` → `site`
- Services, service areas and FAQs: `src/data/site.ts`
- Town pages (`/service-area/<town>/`): `src/data/locations.ts`
- Colors and styles: `src/styles/global.css`
- AI images: see `public/images/README.md` for file names and prompts

## Deploy on Cloudflare (Workers Builds)

The repo is connected to a Cloudflare Worker named `leak-detection-bargersville`. `wrangler.jsonc` holds the config:

- `build.command` runs `npm run build` before every deploy, so no build command is needed in the dashboard.
- `assets.directory` uploads `dist/` as static assets; `_redirects` and `_headers` in `public/` are applied.
- `previews: {}` lets non-production branches run `npx wrangler preview`.

Pushes to `main` deploy to production. Custom domains: `www.leakdetectionbargersville.com` and `leakdetectionbargersville.com`.
Submit `https://www.leakdetectionbargersville.com/sitemap-index.xml` in Google Search Console.

## Contact form

The form posts to FormSubmit (formsubmit.co), which emails each request to the address in `site.email`.
The first submission triggers a one-time confirmation email from FormSubmit. Click the link in it to activate the form.
