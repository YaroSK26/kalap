import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { OperatorInfo } from "@/components/legal/operator";

export const metadata: Metadata = { title: "Zásady používania cookies | KALAP" };

export default function Page() {
  return (
    <LegalPage title="Zásady používania cookies" updated="23. 10. 2026">
      <h2>Čo sú cookies</h2>
      <p>
        Cookies sú malé súbory, ktoré si web uloží vo vašom prehliadači. Pomáhajú napríklad zapamätať si nastavenia
        alebo merať návštevnosť.
      </p>

      <h2>Aké cookies používame</h2>
      <p>Tento web nepoužíva cookies na meranie návštevnosti ani na reklamu. Neukladáme nič, čo by vás sledovalo.</p>

      <h2>Odkazy na iné weby</h2>
      <p>
        Na webe sú odkazy na Instagram, Facebook, YouTube a TikTok. Keď na ne kliknete, otvorí sa ich web a ten môže
        používať vlastné cookies. Tie sa riadia pravidlami danej služby.
      </p>

      <h2>Ako cookies vypnúť</h2>
      <p>Cookies môžete kedykoľvek zmazať alebo zakázať v nastaveniach svojho prehliadača.</p>

      <h2>Kontakt</h2>
      <OperatorInfo />
    </LegalPage>
  );
}
