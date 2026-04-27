# East Blue Design System

Component assessment platform for the GCash Design System. Evaluates each Figma component against two dimensions:

- **DS Health** — structure, naming, reusability, consistency
- **Native Mobile Readiness** — SwiftUI + Jetpack Compose handoff readiness

Live: [eb-ds.frostdesigngroup.com](https://eb-ds.frostdesigngroup.com/)

## Repo layout

```
.
├── astro-site/                      Static documentation site (Astro)
│   ├── src/
│   │   ├── pages/                   File-based routes (/, /components, /eb-ds-assessment-guide, /login)
│   │   ├── components/              Astro components (Sidebar, AuthGate, SpecCard, …)
│   │   ├── layouts/                 Base (with sidebar) + Standalone (login only)
│   │   ├── lib/auth.ts              Frontend auth client
│   │   ├── data/components/         One <slug>.ts per component (typed ComponentData)
│   │   └── styles/global.css        Single stylesheet
│   ├── public/                      Static assets (fonts, images, scripts/assessment.js)
│   ├── scripts/                     Tooling
│   │   ├── audit/                   Coverage reports (audit-progress.mjs, audit-honest.mjs, …)
│   │   ├── fills/                   Historical one-shot data fillers
│   │   └── utils/                   Reusable utilities (migrate, snapshot)
│   ├── astro.config.mjs
│   └── package.json
│
├── auth-backend/                    Standalone auth service (frost-auth)
│   ├── src/
│   │   ├── server.js                Express app + boot
│   │   ├── auth.js                  POST /auth/google · GET /auth/me · POST /auth/logout
│   │   ├── middleware.js            JWT verification middleware
│   │   └── google.js                Google ID token verification + email-domain allowlist
│   ├── .env.example
│   ├── README.md                    Setup + frontend integration guide
│   └── package.json
│
├── eb-ds-assessment-guide.md        Methodology — source of truth (rendered at /eb-ds-assessment-guide)
├── benchmark.html                   Component roster benchmark snapshot (legacy reference)
└── _archive_legacy_site/            Soft-archived legacy assessment-src build (gitignored, local only)
```

## Quick start

### Prerequisites

- Node.js v24.4.1 or higher
- Google OAuth Client ID (see `auth-backend/README.md` step-by-step)

### Local dev

```bash
# 1. Astro frontend
cd astro-site
cp .env.example .env.local        # fill in PUBLIC_AUTH_BACKEND_URL + PUBLIC_GOOGLE_CLIENT_ID
npm install
npm run dev                        # → http://localhost:4321

# 2. Auth backend (separate terminal)
cd auth-backend
cp .env.example .env               # fill in GOOGLE_CLIENT_ID + JWT_SECRET
npm install
npm run dev                        # → http://localhost:3001
```

Open http://localhost:4321. The site redirects to `/login` if you haven't authenticated.

## Tech stack

| Concern | Choice |
|---|---|
| Frontend | Astro 5 (static, no SSR) |
| Auth | Standalone Express service + Google Identity Services + JWT |
| Styling | Single global CSS file with CSS custom properties (light/dark) |
| Deployment | Push to `main` → server pulls + rebuilds (CI/CD via `.github/workflows/main.yml`) |

## Coverage

```bash
node astro-site/scripts/audit/audit-progress.mjs
```

Current state: **79/79 components, 239/239 spec cards, 100%** complete (DES sections + DEV swift/compose).

## Contributing

Component data lives in `astro-site/src/data/components/<slug>.ts`. Each file exports a `ComponentData` object — see `astro-site/src/data/types.ts` for the schema.

Build:

```bash
cd astro-site
npm run build                      # → astro-site/dist/ (static HTML)
```

Deploy is automatic on push to `main`.

## Methodology

Full assessment guide rendered at `/eb-ds-assessment-guide`, source in `eb-ds-assessment-guide.md`.

## Authoring conventions

Operational rules — naming, components-grid layout, color tables, variant inventories, code snippet style — live in `CLAUDE.md`.
