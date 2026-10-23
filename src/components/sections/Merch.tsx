"use client";

import { useEffect, useRef } from "react";
import { BaseballCap, Coffee, CowboyHat, Hoodie, Tote, TShirt } from "@phosphor-icons/react";
import { Container, Eyebrow, SectionTitle } from "../ui";
import { merch } from "@/lib/data";

const merchIcons = {
  tshirt: TShirt,
  hoodie: Hoodie,
  cap: BaseballCap,
  tote: Tote,
  hat: CowboyHat,
  mug: Coffee,
};

/**
 * Sekcia sa „zastaví“ a produkty sa posúvajú do strany podľa scrollu stránky.
 * Až keď prejde posledný produkt, stránka pokračuje ďalej.
 */
export default function Merch() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let distance = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      const top = section.getBoundingClientRect().top;
      const progress = distance ? Math.min(1, Math.max(0, -top / distance)) : 0;
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };
    const measure = () => {
      distance = Math.max(0, track.scrollWidth - window.innerWidth);
      // Výška sekcie = obrazovka + dĺžka posunu do strany.
      section.style.height = `${window.innerHeight + distance}px`;
      update();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section ref={sectionRef} id="merch" className="relative">
      <div className="sticky top-0 flex h-svh flex-col justify-center gap-[clamp(24px,4vh,56px)] overflow-hidden pt-24 pb-8">
        <Container className="w-full">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow>Merch</Eyebrow>
            <div className="flex flex-wrap items-center gap-[18px]">
              <SectionTitle>KALAP merch</SectionTitle>
              <span className="inline-flex h-10 -rotate-4 items-center rounded-full bg-red px-[18px] text-sm font-bold uppercase tracking-[0.14em] text-white">
                Čoskoro
              </span>
            </div>
          </div>
        </Container>

        <div
          ref={trackRef}
          className="flex w-max gap-[clamp(14px,2vw,24px)] px-[max(clamp(16px,4vw,48px),calc((100vw-1184px)/2))] will-change-transform"
        >
          {merch.map((p) => {
            const ProductIcon = merchIcons[p.icon];
            return (
              <article
                key={p.name}
                className="flex w-[min(clamp(260px,30vw,400px),calc((100svh-340px)*0.8))] min-w-[220px] flex-col gap-4"
              >
                <div
                  className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[22px]"
                  style={{ background: p.bg }}
                >
                  <img
                    src="/svg/flower-big.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute -right-[18%] -bottom-[14%] w-[62%]"
                    style={{ opacity: p.orn }}
                  />
                  <ProductIcon aria-hidden="true" weight="light" color={p.fg} className="relative size-[42%]" />
                  <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-red">
                    Čoskoro
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="m-0 font-serif text-[22px] font-black uppercase">{p.name}</h3>
                  <span className="text-[15px] text-muted">[cena]</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
