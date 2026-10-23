"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * CSS animácie vo vnútri (animate-k-in, kreslenie vetvičky…) čakajú,
 * kým obsah príde do obrazovky. Potom sa spustia raz.
 */
export default function InView({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`k-wait ${inView ? "is-in" : ""} ${className}`}>
      {children}
    </div>
  );
}
