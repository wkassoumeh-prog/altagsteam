
import { useState, type SubmitEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validateForm(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = (data.get("name") as string)?.trim();
  const email = (data.get("email") as string)?.trim();
  const message = (data.get("message") as string)?.trim();

  if (!name || name.length < 2) {
    errors.name = "Bitte geben Sie Ihren Namen ein.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }

  if (!message || message.length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen (mindestens 10 Zeichen).";
  }

  return errors;
}

const inputClassName =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60";

const labelClassName = "text-sm font-medium text-foreground/85";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldErrors({});
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: (data.get("name") as string).trim(),
          email: (data.get("email") as string).trim(),
          phone: (data.get("phone") as string)?.trim() || undefined,
          message: (data.get("message") as string).trim(),
          website: (data.get("website") as string)?.trim() || "",
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(
          result.error ??
            "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        );
        setState("error");
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setErrorMessage(
        "Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8 text-center"
        role="status"
      >
        <p className="font-display text-xl font-semibold text-primary">
          Vielen Dank für Ihre Nachricht!
        </p>
        <p className="mt-2 text-foreground/80">
          Wir melden uns in Kürze bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={state === "submitting"}
            className={`${inputClassName} mt-2 ${fieldErrors.name ? "border-red-400" : ""}`}
            placeholder="Ihr Name"
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-sm text-red-600">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={state === "submitting"}
            className={`${inputClassName} mt-2 ${fieldErrors.email ? "border-red-400" : ""}`}
            placeholder="ihre@email.de"
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-sm text-red-600">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClassName}>
          Telefon (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={state === "submitting"}
          className={`${inputClassName} mt-2`}
          placeholder="Ihre Telefonnummer"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Ihre Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={state === "submitting"}
          className={`${inputClassName} mt-2 resize-y ${fieldErrors.message ? "border-red-400" : ""}`}
          placeholder="Wie können wir Ihnen helfen?"
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-sm text-red-600">{fieldErrors.message}</p>
        )}
      </div>

      {state === "error" && errorMessage && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-70 sm:min-w-[220px]"
        >
          {state === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
          {state !== "submitting" && <ArrowIcon />}
        </button>
        <p className="mt-4 flex items-start gap-2 text-xs text-muted">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
          </svg>
          <span>
            Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
            verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Weitere Informationen
            finden Sie in unserer{" "}
            <a
              href="/datenschutz"
              className="font-medium text-primary underline-offset-2 transition-colors hover:text-primary-light hover:underline"
            >
              Datenschutzerklärung
            </a>
            .
          </span>
        </p>
      </div>
    </form>
  );
}
