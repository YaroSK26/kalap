import Image from "next/image";
import { Container, Eyebrow, Icon, SectionTitle } from "../ui";
import { icons, LINKS } from "@/lib/data";

export default function Video() {
  return (
    <section id="video" className="py-[clamp(72px,10vw,140px)]">
      <Container className="flex flex-col gap-[clamp(32px,5vw,56px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow>Videoklip - Šumna je, hruba je / Beťár som parobok</Eyebrow>
            <SectionTitle>Pustite si nás</SectionTitle>
          </div>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 py-3 text-base font-semibold no-underline"
          >
            Všetky videá na YouTube <Icon d={icons.arrowUR} size={18} stroke={2} />
          </a>
        </div>

        <a
          href={LINKS.videoclip}
          target="_blank"
          rel="noopener"
          aria-label="Prehrať klip Šumna je, hruba je / Beťár som parobok na YouTube (otvorí sa v novej karte)"
          className="group relative block aspect-video overflow-hidden rounded-[28px] bg-[#1a1a1a]"
        >
          <Image
            src="/img/video-thumb.jpg"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="object-cover transition-transform duration-1200 ease-in-out group-hover:scale-103"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-ink/28" />
          <span className="absolute top-1/2 left-1/2 size-[clamp(88px,10vw,136px)] -translate-1/2">
            <span aria-hidden="true" className="absolute inset-0 animate-k-pulse rounded-full bg-red" />
            <span className="absolute inset-0 grid place-items-center rounded-full bg-red text-white shadow-[0_20px_50px_rgba(184,25,27,0.45)] transition-transform duration-350 ease-out-soft group-hover:scale-110">
              <Icon d={icons.play} size="40%" fill style={{ marginLeft: "6%" }} />
            </span>
          </span>
          <span className="absolute bottom-[clamp(16px,3vw,32px)] left-[clamp(18px,3vw,36px)] flex items-center gap-2.5 text-[15px] font-semibold text-white">
            <Icon d={icons.yt} size={22} />
            Prehrať na YouTube
          </span>
        </a>
      </Container>
    </section>
  );
}
