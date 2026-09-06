"use client";

import { useEffect, useState, type ReactNode } from "react";

type DesktopOnlyProps = {
  children: ReactNode;
  /** Tailwind md breakpoint = 768px */
  minWidth?: number;
};

export function DesktopOnly({ children, minWidth = 768 }: DesktopOnlyProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${minWidth}px)`);
    const sync = () => setShow(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [minWidth]);

  if (!show) return null;
  return <>{children}</>;
}
