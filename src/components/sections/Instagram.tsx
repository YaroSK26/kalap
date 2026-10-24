"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Eyebrow, Icon, SectionTitle } from "../ui";
import { icons, LINKS } from "@/lib/data";
import EdgeOrnament from "../EdgeOrnament";

const otherLinks = [
  { label: "Facebook", href: LINKS.facebook, d: icons.fb },
  { label: "YouTube", href: LINKS.youtube, d: icons.yt },
  { label: "TikTok", href: LINKS.tiktok, d: icons.tt },
];

const pill =
  "flex h-14 items-center justify-center gap-2.5 rounded-full px-5 text-base font-bold no-underline transition duration-250 hover:-translate-y-0.5";

export default function Instagram() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Prehliadač dovolí samé spustenie len bez zvuku. Po kliknutí zapneme zvuk a pustíme video od začiatku.
  const toggleSound = () => {
    const el = videoRef.current;
    if (!el) return;
    if (muted) el.currentTime = 0;
    el.muted = !muted;
    el.play().catch(() => {});
    setMuted(!muted);
  };

  // Video sa spustí samo, až keď príde do obrazovky, a mimo nej sa zastaví.
  // Kto chce menej pohybu, spustí si ho sám.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="instagram" className="relative overflow-x-clip py-[clamp(72px,10vw,140px)]">
      <EdgeOrnament className="bottom-[clamp(24px,4vw,64px)]" />
      {/* Vľavo texty, vpravo video. */}
      <Container className="relative z-1 grid items-center gap-[clamp(40px,6vw,96px)] md:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
        <div className="flex flex-col gap-[clamp(24px,3vw,40px)]">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow>Sledujte nás</Eyebrow>
            <SectionTitle size="text-[clamp(24px,7.4vw,52px)] md:text-[clamp(28px,3.4vw,52px)]" className="leading-[1.06]">
              Nie sme len v lese,
              <br />
              <span className="text-red">sme aj na sieťach!</span>
            </SectionTitle>
          </div>
          <p className="m-0 max-w-[460px] text-lg leading-[1.65] text-body">
            Krátke videá zo svadieb, zákulisie a občas aj koncert uprostred lesa. Pridajte sa k nám.
          </p>
          {/* Instagram je hlavný (celá šírka), ostatné siete pod ním v jednom riadku. */}
          <div className="grid max-w-[520px] grid-cols-3 gap-2.5">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener"
              className={`${pill} col-span-3 bg-red text-white hover:bg-red-dark hover:text-white`}
            >
              <Icon d={icons.ig} size={22} />
              @skupina_kalap
            </a>
            {otherLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener"
                className={`${pill} border-[1.5px] border-ink/15 px-2 text-[15px] hover:border-red hover:text-red max-sm:h-auto max-sm:flex-col max-sm:gap-1 max-sm:rounded-[18px] max-sm:py-3 max-sm:text-sm`}
              >
                <Icon d={l.d} className="shrink-0" />
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[26px] bg-ink">
          <video
            ref={videoRef}
            src="/video/reel.mp4"
            poster="/img/reel-poster.jpg"
            loop
            muted
            playsInline
            controls
            onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
            preload="metadata"
            aria-label="Krátke video: KALAP hrá v noci v lese pri aute"
            className="absolute inset-0 block size-full object-cover"
          />
          <button
            type="button"
            onClick={toggleSound}
            className="absolute top-4 right-4 flex cursor-pointer items-center gap-2 rounded-full border-0 bg-red py-2 pr-3.5 pl-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-red-dark"
          >
            <Icon d={muted ? icons.soundOff : icons.soundOn} size={18} stroke={1.8} />
            {muted ? "Zapnúť zvuk" : "Vypnúť zvuk"}
          </button>
        </div>
      </Container>
    </section>
  );
}
