"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { events } from "@/lib/data";

/** Zoznam typov akcií. Pri hover sa pri kurzore ukáže fotka z danej akcie. */
export default function EventsList() {
  const [active, setActive] = useState<number | null>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const list = listRef.current;
    const photo = photoRef.current;
    if (!list || !photo) return;
    const rect = list.getBoundingClientRect();
    photo.style.translate = `${e.clientX - rect.left}px ${e.clientY - rect.top}px`;
  };

  return (
    <ol
      ref={listRef}
      onMouseMove={onMove}
      onMouseLeave={() => setActive(null)}
      className="relative m-0 list-none border-b border-ink/12 p-0"
    >
      {events.map((e, i) => (
        <li
          key={e.title}
          onMouseEnter={() => setActive(i)}
          className="group grid gap-x-[clamp(16px,3vw,48px)] gap-y-2 border-t border-ink/12 py-[clamp(22px,3vw,36px)] md:grid-cols-2 md:items-center"
        >
          <h3 className="m-0 font-serif text-[clamp(26px,3.4vw,48px)] font-black uppercase leading-[1.05] transition-[color,translate] duration-400 ease-out-soft group-hover:translate-x-3 group-hover:text-red">
            {e.title}
          </h3>
          <p className="m-0 max-w-[460px] text-base leading-[1.6] text-body">{e.text}</p>
        </li>
      ))}

      {/* Plávajúca fotka – iba pre myš, na dotykových zariadeniach sa nezobrazí. */}
      <div
        ref={photoRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-10 max-md:hidden"
      >
        {events.map((e, i) => (
          <div
            key={e.photo}
            className={`absolute aspect-[4/3] w-[clamp(220px,22vw,320px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[18px] shadow-[0_24px_60px_rgba(10,10,10,0.3)] transition-[opacity,scale,rotate] duration-400 ease-out-soft ${
              active === i ? "scale-100 -rotate-3 opacity-100" : "scale-75 rotate-0 opacity-0"
            }`}
          >
            <Image src={e.photo} alt="" fill sizes="320px" className="object-cover" />
          </div>
        ))}
      </div>
    </ol>
  );
}
