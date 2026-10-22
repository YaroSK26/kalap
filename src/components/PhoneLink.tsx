"use client";

import { useEffect, useRef, useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/data";

/** Veľké číslo s ručne kresleným podčiarknutím - nakreslí sa pri zobrazení a znova pri hover. */
export default function PhoneLink() {
  const ref = useRef<HTMLAnchorElement>(null);
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
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={PHONE_HREF}
      className="group relative inline-block whitespace-nowrap pb-[0.18em] font-serif text-[clamp(44px,10vw,156px)] font-black leading-none text-white no-underline transition-transform duration-400 ease-out-soft hover:-translate-y-1 hover:text-white"
    >
      {PHONE}
      <svg
        viewBox="0 0 600 40"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={`k-underline absolute inset-x-[-2%] bottom-[-0.08em] h-[0.26em] w-[104%] overflow-visible ${inView ? "is-in" : ""}`}
      >
        <path
          pathLength={1}
          d="M6 26 C90 10 170 34 250 20 C330 6 410 30 490 18 C530 12 565 14 594 20"
          fill="none"
          stroke="#B8191B"
          strokeWidth={9}
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
}
