# Vivid Nexus — One-Page Boilerplate

A premium, modular, responsive one-page website template built with React + Vite + Tailwind CSS.
Designed to be reused across clients (agencies, cafes, clinics, studios, gyms) by editing **one config file** — no component code needs to change.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build (dist/)
npm run preview   # preview the production build
```

## How to reuse this for a new client

Everything you'd normally rewrite — brand name, nav links, hero copy, services,
pricing, testimonials, contact info, footer — lives in **one file**:

```
src/data/siteConfig.js
```

To ship "Acme Digital Agency" as "Royal Cafe" tomorrow:
1. Open `src/data/siteConfig.js`
2. Update the text fields (brand name, headline, services, pricing, etc.)
3. Swap the placeholder image block in `About.jsx` for a real photo if desired
4. `npm run build`

No component file should need to change for a standard content swap.

## Folder structure

```
src/
  components/     Reusable, presentational sections (Navbar, Hero, Services, ...)
  layouts/        Container.jsx — the fluid max-width wrapper used everywhere
  pages/          Home.jsx — composes components in order
  data/           siteConfig.js — single source of truth for all content
  assets/         images and static assets
  App.jsx         root component
  main.jsx        Vite/React entry point
  index.css       Tailwind directives + base/accessibility styles
```

## Design system

| Token   | Value      | Use                          |
|---------|-----------|-------------------------------|
| ink     | `#12141A` | Dark section backgrounds      |
| bone    | `#FAF7F1` | Light section backgrounds     |
| ember   | `#FF6B4A` | Primary accent / CTAs         |
| pine    | `#1F5F52` | Secondary accent              |
| slate   | `#5B6472` | Muted / secondary text        |

Fonts: **Sora** (display/headings), **Inter** (body), **JetBrains Mono** (stats, labels, eyebrows).

## Performance notes (sub-1s target)

- Only one runtime dependency beyond React: `react-icons` (tree-shaken, only used icons are bundled)
- No animation library — all motion is CSS transitions/keyframes via Tailwind
- `prefers-reduced-motion` is respected globally (see `index.css`)
- Fonts are loaded via `<link>` with `display=swap` to avoid render blocking
- Replace the placeholder image blocks with real, compressed (WebP/AVIF) images and add `loading="lazy"` to any `<img>` you add below the fold

## Known integration points (left intentionally open)

- **Contact form**: `src/components/Contact.jsx` currently just flips a local "sent" state on submit. Wire the `handleSubmit` function to your form backend (Formspree, a serverless function, etc.) before going live.
- **Images**: `About.jsx` uses a placeholder gradient block instead of a stock photo — drop a real image into `src/assets/images` and swap it in.

## Git workflow used for this task

```
feature/react-boilerplate
  chore: initialize project
  feat: add navbar
  feat: add hero section
  feat: add services, features, stats
  feat: add pricing, testimonials, faq
  feat: add cta, contact, footer
  chore: responsiveness pass
  chore: final polish + readme
```
