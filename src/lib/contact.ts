type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type ContactOptions = {
  apiKey?: string;
  to?: string;
  from?: string;
  development?: boolean;
  fetch?: typeof globalThis.fetch;
  log?: typeof console.info;
};

function validatePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const { name, email, phone, message, website } = body as Record<string, unknown>;

  if (typeof website === "string" && website.trim()) return null;
  if (typeof name !== "string" || name.trim().length < 2) return null;
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return null;
  if (typeof message !== "string" || message.trim().length < 10) return null;
  if (phone !== undefined && typeof phone !== "string") return null;

  return {
    name: name.trim(),
    email: email.trim(),
    phone: typeof phone === "string" && phone.trim() ? phone.trim() : undefined,
    message: message.trim(),
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(
  data: ContactPayload,
  options: ContactOptions,
): Promise<boolean> {
  if (!options.apiKey) {
    if (options.development) {
      (options.log ?? console.info)(
        "[contact] Submission received (email not configured):",
        data,
      );
      return true;
    }
    return false;
  }

  const phoneLine = data.phone
    ? `<p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>`
    : "";

  try {
    const response = await (options.fetch ?? globalThis.fetch)(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${options.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: options.from ?? "Alltagsteam <onboarding@resend.dev>",
          to: [options.to ?? "info@alltagsteam.com"],
          reply_to: data.email,
          subject: `Kontaktanfrage von ${data.name}`,
          html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
        ${phoneLine}
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      `,
        }),
      },
    );

    return response.ok;
  } catch {
    return false;
  }
}

export async function handleContactRequest(
  request: Request,
  options: ContactOptions,
): Promise<Response> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const payload = validatePayload(body);

  if (!payload) {
    return Response.json(
      { error: "Bitte füllen Sie alle Pflichtfelder korrekt aus." },
      { status: 400 },
    );
  }

  const sent = await sendEmail(payload, options);

  if (!sent) {
    return Response.json(
      {
        error:
          "Der E-Mail-Dienst ist derzeit nicht verfügbar. Bitte rufen Sie uns direkt an oder schreiben Sie uns eine E-Mail.",
      },
      { status: 503 },
    );
  }

  return Response.json({ success: true });
}
