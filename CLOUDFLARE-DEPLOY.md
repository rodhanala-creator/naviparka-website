# NaviParka Cloudflare deployment

This project is preconfigured for Cloudflare Workers using OpenNext.

## Cloudflare Build settings

- Production branch: `main`
- Root directory: `/`
- Build command: leave blank
- Deploy command: `npm run deploy`
- Non-production/Version command: `npm run upload`

The Worker name is fixed to `naviparka-website` in `wrangler.jsonc`.

Do not run automatic migration or generate another Wrangler config.
