"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy: last nav-linked section whose top has crossed the anchor line
 * (aligned with scroll-padding-top). Stable for adjacent sections; order must
 * match top-to-bottom order on the page.
 */
export function useActiveNavSection(
  sectionIdsTopToBottom: readonly string[]
): string {
  const [active, setActive] = useState(sectionIdsTopToBottom[0] ?? "");

  useEffect(() => {
    function update() {
      const raw = parseFloat(
        getComputedStyle(document.documentElement).scrollPaddingTop
      );
      const anchor = (Number.isFinite(raw) ? raw : 88) + 12;

      let current = sectionIdsTopToBottom[0] ?? "";
      for (const id of sectionIdsTopToBottom) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= anchor) {
          current = id;
        }
      }

      setActive((prev) => (prev === current ? prev : current));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIdsTopToBottom]);

  return active;
}
