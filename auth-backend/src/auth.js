/**
 * Auth router — three endpoints per the spec:
 *   POST /auth/google   → verify Google ID token, issue our JWT
 *   GET  /auth/me       → return current user info from JWT (protected)
 *   POST /auth/logout   → clear session cookie
 */
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { verifyGoogleIdToken } from './google.js';
import { requireAuth } from './middleware.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const isProd = process.env.NODE_ENV === 'production';

export const authRouter = Router();

/**
 * POST /auth/google
 * Body: { idToken: string }
 * Returns: { token, user }
 *
 * The frontend uses Google Identity Services to obtain a Google ID token,
 * then POSTs it here. We verify it server-side with Google, then issue
 * our own signed JWT carrying user identity.
 */
authRouter.post('/google', async (req, res) => {
  try {
    const idToken = req.body?.idToken || req.body?.credential;
    const user = await verifyGoogleIdToken(idToken);

    const token = jwt.sign(
      {
        googleId: user.googleId,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Also set as HttpOnly cookie for browser clients that prefer cookies
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? 'lax' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: '/',
    });

    return res.json({ token, user });
  } catch (e) {
    const status = e.status || 500;
    return res.status(status).json({ error: e.message || 'Internal server error.' });
  }
});

/**
 * GET /auth/me
 * Protected. Returns the user payload from a valid JWT.
 */
authRouter.get('/me', requireAuth, (req, res) => {
  const { googleId, email, name, picture } = req.user;
  return res.json({ user: { googleId, email, name, picture } });
});

/**
 * POST /auth/logout
 * Clears the session cookie. Frontend should also discard any stored JWT.
 */
authRouter.post('/logout', (_req, res) => {
  res.clearCookie('auth_token', { path: '/' });
  return res.json({ ok: true });
});
