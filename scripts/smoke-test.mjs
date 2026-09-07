import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";

// Use a separate production server with email delivery explicitly disabled.
const port = 4391;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["dist/server/entry.mjs"], {
  env: { ...process.env, HOST: "127.0.0.1", PORT: String(port), RESEND_API_KEY: "" },
  stdio: ["ignore", "pipe", "pipe"],
  windowsHide: true,
});
let output = "";
server.stdout.on("data", (chunk) => { output += chunk; });
server.stderr.on("data", (chunk) => { output += chunk; });
const stopped = new Promise((resolve) => server.once("exit", resolve));

async function get(path) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, `${path} must be served`);
  return response;
}

try {
  for (let attempt = 0; !output.includes("Server listening"); attempt++) {
    assert.equal(server.exitCode, null, output);
    assert.ok(attempt < 100, `Server failed to start: ${output}`);
    await delay(100);
  }

  for (const [path, title, islandCount] of [
    ["/", "Alltagsteam Marburg und ganz Hessen – Unterstützung für Pflegebedürftige", 3],
    ["/impressum", "Impressum – Alltagsteam", 0],
    ["/datenschutz", "Datenschutzerklärung – Alltagsteam", 0],
  ]) {
    const html = await (await get(path)).text();
    assert.ok(html.includes(`<title>${title}</title>`), `${path}: title`);
    assert.match(html, /lang="de"/);
    assert.match(html, /name="description" content="[^"]+"/);
    assert.equal([...html.matchAll(/<astro-island\s/g)].length, islandCount, `${path}: hydration boundaries`);
    assert.doesNotMatch(html, /\/_next\//);
    for (const asset of new Set([...html.matchAll(/(?:src|href)="(\/[^"#?]+\.(?:js|css|webp|ico))"/g)].map((match) => match[1]))) {
      await get(asset);
    }
  }

  const manifest = JSON.parse(await readFile("src/generated/images.json", "utf8"));
  for (const image of Object.values(manifest)) {
    assert.equal(image.quality, 95);
    assert.ok(image.width > 0 && image.height > 0);
    const response = await get(image.src);
    assert.match(response.headers.get("content-type"), /image\/webp/);
  }

  const validPayload = { name: "Migration Test", email: "test@example.com", message: "Local migration smoke test." };
  for (const [method, body, status] of [
    ["POST", "{invalid", 400],
    ["POST", JSON.stringify({ ...validPayload, website: "spam" }), 400],
    ["POST", JSON.stringify(validPayload), 503],
    ["GET", undefined, 405],
    ["OPTIONS", undefined, 204],
  ]) {
    const response = await fetch(`${base}/api/contact`, {
      method,
      headers: { "Content-Type": "application/json" },
      body,
    });
    assert.equal(response.status, status, `${method} /api/contact`);
    if (method === "POST") assert.equal(typeof (await response.json()).error, "string");
  }
  assert.equal((await fetch(`${base}/missing-page`)).status, 404);
  console.info("Production smoke checks passed: 3 pages, assets, image quality, hydration boundaries, contact API, and 404. No emails sent.");
} finally {
  server.kill();
  await stopped;
}
