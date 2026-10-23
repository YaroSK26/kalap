"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { Branch, Icon } from "./ui";
import { icons, menuItems, PHONE, PHONE_HREF, socials } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);
  const lenis = useLenis();
  // Mimo úvodnej stránky (napr. 404) vedú odkazy na sekcie späť na úvod.
  const base = usePathname() === "/" ? "" : "/";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  // Úplne hore je navbar bez pozadia, po scrollovaní dostane pozadie.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Otvorené menu: stránka sa nescrolluje, fokus ide na prvý odkaz a Tab ostáva v menu.
  // Po zatvorení sa fokus vráti na tlačidlo Menu.
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const button = menuButtonRef.current;
    const focusables = () =>
      [
        button,
        ...(panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []),
      ].filter(Boolean) as HTMLElement[];
    focusables()[1]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const items = focusables();
      const i = items.indexOf(document.activeElement as HTMLElement);
      const next = e.shiftKey
        ? i <= 0
          ? items.length - 1
          : i - 1
        : (i + 1) % items.length;
      e.preventDefault();
      items[next].focus();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
      button?.focus();
    };
  }, [open, lenis]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-60 px-3 transition-[padding] duration-300 ${scrolled ? "pt-1.5" : "pt-3"}`}
      >
        <nav
          aria-label="Hlavná navigácia"
          className={`grid w-full grid-cols-[1fr_auto] items-center gap-3 rounded-full py-2 pr-[clamp(8px,1.6vw,20px)] pl-[clamp(14px,2.6vw,36px)] transition-[background-color,box-shadow] duration-300 md:grid-cols-[1fr_auto_1fr] ${
            scrolled && !open
              ? "bg-ink/90 shadow-[0_10px_34px_rgba(10,10,10,0.25),0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-[14px]"
              : "bg-transparent"
          }`}
        >
          <a
            href={`${base}#top`}
            aria-label="KALAP - na začiatok"
            className={`flex w-fit items-center no-underline ${open ? "max-sm:invisible" : ""}`}
          >
            {/* Hore na stránke je logo väčšie. Zväčšuje sa cez scale, takže ostatné prvky navbaru sa nehýbu. */}
            <img
              src="/img/logo.png"
              alt="KALAP"
              className={`block h-[clamp(54px,7vw,86px)] w-auto origin-top-left object-contain transition-transform duration-400 ease-out ${
                scrolled ? "scale-100" : "scale-[1.3] md:scale-[1.6]"
              }`}
            />
          </a>
          <div
            className={`flex items-center gap-1.5 transition-opacity duration-300 max-md:hidden ${open ? "invisible opacity-0" : ""}`}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className="grid size-11 place-items-center rounded-full text-white transition-colors duration-200 hover:bg-red hover:text-white"
              >
                <Icon d={s.d} />
              </a>
            ))}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              href={`${base}#merch`}
              className={`flex h-[clamp(48px,5vw,64px)] items-center gap-3 whitespace-nowrap rounded-full pr-2 pl-[clamp(16px,1.8vw,24px)] text-[clamp(15px,1.3vw,17px)] font-semibold text-white no-underline transition duration-250 hover:-translate-y-0.5 hover:text-white ${open ? "bg-ink hover:bg-ink/80" : "bg-red hover:bg-red-dark"}`}
            >
              <span>E-shop</span>
              <span className="grid size-[clamp(36px,3.4vw,44px)] place-items-center rounded-full bg-white text-red">
                <Icon d={icons.arrowUR} size={18} stroke={2} />
              </span>
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="k-menu"
              className="flex h-[clamp(48px,5vw,64px)] cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full border-0 bg-white pr-[clamp(18px,1.8vw,26px)] pl-[clamp(14px,1.5vw,20px)] text-[clamp(15px,1.3vw,17px)] font-semibold text-ink transition duration-250 hover:-translate-y-0.5 hover:bg-cream"
            >
              <Icon d={open ? icons.x : icons.list} size={22} stroke={2} />
              <span>{open ? "Zavrieť" : "Menu"}</span>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <>
          <div
            onClick={close}
            aria-hidden="true"
            className="fixed inset-0 z-40 animate-k-fade bg-ink/60 backdrop-blur-sm"
          />
          {/* Panel začína pod navbarom. Keď sa nezmestí na výšku, dá sa v ňom scrollovať. */}
          <aside
            ref={panelRef}
            id="k-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            data-lenis-prevent
            className="fixed inset-y-0 right-0 z-50 flex h-svh w-full animate-k-slide flex-col justify-between gap-[clamp(16px,3vh,32px)] overflow-x-hidden overflow-y-auto bg-red px-[clamp(24px,5vw,80px)] pt-[clamp(112px,16vh,150px)] pb-[clamp(20px,4vh,48px)] text-white sm:w-[78%] sm:min-w-[440px]"
          >
            <Branch
              color="#FFFFFF"
              className="pointer-events-none absolute right-[-40px] bottom-[16vh] w-[clamp(200px,26vw,340px)] -scale-x-100 -rotate-12 opacity-16"
            />
            <nav aria-label="Sekcie" className="relative flex flex-col">
              {menuItems.map((m) => (
                <a
                  key={m.href}
                  href={base + m.href}
                  onClick={close}
                  style={{ animationDelay: m.delay }}
                  className="group flex animate-k-in items-center gap-[clamp(12px,2vw,24px)] border-b border-white/28 py-[clamp(6px,1.4vh,14px)] text-white no-underline transition-transform duration-400 ease-out-soft hover:translate-x-3.5 hover:text-white"
                >
                  <span className="min-w-7 text-[13px] font-semibold tracking-[0.08em] opacity-75">
                    {m.n}
                  </span>
                  <svg
                    viewBox="0 0 60 60"
                    aria-hidden="true"
                    className="h-[clamp(20px,3.6vh,30px)] w-0 opacity-0 transition-all duration-400 ease-out-soft group-hover:w-[clamp(20px,3.6vh,30px)] group-hover:opacity-100"
                  >
                    <g fill="#FFFFFF">
                      <circle cx="30" cy="13" r="11" />
                      <circle cx="46.2" cy="24.7" r="11" />
                      <circle cx="40" cy="43.8" r="11" />
                      <circle cx="20" cy="43.8" r="11" />
                      <circle cx="13.8" cy="24.7" r="11" />
                      <circle cx="30" cy="30" r="15" />
                    </g>
                    <circle cx="30" cy="30" r="9" fill="#B8191B" />
                    <circle cx="30" cy="30" r="4.5" fill="#0A0A0A" />
                  </svg>
                  <span className="font-serif text-[clamp(24px,min(4.4vw,5.6vh),56px)] font-black uppercase leading-[1.08] tracking-[0.01em]">
                    {m.label}
                  </span>
                </a>
              ))}
            </nav>
            <div className="relative flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] opacity-80">
                  Kontakt
                </span>
                <a
                  href={PHONE_HREF}
                  className="font-serif text-[clamp(22px,min(2.6vw,4vh),34px)] font-black text-white no-underline transition-colors duration-300 hover:text-ink"
                >
                  {PHONE}
                </a>
              </div>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border-[1.5px] border-white/50 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-red"
                  >
                    <Icon d={s.d} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
