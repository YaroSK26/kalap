"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import "lenis/dist/lenis.css";

/**
 * Plynulé scrollovanie (Lenis) pre celú stránku. Odkazy na #sekcie scrolluje tiež Lenis.
 * Kto má v systéme zapnuté „menej pohybu“, scrolluje normálne.
 */
export default function SmoothScroll() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return <ReactLenis root options={{ lerp: 0.1, anchors: true, autoRaf: true }} />;
}
