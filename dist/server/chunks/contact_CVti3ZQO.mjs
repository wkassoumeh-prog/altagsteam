import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as setOnSetGetEnv, t as getEnv$1 } from "./runtime_x1Na2qzi.mjs";
//#region \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var getSecret = (key) => {
	return getEnv(key);
};
setOnSetGetEnv(() => {});
//#endregion
//#region src/lib/contact.ts
function validatePayload(body) {
	if (!body || typeof body !== "object") return null;
	const { name, email, phone, message, website } = body;
	if (typeof website === "string" && website.trim()) return null;
	if (typeof name !== "string" || name.trim().length < 2) return null;
	if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
	if (typeof message !== "string" || message.trim().length < 10) return null;
	if (phone !== void 0 && typeof phone !== "string") return null;
	return {
		name: name.trim(),
		email: email.trim(),
		phone: typeof phone === "string" && phone.trim() ? phone.trim() : void 0,
		message: message.trim()
	};
}
function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
async function sendEmail(data, options) {
	if (!options.apiKey) {
		if (options.development) {
			(options.log ?? console.info)("[contact] Submission received (email not configured):", data);
			return true;
		}
		return false;
	}
	const phoneLine = data.phone ? `<p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>` : "";
	try {
		return (await (options.fetch ?? globalThis.fetch)("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${options.apiKey}`,
				"Content-Type": "application/json"
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
      `
			})
		})).ok;
	} catch {
		return false;
	}
}
async function handleContactRequest(request, options) {
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
	}
	const payload = validatePayload(body);
	if (!payload) return Response.json({ error: "Bitte füllen Sie alle Pflichtfelder korrekt aus." }, { status: 400 });
	if (!await sendEmail(payload, options)) return Response.json({ error: "Der E-Mail-Dienst ist derzeit nicht verfügbar. Bitte rufen Sie uns direkt an oder schreiben Sie uns eine E-Mail." }, { status: 503 });
	return Response.json({ success: true });
}
//#endregion
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({
	ALL: () => ALL,
	OPTIONS: () => OPTIONS,
	POST: () => POST,
	prerender: () => false
});
var POST = ({ request }) => handleContactRequest(request, {
	apiKey: getSecret("RESEND_API_KEY"),
	to: getSecret("CONTACT_EMAIL"),
	from: getSecret("CONTACT_FROM_EMAIL"),
	development: false
});
var OPTIONS = () => new Response(null, {
	status: 204,
	headers: { Allow: "POST, OPTIONS" }
});
var ALL = () => new Response(null, {
	status: 405,
	headers: { Allow: "POST, OPTIONS" }
});
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
