# Pritika Camera Center Site

Modern Next.js website for Pritika Camera Center (Kathmandu, Nepal).

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production deploy (recommended: Vercel)

1. Push this project to GitHub.
2. Go to Vercel: `https://vercel.com/new`.
3. Import the repository.
4. Keep defaults:
   - Framework: Next.js
   - Build command: `next build`
   - Output: `.next`
5. Click Deploy.
6. Add your custom domain in `Project Settings -> Domains`.
7. In your domain provider DNS, set records exactly as Vercel asks.

After this, every push to `main` auto-deploys.

## Manual Node deployment (VPS or cloud VM)

```bash
npm install
npm run build
npm run start
```

This runs the production server on port `3000`.

## Basic quality checks

```bash
npm run lint
npm run build
```

## Quick content edits

- Homepage layout and sections: `app/page.tsx`
- Global styles: `app/globals.css`
- SEO metadata: `app/layout.tsx`

## Recommended next upgrades

1. Add real product photos in `public/` and connect sections to actual listings.
2. Add WhatsApp link and embedded map in the contact section.
3. Add multilingual content (English + Nepali).
4. Add analytics (Vercel Analytics or Google Analytics).
