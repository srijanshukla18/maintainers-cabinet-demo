import { checkExpiry, createSession } from "../../src/auth/session";

describe("session", () => {
  test("returns null for null session", () => {
    expect(checkExpiry(null)).toBeNull();
  });

  test("detects valid session", () => {
    const s = createSession("user1");
    expect(checkExpiry(s)).toBe(true);
  });

  test("detects expired session", () => {
    const s = createSession("user1", -1000);
    expect(checkExpiry(s)).toBe(false);
  });
});

test('handles expired session correctly', () => {
  const s = { token: 'x', expiresAt: new Date(Date.now() - 1000), userId: 'u1' };
  expect(checkExpiry(s)).toBe(false);
});
