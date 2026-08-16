import type { ReactNode } from "react";

type ContentCardProps = {
  id?: string;
  children: ReactNode;
};

export default function ContentCard({ id, children }: ContentCardProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen w-full snap-start snap-always items-center bg-white"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        {children}
      </div>
    </section>
  );
}
