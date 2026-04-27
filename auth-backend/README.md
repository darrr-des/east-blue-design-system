# frost-auth

Standalone authentication backend. **Google OAuth login + JWT sessions.** Reusable across any frontend.

- Node.js + Express
- Google Identity Services (token-verification flow)
- JWT for session tokens (no DB required)
- CORS enabled — any frontend can integrate

---

## Endpoints

| Method | Path | Auth | Body | Returns |
|---|---|---|---|---|
| `POST` | `/auth/google` | — | `{ idToken: string }` | `{ token, user }` |
| `GET` | `/auth/me` | JWT | — | `{ user }` |
| `POST` | `/auth/logout` | — | — | `{ ok: true }` |
| `GET` | `/health` | — | — | `{ ok, service, uptime }` |

The JWT carries: `googleId`, `email`, `name`, `picture`.

---

## Setup

### Requirements

- **Node.js v24.4.1 or higher**
- A Google Cloud OAuth Client ID

### 1. Install

```bash
cd auth-backend
npm install
```

### 2. Create a Google OAuth Client

1. Go to https://console.cloud.google.com/apis/credentials
2. Create a project (or select existing)
3. **Configure OAuth consent screen** (External, fill basic fields)
4. **Credentials → Create Credentials → OAuth client ID**
   - Application type: **Web application**
   - Authorized JavaScript origins: add the URLs of your frontend(s) — e.g. `http://localhost:4321`, `https://eb-ds.frostdesigngroup.com`
   - Authorized redirect URIs: not needed for the Google Identity Services flow
5. Copy the **Client ID** — paste into `.env`

### 3. Configure environment

```bash
cp .env.example .env
```

Edit `.env`:

```env
GOOGLE_CLIENT_ID=123456789-abc.apps.googleusercontent.com
JWT_SECRET=$(openssl rand -hex 64)
JWT_EXPIRES_IN=7d
PORT=3001
ALLOWED_DOMAINS=frostdesigngroup.com,gcash.com
ALLOWED_ORIGINS=http://localhost:4321,https://eb-ds.frostdesigngroup.com
```

`ALLOWED_DOMAINS` enforces an email-domain allowlist. Leave empty to accept any verified Google account. `ALLOWED_ORIGINS` controls which frontend origins can call this server (use `*` for fully open during dev).

### 4. Run

```bash
# dev mode — restarts on file change (Node 24 native --watch)
npm run dev

# production
npm start
```

Verify:

```bash
curl http://localhost:3001/health
# → {"ok":true,"service":"frost-auth","uptime":1.234}
```

---

## Integrating from a frontend (any framework)

The frontend uses **Google Identity Services** to obtain a Google ID token, then sends it to `POST /auth/google`. The backend returns a JWT (also set as an HttpOnly cookie).

### 1. Add the GIS script

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

### 2. Render the Sign in with Google button

```html
<div
  id="g_id_onload"
  data-client_id="YOUR_GOOGLE_CLIENT_ID"
  data-callback="onGoogleSignIn"
  data-auto_select="true">
</div>
<div class="g_id_signin" data-type="standard"></div>
```

### 3. Send the credential to the backend

```js
async function onGoogleSignIn(response) {
  const r = await fetch('https://auth.frostdesigngroup.com/auth/google', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ idToken: response.credential }),
  });

  if (!r.ok) {
    const err = await r.json();
    alert(`Login failed: ${err.error}`);
    return;
  }

  const { token, user } = await r.json();
  // Option A (cookie flow): nothing to store. The browser already has the cookie.
  // Option B (header flow): store the token and send it on requests.
  localStorage.setItem('auth_token', token);
  console.log('Signed in as', user.email);
  window.location.href = '/';
}
```

### 4. Call protected endpoints

Either via the cookie (no extra code — browser sends it):

```js
const r = await fetch('https://auth.frostdesigngroup.com/auth/me', {
  credentials: 'include',
});
const { user } = await r.json();
```

…or via the Authorization header:

```js
const r = await fetch('https://auth.frostdesigngroup.com/auth/me', {
  headers: { Authorization: `Bearer ${localStorage.getItem('auth_token')}` },
});
```

### 5. Sign out

```js
await fetch('https://auth.frostdesigngroup.com/auth/logout', {
  method: 'POST',
  credentials: 'include',
});
localStorage.removeItem('auth_token');
```

---

## Protecting your own routes

In any of your other backend services, verify the JWT:

```js
import jwt from 'jsonwebtoken';

const payload = jwt.verify(token, process.env.JWT_SECRET);
// payload = { googleId, email, name, picture, iat, exp }
```

Or for an Astro middleware, an `Express` middleware, etc. — the JWT is portable.

---

## Error responses

All errors are JSON: `{ "error": "<message>" }`.

| Status | When |
|---|---|
| `400` | Missing or malformed input (e.g. no `idToken` in body) |
| `401` | Invalid / expired JWT, or Google token failed verification |
| `403` | Email not verified or domain not on the allowlist |
| `404` | Unknown route |
| `500` | Server error (logged to stdout) |

---

## Deploy

The service is a single Node process — drop it on any host that runs Node 24+.

Common patterns:
- **Same server as your frontend** — run on a separate port, reverse-proxy behind nginx (`auth.frostdesigngroup.com → localhost:3001`).
- **Docker** — the dependencies are minimal; a `node:24-alpine` base + `npm ci && node src/server.js` is enough.
- **systemd / pm2** — keep the process running on reboot.

Always serve over HTTPS in production. The `auth_token` cookie sets `Secure` automatically when `NODE_ENV=production`.
