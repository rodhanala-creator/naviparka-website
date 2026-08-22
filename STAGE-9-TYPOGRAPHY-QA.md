# Stage 9 — Typography & Visual QA

This pass focuses on consistency with the current NaviParka Android app and fixes layout issues found after Stage 8.

## Typography
- Website now requests Poppins (400/500/600/700/800) and uses it across navigation, headings, body copy, buttons, forms and legal pages.
- Hero headings use real 700 weight rather than an inherited regular weight.
- Hero line-height and letter-spacing were relaxed to prevent awkward line breaks.
- Section headings, body copy and microcopy now use a consistent scale and readable line-height.

## Layout QA
- Wider desktop hero copy so “Know what to do.” stays together at common desktop widths.
- Reduced phone tilt and callout overlap.
- Cleaner tablet/mobile breakpoints.
- Mobile driver-context layout removes floating callouts that collided with phones.
- Inner page card contrast and paragraph colour corrected for light surfaces.
- Form focus states and support search improved.

## UX QA
- Cookie choice persists in localStorage and no longer reappears on every refresh.
- Cookie banner is smaller and less obstructive.
- Stale “Map services” status item replaced with “Payment service handoff.”
- Support contact copy no longer exposes implementation/developer wording.
- Google Play CTA uses Google’s standard badge artwork.

## Before public release
Replace the Google Play CTA destination with the real NaviParka Play Store listing when it is published. Final privacy/terms/cookie wording should be legally reviewed before launch.
