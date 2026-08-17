"use client";

import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useFadeVisible } from "./useFadeVisible";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  duration?: number;
  immediate?: boolean;
  threshold?: number;
};

export default function FadeIn({
  children,
  className = "",
  as: Component = "div",
  delay = 0,
  duration = 600,
  immediate = false,
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useFadeVisible(ref, { immediate, threshold });

  const style: CSSProperties = {
    "--fade-delay": `${delay}ms`,
    "--fade-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <Component
      ref={ref}
      className={`fade-in ${visible ? "fade-in--visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Component>
  );
}
