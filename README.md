# The China Effect (Marketing + Guide)

Static marketing + ungated guide website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

- Dark theme (black background)
- Mobile-first (ideal for a TikTok bio link)
- No database
- No accounts
- No payments yet ("Buy Now" routes directly to the guide)

## Routes

- `/` — Landing / marketing page
- `/preview` — Preview (intro + sample workouts)
- `/guide` — Full guide (ungated)

## Getting Started

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

### Build

```bash
npm run build
npm start
```

## Where to edit content

### Theme tokens

- `src/theme/tokens.ts` — centralized style tokens (colors, spacing, typography, radii, shadows)

### Global styling

- `src/app/globals.css` — global dark theme + small utilities/animations

### Guide content

- `src/data/guideContent.ts` — guide sections + workout tables
  - Replace `TODO:` blocks with exact PDF text and keep the same section order.

### FAQ

- `src/data/faqData.ts`

### Testimonials

- `src/data/testimonialsData.ts`

## How PDF pages map to the website

Recommended approach:

1. Each PDF page (or spread) becomes a `GuideSection` inside `src/data/guideContent.ts`.
2. Use:
   - `type: 'text'` for paragraphs + callouts
   - `type: 'workout'` for workout days (tables)
3. Keep copy consistent with the PDF. Do not invent major claims.

## Components

Reusable components live in `src/components/`:

- Layout: `Section`, `Divider`, `DividerWithLabel`, `Footer`
- Typography: `Heading`, `Subheading`, `Paragraph`
- UI: `Button`, `Badge`, `Card`, `CalloutBox`
- Guide: `WorkoutTable`, `FAQ`, `ImagePlaceholder`

## Notes / TODO

- Add PDF-derived images into `public/` and replace `ImagePlaceholder` components.
- Add meta images + social preview image.
- Later: payment + gating.
