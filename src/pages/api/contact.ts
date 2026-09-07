import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";
import { handleContactRequest } from "../../lib/contact";

export const prerender = false;

export const POST: APIRoute = ({ request }) =>
  handleContactRequest(request, {
    apiKey: getSecret("RESEND_API_KEY"),
    to: getSecret("CONTACT_EMAIL"),
    from: getSecret("CONTACT_FROM_EMAIL"),
    development: import.meta.env.DEV,
  });

export const OPTIONS: APIRoute = () =>
  new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });

export const ALL: APIRoute = () =>
  new Response(null, { status: 405, headers: { Allow: "POST, OPTIONS" } });
