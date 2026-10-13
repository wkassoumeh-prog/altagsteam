import Link from "next/link";

export default function NotFound() {
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
        </div>
      </header>

      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-primary lg:text-5xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Die angeforderte Seite existiert nicht oder ist derzeit nicht
          erreichbar.
        </p>
        <Link
          href="/"
          className="mt-10 rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Zur Startseite
        </Link>
      </main>
    </>
  );
}
