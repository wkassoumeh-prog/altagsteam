"use client";

import { useEffect } from "react";

/**
 * Temporary comparison helper: clicking any h1 or h2 flips it between the
 * Cormorant display font and the previous DM Sans bold styling.
 * Remove this component (and the matching CSS in globals.css) when done.
 */
export default function FontCompareToggle() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const heading = (e.target as Element | null)?.closest("h1, h2");
      if (heading) heading.classList.toggle("font-compare-previous");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
