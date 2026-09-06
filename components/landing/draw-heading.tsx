"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useEffect,
  useMemo,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type DrawHeadingProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strokeColor?: string;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
};

function nodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  return "";
}

/**
 * Normal HTML text: stroke outline first, then solid colour fill.
 */
export function DrawHeading({
  children,
  className = "",
  style,
  strokeColor = "currentColor",
  drawDuration = 1.1,
  fillDelay = 0.15,
  stagger = 0.03,
}: DrawHeadingProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const text = useMemo(() => nodeToText(children), [children]);
  const chars = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-draw-char]"),
    );
    if (!nodes.length) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const setFilled = () => {
      gsap.set(nodes, {
        clearProps: "color,opacity,webkitTextStrokeWidth",
        webkitTextStrokeColor: strokeColor,
        webkitTextStrokeWidth: 0,
      });
    };

    if (prefersReduced) {
      setFilled();
      return;
    }

    // Start empty — no fill, no stroke
    gsap.set(nodes, {
      color: "transparent",
      opacity: 0,
      webkitTextStrokeWidth: "0px",
      webkitTextStrokeColor: strokeColor,
    });

    const tl = gsap.timeline({
      defaults: { overwrite: "auto" },
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
        once: true,
      },
    });

    // 1) Stroke appears first (outline only)
    tl.to(nodes, {
      opacity: 1,
      webkitTextStrokeWidth: "1.4px",
      duration: drawDuration,
      ease: "power2.out",
      stagger,
    });

    // 2) Then colour fills in
    tl.to(
      nodes,
      {
        color: "inherit",
        duration: Math.max(0.45, drawDuration * 0.55),
        ease: "power2.out",
        stagger,
      },
      `+=${fillDelay}`,
    );

    // 3) Drop the outline so it reads as normal solid text
    tl.to(
      nodes,
      {
        webkitTextStrokeWidth: "0px",
        duration: 0.3,
        ease: "power1.out",
        stagger: stagger * 0.4,
        onComplete: setFilled,
      },
      "-=0.15",
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      gsap.killTweensOf(nodes);
    };
  }, [chars, drawDuration, fillDelay, stagger, strokeColor]);

  return (
    <span
      ref={rootRef}
      className={className}
      style={style}
      aria-label={text}
    >
      {chars.map((char, index) => (
        <span
          key={`${index}-${char}`}
          data-draw-char
          className={char === " " ? "inline" : "inline-block"}
          aria-hidden="true"
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
