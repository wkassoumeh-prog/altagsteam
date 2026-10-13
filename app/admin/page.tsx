import type { Metadata } from "next";
import Link from "next/link";
import AdminOfflineSwitch from "../components/AdminOfflineSwitch";
import {
  checkRedisConnection,
  getOffline,
  getVisitCount,
  listVisits,
} from "@/lib/site-admin";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

function formatVisitTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(date);
}

export default async function AdminDashboardPage() {
  const [offline, visits, totalVisits, redisStatus] = await Promise.all([
    getOffline(),
    listVisits(200),
    getVisitCount(),
    checkRedisConnection(),
  ]);

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-border bg-cream pt-[env(safe-area-inset-top)]">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-primary"
            >
              Alltagsteam Admin
            </Link>
            <p className="mt-1 text-sm text-muted">Besuche &amp; Abschaltung</p>
          </div>
          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
            >
              Abmelden
            </button>
          </form>
        </div>
      </header>

      <main className="container mx-auto space-y-8 px-6 py-10">
        {redisStatus !== "ok" && (
          <div className="rounded-2xl border border-accent/40 bg-accent/5 px-5 py-4 text-sm text-accent">
            {redisStatus === "missing"
              ? "Redis ist nicht konfiguriert. Setzen Sie UPSTASH_REDIS_REST_URL und UPSTASH_REDIS_REST_TOKEN (oder KV_REST_API_* von Vercel) und starten Sie den Server neu."
              : "Redis ist nicht erreichbar. Starten Sie lokal npm run dev neu (nutzt Windows-Systemzertifikate). Auf Vercel: Integration und Umgebungsvariablen prüfen, dann redeployen."}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <p className="text-sm font-medium text-muted">Gespeicherte Besuche</p>
            <p className="mt-2 font-display text-4xl font-semibold text-primary">
              {totalVisits}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6">
            <p className="text-sm font-medium text-muted">Status</p>
            <p className="mt-2 font-display text-2xl font-semibold text-primary">
              {offline ? "Offline (404)" : "Online"}
            </p>
          </div>
        </div>

        <AdminOfflineSwitch offline={offline} />

        <section className="rounded-2xl border border-border bg-white p-6">
          <h2 className="font-display text-xl font-semibold text-primary">
            Letzte Besuche
          </h2>
          <p className="mt-1 text-sm text-muted">
            Neueste {visits.length} Einträge (IP, Datum und Uhrzeit).
          </p>

          {visits.length === 0 ? (
            <p className="mt-6 text-sm text-muted">
              Noch keine Besuche erfasst. Stellen Sie sicher, dass Upstash Redis
              konfiguriert ist.
            </p>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-muted">
                    <th className="pb-3 pr-4 font-semibold">Datum &amp; Uhrzeit</th>
                    <th className="pb-3 pr-4 font-semibold">IP-Adresse</th>
                    <th className="pb-3 font-semibold">Seite</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.map((visit, index) => (
                    <tr
                      key={`${visit.at}-${visit.ip}-${index}`}
                      className="border-b border-border/60 last:border-0"
                    >
                      <td className="py-3 pr-4 whitespace-nowrap">
                        {formatVisitTime(visit.at)}
                      </td>
                      <td className="py-3 pr-4 font-mono text-xs sm:text-sm">
                        {visit.ip}
                      </td>
                      <td className="py-3 text-muted">{visit.path}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
