import Link from "next/link";
import { Icon } from "../ui";
import { legalPages, menuItems, socials } from "@/lib/data";

const colTitle = "mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red";
const link = "py-1.5 text-[15px] text-white/85 no-underline hover:text-red";

/** `base` = "/" na podstránkach, aby odkazy na sekcie viedli späť na úvodnú stránku. */
export default function Footer({ base = "" }: { base?: string }) {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-7xl justify-center px-[clamp(16px,4vw,48px)] pt-10">
        <img src="/svg/divider.svg" alt="" aria-hidden="true" className="w-[clamp(200px,26vw,320px)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 px-[clamp(16px,4vw,48px)] pt-12 pb-8">
        <div className="flex flex-col gap-4">
          <p className="m-0 max-w-[280px] text-[15px] leading-[1.6] text-white/85">
            Štyria chalani z Košíc, ktorí hrajú ľudovku na svadbách, plesoch, oslavách a festivaloch.
          </p>
        </div>

        <nav aria-label="Pätička - sekcie" className="flex flex-col gap-1">
          <span className={colTitle}>Navigácia</span>
          {menuItems.map((m) => (
            <a key={m.href} href={base + m.href} className={link}>
              {m.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-1">
          <span className={colTitle}>Sledujte nás</span>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" className={`flex items-center gap-2.5 ${link}`}>
              <Icon d={s.d} size={18} />
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <span className={colTitle}>Právne informácie</span>
          {legalPages.map((l) => (
            <Link key={l.href} href={l.href} className={link}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/10 px-[clamp(16px,4vw,48px)] pt-5 pb-8 text-[13px] text-white/85">
        <span>© 2026 KALAP. Všetky práva vyhradené.</span>
        <span>
          Web vytvoril{" "}
          <a
            href="https://www.jaroslavbarabas.sk/"
            target="_blank"
            rel="noopener"
            className="font-semibold text-red underline decoration-2 underline-offset-4 hover:text-white"
          >
            Jaroslav Barabáš
          </a>
        </span>
      </div>
    </footer>
  );
}
