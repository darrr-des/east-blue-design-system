/**
 * Google ID token verification.
 * Wraps google-auth-library's OAuth2Client and applies the email-domain allowlist.
 */
import { OAuth2Client } from 'google-auth-library';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
if (!CLIENT_ID) {
  throw new Error('GOOGLE_CLIENT_ID is not set. Copy .env.example to .env and fill it in.');
}

const allowedDomains = (process.env.ALLOWED_DOMAINS || '')
  .split(',')
  .map((d) => d.trim().toLowerCase())
  .filter(Boolean);

const client = new OAuth2Client(CLIENT_ID);

/**
 * Verify a Google ID token and return the user payload.
 * Throws if invalid, expired, or email domain not allowed.
 */
export async function verifyGoogleIdToken(idToken) {
  if (!idToken || typeof idToken !== 'string') {
    const err = new Error('Missing or malformed Google ID token.');
    err.status = 400;
    throw err;
  }

  let ticket;
  try {
    ticket = await client.verifyIdToken({ idToken, audience: CLIENT_ID });
  } catch (e) {
    const err = new Error('Google ID token failed verification.');
    err.status = 401;
    err.cause = e;
    throw err;
  }

  const payload = ticket.getPayload();
  if (!payload) {
    const err = new Error('Google ID token had no payload.');
    err.status = 401;
    throw err;
  }

  const { sub, email, email_verified, name, picture, hd } = payload;

  if (!email || !email_verified) {
    const err = new Error('Google account email is not verified.');
    err.status = 403;
    throw err;
  }

  // Domain allowlist: enforce only when configured.
  if (allowedDomains.length > 0) {
    const domain = email.split('@')[1]?.toLowerCase();
    const ok = allowedDomains.includes(domain) || (hd && allowedDomains.includes(hd.toLowerCase()));
    if (!ok) {
      const err = new Error(`Email domain "${domain}" is not on the allowlist.`);
      err.status = 403;
      throw err;
    }
  }

  return {
    googleId: sub,
    email,
    name: name || '',
    picture: picture || '',
  };
}
