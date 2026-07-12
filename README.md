# balaganesansr.me - Portfolio

Immersive single-page portfolio for **Balaganesan SR** - Mobile & Full Stack
Developer. Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4,
Framer Motion, Lenis smooth scroll, React Three Fiber (hero particle field).

Every word of content lives in `constants/content.ts` and is sourced from the
real portfolio, biodata and shipped products - nothing invented.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/          layout, page, error/loading/404, sitemap, robots, manifest, icon
components/   nav, motion primitives (Reveal, Magnetic, Counter), providers
features/     hero, journey, products (apps), work (web), skills, contact
constants/    content.ts - single source of truth for ALL copy and data
types/        content model types
```

## The five acts

1. **Introduction** - WebGL particle depth field, cursor spotlight, gradient
   typography, live stats
2. **Engineering Journey** - scroll-driven timeline with progress spine
   (2023 internships → Quix Graphix → OneYes → ZedIndex → education)
3. **Products** - 7 Play Store apps, each with a stylised phone motif
   (deliberately not screenshots) and its real store link
4. **Client Work + Expertise** - live-linked web projects; skills as a
   rotating constellation where every node maps to shipped work
5. **Let's Build Together** - typewriter destinations, magnetic contact links

## Performance & accessibility

- Fully static prerender; first load JS ~188 kB, three.js chunk lazy-loaded
  client-side only
- `prefers-reduced-motion` respected globally (Lenis, Framer variants, CSS)
- Semantic landmarks, aria-labels, keyboard-focusable constellation nodes,
  `aria-live` skill detail panel

## Deploy (Vercel)

```bash
npx vercel
```

Then point `balaganesansr.me` DNS at Vercel (CNAME `cname.vercel-dns.com`).

## Updating content

Edit `constants/content.ts` only - sections render from it. Add a new app to
`APPS`, a new chapter to `JOURNEY`, a new project to `WEB_PROJECTS`.
