"use client";

import { useActionState } from "react";
import {
  setSiteOfflineAction,
  type OfflineActionState,
} from "../admin/actions";

type AdminOfflineSwitchProps = {
  offline: boolean;
};

const initialState: OfflineActionState = {};

export default function AdminOfflineSwitch({ offline }: AdminOfflineSwitchProps) {
  const [state, formAction, pending] = useActionState(
    setSiteOfflineAction,
    initialState,
  );

  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <h2 className="font-display text-xl font-semibold text-primary">
        Website-Abschaltung
      </h2>
      <p className="mt-2 text-sm text-muted">
        {offline
          ? "Die Website ist offline. Besucher sehen eine 404-Seite. Admin bleibt erreichbar."
          : "Die Website ist online und für Besucher erreichbar."}
      </p>

      {state.error && (
        <p className="mt-4 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent">
          {state.error}
        </p>
      )}

      <form action={formAction} className="mt-6">
        {offline ? (
          <button
            type="submit"
            name="offline"
            value="false"
            disabled={pending}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:opacity-60"
          >
            {pending ? "Wird gespeichert…" : "Website wieder einschalten"}
          </button>
        ) : (
          <button
            type="submit"
            name="offline"
            value="true"
            disabled={pending}
            className="rounded-full border border-accent bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white disabled:opacity-60"
          >
            {pending ? "Wird gespeichert…" : "Website abschalten (404)"}
          </button>
        )}
      </form>
    </div>
  );
}
