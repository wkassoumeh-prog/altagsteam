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

  return {
    date: new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" }).format(
      value,
    ),
    time: new Intl.DateTimeFormat("de-DE", { timeStyle: "medium" }).format(
      value,
    ),
  };
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
    <div className="mt-6 overflow-hidden rounded-xl border border-border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <thead>
            <tr className="bg-cream/80 text-left text-xs uppercase tracking-wide text-muted">
              <th className="px-4 py-3 font-semibold">Datum</th>
              <th className="px-4 py-3 font-semibold">Uhrzeit</th>
              <th className="px-4 py-3 font-semibold">Stadt / Region</th>
              <th className="px-4 py-3 font-semibold">IP-Adresse</th>
              <th className="px-4 py-3 font-semibold">Seite</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/70 bg-white">
            {visits.map((visit, index) => {
              const { date, time } = formatVisitTime(visit.at);
              const location = formatVisitLocation(visit.city, visit.country);

              return (
                <tr
                  key={`${visit.at}-${visit.ip}-${index}`}
                  className="transition-colors hover:bg-cream/40"
                >
                  <td className="whitespace-nowrap px-4 py-3.5 text-foreground">
                    {date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 tabular-nums text-muted">
                    {time}
                  </td>
                  <td className="px-4 py-3.5 text-foreground">{location}</td>
                  <td className="px-4 py-3.5 font-mono text-xs text-muted">
                    {visit.ip}
                  </td>
                  <td className="max-w-[12rem] truncate px-4 py-3.5 text-muted">
                    {visit.path}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
