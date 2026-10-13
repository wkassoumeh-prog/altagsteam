import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getClientIp } from "./lib/client-ip";
import { getRequestGeo } from "./lib/client-geo";
import { getOffline, recordVisit } from "./lib/site-admin";

const OFFLINE_REWRITE_PATH = "/site-offline";

function shouldBypass(pathname: string): boolean {
  if (pathname.startsWith("/admin")) return true;
  if (pathname.startsWith("/api/admin")) return true;
  if (pathname === OFFLINE_REWRITE_PATH) return true;
  return false;
}

function shouldLogVisit(pathname: string): boolean {
  if (shouldBypass(pathname)) return false;
  if (pathname.startsWith("/api/")) return false;
  return true;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  if (!shouldBypass(pathname)) {
    const offline = await getOffline();
    if (offline) {
      const url = request.nextUrl.clone();
      url.pathname = OFFLINE_REWRITE_PATH;
      return NextResponse.rewrite(url, {
        request: { headers: requestHeaders },
        status: 404,
      });
    }
  }

  if (shouldLogVisit(pathname)) {
    const ip = getClientIp(request.headers);
    const geo = getRequestGeo(request.headers);
    void recordVisit({
      ip,
      at: new Date().toISOString(),
      path: pathname,
      ...geo,
    });
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
