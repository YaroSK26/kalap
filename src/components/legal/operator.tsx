import { PHONE } from "@/lib/data";

/**
 * Údaje o prevádzkovateľovi – rovnaké na všetkých právnych stránkach.
 * TODO: doplniť skutočné údaje (meno alebo firma, IČO, adresa, e-mail).
 */
const OPERATOR = {
  name: "[Meno a priezvisko / obchodné meno]",
  id: "[IČO]",
  address: "[Adresa]",
  email: "[e-mail]",
};

export function OperatorInfo() {
  return (
    <p>
      {OPERATOR.name}, IČO: {OPERATOR.id}, {OPERATOR.address}
      <br />
      E-mail: {OPERATOR.email}, telefón: {PHONE}
    </p>
  );
}
