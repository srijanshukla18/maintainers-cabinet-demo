import { tokenize } from "../../src/parser/tokenize";

describe("tokenize", () => {
  test("tokenizes simple key=value", () => {
    const tokens = tokenize("foo=bar");
    expect(tokens).toHaveLength(3);
    expect(tokens[0]).toEqual({ type: "key", value: "foo" });
    expect(tokens[2]).toEqual({ type: "value", value: "bar" });
  });

  test("handles quoted strings", () => {
    const tokens = tokenize('key="hello world"');
    const valueToken = tokens.find((t) => t.type === "value");
    expect(valueToken?.value).toBe("hello world");
  });
});
