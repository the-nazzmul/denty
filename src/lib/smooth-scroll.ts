/** Ease in-out (smooth start and end — feels slower than browser default `smooth`). */
function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

let activeFrame: number | null = null;

/**
 * Scrolls so the target element aligns with the viewport, over `duration` ms.
 * Cancels any in-progress programmatic scroll from this module.
 */
export function smoothScrollToElement(
  element: HTMLElement,
  duration = 850
): void {
  if (activeFrame !== null) {
    cancelAnimationFrame(activeFrame);
    activeFrame = null;
  }

  const pad = parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop
  );
  const offset = Number.isFinite(pad) ? pad : 88;

  const startY = window.scrollY;
  const rect = element.getBoundingClientRect();
  const targetY = startY + rect.top - offset;
  const distance = targetY - startY;
  const startTime = performance.now();

  function tick(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutQuad(t);
    window.scrollTo(0, startY + distance * eased);
    if (t < 1) {
      activeFrame = requestAnimationFrame(tick);
    } else {
      activeFrame = null;
    }
  }

  activeFrame = requestAnimationFrame(tick);
}

export function smoothScrollToHash(hash: string, duration = 850): boolean {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return false;
  smoothScrollToElement(el, duration);
  return true;
}
