"use server";

import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { setOffline } from "@/lib/site-admin";

export type OfflineActionState = {
  error?: string;
};

export async function setSiteOfflineAction(
  _prevState: OfflineActionState,
  formData: FormData,
): Promise<OfflineActionState> {
  if (!(await isAdminAuthenticated())) {
    return { error: "Nicht angemeldet." };
  }

  const offline = formData.get("offline") === "true";

  try {
    await setOffline(offline);
    revalidatePath("/admin");
    return {};
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Speichern fehlgeschlagen.";
    return { error: message };
  }
}
