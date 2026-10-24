"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const MIN_MS = 1200; // loader ostane aspoň takto dlho, aby len nebliklo
const MAX_MS = 5000; // pri pomalom pripojení stránku aj tak ukážeme
const EXIT_MS = 900; // ako dlho sa opona dvíha

/**
 * Úvodný loader: opona s logom a gradientom ako v hero, pod ním sa plní čiara.
 * Kým je na obrazovke, animácie stránky stoja (trieda k-loading na <html>) a scroll je zastavený.
 * Keď sa stránka načíta, opona odíde hore a animácie hero sa spustia.
 */
export default function Loader() {
  const [state, setState] = useState<"loading" | "exit" | "gone">("loading");
  const lenis = useLenis();

  useEffect(() => {
    const start = performance.now();
    let timer: ReturnType<typeof setTimeout>;

    const finish = () => {
      clearTimeout(timer);
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      timer = setTimeout(() => {
        document.documentElement.classList.remove("k-loading");
        setState("exit");
        timer = setTimeout(() => setState("gone"), EXIT_MS);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const fallback = setTimeout(finish, MAX_MS);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (state === "loading") lenis.stop();
    else lenis.start();
  }, [lenis, state]);

  if (state === "gone") return null;

  return (
    <div
      role="status"
      aria-label="Načítava sa stránka"
      className={`k-loader fixed inset-0 z-200 grid place-items-center bg-ink bg-[radial-gradient(130%_75%_at_50%_100%,#B8191B_0%,#6e0f10_42%,#0A0A0A_78%)] transition-transform duration-900 ease-panel ${
        state === "exit" ? "-translate-y-full" : ""
      }`}
    >
      <div
        className={`flex flex-col items-center gap-8 transition duration-500 ${
          state === "exit" ? "-translate-y-6 opacity-0" : ""
        }`}
      >
        <img src="/img/logo.png" alt="" className="w-[clamp(130px,18vw,190px)] animate-k-loader-in" />
        <span aria-hidden="true" className="relative h-[3px] w-[clamp(120px,16vw,180px)] overflow-hidden rounded-full bg-white/20">
          <span className="absolute inset-0 origin-left animate-k-loader-bar rounded-full bg-white" />
        </span>
      </div>
    </div>
  );
}
