# Securing the East Blue Design System Assessment Site

**Prepared by:** Frost Design Group · **For:** GCash IT/Security · **Date:** April 2026
**Site (current):** https://darrr-des.github.io/east-blue-design-system/
**Target:** Replace the current client-side JS login gate with real authentication via Cloudflare Access (Zero Trust), gated behind a GCash-owned domain.

## Ownership model

This recommendation assumes the assessment site is **owned by GCash** (custom domain + access policy). Frost continues to **maintain content** (the assessment HTML + markdown) on its existing GitHub repo. GCash IT/Security takes over auth gating in front of the site.

| Responsibility | Owner | Notes |
|---|---|---|
| Domain registration + DNS | **GCash** | e.g. `ds.gcash.com` or `design-review.gcash.com` |
| Cloudflare account + Access policy | **GCash IT/Security** | Free Zero Trust tier supports up to 50 users |
| Identity provider (Email OTP / Okta / Azure AD / etc.) | **GCash** | Use whatever matches GCash's existing corporate IdP |
| Allowlist of NDA-cleared emails | **Frost + GCash jointly** | Both teams curate the per-individual list — NOT a blanket `@gcash.com` allow |
| Audit log review | **GCash IT/Security** | Cloudflare Zero Trust dashboard provides per-user access logs |
| Site hosting (GitHub Pages) | **Frost** (interim) | Or migrate repo to a GCash-owned org once handed over |
| Content updates (assessment HTML) | **Frost** | Continues via PR/commit workflow on the GitHub repo |

---

## TL;DR

The current login is **theater, not security**. The entire site is publicly served by GitHub Pages — anyone with the URL can view all content regardless of the JS "login" screen.

**Recommended fix:** Put Cloudflare Access in front of the site. Users enter their email → receive a 6-digit code → only authorized emails can view the content. Unauthorized requests never reach the browser.

- **Cost:** $0 (Cloudflare Zero Trust free tier covers up to 50 users)
- **Setup time:** ~20 minutes
- **Maintenance:** Admin adds/removes emails from an allowlist in the Cloudflare dashboard

---

## Why the current login gate isn't enough

| Current state | Problem |
|---|---|
| Static site on GitHub Pages (public) | Entire site HTML, CSS, JS is downloadable by anyone with the URL |
| Login gate runs in JavaScript after page load | `checkAuth()` can be bypassed via browser devtools, view-source, curl, or setting `localStorage eb_auth` manually |
| Any password accepted for allowed email domains | No real credential verification |
| No audit log | No visibility into who accessed what, or when |

For an NDA-covered design system assessment shared with clients, this gap is significant.

---

## Why Cloudflare Access

- **Gates content at the CDN level** — unauthenticated users don't receive the HTML; CF serves them a login page instead
- **Email-based OTP** — no passwords to manage; users receive a 6-digit code on request
- **Allowlist by domain or email** — fine-grained control over who can access
- **Free for teams ≤ 50 users**
- **Session-based** — 24-hour auth cookie (configurable)
- **Audit trail** — every auth event logged in the Cloudflare dashboard
- **No code changes required** — works with the existing static site

---

## Auth flow diagram

```
┌─────────────┐                ┌──────────────────┐               ┌──────────────┐
│             │   1. Visit     │                  │               │              │
│    User     │ ───────────────►│  ds.domain.com   │               │  GitHub      │
│             │   (browser)    │    (Cloudflare)  │               │  Pages       │
└─────┬───────┘                └────────┬─────────┘               └──────────────┘
      │                                 │
      │                                 │ 2. Check for valid
      │                                 │    CF_Authorization cookie
      │                                 │
      │                                 ▼
      │                        ┌──────────────────┐
      │                        │ Has valid auth?  │
      │                        └──┬────────────┬──┘
      │                           │            │
      │               NO          │            │         YES
      │              (unauth)     │            │       (authed)
      │                           ▼            ▼
      │                 ┌─────────────────┐  ┌──────────────────────┐
      │                 │  Show CF Access │  │ Proxy request to     │
      │                 │  login screen   │  │ GitHub Pages         │
      │                 └─────┬───────────┘  └────────┬─────────────┘
      │                       │                       │
      │    3. Enter email     │                       │
      ◄───────────────────────┤                       │
      │                       │                       │
      │  4. Submit email      │                       │
      ├──────────────────────►│                       │
      │                       │                       │
      │                       │ 5. Check allowlist    │
      │                       │    (frost.com, gcash  │
      │                       │    .com, others)      │
      │                       │                       │
      │                       │ 6. If allowed,        │
      │                       │    email 6-digit      │
      │                       │    OTP code to user   │
      │                       │                       │
      │  7. Receive email     │                       │
      ◄───────────────────────┤                       │
      │                       │                       │
      │  8. Enter OTP code    │                       │
      ├──────────────────────►│                       │
      │                       │                       │
      │                       │ 9. Verify OTP         │
      │                       │    Set session cookie │
      │                       │    (24h expiry)       │
      │                       │                       │
      │  10. Redirect to      │                       │
      │      original URL     │                       │
      ◄───────────────────────┤                       │
      │                       │                       │
      │  11. Now authed,      │                       │
      │      see content ─────┼──────────────────────►│ Serves HTML/CSS/JS
      │                       │                       │
      ▼                       ▼                       ▼
```

---

## Pre-setup checklist (for GCash IT)

Before starting, confirm these with GCash IT/Security:

- [ ] **Domain selection** — what subdomain on a GCash-owned domain? (e.g. `ds.gcash.com`, `design-review.gcash.com`)
- [ ] **DNS admin** — who at GCash can add the CNAME record on that domain?
- [ ] **Identity provider preference** — Email OTP (simplest, no setup), or hook into GCash's existing corporate SSO (Okta / Azure AD / Google Workspace)?
- [ ] **NDA-cleared allowlist** — Frost and GCash jointly produce a per-individual email list. Examples:
  - Specific Frost designers/researchers on the engagement
  - Specific GCash design + engineering reviewers
  - **Not** the full `@gcash.com` or `@frostdesigngroup.com` domains
- [ ] **Cloudflare account ownership** — which GCash team manages it? (likely IT or InfoSec)
- [ ] **Audit retention** — does GCash compliance need access logs > 24 hours? (free tier is 24h; paid Zero Trust adds 30+ days)
- [ ] **Session duration policy** — per GCash's standard for confidential tools (24h is typical, can be shorter)

---

## Setup steps

### Part A — Cloudflare account (5 min)

1. Sign up at [cloudflare.com](https://cloudflare.com) using the admin's email
2. Add your domain (e.g. `frostdesigngroup.com`) — select the **Free** plan
3. Cloudflare scans existing DNS records and imports them
4. Cloudflare provides 2 nameservers (e.g. `ada.ns.cloudflare.com`, `bob.ns.cloudflare.com`)
5. Log in to your domain registrar (where you bought the domain) and replace the existing nameservers with the 2 Cloudflare ones
6. Wait for propagation — usually under 1 hour, can take up to 24
7. Cloudflare dashboard will show "Active" status when ready

### Part B — Point the subdomain to GitHub Pages (5 min)

1. In Cloudflare dashboard → **DNS** → **Records** → **Add record**
   - Type: `CNAME`
   - Name: `ds` (or your chosen subdomain)
   - Target: `darrr-des.github.io`
   - Proxy status: **Proxied** (orange cloud — important!)
   - TTL: Auto
2. In the GitHub repo (`east-blue-design-system`) — **Settings → Pages → Custom domain** → enter `ds.frostdesigngroup.com`
3. Add a `CNAME` file to the repo root containing just the custom domain on a single line:
   ```
   ds.frostdesigngroup.com
   ```
4. Commit and push
5. In GitHub Pages settings, check "Enforce HTTPS" once the cert is provisioned (may take 5-15 min)

### Part C — Enable Cloudflare Access (10 min)

1. In Cloudflare dashboard → left sidebar → **Zero Trust**
2. First time: create a team name (e.g. `gcash-ds`) — this becomes your login URL: `gcash-ds.cloudflareaccess.com`
3. Choose the **Free** plan (up to 50 users)
4. Go to **Access → Applications → Add an Application → Self-hosted**
5. Fill in:
   - **Application name:** `EB Design System Assessment`
   - **Session duration:** `24 hours` (or per GCash policy)
   - **Application domain:** `ds.gcash.com` (the subdomain you set up)
6. Click **Next**
7. **Identity Providers** — pick one:
   - **One-time PIN (Email OTP)** — simplest, zero config, code sent to user's inbox
   - **Okta / Azure AD / Google Workspace** — if GCash wants single sign-on with their corporate IdP (requires GCash IT to provide IdP credentials)
8. Click **Next** → configure policy:
   - **Policy name:** `NDA-cleared reviewers`
   - **Action:** Allow
   - **Rules** (click "Add include") — use **per-individual emails** (NDA list), NOT domain-wide:
     - Rule: Selector = **Emails**, Value = list of approved emails (Frost + GCash, only those NDA-cleared)
     - Optional: Rule for **Emails ending in** = `@frostdesigngroup.com` if you want the entire Frost team (only if all are NDA-cleared)
9. Save the application

**Important:** because of the NDA, prefer the per-individual email rule over a domain-wide rule. This way only specifically authorized people get in, even if someone joins/leaves either team.

### Part D — Test (2 min)

1. Open an incognito/private browser window
2. Navigate to `ds.frostdesigngroup.com`
3. Expected: Cloudflare Access login screen appears (not the GitHub Pages site)
4. Enter your allowed email → receive a 6-digit code in your inbox
5. Enter code → redirected to the design system site
6. **Test rejection:** try `test@gmail.com` → should be blocked with a "Not allowed" message

### Part E — Remove the legacy JS login gate (optional)

Once Cloudflare Access is verified working, the in-page JS login gate is redundant. Remove it:

1. In `index.html` — delete the `<div class="login-screen">...</div>` block
2. Remove the `checkAuth()` call and login-related JS functions
3. In `assessment-src/shell.html` — same cleanup
4. Rebuild: `node assessment-src/build.js`
5. Commit and push

Keeping it won't break anything, but it's cleaner to remove since CF Access now provides the real auth layer.

---

## Post-setup operations

### Adding a new user
1. Cloudflare Zero Trust → Access → Applications → "EB Design System Assessment" → Edit
2. Navigate to the policy → add the new email to Rule 3 (or a new rule)
3. Save. User can now authenticate.

### Removing a user
1. Same path as above → remove the email entry
2. Save. The user's session cookie remains valid until it expires (24h), so they may still have access for up to 24 hours. To force immediate revocation: Cloudflare Zero Trust → Access → **Revoke sessions** → select user.

### Viewing audit logs
1. Cloudflare Zero Trust → **Logs → Access** — shows every successful and failed auth attempt
2. Filter by user, application, time range
3. Export as CSV if needed for NDA compliance reporting

### Changing session duration
1. Application settings → change **Session duration** (options: 15 min, 30 min, 1h, 6h, 12h, 24h, 7 days, 30 days)
2. Shorter = more secure, more friction. 24h is a good default for internal review sites.

---

## Pricing and limits

### Free tier (what we're using)
- Up to **50 users** across all applications
- **Unlimited apps** (we only need 1)
- Email OTP, Google SSO, GitHub SSO, GitLab, LinkedIn included
- 24-hour audit log retention

### If you exceed 50 users
- **Pay-as-you-go Zero Trust:** $3/user/month beyond 50
- Or: segment access by project (separate Cloudflare teams per client)

### When you'd need a paid tier
- Need SAML/OIDC for corporate SSO (Okta, Azure AD) → $7/user/month
- Need long-term audit retention (90+ days) → higher tiers
- Need posture checks (device certs, MFA enforcement at org level) → Enterprise

For the current assessment use case, the **free tier is sufficient**.

---

## Troubleshooting

### "The cert for ds.frostdesigngroup.com is not valid"
- GitHub Pages hasn't finished provisioning the TLS cert. Wait 15 minutes. If it persists, make sure the `CNAME` file exists in the repo root with only the domain name, and the Cloudflare DNS record is **Proxied** (orange cloud).

### "User enters correct email but never receives OTP code"
- Check the user's spam folder
- Make sure the Cloudflare team name isn't blocklisted in the user's email filter
- Verify in Cloudflare Zero Trust → Logs → Access that the attempt was recorded

### "I logged in but see a blank page"
- Most likely GitHub Pages still has the old DNS cached. Clear browser cache, try incognito.
- Check the CNAME record in Cloudflare is `Proxied` (orange cloud), not DNS-only

### "I want to test Cloudflare Access without changing the real domain"
- Register a cheap throwaway domain (e.g. `ds-test.cheapdomain.com`) first
- Run the full setup there to validate
- Then switch to the real domain

---

## Comparison to alternatives

| Option | Cost | Setup time | Self-serve enrollment | Audit log | Suits us? |
|---|---|---|---|---|---|
| **Cloudflare Access** (recommended) | Free | 20 min | Admin allowlist + email OTP | ✅ | ✅ |
| Netlify + Netlify Identity | Free tier | 30 min | Email/password + OAuth | Limited | Would require migrating off GH Pages |
| Vercel Password Protection | $20/mo (Pro) | 5 min | Single shared password | ❌ | ⚠️ No per-user auth |
| Firebase Auth + Firebase Hosting | Free tier | 1-2 hours | Full OAuth + email | Via GCP | ⚠️ Overkill, more code |
| GitHub Pages private repo | Free | Instant | Requires GH account per user | GitHub native | ⚠️ Viewers need GitHub accounts |

---

## Summary

**Recommendation:** Proceed with **Cloudflare Access**.
- Free for our use case (≤ 50 users)
- 20-minute setup
- Real security (content-level gating, not JS theater)
- Email OTP — no password management
- Maintained by admin via a simple allowlist in the CF dashboard

**After setup:**
- Users visit `ds.frostdesigngroup.com` → email OTP flow → 24h session
- Admin adds/removes emails as client engagements start/end
- Audit log available for NDA compliance reporting

Ready when you are.

---

_Document maintained in `/docs/SECURITY_SETUP.md` in the design system repo._
