import { formatVisitLocation } from "@/lib/client-geo";
import type { VisitRecord } from "@/lib/site-admin";

type AdminVisitsTableProps = {
  visits: VisitRecord[];
};

function formatVisitTime(iso: string): { date: string; time: string } {
  const value = new Date(iso);
  if (Number.isNaN(value.getTime())) {
    return { date: iso, time: "" };
  }

  const options = { timeZone: "Europe/Berlin" as const };

  return {
    date: new Intl.DateTimeFormat("de-DE", {
      ...options,
      dateStyle: "medium",
    }).format(value),
    time: new Intl.DateTimeFormat("de-DE", {
      ...options,
      timeStyle: "medium",
    }).format(value),
  };
}

function visitRowClass(offlineAttempt: boolean | undefined): string {
  if (offlineAttempt) {
    return "border-l-4 border-l-red-500 bg-red-50/90 hover:bg-red-100/70";
  }
  return "border-l-4 border-l-emerald-600 bg-emerald-50/70 hover:bg-emerald-100/60";
}

export default function AdminVisitsTable({ visits }: AdminVisitsTableProps) {
  if (visits.length === 0) {
    return (
      <p className="mt-6 text-sm text-muted">
        Noch keine Besuche erfasst. Besuchen Sie die Startseite in einem
        anderen Tab und laden Sie diese Seite neu.
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      <div className="flex flex-wrap gap-4 text-xs text-muted">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-emerald-700/30 bg-emerald-50" />
          Online — Seite erreichbar
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-red-500/30 bg-red-50" />
          Offline — Zugriff während 404-Abschaltung
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[44rem] border-collapse text-sm">
            <thead>
              <tr className="bg-cream/80 text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Datum</th>
                <th className="px-4 py-3 font-semibold">Uhrzeit</th>
                <th className="px-4 py-3 font-semibold">Stadt / Region</th>
                <th className="px-4 py-3 font-semibold">IP-Adresse</th>
                <th className="px-4 py-3 font-semibold">Seite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {visits.map((visit, index) => {
                const { date, time } = formatVisitTime(visit.at);
                const location = formatVisitLocation(visit.city, visit.country);
                const offlineAttempt = visit.offlineAttempt === true;

                return (
                  <tr
                    key={`${visit.at}-${visit.ip}-${index}`}
                    className={`transition-colors ${visitRowClass(offlineAttempt)}`}
                  >
                    <td className="whitespace-nowrap px-4 py-3.5">
                      <span
                        className={
                          offlineAttempt
                            ? "inline-flex rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800"
                            : "inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-900"
                        }
                      >
                        {offlineAttempt ? "Offline" : "Online"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-foreground">
                      {date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 tabular-nums text-foreground/80">
                      {time}
                    </td>
                    <td className="px-4 py-3.5 text-foreground">{location}</td>
                    <td className="px-4 py-3.5 font-mono text-xs text-foreground/90">
                      {visit.ip}
                    </td>
                    <td className="max-w-[12rem] truncate px-4 py-3.5 text-foreground/80">
                      {visit.path}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
