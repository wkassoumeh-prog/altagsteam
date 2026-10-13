"use client";

import { formatVisitLocation } from "@/lib/client-geo";
import type { VisitRecord } from "@/lib/site-admin";
import { useEffect, useMemo, useState } from "react";

type AdminVisitsTableProps = {
  visits: VisitRecord[];
  totalStored: number;
};

type StatusFilter = "all" | "online" | "offline";
type SortKey = "status" | "at" | "location" | "ip" | "path";
type SortDir = "asc" | "desc";

const PAGE_SIZES = [25, 50, 100, 200] as const;

const cellFilter =
  "w-full min-w-[4.5rem] rounded border border-border/80 bg-white px-1.5 py-1 text-xs text-foreground outline-none focus:border-primary";

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

function sortIndicator(active: boolean, dir: SortDir): string {
  if (!active) return "↕";
  return dir === "asc" ? "↑" : "↓";
}

function compareVisits(a: VisitRecord, b: VisitRecord, key: SortKey): number {
  switch (key) {
    case "status": {
      const av = a.offlineAttempt === true ? 1 : 0;
      const bv = b.offlineAttempt === true ? 1 : 0;
      return av - bv;
    }
    case "at":
      return a.at.localeCompare(b.at);
    case "location":
      return visitLocationKey(a).localeCompare(visitLocationKey(b), "de");
    case "ip":
      return a.ip.localeCompare(b.ip);
    case "path":
      return a.path.localeCompare(b.path);
    default:
      return 0;
  }
}

type SortHeaderProps = {
  label: string;
  sortKey: SortKey;
  activeKey: SortKey;
  dir: SortDir;
  onSort: (key: SortKey) => void;
  className?: string;
};

function SortHeader({
  label,
  sortKey,
  activeKey,
  dir,
  onSort,
  className = "",
}: SortHeaderProps) {
  return (
    <th className={`border-b border-border bg-cream/90 px-2 py-2 ${className}`}>
      <button
        type="button"
        onClick={() => onSort(sortKey)}
        className="flex w-full items-center justify-between gap-1 text-left text-[11px] font-semibold uppercase tracking-wide text-primary hover:text-primary-light"
      >
        <span>{label}</span>
        <span className="tabular-nums text-muted" aria-hidden>
          {sortIndicator(activeKey === sortKey, dir)}
        </span>
      </button>
    </th>
  );
}

export default function AdminVisitsTable({
  visits,
  totalStored,
}: AdminVisitsTableProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [cityFilter, setCityFilter] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [pathQuery, setPathQuery] = useState("");
  const [ipQuery, setIpQuery] = useState("");
  const [pageSize, setPageSize] = useState<number>(25);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>("at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

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
    const cityNeedle = cityFilter.trim().toLowerCase();

    return visits.filter((visit) => {
      const offline = visit.offlineAttempt === true;

      if (statusFilter === "online" && offline) return false;
      if (statusFilter === "offline" && !offline) return false;

      const location = visitLocationKey(visit);
      if (cityNeedle && !location.toLowerCase().includes(cityNeedle)) {
        return false;
      }

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

  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      const base = compareVisits(a, b, sortKey);
      return sortDir === "asc" ? base : -base;
    });
    return copy;
  }, [filtered, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageRows = useMemo(() => {
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, pageSize, totalPages]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "at" ? "desc" : "asc");
    }
    setPage(1);
  }

  function resetPage() {
    setPage(1);
  }

  function clearFilters() {
    setStatusFilter("all");
    setCityFilter("");
    setDateFrom("");
    setDateTo("");
    setPathQuery("");
    setIpQuery("");
    setPage(1);
  }

  const hasFilters =
    statusFilter !== "all" ||
    cityFilter.trim() !== "" ||
    dateFrom !== "" ||
    dateTo !== "" ||
    pathQuery.trim() !== "" ||
    ipQuery.trim() !== "";

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
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-emerald-100 ring-1 ring-emerald-700/25" />
            Online
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-red-50 ring-1 ring-red-500/30" />
            Offline
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="inline-flex items-center gap-1.5">
            Zeilen
            <select
              className={`${cellFilter} w-auto min-w-[3.25rem]`}
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
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              Filter löschen
            </button>
          )}
        </div>
      </div>

      <p className="text-xs text-muted">
        {sorted.length} Treffer · Seite {Math.min(page, totalPages)} /{" "}
        {totalPages} · {visits.length}/{totalStored} geladen
      </p>

      <div className="overflow-hidden rounded-lg border border-border shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[52rem] border-collapse text-sm">
            <thead>
              <tr>
                <SortHeader
                  label="Status"
                  sortKey="status"
                  activeKey={sortKey}
                  dir={sortDir}
                  onSort={handleSort}
                  className="w-[6.5rem]"
                />
                <SortHeader
                  label="Datum"
                  sortKey="at"
                  activeKey={sortKey}
                  dir={sortDir}
                  onSort={handleSort}
                  className="w-[7.5rem]"
                />
                <SortHeader
                  label="Uhrzeit"
                  sortKey="at"
                  activeKey={sortKey}
                  dir={sortDir}
                  onSort={handleSort}
                  className="w-[6.5rem]"
                />
                <SortHeader
                  label="Stadt"
                  sortKey="location"
                  activeKey={sortKey}
                  dir={sortDir}
                  onSort={handleSort}
                />
                <SortHeader
                  label="IP"
                  sortKey="ip"
                  activeKey={sortKey}
                  dir={sortDir}
                  onSort={handleSort}
                  className="w-[8.5rem]"
                />
                <SortHeader
                  label="Seite"
                  sortKey="path"
                  activeKey={sortKey}
                  dir={sortDir}
                  onSort={handleSort}
                />
              </tr>
              <tr className="bg-white">
                <th className="border-b border-border px-2 py-1.5">
                  <select
                    className={cellFilter}
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value as StatusFilter);
                      resetPage();
                    }}
                    aria-label="Status filtern"
                  >
                    <option value="all">Alle</option>
                    <option value="online">On</option>
                    <option value="offline">Off</option>
                  </select>
                </th>
                <th className="border-b border-border px-2 py-1.5" colSpan={2}>
                  <div className="flex gap-1">
                    <input
                      type="date"
                      className={cellFilter}
                      value={dateFrom}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                        resetPage();
                      }}
                      aria-label="Datum von"
                      title="Von"
                    />
                    <input
                      type="date"
                      className={cellFilter}
                      value={dateTo}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                        resetPage();
                      }}
                      aria-label="Datum bis"
                      title="Bis"
                    />
                  </div>
                </th>
                <th className="border-b border-border px-2 py-1.5">
                  <input
                    type="search"
                    list="visit-city-options"
                    className={cellFilter}
                    placeholder="Stadt…"
                    value={cityFilter}
                    onChange={(e) => {
                      setCityFilter(e.target.value);
                      resetPage();
                    }}
                    aria-label="Stadt filtern"
                  />
                  <datalist id="visit-city-options">
                    {cityOptions.map((city) => (
                      <option key={city} value={city} />
                    ))}
                  </datalist>
                </th>
                <th className="border-b border-border px-2 py-1.5">
                  <input
                    type="search"
                    className={cellFilter}
                    placeholder="IP…"
                    value={ipQuery}
                    onChange={(e) => {
                      setIpQuery(e.target.value);
                      resetPage();
                    }}
                    aria-label="IP filtern"
                  />
                </th>
                <th className="border-b border-border px-2 py-1.5">
                  <input
                    type="search"
                    className={cellFilter}
                    placeholder="/…"
                    value={pathQuery}
                    onChange={(e) => {
                      setPathQuery(e.target.value);
                      resetPage();
                    }}
                    aria-label="Seite filtern"
                  />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {pageRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-sm text-muted"
                  >
                    Keine Einträge für die gewählten Filter.
                  </td>
                </tr>
              ) : (
                pageRows.map((visit, index) => {
                  const { date, time } = formatVisitTime(visit.at);
                  const location = visitLocationKey(visit);
                  const offlineAttempt = visit.offlineAttempt === true;

                  return (
                    <tr
                      key={`${visit.at}-${visit.ip}-${index}`}
                      className={`transition-colors ${visitRowClass(offlineAttempt)}`}
                    >
                      <td className="whitespace-nowrap px-2 py-2">
                        <span
                          className={
                            offlineAttempt
                              ? "inline-flex rounded px-1.5 py-0.5 text-[11px] font-semibold text-red-800"
                              : "inline-flex rounded px-1.5 py-0.5 text-[11px] font-semibold text-emerald-900"
                          }
                        >
                          {offlineAttempt ? "Offline" : "Online"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-xs">
                        {date}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-xs tabular-nums text-muted">
                        {time}
                      </td>
                      <td className="max-w-[10rem] truncate px-2 py-2 text-xs">
                        {location}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 font-mono text-[11px]">
                        {visit.ip}
                      </td>
                      <td className="max-w-[10rem] truncate px-2 py-2 text-xs text-muted">
                        {visit.path}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="rounded border border-border px-3 py-1.5 font-semibold enabled:hover:border-primary enabled:hover:text-primary disabled:opacity-40"
        >
          ← Zurück
        </button>
        <span>
          {pageRows.length} von {sorted.length} angezeigt
        </span>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="rounded border border-border px-3 py-1.5 font-semibold enabled:hover:border-primary enabled:hover:text-primary disabled:opacity-40"
        >
          Weiter →
        </button>
      </div>
    </div>
  );
}
