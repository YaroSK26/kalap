import Image from "next/image";
import { Branch, BRANCH_TOTAL_S, Flower, Icon } from "../ui";
import { icons, PHONE_HREF } from "@/lib/data";
import InView from "../InView";

// Poradie animácie: najprv stonka (od okraja ku kvetu), potom lístky, nakoniec kvety.
const BRANCH_DELAY = 0.3;
const FLOWERS_DELAY = BRANCH_DELAY + BRANCH_TOTAL_S;

/**
 * Ozdoba na ľavom boku hero (pravú stranu dostaneme zrkadlením celej vrstvy).
 * Kvety sedia na okraji fotky kapely a zakrývajú jej orezaný kraj.
 * Stonka začína presne v strede veľkého kvetu, druhý koniec so závitom je za okrajom hero.
 *
 * --fy = výška veľkého kvetu (na mobile tesne nad fotkou),
 * --x = ľavý okraj fotky (fotka má výšku 58 % a pomer 3:2, teda šírku 87cqh),
 * --s = veľkosť kvetov, --c = stred veľkého kvetu, --b = kde začína stonka (stred kvetu),
 * --bw = šírka vetvičky – po otočení siaha od začiatku asi 0.94 × --bw doľava, teda až za okraj.
 */
function FolkSide({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 [--fy:56%] [--s:clamp(120px,17vw,300px)] max-sm:[--fy:calc(100cqh-66.7cqw-var(--s)*0.75)] max-sm:[--s:110px] [--x:calc(50cqw-min(50cqw,43.5cqh))] [--c:max(calc(var(--x)-var(--s)*0.22),calc(var(--s)*0.05))] [--b:var(--c)] [--bw:max(var(--s),calc((var(--b)+40px)/0.85))] ${className}`}
    >
      <Branch
        delay={BRANCH_DELAY}
        reverse
        className="absolute top-[calc(var(--fy)+var(--s)*0.51-var(--bw)*0.86)] left-[calc(var(--b)-var(--bw)*0.11)] w-(--bw) origin-[11%_95.6%] -scale-x-100 -rotate-25"
      />
      <div className="absolute top-(--fy) left-[calc(var(--c)-var(--s)*0.33)] aspect-square w-(--s)">
        <div className="absolute top-[18%] left-0 w-[66%] animate-k-pop" style={{ animationDelay: `${FLOWERS_DELAY}s` }}>
          <img src="/svg/flower-big.svg" alt="" className="block w-full animate-[spin_60s_linear_infinite]" />
        </div>
        <img
          src="/svg/flower.svg"
          alt=""
          className="absolute top-[74%] left-[-6%] w-[24%] animate-k-pop max-sm:hidden"
          style={{ animationDelay: `${FLOWERS_DELAY + 0.15}s` }}
        />
        <img
          src="/svg/flower.svg"
          alt=""
          className="absolute top-[80%] left-[52%] w-[22%] animate-k-pop max-sm:hidden"
          style={{ animationDelay: `${FLOWERS_DELAY + 0.3}s` }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top">
      {/* Hero aj s navbarom má presne výšku obrazovky. Na mobile je nižšie, aby nad fotkou nebolo veľa prázdna. */}
      <div className="h-svh min-h-[600px] p-3 max-sm:h-[78svh] max-sm:min-h-[560px]">
        <div className="relative h-full w-full overflow-hidden rounded-[28px] [container-type:size] bg-[radial-gradient(130%_75%_at_50%_100%,#B8191B_0%,#6e0f10_42%,#0A0A0A_78%)]">
          {/* Nadpis ako v logu: vetvičky okolo, KALAP v strede, pod ním „Hudobná skupina“. */}
          <div className="absolute inset-x-0 top-[clamp(96px,14vh,140px)] flex max-sm:top-[27%] animate-k-in flex-col items-center gap-[clamp(6px,1.2vh,14px)] px-4 text-center text-white">
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
                Hudobná skupina · Košice
                <span className="max-sm:hidden"> a okolie</span>
              </span>
              <Flower className="size-[clamp(14px,2vh,20px)]" />
            </div>
          </div>

          {/* Fotka bez pozadia stojí na spodku hero. Okraje fotky sú orezané, preto ich stlmíme do stratena.
              Na mobile má fotka šírku obrazovky, aby bolo vidno všetkých štyroch. */}
          <div className="absolute bottom-0 left-1/2 aspect-[3/2] h-[58%] max-w-none -translate-x-1/2 max-sm:h-auto max-sm:w-full max-sm:[mask-image:none] [mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)]">
            <Image
              src="/img/hero-band.webp"
              alt="Skupina KALAP: Kubo s bubnom, Oliver s akordeónom, Dávid s husľami a Adrián s gitarou"
              fill
              priority
              sizes="(max-aspect-ratio: 3/2) 100vh, 70vw"
              className="object-contain object-bottom"
            />
          </div>
          {/* Ľudové kvety po stranách – nad fotkou kapely. */}
          <FolkSide />
          <FolkSide className="-scale-x-100" />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-[linear-gradient(to_top,rgba(184,25,27,0.75),rgba(184,25,27,0))]"
          />
        </div>
      </div>

      {/* Animácie tu začnú, až keď sem používateľ doscrolluje. */}
      <InView className="mx-auto flex max-w-7xl flex-col items-center gap-9 px-[clamp(16px,4vw,48px)] pt-[clamp(40px,6vw,80px)] pb-[clamp(16px,2vw,24px)] text-center">
        <div className="flex w-full items-center justify-center gap-[clamp(8px,2vw,28px)]">
          <Branch
            delay={0.5}
            className="w-[clamp(56px,9vw,130px)] -scale-x-100 rotate-6"
          />
          <p
            className="m-0 max-w-[820px] animate-k-in font-serif text-[clamp(28px,4.4vw,60px)] font-black uppercase leading-[1.4]"
            style={{ animationDelay: "0.2s" }}
          >
            4 chlapci, jedna vášeň,
            <br />
            <span className="text-red">ľudová hudba!</span>
          </p>
          <Branch delay={0.5} className="w-[clamp(56px,9vw,130px)] -rotate-6" />
        </div>

        <a
          href={PHONE_HREF}
          className="flex h-[58px] animate-k-in items-center gap-3 rounded-full bg-red pr-7 pl-[22px] text-[17px] font-semibold text-white no-underline transition duration-250 hover:-translate-y-0.5 hover:bg-red-dark hover:text-white"
          style={{ animationDelay: "0.35s" }}
        >
          <Icon d={icons.phone} size={22} stroke={1.8} />
          0949 555 034
        </a>
      </InView>
    </section>
  );
}
