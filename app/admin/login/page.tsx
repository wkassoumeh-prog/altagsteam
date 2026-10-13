import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin-Anmeldung",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: PageProps<"/admin/login">) {
  const params = await searchParams;
  const error = params?.error;
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="border-b border-border bg-cream pt-[env(safe-area-inset-top)]">
        <div className="container mx-auto px-6 py-5">
          <Link href="/" className="font-display text-2xl font-semibold text-primary">
            Alltagsteam
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-sm">
          <h1 className="font-display text-3xl font-semibold text-primary">
            Admin
          </h1>
          <p className="mt-2 text-sm text-muted">
            Melden Sie sich an, um Besuche einzusehen und die Website
            vorübergehend abzuschalten.
          </p>

          {error === "invalid" && (
            <p className="mt-4 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent">
              Ungültiges Passwort.
            </p>
          )}
          {error === "config" && (
            <p className="mt-4 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent">
              Anmeldung ist derzeit nicht verfügbar (Konfiguration prüfen).
            </p>
          )}

          <form
            className="mt-8 space-y-4"
            action="/api/admin/login"
            method="post"
          >
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                Passwort
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-1.5 w-full rounded-lg border border-border px-4 py-2.5 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Anmelden
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
