import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

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

  if (website !== undefined && typeof website !== "string") return null;
  if (typeof name !== "string" || name.trim().length < 2 || name.length > 100 || /[\r\n]/.test(name)) return null;
  if (typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    return null;
  if (typeof message !== "string" || message.trim().length < 10 || message.length > 5000) return null;
  if (phone !== undefined && (typeof phone !== "string" || phone.length > 50)) return null;

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
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const to = process.env.CONTACT_EMAIL || "info@alltagsteam.com";
  const port = Number(process.env.SMTP_PORT || "465");
  if (!user || !pass || ![465, 587].includes(port)) return false;

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.ionos.de",
    port,
    secure: port === 465,
    requireTLS: true,
    auth: { user, pass },
    tls: { minVersion: "TLSv1.2" },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  try {
    const result = await transport.sendMail({
      from: { name: "Alltagsteam", address: user },
      to: { address: to, name: "Alltagsteam" },
      replyTo: { address: data.email, name: data.name },
      subject: "Kontaktanfrage von " + data.name,
      text: ["Neue Kontaktanfrage", "Name: " + data.name, "E-Mail: " + data.email,
        "Telefon: " + (data.phone || "Nicht angegeben"), "", data.message].join("\n"),
      html: "<h2>Neue Kontaktanfrage</h2><p><strong>Name:</strong> " + escapeHtml(data.name)
        + "</p><p><strong>E-Mail:</strong> " + escapeHtml(data.email)
        + "</p><p><strong>Telefon:</strong> " + escapeHtml(data.phone || "Nicht angegeben")
        + "</p><p><strong>Nachricht:</strong></p><p>" + escapeHtml(data.message).replace(/\n/g, "<br>") + "</p>",
    });
    return result.accepted.length > 0 && result.rejected.length === 0;
  } finally {
    transport.close();
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if ((origin && origin !== new URL(request.url).origin) || request.headers.get("sec-fetch-site") === "cross-site") {
    return NextResponse.json({ error: "Ungültiger Ursprung der Anfrage." }, { status: 403 });
  }
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return NextResponse.json({ error: "Ungültiges Datenformat." }, { status: 415 });
  }
  let body: unknown;

  try {
    // Bound the actual stream, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing body");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 32_768) {
        await reader.cancel();
        return NextResponse.json({ error: "Die Anfrage ist zu groß." }, { status: 413 });
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
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

  let sent = false;
  try {
    sent = await sendEmail(payload);
  } catch {
    // Never log contact details or provider responses containing personal data.
    sent = false;
  }

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
