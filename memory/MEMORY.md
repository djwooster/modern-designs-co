# Modern Designs Co — Session Memory

## Project
Marketing/portfolio site. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion v12, shadcn/ui.

## Color Palette (updated 2026-02-23)
- **Primary**: `oklch(0.45 0.20 232)` — deep ocean blue (was terracotta `oklch(0.47 0.11 32)`)
- **Primary foreground**: `oklch(0.98 0.004 220)` — cool white for button text
- **Background/cards/borders**: unchanged (warm cream/beige tones)
- **Ring**: matches primary `oklch(0.45 0.20 232)`
- Button radius: `rounded-lg` (was `rounded-full`) — medium rounding

## Key Files
- `app/page.tsx` — composes all page sections
- `app/globals.css` — all CSS variables (OKLch color tokens, border radius)
- `components/fade-in.tsx` — shared `FadeIn`, `FadeInStagger`, `staggerItem` animation utilities
- `components/animated-cta.tsx` — animated arrow CTA button
- `CLAUDE.md` — full project guide created 2026-02-23

## Conventions
- Tailwind v4 canonical classes: `shrink-0` (not `flex-shrink-0`), `bg-linear-to-br` (not `bg-gradient-to-br`), `aspect-16/9` (not `aspect-[16/9]`), `max-w-350` (not `max-w-[1400px]`), `max-w-375` (not `max-w-[1500px]`)
- Standard easing: `[0.21, 0.47, 0.32, 0.98]`
- Content max-width: `max-w-350` for sections, `max-w-375` for nav
- Padding: `px-6 lg:px-24`

## Known TODOs (not yet done)
- Contact form needs real email API (currently uses `setTimeout` placeholder) — wire up `/api/contact` route
- Services section shows one image for website design (Unsplash placeholder); could be updated with real project screenshots
- `components/why-us.tsx` and `components/process.tsx` exist but are not rendered — ready to add back to `app/page.tsx` when needed

## Cleanup Done (2026-02-23)
- Removed all commented-out code across all files
- Removed unused imports (Badge from hero, productDesign/AnimatePresence/Code2/LayoutGrid/BadgeCheck from services)
- Fixed typo: "Low stres" → "Low stress" in pricing.tsx
- Fixed cal.com placeholder: `YOUR_CAL_LINK` → `djwooster` in hero.tsx
- Removed "Process" link from footer (section not active)
- Removed WhyUs/Process imports from page.tsx
- Fixed all Tailwind v4 canonical class warnings project-wide
- Created CLAUDE.md
