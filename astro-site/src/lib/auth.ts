/**
 * Auth client — talks to the frost-auth backend from the browser.
 * No server-side anything; this site is fully static.
 *
 * Storage strategy: JWT in localStorage (key: 'eb_auth_token'),
 * sent via Authorization: Bearer header on protected requests.
 * The backend ALSO sets an HttpOnly cookie automatically — both work.
 */

const TOKEN_KEY = 'eb_auth_token';

export const AUTH_BACKEND_URL =
  (import.meta.env?.PUBLIC_AUTH_BACKEND_URL as string | undefined) ||
  'http://localhost:3001';

export const GOOGLE_CLIENT_ID =
  (import.meta.env?.PUBLIC_GOOGLE_CLIENT_ID as string | undefined) || '';

export interface AuthUser {
  googleId: string;
  email: string;
  name: string;
  picture: string;
}

export function getStoredToken(): string | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function storeToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

/**
 * Verify the current session by hitting /auth/me.
 * Returns the user on success, null if unauthenticated.
 */
export async function fetchCurrentUser(): Promise<AuthUser | null> {
  const token = getStoredToken();
  const headers: Record<string, string> = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const r = await fetch(`${AUTH_BACKEND_URL}/auth/me`, {
      method: 'GET',
      credentials: 'include',
      headers,
    });
    if (!r.ok) return null;
    const { user } = await r.json();
    return user as AuthUser;
  } catch {
    return null;
  }
}

/**
 * Exchange a Google ID token for our JWT.
 * Throws on failure — caller should display the error.
 */
export async function signInWithGoogle(idToken: string): Promise<{ token: string; user: AuthUser }> {
  const r = await fetch(`${AUTH_BACKEND_URL}/auth/google`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  });
  const data = await r.json();
  if (!r.ok) {
    throw new Error(data.error || 'Sign-in failed.');
  }
  storeToken(data.token);
  return data;
}

/**
 * Sign out — call backend to clear cookie + drop local token.
 */
export async function signOut(): Promise<void> {
  try {
    await fetch(`${AUTH_BACKEND_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  } catch {
    // Ignore network errors on logout — clear locally regardless.
  }
  clearStoredToken();
}
