import { Branch, Container, Eyebrow, Icon, SectionTitle } from "../ui";
import PhoneLink from "../PhoneLink";
import { icons, socials } from "@/lib/data";

export default function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink py-[clamp(80px,11vw,160px)] text-white">
      {/* Stopka vetvičky je za okrajom obrazovky, takže vetvička rastie zboku. */}
      <Branch className="absolute top-10 -left-[clamp(36px,4vw,64px)] w-[clamp(120px,18vw,260px)] rotate-12 max-md:opacity-50" />
      <Branch className="absolute -right-[clamp(36px,4vw,64px)] bottom-10 w-[clamp(120px,18vw,260px)] -scale-x-100 rotate-12 max-md:opacity-50" />
      <Container className="relative flex flex-col items-center gap-[clamp(24px,3vw,40px)] text-center">
        <img src="/img/logo.png" alt="Logo KALAP" className="h-auto w-[clamp(170px,20vw,280px)]" />
        <Eyebrow className="text-red">Kontakt</Eyebrow>
        <PhoneLink />
        <SectionTitle size="text-[clamp(26px,4vw,52px)]">Objednajte si KALAP</SectionTitle>
        <p className="m-0 max-w-[560px] text-lg leading-[1.6] text-white/75">
          Vy sa bavte, o parket sa postaráme my. Zahráme tak, že sa bude tancovať od prvej piesne až do rána.
        </p>
        <div className="flex items-center gap-2 rounded-full border border-red/60 bg-red/15 py-2 pr-5 pl-3.5 text-[17px] font-semibold text-white">
          <Icon d={icons.pin} color="#B8191B" stroke={2} />
          Košice a okolie
        </div>
        <div className="flex gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              className="grid size-[52px] place-items-center rounded-full bg-red text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-red"
            >
              <Icon d={s.d} size={22} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
