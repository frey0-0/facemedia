import { useEffect, useRef, useState } from "react";

// Returns [ref, inView]. `once` keeps it true after the first intersection.
export function useInView({ threshold = 0.15, once = true, rootMargin = "0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setInView(true); return; }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setInView(true); if (once) io.disconnect(); }
        else if (!once) setInView(false);
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once, rootMargin]);
  return [ref, inView];
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
