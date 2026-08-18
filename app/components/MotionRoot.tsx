"use client";

import { useEffect } from "react";
import { isSiteMotionEnabled } from "../config/motion";

export default function MotionRoot() {
  useEffect(() => {
    document.documentElement.dataset.motion = isSiteMotionEnabled()
      ? "enabled"
      : "disabled";

    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return null;
}
