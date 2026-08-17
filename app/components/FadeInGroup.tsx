"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { useFadeVisible } from "./useFadeVisible";

type FadeInGroupProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  staggerMs?: number;
  duration?: number;
  immediate?: boolean;
  threshold?: number;
};

function mergeClass(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FadeInGroup({
  children,
  className = "",
  as: Component = "div",
  staggerMs = 80,
  duration = 600,
  immediate = false,
  threshold = 0.1,
}: FadeInGroupProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useFadeVisible(ref, { immediate, threshold });

  const style: CSSProperties = {
    "--fade-stagger": `${staggerMs}ms`,
    "--fade-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <Component
      ref={ref}
      className={`fade-group ${visible ? "fade-group--visible" : ""} ${className}`.trim()}
      style={style}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const element = child as ReactElement<{
          className?: string;
          style?: CSSProperties;
        }>;

        return cloneElement(element, {
          className: mergeClass(element.props.className, "fade-item"),
          style: {
            ...element.props.style,
            "--fade-index": index,
          } as CSSProperties,
        });
      })}
    </Component>
  );
}
