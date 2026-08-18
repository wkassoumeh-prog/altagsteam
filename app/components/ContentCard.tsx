"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

type ContentCardProps = {
  id?: string;
  children: ReactNode;
  variant?: "white" | "cream";
};

const variantStyles = {
  white: "bg-white",
  cream: "bg-cream",
};

export default function ContentCard({
  id,
  children,
  variant = "white",
}: ContentCardProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 lg:py-24 ${variantStyles[variant]}`}
    >
      <div className="container mx-auto px-6">
        <Reveal variant="up-sm" className="mx-auto max-w-3xl">
          {children}
        </Reveal>
      </div>
    </section>
  );
}
