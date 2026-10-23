import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { OperatorInfo } from "@/components/legal/operator";

export const metadata: Metadata = { title: "Ochrana osobných údajov (GDPR) | KALAP" };

export default function Page() {
  return (
    <LegalPage title="Ochrana osobných údajov" updated="23. 10. 2026">
      <h2>Kto spracúva vaše údaje</h2>
      <OperatorInfo />

      <h2>Aké údaje spracúvame</h2>
      <p>
        Na webe nie je žiadny formulár. Vaše údaje dostaneme len vtedy, keď nám zavoláte alebo napíšete. Ide najmä o
        meno, telefónne číslo, e-mail a údaje o akcii (dátum, miesto, typ akcie).
      </p>

      <h2>Prečo údaje spracúvame</h2>
      <ul>
        <li>aby sme vám mohli odpovedať a dohodnúť vystúpenie,</li>
        <li>aby sme mohli splniť dohodu o vystúpení (zmluvu),</li>
        <li>aby sme splnili povinnosti podľa zákona (napr. účtovníctvo).</li>
      </ul>
      <p>Právny základ je článok 6 ods. 1 písm. b) a c) nariadenia GDPR.</p>

      <h2>Ako dlho údaje uchovávame</h2>
      <p>
        Údaje o dopyte uchovávame najviac 1 rok, ak z neho nevznikne objednávka. Údaje k objednávke uchovávame tak
        dlho, ako to vyžaduje zákon.
      </p>

      <h2>Komu údaje dávame</h2>
      <p>Vaše údaje nepredávame a nedávame ich ďalej, ak to nevyžaduje zákon.</p>

      <h2>Vaše práva</h2>
      <p>
        Máte právo vedieť, aké údaje o vás máme, dať ich opraviť alebo vymazať, obmedziť ich spracúvanie a namietať
        proti nemu. Stačí nám napísať alebo zavolať. Môžete sa obrátiť aj na Úrad na ochranu osobných údajov SR
        (dataprotection.gov.sk).
      </p>
    </LegalPage>
  );
}
