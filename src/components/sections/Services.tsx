import { Container, Eyebrow, Flower, Icon, SectionTitle } from "../ui";
import EventsList from "../EventsList";
import EdgeOrnament from "../EdgeOrnament";
import { icons, PHONE, PHONE_HREF } from "@/lib/data";

export default function Services() {
  return (
    <section id="co-robime" className="relative overflow-x-clip py-[clamp(72px,10vw,140px)]">
      <EdgeOrnament className="top-[clamp(24px,4vw,64px)]" />
      <Container className="relative z-1 flex flex-col gap-[clamp(40px,6vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow>Čo robíme</Eyebrow>
            <SectionTitle>
              Hráme tam,
              <br />
              <span className="text-red">kde sa oslavuje</span>
            </SectionTitle>
          </div>
          <p className="m-0 max-w-[360px] text-lg leading-[1.65] text-body">
            Malá svadba aj veľké námestie. Všade hráme naplno - od prvej piesne až do rána.
          </p>
        </div>

        <EventsList />

        <div className="flex items-center justify-center gap-[clamp(12px,2vw,24px)] text-center">
          <Flower className="size-6 flex-none" />
          <p className="m-0 font-serif text-[clamp(18px,1.9vw,26px)] font-bold italic leading-[1.4] md:whitespace-nowrap">
            Kde hrá KALAP, tam sa tancuje.
          </p>
          <Flower className="size-6 flex-none" />
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-7 overflow-hidden rounded-[28px] bg-red p-[clamp(32px,5vw,64px)] text-white">
          <img
            src="/svg/flower-big.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-[60px] -right-[60px] w-[260px] opacity-14 brightness-0 invert"
          />
          <div className="relative flex flex-col gap-2.5">
            <p className="m-0 font-serif text-[clamp(26px,3.4vw,44px)] font-black uppercase leading-[1.15]">
              Chcete nás na svojej akcii?
            </p>
            <p className="m-0 text-lg opacity-90">Objednávky vybavujeme výhradne telefonicky.</p>
          </div>
          <a
            href={PHONE_HREF}
            className="relative flex h-[72px] items-center gap-3.5 rounded-full bg-white pr-8 pl-3 font-serif text-[clamp(22px,2.6vw,32px)] font-black no-underline transition duration-250 hover:-translate-y-0.5"
          >
            <span className="grid size-[50px] place-items-center rounded-full bg-red text-white">
              <Icon d={icons.phone} size={24} stroke={1.8} />
            </span>
            {PHONE}
          </a>
        </div>
      </Container>
    </section>
  );
}
