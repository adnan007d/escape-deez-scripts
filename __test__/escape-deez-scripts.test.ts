import { escapeDeezScripts } from "../src/regex";

describe("Escape Script test", () => {
  test("Simple Script", async () => {
    const script = `<script>alert("Hello World")</script>`;
    const escapedScript = `&lt;script&gt;alert("Hello World")&lt;/script&gt;`;
    expect(escapeDeezScripts(script)).toBe(escapedScript);
  });
  test("Script with attributes", async () => {
    const script = `<script src="https://evil.com"></script>`;
    const escapedScript = `&lt;script src="https://evil.com"&gt;&lt;/script&gt;`;
    expect(escapeDeezScripts(script)).toBe(escapedScript);
  });
  test("Script with attributes and content", async () => {
    const script = `<script src="https://evil.com">alert("Hello World")</script>`;
    const escapedScript = `&lt;script src="https://evil.com"&gt;alert("Hello World")&lt;/script&gt;`;
    expect(escapeDeezScripts(script)).toBe(escapedScript);
  });
  test("Script tag with other tags", async () => {
    const script = `<script src="https://evil.com"><p>Test</p></script>`;
    const escapedScript = `&lt;script src="https://evil.com"&gt;<p>Test</p>&lt;/script&gt;`;
    expect(escapeDeezScripts(script)).toBe(escapedScript);
  });
  test("Script tag with other tags outside", async () => {
    const script = `<p>Test</p><script src="https://evil.com"></script>`;
    const escapedScript = `<p>Test</p>&lt;script src="https://evil.com"&gt;&lt;/script&gt;`;
    expect(escapeDeezScripts(script)).toBe(escapedScript);
  });
  test("Multiple Script tag with other tags outside", async () => {
    const script = `<p>Test</p><script src="https://evil.com"></script><script src="https://evil.com"></script>`;
    const escapedScript = `<p>Test</p>&lt;script src="https://evil.com"&gt;&lt;/script&gt;&lt;script src="https://evil.com"&gt;&lt;/script&gt;`;
    expect(escapeDeezScripts(script)).toBe(escapedScript);
  });
});
