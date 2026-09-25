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
- Colors and styles: `src/styles/global.css`
- AI images: see `public/images/README.md` for file names and prompts

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. After the first deploy, open Custom domains and add `www.leakdetectionbargersville.com` and `leakdetectionbargersville.com`.
4. Remove the old Namecheap parking/URL-forward records so the domain points to Pages.
5. Submit `https://www.leakdetectionbargersville.com/sitemap-index.xml` in Google Search Console.

## Contact form

The form posts to FormSubmit (formsubmit.co), which emails each request to the address in `site.email`.
The first submission triggers a one-time confirmation email from FormSubmit. Click the link in it to activate the form.
