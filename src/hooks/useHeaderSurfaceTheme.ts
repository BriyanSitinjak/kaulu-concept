"use client";

import { useCallback, useEffect, useState } from "react";

export type HeaderSurfaceTheme = "light" | "dark";

const HEADER_SAMPLE_Y = 44;

/**
 * Picks `data-header-theme` from the region behind the fixed header by sampling
 * the horizontal center of the viewport. Nested regions override outer ones (largest `top` wins).
 * Mark sections with `data-header-theme="light"` (dark text) or `data-header-theme="dark"` (light text).
 */
function readThemeUnderHeader(): HeaderSurfaceTheme {
  if (typeof window === "undefined") return "light";

  const x = Math.min(window.innerWidth - 1, Math.max(0, window.innerWidth / 2));
  const y = Math.min(window.innerHeight - 1, Math.max(0, HEADER_SAMPLE_Y));

  const nodes = document.querySelectorAll('[data-header-theme="light"], [data-header-theme="dark"]');
  let bestTop = -Infinity;
  let theme: HeaderSurfaceTheme = "light";

  nodes.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (x < r.left || x > r.right || y < r.top || y > r.bottom) return;
    const t = el.getAttribute("data-header-theme");
    if (t !== "light" && t !== "dark") return;
    if (r.top >= bestTop) {
      bestTop = r.top;
      theme = t;
    }
  });

  return theme;
}

export function useHeaderSurfaceTheme(): HeaderSurfaceTheme {
  const [theme, setTheme] = useState<HeaderSurfaceTheme>("light");

  const update = useCallback(() => {
    setTheme(readThemeUnderHeader());
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(document.documentElement);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [update]);

  return theme;
}
