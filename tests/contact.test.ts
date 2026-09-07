import assert from "node:assert/strict";
import test from "node:test";
import { handleContactRequest } from "../src/lib/contact.ts";

const validPayload = {
  name: "Erika Mustermann",
  email: "erika@example.com",
  message: "Ich möchte einen Beratungstermin vereinbaren.",
  website: "",
};

function request(body: unknown): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

test("malformed JSON returns the existing German error", async () => {
  const response = await handleContactRequest(
    new Request("http://localhost/api/contact", {
      method: "POST",
      body: "{invalid",
    }),
    {},
  );

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: "Ungültige Anfrage." });
});

test("invalid fields and the honeypot reject submissions before sending mail", async () => {
  const invalidPayloads = [
    null,
    [],
    { ...validPayload, name: " A " },
    { ...validPayload, email: "invalid-email" },
    { ...validPayload, message: "short" },
    { ...validPayload, phone: 123 },
    { ...validPayload, website: "https://spam.example" },
  ];
  let sends = 0;

  for (const body of invalidPayloads) {
    const response = await handleContactRequest(request(body), {
      apiKey: "test-key",
      fetch: async () => {
        sends += 1;
        return new Response(null, { status: 200 });
      },
    });

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), {
      error: "Bitte füllen Sie alle Pflichtfelder korrekt aus.",
    });
  }

  assert.equal(sends, 0);
});

test("an unconfigured email service fails in production", async () => {
  const response = await handleContactRequest(request(validPayload), {});

  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), {
    error:
      "Der E-Mail-Dienst ist derzeit nicht verfügbar. Bitte rufen Sie uns direkt an oder schreiben Sie uns eine E-Mail.",
  });
});

test("development retains the local submission fallback", async () => {
  const logs: unknown[][] = [];
  const response = await handleContactRequest(request(validPayload), {
    development: true,
    log: (...args) => logs.push(args),
  });

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(logs.length, 1);
});

test("successful mail preserves delivery settings and escapes user HTML", async () => {
  let sent = false;
  const response = await handleContactRequest(
    request({
      ...validPayload,
      name: '  Erika <"Muster"> & Co  ',
      phone: "  <030> 123456  ",
      message: "  Hallo <script>alert(1)</script>\nWeitere Informationen & Hilfe  ",
    }),
    {
      apiKey: "test-key",
      to: "team@example.com",
      from: "Alltagsteam <sender@example.com>",
      fetch: async (url, init) => {
        sent = true;
        assert.equal(url, "https://api.resend.com/emails");
        assert.equal(init?.method, "POST");
        assert.equal(new Headers(init?.headers).get("Authorization"), "Bearer test-key");
        const body = JSON.parse(String(init?.body));
        assert.equal(body.from, "Alltagsteam <sender@example.com>");
        assert.deepEqual(body.to, ["team@example.com"]);
        assert.equal(body.reply_to, validPayload.email);
        assert.equal(body.subject, 'Kontaktanfrage von Erika <"Muster"> & Co');
        assert.match(body.html, /Erika &lt;&quot;Muster&quot;&gt; &amp; Co/);
        assert.match(body.html, /&lt;030&gt; 123456/);
        assert.match(body.html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;<br>Weitere Informationen &amp; Hilfe/);
        assert.doesNotMatch(body.html, /<script>/);
        return Response.json({ id: "test-email" });
      },
    },
  );

  assert.equal(sent, true);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
});

test("mail uses the original defaults when optional settings and phone are absent", async () => {
  const response = await handleContactRequest(request(validPayload), {
    apiKey: "test-key",
    fetch: async (_url, init) => {
      const body = JSON.parse(String(init?.body));
      assert.equal(body.from, "Alltagsteam <onboarding@resend.dev>");
      assert.deepEqual(body.to, ["info@alltagsteam.com"]);
      assert.doesNotMatch(body.html, /Telefon:/);
      return Response.json({ id: "test-email" });
    },
  });

  assert.equal(response.status, 200);
});

test("provider rejection returns an actionable service error", async () => {
  const response = await handleContactRequest(request(validPayload), {
    apiKey: "test-key",
    fetch: async () => new Response(null, { status: 429 }),
  });

  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /E-Mail-Dienst/);
});

test("provider network failures return the same service error", async () => {
  const response = await handleContactRequest(request(validPayload), {
    apiKey: "test-key",
    fetch: async () => {
      throw new TypeError("fetch failed");
    },
  });

  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /E-Mail-Dienst/);
});
