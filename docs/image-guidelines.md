# Homepage image rules

Use `PhotoFrame` for photographic panels. It renders through Next Image without
adding a client boundary, with quality 95 and lazy loading by default. Always
provide an accurate `sizes` value. Shared slot calculations live in `imageSizes.ts`.

- `standard`: 4:3, 24px corners. Welcome, About, Pflegebox, Financing, Careers,
  and the consultation/enquiry photos.
- `card`: 16:9, clipped by the service card's 16px outer corners.
- `banner`: 16:10 below 640px, 16:9 from 640px, 21:9 from 1024px; 24px corners.
- `portrait`: 4:5, 24px corners; contact photo remains hidden below 1024px.
- Hero stays separate: full width, minimum 100dvh, existing responsive focal
  positions/overlays, eager loading and high fetch priority, `sizes="100vw"`.

The five main split sections have equal columns from 1024px, a 56px gap and
vertical centring. Below 1024px they use one column and a 32px gap. Preserve the
outer Tailwind container and 24px horizontal padding. Recalculate image-size
hints if container widths, padding, grid proportions or gaps change. Browser
scrollbars can make the actual slot slightly narrower than the hint.

Photographs use cover without stretching or transform-based insets. Captions
sit outside the frame. Standalone frames have no shadow. Focal positions:
Welcome 100%/50% to preserve the vase, cup and towels at the right edge;
Financing 50%/38%, Careers 80%/50%; About and Pflegebox centred.
The hero, team and contact retain their existing focal positions.

Maps and logos use contain, preserve their proportions and are never put in a
photo frame. The main map is a deliberate exception: its 5:4 frame is enlarged
1.35× on phones and 1.5× from 640px. A soft mask and edge gradients blend the
artwork into the section background; preserve this large, integrated treatment.
Reserve 32px above and below the map (48px from 640px), with no upward
translation. Vertical edge fades cover only the outer 4% of this padded area
so the northern and southern outlines remain visible.
Decorative images use empty alt text; informative images describe what they
communicate rather than repeating section headings.

## Verification and limitations

Checked at viewport widths 390, 768, 1024 and 1440px. Standard desktop photo
slots at 1440px measure 588 × 441 CSS pixels; the phone slots measure about
327 × 245 with the test browser's scrollbar. The mobile service rail remains
scrollable; team text moves below its banner and the contact photo stays hidden.

All original assets are retained. Welcome now uses the generated `home.png`
(1672 × 941 pixels). Pflegebox and Careers are only 1024 × 576 pixels;
About is 1194 × 672. Cropping these landscape originals to
4:3 limits detail on high-density displays. Quality 95 does not add source
detail. Production requests for a 1200px version of a 1024px original return
the original's maximum width rather than an enlarged raster. A separate
portrait source would improve the tall mobile hero, but is outside this change.

Application lint, TypeScript and production build pass. Production smoke
checks return 200 for the homepage, both legal pages, and all 19 distinct
rendered image URLs. Repository-wide lint also inspects leftover `.astro`/`dist`
output and the existing `scripts/convert-logo.cjs`; those have unrelated errors.
