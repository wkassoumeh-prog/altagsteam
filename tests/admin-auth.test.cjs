/* eslint-disable @typescript-eslint/no-require-imports -- Node test runner uses CommonJS. */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function loadAdminAuth(env) {
  const mod = { exports: {} };
  const source = ts.transpileModule(
    fs.readFileSync("lib/admin-auth.ts", "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    },
  ).outputText;

  vm.runInNewContext(source, {
    module: mod,
    exports: mod.exports,
    Buffer,
    process: { env: { NODE_ENV: "test", ...env } },
    require(name) {
      if (name === "node:crypto") return require("node:crypto");
      if (name === "next/headers") {
        return {
          cookies: async () => ({
            get: () => undefined,
          }),
        };
      }
      throw new Error(name);
    },
  });

  return mod.exports;
}

test("creates and verifies admin session tokens", () => {
  const auth = loadAdminAuth({
    ADMIN_PASSWORD: "test-password-123",
    ADMIN_SESSION_SECRET: "test-session-secret-123456",
  });

  const token = auth.createAdminSessionToken();
  assert.ok(token);
  assert.equal(auth.verifyAdminSessionToken(token), true);
  assert.equal(auth.verifyAdminSessionToken(`${token}x`), false);
});

test("verifies admin password with constant-time comparison", () => {
  const auth = loadAdminAuth({
    ADMIN_PASSWORD: "correct-horse-battery",
    ADMIN_SESSION_SECRET: "test-session-secret-123456",
  });

  assert.equal(auth.verifyAdminPassword("correct-horse-battery"), true);
  assert.equal(auth.verifyAdminPassword("wrong-password"), false);
});
