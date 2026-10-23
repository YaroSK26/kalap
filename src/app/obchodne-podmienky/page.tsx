import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { OperatorInfo } from "@/components/legal/operator";

export const metadata: Metadata = { title: "Obchodné podmienky | KALAP" };

export default function Page() {
  return (
    <LegalPage title="Obchodné podmienky" updated="23. 10. 2026">
      <h2>Kto sme</h2>
      <OperatorInfo />

      <h2>Objednávka vystúpenia</h2>
      <p>
        Vystúpenie si objednáte telefonicky. Spolu sa dohodneme na dátume, mieste, čase a cene. Objednávka platí, keď
        ju obe strany potvrdia.
      </p>

      <h2>Cena a platba</h2>
      <p>[Doplniť: ako sa určuje cena, či sa platí záloha, kedy a ako sa platí zvyšok.]</p>

      <h2>Zrušenie vystúpenia</h2>
      <p>[Doplniť: dokedy a za akých podmienok môže zákazník alebo kapela vystúpenie zrušiť.]</p>

      <h2>Merch</h2>
      <p>Predaj merchu ešte nezačal. Podmienky predaja doplníme, keď spustíme e-shop.</p>

      <h2>Záverečné ustanovenia</h2>
      <p>
        Vzťahy, ktoré tieto podmienky neupravujú, sa riadia právom Slovenskej republiky. Tieto podmienky môžeme
        zmeniť. Platí verzia zverejnená na tomto webe v deň objednávky.
      </p>
    </LegalPage>
  );
}
