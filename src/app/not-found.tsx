import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Branch, Icon } from "@/components/ui";
import { icons } from "@/lib/data";

export const metadata: Metadata = { title: "Stránka sa nenašla | KALAP" };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="obsah" className="h-svh min-h-[560px] p-3">
        <div className="relative flex h-full flex-col items-center justify-center gap-[clamp(16px,3vh,28px)] overflow-hidden rounded-[28px] bg-[radial-gradient(130%_75%_at_50%_100%,#B8191B_0%,#6e0f10_42%,#0A0A0A_78%)] px-5 text-center text-white">
          <div className="flex items-center gap-[clamp(4px,1.6vw,24px)]">
            <Branch className="w-[clamp(56px,10vw,140px)] -scale-x-100" />
            <p className="m-0 font-serif text-[clamp(96px,22vw,260px)] font-black leading-[0.9]">
              404
            </p>
            <Branch className="w-[clamp(56px,10vw,140px)]" />
          </div>
          <h1 className="m-0 font-serif text-[clamp(22px,3.4vw,40px)] font-black uppercase leading-[1.15]">
            Túto pieseň nepoznáme
          </h1>
          <p className="m-0 max-w-[460px] text-lg leading-[1.6] text-white/80">
            Stránka, ktorú hľadáte, neexistuje. Možno sa presunula, alebo je v
            odkaze preklep.
          </p>
          <Link
            href="/"
            className="flex h-[58px] items-center gap-3 rounded-full bg-white pr-7 pl-[22px] text-[17px] font-semibold text-ink no-underline transition duration-250 hover:-translate-y-0.5 hover:bg-cream hover:text-ink"
          >
            <Icon d={icons.music} size={22} stroke={1.8} />
            Späť na úvod
          </Link>
        </div>
      </main>
    </>
  );
}
