import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? "";

  if (pathname.startsWith("/admin/login")) {
    if (await isAdminAuthenticated()) {
      redirect("/admin");
    }
    return <>{children}</>;
  }

  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
