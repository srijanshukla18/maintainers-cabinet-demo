/**
 * Tokenizer for the cabinet-demo config parser.
 * Handles quoted strings, escaped characters, and whitespace.
 */

export type Token = { type: "key" | "value" | "separator"; value: string };

export function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < input.length) {
    // Skip whitespace
    if (/\s/.test(input[i])) { i++; continue; }

    // Separator
    if (input[i] === "=") {
      tokens.push({ type: "separator", value: "=" });
      i++;
      continue;
    }

    // Quoted string
    if (input[i] === '"') {
      let value = "";
      i++; // skip opening quote
      while (i < input.length && input[i] !== '"') {
        if (input[i] === "\\" && i + 1 < input.length) {
          value += input[i + 1];
          i += 2;
        } else {
          value += input[i];
          i++;
        }
      }
      i++; // skip closing quote
      tokens.push({ type: "value", value });
      continue;
    }

    // Unquoted token
    let word = "";
    while (i < input.length && !/[\s=]/.test(input[i])) {
      word += input[i];
      i++;
    }
    if (word) tokens.push({ type: tokens.length % 2 === 0 ? "key" : "value", value: word });
  }

  return tokens;
}

// quick fix
export function fastTokenize(input: string): string[] {
  return input.split(/\s+/);
}
