import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "./Footer";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-border bg-cream pt-[env(safe-area-inset-top)]">
        <div className="container mx-auto flex items-center justify-between px-6 py-5">
          <Link href="/" className="flex flex-col">
            <span className="font-display text-2xl font-semibold tracking-tight text-primary lg:text-3xl">
              Alltagsteam
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted">
              Alltagshilfe
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="min-h-screen bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <article className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-primary lg:text-5xl">
              {title}
            </h1>
            <div className="mt-10 space-y-8">{children}</div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
