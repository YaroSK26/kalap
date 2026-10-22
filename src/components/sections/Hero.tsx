import Image from "next/image";
import { Branch, Flower, Icon } from "../ui";
import { icons, PHONE_HREF } from "@/lib/data";

/** Veľký ľudový kvet s dvoma malými a vetvičkou – ozdoba na boku hero. */
function FolkCluster({ className }: { className: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute aspect-square w-[clamp(130px,19vw,320px)] ${className}`}>
      <img
        src="/svg/flower-big.svg"
        alt=""
        className="absolute top-[18%] left-0 w-[66%] animate-[spin_60s_linear_infinite]"
      />
      <img src="/svg/flower.svg" alt="" className="absolute top-0 left-[58%] w-[26%] animate-k-pop" />
      <img src="/svg/flower.svg" alt="" className="absolute top-[72%] left-[62%] w-[20%] animate-k-pop" />
      <Branch delay={0.6} className="absolute top-[30%] left-[48%] w-[56%] -rotate-12" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top">
      {/* Hero aj s navbarom má presne výšku obrazovky. */}
      <div className="h-svh min-h-[600px] p-3">
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[radial-gradient(130%_75%_at_50%_100%,#B8191B_0%,#6e0f10_42%,#0A0A0A_78%)]">
          {/* Nadpis ako v logu: vetvičky okolo, KALAP v strede, pod ním „Hudobná skupina“. */}
          <div className="absolute inset-x-0 top-[clamp(96px,14vh,140px)] flex animate-k-in flex-col items-center gap-[clamp(6px,1.2vh,14px)] px-4 text-center text-white">
            <div className="flex items-center justify-center gap-[clamp(4px,1.6vw,24px)]">
              <Branch className="w-[clamp(56px,min(10vw,14vh),150px)] -scale-x-100" />
              <h1 className="m-0 font-serif text-[clamp(64px,min(15vw,19vh),220px)] font-black leading-[0.9] tracking-[0.01em]">
                KALAP
              </h1>
              <Branch className="w-[clamp(56px,min(10vw,14vh),150px)]" />
            </div>
            <div className="flex items-center gap-3">
              <Flower className="size-[clamp(14px,2vh,20px)]" />
              <span className="font-serif text-[clamp(16px,min(2vw,2.8vh),28px)] font-bold tracking-[0.06em]">
                Hudobná skupina · Košice a okolie
              </span>
              <Flower className="size-[clamp(14px,2vh,20px)]" />
            </div>
          </div>

          {/* Ľudové kvety po stranách. */}
          <FolkCluster className="top-[38%] -left-[clamp(40px,4vw,70px)]" />
          <FolkCluster className="top-[38%] -right-[clamp(40px,4vw,70px)] -scale-x-100" />

          {/* Fotka bez pozadia stojí na spodku hero. Okraje fotky sú orezané, preto ich stlmíme do stratena. */}
          <div className="absolute bottom-0 left-1/2 aspect-[3/2] h-[68%] max-w-none -translate-x-1/2 [mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)]">
            <Image
              src="/img/hero-band.png"
              alt="Skupina KALAP: Kubo s bubnom, Oliver s akordeónom, Dávid s husľami a Adrián s gitarou"
              fill
              priority
              sizes="(max-aspect-ratio: 3/2) 100vh, 70vw"
              className="object-contain object-bottom"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-[linear-gradient(to_top,rgba(184,25,27,0.75),rgba(184,25,27,0))]"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-9 px-[clamp(16px,4vw,48px)] pt-[clamp(40px,6vw,80px)] pb-[clamp(16px,2vw,24px)] text-center">
        <div className="flex w-full items-center justify-center gap-[clamp(8px,2vw,28px)]">
          <Branch className="w-[clamp(56px,9vw,130px)] -scale-x-100 rotate-6" />
          <p
            className="m-0 max-w-[820px] animate-k-in font-serif text-[clamp(28px,4.4vw,60px)] font-black uppercase leading-[1.12]"
            style={{ animationDelay: "0.2s" }}
          >
            4 chlapci, jedna vášeň
            <br />
            <span className="text-red">ľudová hudba!</span>
          </p>
          <Branch className="w-[clamp(56px,9vw,130px)] -rotate-6" />
        </div>

        <a
          href={PHONE_HREF}
          className="flex h-[58px] animate-k-in items-center gap-3 rounded-full bg-red pr-7 pl-[22px] text-[17px] font-semibold text-white no-underline transition duration-250 hover:-translate-y-0.5 hover:bg-red-dark hover:text-white"
          style={{ animationDelay: "0.35s" }}
        >
          <Icon d={icons.phone} size={22} stroke={1.8} />
          Zavolajte nám
        </a>
      </div>
    </section>
  );
}
