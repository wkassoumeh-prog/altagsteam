"use client";

import { FormEvent, useState } from "react";

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
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60";

const labelClassName =
  "text-xs font-bold uppercase tracking-wider text-accent";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
        className="rounded-2xl border border-accent/30 bg-accent/10 px-6 py-8 text-center"
        role="status"
      >
        <p className="text-lg font-semibold text-white">
          Vielen Dank für Ihre Nachricht!
        </p>
        <p className="mt-2 text-white/80">
          Wir melden uns in Kürze bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent-light"
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
          className={`${inputClassName} mt-2 ${fieldErrors.name ? "border-red-400/60" : ""}`}
          placeholder="Ihr Name"
        />
        {fieldErrors.name && (
          <p className="mt-1.5 text-sm text-red-300">{fieldErrors.name}</p>
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
          className={`${inputClassName} mt-2 ${fieldErrors.email ? "border-red-400/60" : ""}`}
          placeholder="ihre@email.de"
        />
        {fieldErrors.email && (
          <p className="mt-1.5 text-sm text-red-300">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className={labelClassName}>
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={state === "submitting"}
          className={`${inputClassName} mt-2`}
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={state === "submitting"}
          className={`${inputClassName} mt-2 resize-y ${fieldErrors.message ? "border-red-400/60" : ""}`}
          placeholder="Wie können wir Ihnen helfen?"
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-sm text-red-300">{fieldErrors.message}</p>
        )}
      </div>

      {state === "error" && errorMessage && (
        <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg disabled:translate-y-0 disabled:opacity-70 disabled:hover:shadow-none sm:w-auto"
      >
        {state === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
      </button>
    </form>
  );
}
