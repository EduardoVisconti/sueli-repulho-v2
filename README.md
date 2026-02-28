# Sueli Repulho Landing Page (v2)

A premium one-page website for **Sueli Repulho**, focused on emotional transformation services, online sessions, social proof, and conversion through WhatsApp.

Built with modern Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Overview

This project is a conversion-oriented landing page that includes:

- A sticky navigation with smooth-scroll anchors
- Hero section with primary CTAs
- Professional bio and differentiators
- Service offering cards
- Testimonial carousel
- Ebooks/resources showcase
- Contact CTA section (WhatsApp-first)
- Footer with institutional links

The page is designed to be visually rich, mobile-friendly, and easy to maintain through centralized content files.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Styling:** Tailwind CSS v4 + global CSS rules
- **Animations:** Framer Motion
- **Images:** `next/image` optimized assets from `public/images`

## Project Structure

```text
.
+- app/
¦  +- layout.tsx          # Root layout, metadata, font setup
¦  +- page.tsx            # Main page composition
¦  +- globals.css         # Global styles and spacing hardening
+- components/
¦  +- layout/
¦  ¦  +- Navbar.tsx
¦  ¦  +- Footer.tsx
¦  +- sections/
¦     +- Hero.tsx
¦     +- About.tsx
¦     +- Services.tsx
¦     +- Testimonials.tsx
¦     +- Ebooks.tsx
¦     +- Contact.tsx
+- lib/
¦  +- data.ts             # Centralized static content + links
¦  +- animations.ts       # Shared motion variants
+- public/
   +- images/             # Brand and section assets
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Content Management

Most editable copy and business links live in:

- [`lib/data.ts`](./lib/data.ts)

You can update:

- WhatsApp number
- Instagram/site links
- Services
- Testimonials
- Ebooks
- Differentials

### WhatsApp links

The project uses helper functions to generate CTA URLs:

- `whatsappGeneral()` for generic booking CTA
- `whatsappUrl(service)` for service-specific intent messages

## Styling and Layout Notes

- Shared spacing and visual safeguards are defined in:
  - [`app/globals.css`](./app/globals.css)
- Section-level spacing resilience is handled with dedicated classes (`hero-*`, `services-*`, `ebooks-*`, `testimonials-*`, `footer-*`), plus targeted inline overrides for critical CTAs.
- This helps preserve layout consistency even when utility class output differs across environments.

## SEO and Metadata

Metadata is configured in:

- [`app/layout.tsx`](./app/layout.tsx)

Includes title, description, keywords, Open Graph fields, robots directives, and favicon.

## Accessibility and UX

Current implementation includes:

- Semantic section structure
- Keyboard-accessible buttons/anchors
- Descriptive image alt text
- Touch-friendly CTA targets
- Responsive layout for mobile and desktop

## Deployment

You can deploy on any Node-compatible platform.

### Vercel (recommended)

1. Import repository into Vercel
2. Keep default build settings (`npm run build`)
3. Deploy

## Troubleshooting

### Styles not updating

If you see stale CSS/layout:

```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

Then hard-refresh your browser (`Ctrl + F5`).

### Image framing artifacts in Hero

A mild zoom is already applied to the Hero portrait to avoid dark edge artifacts from source framing.

## Roadmap Ideas

- Add analytics events for CTA clicks
- Add form fallback in addition to WhatsApp
- Add CMS integration for content editing
- Add automated visual regression checks
- Add i18n support (PT/EN)

## License

Private project. All rights reserved.
