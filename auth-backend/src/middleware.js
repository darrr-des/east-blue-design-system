/**
 * Express middleware that validates the JWT on protected routes.
 * Reads the token from either:
 *   - Authorization: Bearer <jwt>      (preferred)
 *   - Cookie: auth_token=<jwt>          (set by /auth/google response)
 *
 * On success: attaches the decoded payload to req.user and calls next().
 * On failure: 401 JSON response.
 */
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set. Copy .env.example to .env and fill it in.');
}

function extractToken(req) {
  const auth = req.headers.authorization || '';
  if (auth.startsWith('Bearer ')) return auth.slice(7);
  // Fallback: parse a simple cookie header without pulling in cookie-parser
  const cookieHeader = req.headers.cookie || '';
  for (const pair of cookieHeader.split(';')) {
    const [k, ...rest] = pair.trim().split('=');
    if (k === 'auth_token') return decodeURIComponent(rest.join('='));
  }
  return null;
}

export function requireAuth(req, res, next) {
  const token = extractToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Missing auth token.' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Session expired. Please sign in again.' });
    }
    return res.status(401).json({ error: 'Invalid auth token.' });
  }
}
