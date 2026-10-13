"use client";

import { formatVisitLocation } from "@/lib/client-geo";
import type { VisitRecord } from "@/lib/site-admin";
import { useEffect, useMemo, useState } from "react";

type AdminVisitsTableProps = {
  visits: VisitRecord[];
  totalStored: number;
};

type StatusFilter = "all" | "online" | "offline";

const PAGE_SIZES = [25, 50, 100, 200] as const;

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

function berlinDateKey(iso: string): string | null {
  const value = new Date(iso);
  if (Number.isNaN(value.getTime())) return null;
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin",
  }).format(value);
}

function visitLocationKey(visit: VisitRecord): string {
  return formatVisitLocation(visit.city, visit.country);
}

function visitRowClass(offlineAttempt: boolean): string {
  if (offlineAttempt) {
    return "border-l-4 border-l-red-500 bg-red-50/90 hover:bg-red-100/70";
  }
  return "border-l-4 border-l-emerald-600 bg-emerald-50/70 hover:bg-emerald-100/60";
}

const selectClassName =
  "mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

const inputClassName = selectClassName;

export default function AdminVisitsTable({
  visits,
  totalStored,
}: AdminVisitsTableProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [pathQuery, setPathQuery] = useState("");
  const [ipQuery, setIpQuery] = useState("");
  const [pageSize, setPageSize] = useState<number>(25);
  const [page, setPage] = useState(1);

  const cityOptions = useMemo(() => {
    const set = new Set<string>();
    for (const visit of visits) {
      set.add(visitLocationKey(visit));
    }
    return [...set].sort((a, b) => a.localeCompare(b, "de"));
  }, [visits]);

  const filtered = useMemo(() => {
    const pathNeedle = pathQuery.trim().toLowerCase();
    const ipNeedle = ipQuery.trim().toLowerCase();

    return visits.filter((visit) => {
      const offline = visit.offlineAttempt === true;

      if (statusFilter === "online" && offline) return false;
      if (statusFilter === "offline" && !offline) return false;

      const location = visitLocationKey(visit);
      if (cityFilter !== "all" && location !== cityFilter) return false;

      const day = berlinDateKey(visit.at);
      if (dateFrom && day && day < dateFrom) return false;
      if (dateFrom && !day) return false;
      if (dateTo && day && day > dateTo) return false;
      if (dateTo && !day) return false;

      if (pathNeedle && !visit.path.toLowerCase().includes(pathNeedle)) {
        return false;
      }
      if (ipNeedle && !visit.ip.toLowerCase().includes(ipNeedle)) return false;

      return true;
    });
  }, [
    visits,
    statusFilter,
    cityFilter,
    dateFrom,
    dateTo,
    pathQuery,
    ipQuery,
  ]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageRows = useMemo(() => {
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize, totalPages]);

  function resetPage() {
    setPage(1);
  }

  function clearFilters() {
    setStatusFilter("all");
    setCityFilter("all");
    setDateFrom("");
    setDateTo("");
    setPathQuery("");
    setIpQuery("");
    setPage(1);
  }

  if (visits.length === 0) {
    return (
      <p className="mt-6 text-sm text-muted">
        Noch keine Besuche erfasst. Besuchen Sie die Startseite in einem
        anderen Tab und laden Sie diese Seite neu.
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
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

      <div className="rounded-xl border border-border bg-cream/40 p-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="text-sm font-semibold text-primary">Filter</p>
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-semibold text-muted underline-offset-2 hover:text-primary hover:underline"
          >
            Filter zurücksetzen
          </button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <label className="block text-xs font-medium text-muted">
            Status
            <select
              className={selectClassName}
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as StatusFilter);
                resetPage();
              }}
            >
              <option value="all">Alle</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </label>

          <label className="block text-xs font-medium text-muted">
            Stadt / Region
            <select
              className={selectClassName}
              value={cityFilter}
              onChange={(e) => {
                setCityFilter(e.target.value);
                resetPage();
              }}
            >
              <option value="all">Alle</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-xs font-medium text-muted">
            Datum von (DE)
            <input
              type="date"
              className={inputClassName}
              value={dateFrom}
              onChange={(e) => {
                setDateFrom(e.target.value);
                resetPage();
              }}
            />
          </label>

          <label className="block text-xs font-medium text-muted">
            Datum bis (DE)
            <input
              type="date"
              className={inputClassName}
              value={dateTo}
              onChange={(e) => {
                setDateTo(e.target.value);
                resetPage();
              }}
            />
          </label>

          <label className="block text-xs font-medium text-muted">
            Seite (Pfad)
            <input
              type="search"
              placeholder="z. B. /impressum"
              className={inputClassName}
              value={pathQuery}
              onChange={(e) => {
                setPathQuery(e.target.value);
                resetPage();
              }}
            />
          </label>

          <label className="block text-xs font-medium text-muted">
            IP-Adresse
            <input
              type="search"
              placeholder="Teil der IP"
              className={inputClassName}
              value={ipQuery}
              onChange={(e) => {
                setIpQuery(e.target.value);
                resetPage();
              }}
            />
          </label>

          <label className="block text-xs font-medium text-muted">
            Einträge pro Seite
            <select
              className={selectClassName}
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                resetPage();
              }}
            >
              {PAGE_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-4 text-xs text-muted">
          {filtered.length} Treffer nach Filter · Seite{" "}
          {Math.min(page, totalPages)} von {totalPages} · {visits.length} von{" "}
          {totalStored} gespeicherten
          Einträgen geladen
          {visits.length < totalStored
            ? " (ältere Einträge nicht im Speicher dieser Ansicht)"
            : ""}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted">
          Keine Einträge für die gewählten Filter.
        </p>
      ) : (
        <>
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
                  {pageRows.map((visit, index) => {
                    const { date, time } = formatVisitTime(visit.at);
                    const location = visitLocationKey(visit);
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
                        <td className="px-4 py-3.5 text-foreground">
                          {location}
                        </td>
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

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted transition-colors enabled:hover:border-primary enabled:hover:text-primary disabled:opacity-40"
            >
              Zurück
            </button>
            <span className="text-sm text-muted">
              {pageRows.length} Einträge auf dieser Seite
            </span>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted transition-colors enabled:hover:border-primary enabled:hover:text-primary disabled:opacity-40"
            >
              Weiter
            </button>
          </div>
        </>
      )}
    </div>
  );
}
