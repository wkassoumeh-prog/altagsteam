"use client";

import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

type ContentCardProps = {
  id?: string;
  children: ReactNode;
};

export default function ContentCard({ id, children }: ContentCardProps) {
  return (
    <section
      id={id}
      className="flex min-h-dvh w-full items-center bg-white"
    >
      <FadeIn duration={600} threshold={0.08} className="w-full">
        <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
          {children}
        </div>
      </FadeIn>
    </section>
  );
}
