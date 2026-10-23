import Image from "next/image";
import { Container, Eyebrow, SectionTitle } from "../ui";
import { Reveal } from "../Reveal";
import { members } from "@/lib/data";

type Member = (typeof members)[number];

const corners = ["-top-[11px] -left-[11px]", "-top-[11px] -right-[11px]", "-bottom-[11px] -left-[11px]", "-bottom-[11px] -right-[11px]"];

function MemberCard({ m, big, className = "" }: { m: Member; big?: boolean; className?: string }) {
  return (
    <Reveal y={48} className={className}>
      <article className="group flex flex-col gap-4">
        <div className={`relative overflow-hidden rounded-[22px] bg-cream ${big ? "aspect-[4/5]" : "aspect-square"}`}>
          <Image
            src={m.img}
            alt={m.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-900 ease-out-soft group-hover:scale-106"
            style={{ objectPosition: m.pos }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-3.5 rounded-[14px] border-[1.5px] border-white/85 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
          >
            {corners.map((c) => (
              <img key={c} src="/svg/flower.svg" alt="" className={`absolute w-[22px] ${c}`} />
            ))}
          </div>
          {/* Meno a nástroj priamo vo fotke. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(10,10,10,0.8),rgba(10,10,10,0))]"
          />
          <div className="absolute bottom-[clamp(18px,2vw,28px)] left-[clamp(18px,2vw,28px)] flex flex-col items-start gap-2 text-white">
            <span className="w-fit rounded-full bg-red px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">{m.role}</span>
            <h3 className="m-0 font-serif text-[clamp(28px,3vw,40px)] font-black uppercase leading-none">{m.name}</h3>
          </div>
        </div>
        <p className="m-0 text-base leading-[1.6] text-body">{m.text}</p>
      </article>
    </Reveal>
  );
}

export default function About() {
  const [david, oliver, adrian, kubo] = members;

  return (
    <section id="o-nas" className="py-[clamp(72px,10vw,140px)]">
      <Container className="flex flex-col gap-[clamp(40px,6vw,72px)]">
        <div className="flex flex-col items-center gap-[18px] text-center">
          <Eyebrow>O nás</Eyebrow>
          <SectionTitle>
            Štyria <span className="text-red">kamaráti</span>
          </SectionTitle>
        </div>

        {/* Kapela okolo nápisu KALAP: vľavo husle a akordeón, vpravo gitara a bicie. */}
        <div className="grid gap-x-[clamp(16px,2.4vw,36px)] gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col items-center gap-6 text-center sm:col-span-2 lg:sticky lg:top-40 lg:col-span-4 lg:mt-48 lg:col-start-5 lg:row-start-1 lg:self-start">
            <Image
              src="/img/logo-dark.png"
              alt="KALAP - hudobná skupina"
              width={1135}
              height={1246}
              sizes="(max-width: 1024px) 60vw, 25vw"
              className="h-auto w-[min(100%,240px)]"
            />
            <p className="m-0 text-lg leading-[1.6] text-[#3a3a3a]">
              Štyria kamaráti, ktorých spojila ľudovka. Hráme tak, že na parket vytiahneme starkú aj najmladších.
            </p>
            <p className="m-0 text-[13px] font-bold uppercase tracking-[0.16em] text-red">
              Husle · Akordeón · Gitara · Bicie
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-1 lg:row-start-1">
            <MemberCard m={david} big />
            <MemberCard m={oliver} className="lg:ml-auto lg:w-4/5" />
          </div>

          <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:pt-40">
            <MemberCard m={adrian} className="lg:w-4/5" />
            <MemberCard m={kubo} big />
          </div>
        </div>
      </Container>
    </section>
  );
}
