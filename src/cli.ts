#!/usr/bin/env node
/**
 * cabinet-demo CLI
 *
 * Usage:
 *   cabinet-demo parse --file config.json
 *   cabinet-demo parse --file config.json --strict
 */

import { readFileSync } from "fs";
import { validateConfig } from "./config/validator";

const args = process.argv.slice(2);
const cmd = args[0];

if (cmd === "parse") {
  const fileIdx = args.indexOf("--file");
  const file = fileIdx >= 0 ? args[fileIdx + 1] : null;

  if (!file) {
    console.error("Usage: cabinet-demo parse --file <path>");
    process.exit(1);
  }

  try {
    const raw = JSON.parse(readFileSync(file, "utf-8"));
    const config = validateConfig(raw);
    console.log("Config loaded:", JSON.stringify(config, null, 2));
  } catch (err) {
    console.error("Error:", (err as Error).message);
    process.exit(1);
  }
} else {
  console.error("Unknown command:", cmd);
  process.exit(1);
}
