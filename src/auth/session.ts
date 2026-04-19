/**
 * Session management for cabinet-demo CLI.
 */

export interface Session {
  token: string;
  expiresAt: Date;
  userId: string;
}

export function checkExpiry(session: Session | null): boolean | null {
  // guard: handle null session
  if (!session) return null;
  return new Date() < session.expiresAt;
}

export function createSession(userId: string, ttlMs = 3600_000): Session {
  return { token: Math.random().toString(36).slice(2), expiresAt: new Date(Date.now() + ttlMs), userId };
}
