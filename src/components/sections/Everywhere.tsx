"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { floatingPhotos } from "@/lib/data";

const DURATION = 0.2; // ako dlho fotka letí na miesto (časť z celej sekcie)
const DRIFT = 6; // o koľko vw / vh fotka po prílete ešte pokračuje v smere letu

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Sekcia sa „zastaví“ (sticky) a fotky postupne prilietajú podľa scrollu. */
export default function Everywhere() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const progress = clamp01(-rect.top / (rect.height - window.innerHeight));
      floatingPhotos.forEach((p, i) => {
        const el = photoRefs.current[i];
        if (!el) return;
        const t = easeOut(clamp01((progress - p.start) / DURATION));
        const drift = Math.max(0, progress - p.start) * DRIFT;
        const x = (1 - t) * p.from[0] - Math.sign(p.from[0]) * drift;
        const y = (1 - t) * p.from[1] - Math.sign(p.from[1]) * drift;
        el.style.opacity = String(t);
        el.style.transform = `translate3d(${x}vw, ${y}vh, 0)`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="sme-vsade" aria-label="Sme všade" className="relative h-[360vh] bg-ink text-white">
      <div className="sticky top-0 h-svh overflow-hidden">
        {floatingPhotos.map((p, i) => (
          <div
            key={p.src}
            ref={(el) => {
              photoRefs.current[i] = el;
            }}
            className={`absolute will-change-transform ${p.front ? "z-20" : "z-0"} ${p.className}`}
          >
            <div className="relative size-full overflow-hidden rounded-[18px] shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover" />
            </div>
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-[18px] px-4 text-center">
          <img src="/svg/divider.svg" alt="" aria-hidden="true" className="w-[clamp(220px,28vw,380px)]" />
          <p className="m-0 font-serif text-[clamp(88px,17vw,260px)] font-black leading-[0.85] [text-shadow:0_10px_50px_rgba(0,0,0,0.6)]">
            KALAP
          </p>
          <p className="m-0 max-w-[560px] text-[clamp(17px,1.6vw,21px)] leading-[1.55] text-white/86 [text-shadow:0_2px_18px_rgba(0,0,0,0.8)]">
            Svadby, plesy, oslavy aj dedinské pódiá.
            <br />
            <span className="font-semibold text-red-soft">Hráme všade, kam nás zavoláte.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
