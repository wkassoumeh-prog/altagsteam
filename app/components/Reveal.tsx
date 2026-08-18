"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSiteMotion } from "./useSiteMotion";

export type RevealVariant =
  | "up"
  | "up-sm"
  | "left"
  | "scale"
  | "scale-dramatic";

const motionVariants = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "up-sm": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  "scale-dramatic": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  duration?: number;
  viewportMargin?: string;
};

export default function Reveal({
  variant = "up",
  delay = 0,
  duration = 0.8,
  viewportMargin,
  children,
  className,
}: RevealProps) {
  const { enabled } = useSiteMotion();

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        ...(viewportMargin ? { margin: viewportMargin } : {}),
      }}
      transition={{ duration, delay }}
      variants={motionVariants[variant]}
    >
      {children}
    </motion.div>
  );
}
