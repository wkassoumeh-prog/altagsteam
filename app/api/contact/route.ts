import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
};

function validatePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const { name, email, phone, message, website } = body as Record<
    string,
    unknown
  >;

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

async function sendEmail(data: ContactPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? "info@alltagsteam.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Alltagsteam <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] Submission received (email not configured):", data);
      return true;
    }
    return false;
  }

  const phoneLine = data.phone
    ? `<p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>`
    : "";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
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
  });

  return response.ok;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const payload = validatePayload(body);

  if (!payload) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Pflichtfelder korrekt aus." },
      { status: 400 },
    );
  }

  const sent = await sendEmail(payload);

  if (!sent) {
    return NextResponse.json(
      {
        error:
          "Der E-Mail-Dienst ist derzeit nicht verfügbar. Bitte rufen Sie uns direkt an oder schreiben Sie uns eine E-Mail.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true });
}
