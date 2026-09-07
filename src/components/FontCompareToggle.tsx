import { useEffect } from "react";

/**
 * Temporary comparison helper: clicking any h1, h2, or .font-compare-target flips it
 * between the Cormorant display font and DM Sans regular at 90% size.
 * Remove this component (and the matching CSS in globals.css) when done.
 */
export default function FontCompareToggle() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest(
        "h1, h2, .font-compare-target",
      );
      if (target) {
        const el = target as HTMLElement;
        const switchingToDmSans = !el.classList.contains("font-compare-previous");
        el.classList.toggle("font-compare-previous");
        if (switchingToDmSans) {
          const px = parseFloat(window.getComputedStyle(el).fontSize);
          el.style.fontSize = `${px * 0.9}px`;
        } else {
          el.style.fontSize = "";
        }
        e.stopPropagation();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
