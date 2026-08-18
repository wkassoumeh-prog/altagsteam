"use client";

import { useReducedMotion } from "framer-motion";
import { isSiteMotionEnabled } from "../config/motion";

export function useSiteMotion() {
  const prefersReducedMotion = useReducedMotion();
  const enabled = isSiteMotionEnabled() && !prefersReducedMotion;

  return {
    enabled,
    stagger: (index: number, step = 0.15) => (enabled ? index * step : 0),
  };
}
