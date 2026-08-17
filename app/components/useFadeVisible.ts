"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

type FadeVisibleOptions = {
  immediate?: boolean;
  threshold?: number;
};

export function useFadeVisible(
  ref: RefObject<HTMLElement | null>,
  { immediate = false, threshold = 0.1 }: FadeVisibleOptions = {},
) {
  const [visible, setVisible] = useState(immediate);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    if (immediate) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate, threshold]);

  return visible;
}
