import { NextResponse } from "next/server";
import {
  adminSessionCookieOptions,
  createAdminSessionToken,
  getAdminPassword,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

function loginRedirect(request: Request, query: string) {
  const url = new URL("/admin/login", request.url);
  if (query) url.searchParams.set("error", query);
  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request) {
  const contentTypeForConfig = request.headers.get("content-type") ?? "";
  const wantsJsonForConfig = contentTypeForConfig.includes("application/json");

  if (!getAdminPassword()) {
    if (wantsJsonForConfig) {
      return NextResponse.json(
        { error: "Admin-Zugang ist nicht konfiguriert." },
        { status: 503 },
      );
    }
    return loginRedirect(request, "config");
  }

  let password = "";
  const contentType = request.headers.get("content-type") ?? "";
  const wantsJson = contentType.includes("application/json");

  if (wantsJson) {
    try {
      const body = (await request.json()) as { password?: unknown };
      password = typeof body.password === "string" ? body.password : "";
    } catch {
      return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
    }
  } else {
    const form = await request.formData();
    password = String(form.get("password") ?? "");
  }

  if (!verifyAdminPassword(password)) {
    if (wantsJson) {
      return NextResponse.json(
        { error: "Ungültiges Passwort." },
        { status: 401 },
      );
    }
    return loginRedirect(request, "invalid");
  }

  const token = createAdminSessionToken();
  if (!token) {
    if (wantsJson) {
      return NextResponse.json(
        { error: "Session konnte nicht erstellt werden." },
        { status: 503 },
      );
    }
    return loginRedirect(request, "config");
  }

  const cookie = adminSessionCookieOptions(token);
  const response = wantsJson
    ? NextResponse.json({ success: true })
    : NextResponse.redirect(new URL("/admin", request.url), 303);

  response.cookies.set(cookie.name, cookie.value, {
    httpOnly: cookie.httpOnly,
    secure: cookie.secure,
    sameSite: cookie.sameSite,
    path: cookie.path,
    maxAge: cookie.maxAge,
  });

  return response;
}
