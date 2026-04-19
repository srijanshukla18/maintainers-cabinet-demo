/**
 * Config validator for cabinet-demo.
 */

export interface Config {
  version: string;
  env?: string;
  strict?: boolean;
  [key: string]: unknown;
}

let strictMode = false;

export function enableStrictMode() {
  strictMode = true;
}

export function validateConfig(config: unknown): Config {
  if (typeof config !== "object" || config === null) {
    throw new Error("Config must be an object");
  }

  const c = config as Record<string, unknown>;

  if (!c.version || typeof c.version !== "string") {
    throw new Error("Config must have a string 'version' field");
  }

  if (strictMode) {
    const allowed = new Set(["version", "env", "strict"]);
    for (const key of Object.keys(c)) {
      if (!allowed.has(key)) {
        throw new Error(`Strict mode: unexpected field '${key}'`);
      }
    }
  }

  return c as Config;
}
