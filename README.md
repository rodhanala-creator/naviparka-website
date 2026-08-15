# NaviParka Website

Production-oriented marketing website for NaviParka, built with Next.js, TypeScript and Tailwind CSS.

## Vibe-code workflow

You do not need to edit code manually. The intended workflow is:

1. Keep this project as the website source.
2. Replace the labelled `MOCKUP-*` device placeholders with real NaviParka app screenshots when available.
3. Connect beta/support forms to Supabase.
4. Add the real Google Play URL when the Android listing is live.
5. Run the production build and deploy through the chosen host.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production check

```bash
npm run build
```

## Main routes

- `/`
- `/how-it-works`
- `/features`
- `/parking-scanner`
- `/parking-map`
- `/vehicle-awareness`
- `/safety`
- `/download`
- `/beta`
- `/support`
- `/support/faq`
- `/support/contact`
- `/privacy`
- `/terms`
- `/cookies`
- `/accessibility`
- `/delete-account`
- `/status`

## Screenshot placeholders

The polished phone components currently stand in for real app screenshots. Search the project for `MOCKUP-` to locate each intended screenshot slot.

## Note

This environment was unable to complete `npm install`, so the final `next build` validation still needs to be run in a networked local or deployment environment before production release.
