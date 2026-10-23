import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "../sections/Footer";
import { Container, Eyebrow, Icon } from "../ui";

/** Spoločný vzhľad právnych stránok: jednoduchá horná lišta, text a pätička. */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <header className="bg-ink px-3 py-3">
        <div className="flex items-center justify-between py-2 pr-2 pl-[clamp(14px,2.6vw,36px)]">
          <Link href="/" aria-label="KALAP - úvodná stránka" className="no-underline">
            <img src="/img/logo.png" alt="" className="block h-[clamp(60px,7vw,86px)] w-auto" />
          </Link>
          <Link
            href="/"
            className="flex h-[52px] items-center gap-2 rounded-full bg-white px-5 text-[15px] font-semibold text-ink no-underline transition duration-250 hover:-translate-y-0.5 hover:bg-cream hover:text-ink"
          >
            <Icon d="M19 12H5M11 6l-6 6 6 6" size={18} stroke={2} />
            Späť na web
          </Link>
        </div>
      </header>
      <main id="obsah" className="py-[clamp(48px,8vw,112px)]">
        <Container className="max-w-[820px]">
          <div className="mb-10 flex flex-col gap-4">
            <Eyebrow>Právne informácie</Eyebrow>
            <h1 className="m-0 font-serif text-[clamp(30px,5vw,56px)] font-black uppercase leading-[1.05]">{title}</h1>
            <p className="m-0 text-[15px] text-muted">Posledná zmena: {updated}</p>
          </div>
          <div className="k-legal flex flex-col gap-4 text-[17px] leading-[1.7] text-body">{children}</div>
        </Container>
      </main>
      <Footer base="/" />
    </>
  );
}
