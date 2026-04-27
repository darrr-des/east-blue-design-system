/**
 * frost-auth — standalone Google OAuth + JWT backend.
 *
 * Boot order:
 *   1. Load .env
 *   2. Validate required env vars early (fail-fast)
 *   3. Wire Express, CORS, JSON body parsing, the auth router
 *   4. Listen
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouter } from './auth.js';

// ── Required env validation ─────────────────────────────────────────────
const required = ['GOOGLE_CLIENT_ID', 'JWT_SECRET'];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`✖ Missing required env vars: ${missing.join(', ')}`);
  console.error('  Copy .env.example to .env and fill them in.');
  process.exit(1);
}

const PORT = parseInt(process.env.PORT || '3001', 10);
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '*')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

const app = express();

// ── CORS ────────────────────────────────────────────────────────────────
// Use '*' to allow any origin (dev/permissive mode); otherwise check the list.
app.use(
  cors({
    origin(origin, cb) {
      if (allowedOrigins.includes('*')) return cb(null, true);
      if (!origin) return cb(null, true); // same-origin / curl / server-to-server
      if (allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error(`CORS: origin "${origin}" not allowed.`));
    },
    credentials: true,
  })
);

// ── Body parsing ────────────────────────────────────────────────────────
app.use(express.json({ limit: '32kb' }));

// ── Routes ──────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'frost-auth', uptime: process.uptime() });
});

app.use('/auth', authRouter);

// ── 404 + error handlers (always JSON) ──────────────────────────────────
app.use((_req, res) => res.status(404).json({ error: 'Not found.' }));

app.use((err, _req, res, _next) => {
  console.error('[error]', err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal server error.' });
});

// ── Boot ────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  const origins = allowedOrigins.includes('*') ? '* (any)' : allowedOrigins.join(', ');
  const domains = process.env.ALLOWED_DOMAINS || '(none — open to any verified Google account)';
  console.log(`✓ frost-auth listening on http://localhost:${PORT}`);
  console.log(`  CORS origins:    ${origins}`);
  console.log(`  Allowed domains: ${domains}`);
});
