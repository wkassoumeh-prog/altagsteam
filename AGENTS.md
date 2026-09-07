## Framework

This project uses Astro with the React integration and the standalone Node adapter.
Routes live in `src/pages`, the shared document in `src/layouts/Layout.astro`,
and React components in `src/components`. Pages are prerendered; `/api/contact`
is rendered on demand. Read the current Astro documentation before changing
framework APIs or conventions.

## Images

Always set `quality={95}` on the shared `Image` component (photos, banners,
logos, maps). `scripts/prepare-images.mjs` generates responsive WebP assets at
quality 95 before development, checking, and builds. Preserve original assets
in `public`; do not commit generated images or their generated manifest.

## Interactivity

React components containing hooks or Framer Motion need an Astro `client:*`
directive at their top-level page boundary. Use `client:load` for the header
and hero, and `client:visible` for the contact area. Static sections, legal
pages, and the footer should render without client JavaScript.

## Validation

Run `npm run check`, `npm run lint`, `npm test`, and `npm run build` after
framework or functional changes. Keep contact tests isolated from real email
delivery and keep email credentials server-side.
After building, run `npm run test:smoke` to verify the production routes and assets.
