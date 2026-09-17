/* eslint-disable @typescript-eslint/no-require-imports -- Node test runner uses CommonJS. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Exercise the actual route, substituting only the SMTP transport. No mail is sent.
function setup({ env = {}, send = async () => ({ accepted: ['team@example.com'], rejected: [] }) } = {}) {
  const captured = { calls: 0, closed: false };
  const routeModule = { exports: {} };
  const source = ts.transpileModule(fs.readFileSync('app/api/contact/route.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(source, {
    module: routeModule, exports: routeModule.exports, Buffer, URL,
    process: { env: { SMTP_USER: 'team@example.com', SMTP_PASSWORD: 'test-only', ...env } },
    require(name) {
      if (name === 'next/server') return { NextResponse: Response };
      if (name === 'nodemailer') return { createTransport(options) {
        captured.options = options;
        return {
          async sendMail(mail) { captured.calls++; captured.mail = mail; return send(); },
          close() { captured.closed = true; },
        };
      } };
      throw new Error(name);
    },
  });
  return { post: routeModule.exports.POST, captured };
}
const valid = { name: 'Test Person', email: 'visitor@example.com', message: 'Bitte kontaktieren Sie mich.', website: '' };
function request(body = valid, headers = {}) {
  return new Request('https://example.com/api/contact', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://example.com', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}
test('sends via encrypted IONOS SMTP with a fixed sender and visitor Reply-To', async () => {
  const { post, captured } = setup();
  const response = await post(request({ ...valid, message: '<script>alert("test")</script>\nHallo Welt' }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(captured.options.host, 'smtp.ionos.de');
  assert.equal(captured.options.port, 465);
  assert.equal(captured.options.secure, true);
  assert.equal(captured.options.requireTLS, true);
  assert.equal(captured.mail.from.address, 'team@example.com');
  assert.equal(captured.mail.replyTo.address, valid.email);
  assert.ok(captured.mail.html.includes('&lt;script&gt;'));
  assert.ok(!captured.mail.html.includes('<script>'));
  assert.ok(captured.mail.text.includes('<script>'));
  assert.equal(captured.closed, true);
});
test('invalid input and honeypot never reach SMTP', async () => {
  const { post, captured } = setup();
  for (const body of [null, [], {}, { ...valid, website: 'spam' }, { ...valid, email: 'bad' },
    { ...valid, name: 'x' }, { ...valid, name: 'Test\r\nBcc: spam' },
    { ...valid, phone: 42 }, { ...valid, phone: '1'.repeat(51) },
    { ...valid, message: 'short' }, { ...valid, message: 'a'.repeat(5001) }]) {
    assert.equal((await post(request(body))).status, 400);
  }
  assert.equal(captured.calls, 0);
});
test('rejects malformed JSON, oversized streams, cross-site requests and wrong content types', async () => {
  const { post, captured } = setup();
  assert.equal((await post(request('{'))).status, 400);
  assert.equal((await post(request('x'.repeat(32769)))).status, 413);
  assert.equal((await post(request(valid, { origin: 'https://attacker.example' }))).status, 403);
  assert.equal((await post(request(valid, { 'sec-fetch-site': 'cross-site' }))).status, 403);
  assert.equal((await post(request(valid, { 'content-type': 'text/plain' }))).status, 415);
  assert.equal(captured.calls, 0);
});
test('missing credentials never simulate success, including development', async () => {
  const { post, captured } = setup({ env: { SMTP_PASSWORD: '', NODE_ENV: 'development' } });
  assert.equal((await post(request())).status, 503);
  assert.equal(captured.calls, 0);
});
test('SMTP rejection and network failures return a safe error and close transport', async () => {
  for (const send of [async () => ({ accepted: [], rejected: ['team@example.com'] }),
    async () => { throw new Error('Private SMTP diagnostic'); }]) {
    const { post, captured } = setup({ send });
    const response = await post(request());
    assert.equal(response.status, 503);
    assert.ok(!(await response.text()).includes('Private'));
    assert.equal(captured.closed, true);
  }
});
test('alternative port requires STARTTLS; unsupported ports fail closed', async () => {
  const good = setup({ env: { SMTP_PORT: '587' } });
  assert.equal((await good.post(request())).status, 200);
  assert.equal(good.captured.options.secure, false);
  assert.equal(good.captured.options.requireTLS, true);
  const bad = setup({ env: { SMTP_PORT: '25' } });
  assert.equal((await bad.post(request())).status, 503);
  assert.equal(bad.captured.calls, 0);
});
