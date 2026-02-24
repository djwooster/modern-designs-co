# Modern Designs Co — Claude Instructions

## Project Overview

Marketing/portfolio site for a boutique design studio. Built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and shadcn/ui components.

## Dev Commands

```bash
npm run dev       # Start dev server (uses --webpack flag)
npm run build     # Production build
npm run lint      # Run ESLint
```

## Architecture

- **`app/`** — Next.js App Router. `layout.tsx` sets fonts & metadata; `page.tsx` composes all sections.
- **`components/`** — One file per section (hero, nav, services, work, pricing, about, contact, footer). Shared utilities: `fade-in.tsx`, `animated-cta.tsx`, `hero-device.tsx`.
- **`components/ui/`** — shadcn/ui primitives (button, input, textarea, select, label, badge, card, separator). Do not modify these directly; use the `shadcn` CLI to update.
- **`lib/utils.ts`** — Single `cn()` helper using `clsx` + `tailwind-merge`.

## Key Conventions

### Styling
- **Tailwind CSS v4** — use canonical class names (e.g. `shrink-0` not `flex-shrink-0`, `bg-linear-to-br` not `bg-gradient-to-br`, `aspect-16/9` not `aspect-[16/9]`).
- Design tokens come from CSS variables defined in `app/globals.css` (OKLch color space). Always prefer `var(--foreground)` / `text-primary` / `bg-background` over hardcoded colors.
- Max content width: `max-w-350` (≈1400px) for most sections, `max-w-375` (≈1500px) for the nav.
- Consistent horizontal padding: `px-6 lg:px-24`.

### Animations
- Standard easing: `[0.21, 0.47, 0.32, 0.98]` — used consistently across components.
- Scroll-triggered reveals: use `FadeIn` / `FadeInStagger` from `components/fade-in.tsx` rather than writing inline `useInView` logic.
- Always pass `aria-hidden` to decorative animated elements.

### Components
- All section components are `"use client"` (Framer Motion requires it).
- `app/layout.tsx` and `app/page.tsx` are Server Components — keep them free of client-only APIs.
- CTA buttons with the animated arrow: use `AnimatedCTA` from `components/animated-cta.tsx`.
- Pricing cards data is in `components/pricing.tsx` at the top of the file in the `plans` array.

### Fonts
- Body / UI: Geist Sans (`var(--font-geist-sans)`, applied via `font-sans`)
- Branding / nav / mobile menu: Lato (`var(--font-lato)`, applied inline via `style={{ fontFamily: "var(--font-lato)" }}`)

## Important Links & Config

- **Cal.com booking**: `https://cal.com/djwooster` — used in hero and contact sections.
- **Contact form**: Currently uses a simulated delay (`setTimeout`). Wire up to an email API (e.g. Resend) by implementing a `/api/contact` route and replacing the `setTimeout` in `components/contact.tsx`.
- **Images**: Remote images from `images.unsplash.com` are allowlisted in `next.config.ts`. Local project images live in `/public/`.

## Active Page Sections (in order)

Nav → Hero → Services → Work → Pricing → About → Contact → Footer

> `components/why-us.tsx` and `components/process.tsx` exist but are not currently rendered. They are complete and can be re-added to `app/page.tsx` when needed.

## shadcn/ui

Config is in `components.json`. To add new components:

```bash
npx shadcn add <component>
```

Style: `new-york`, base color: `neutral`, CSS variables enabled.
