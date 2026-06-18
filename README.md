# In The National Interest landing page

A cinematic, responsive one-page website for the feature film *In The National
Interest*. The site introduces the film's premise, themes, visual direction,
and production contact information.

## Tech stack

- Vite
- React
- Plain CSS

## Install dependencies

Requires a current Node.js LTS release and npm.

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Vite will print the local development URL, typically
`http://localhost:5173`.

## Build for production

```bash
npm run build
```

The optimized production site is generated in `dist/`. To inspect that build
locally, run:

```bash
npm run preview
```

## Cloudflare Pages deployment

Deployment is handled through Cloudflare Pages:

1. Connect the GitHub repository to a Cloudflare Pages project.
2. Select the Vite framework preset, or configure the build manually.
3. Set the build command to `npm run build`.
4. Set the build output directory to `dist`.
5. Deploy from the production branch configured in Cloudflare Pages.

Cloudflare Pages installs dependencies and runs the production build whenever
the configured branch receives a new commit. Pull-request and non-production
branches can also receive preview deployments when enabled in the Cloudflare
Pages project settings.

No runtime environment variables are currently required.

## Placeholder content

Before the public launch, review and replace:

- `production@example.com` with the production team's real contact address.
- CSS-generated visual-world panels with approved film stills or key art, if
  final assets become available.
- Development-status wording, production details, and the footer year as the
  project evolves.
- Social-sharing metadata with a canonical production URL and approved preview
  image once the domain and artwork are finalized.
