"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Eyebrow, Icon, SectionTitle } from "../ui";
import { icons, LINKS } from "@/lib/data";

const textLinks = [
  { label: "Facebook", href: LINKS.facebook, d: icons.fb },
  { label: "YouTube", href: LINKS.youtube, d: icons.yt },
  { label: "TikTok", href: LINKS.tiktok, d: icons.tt },
];

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

  // Video sa spustí samo, iba ak používateľ nechce menej pohybu.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.play().catch(() => {});
  }, []);

  return (
    <section id="instagram" className="py-[clamp(72px,10vw,140px)]">
      {/* Vľavo texty, vpravo video. */}
      <Container className="grid items-center gap-[clamp(40px,6vw,96px)] md:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
        <div className="flex flex-col gap-[clamp(24px,3vw,40px)]">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow>Sledujte nás</Eyebrow>
            <SectionTitle size="text-[clamp(24px,3vw,44px)]" className="leading-[1.06]">
              Nie sme len v lese,
              <br />
              <span className="text-red">sme aj na Instagrame!</span>
            </SectionTitle>
          </div>
          <p className="m-0 max-w-[460px] text-lg leading-[1.65] text-body">
            Krátke videá zo svadieb, zákulisie a občas aj koncert uprostred lesa. Pridajte sa k nám.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener"
              className="flex h-[58px] items-center gap-3 rounded-full bg-red pr-7 pl-5 text-lg font-bold text-white no-underline transition duration-250 hover:-translate-y-0.5 hover:bg-red-dark hover:text-white"
            >
              <Icon d={icons.ig} size={22} />
              @skupina_kalap
            </a>
            {textLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 px-1 py-3 text-[15px] font-semibold no-underline"
              >
                <Icon d={l.d} />
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
          <span className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/92 py-1.5 pr-3 pl-2 text-[13px] font-semibold">
            <Icon d={icons.tt} size={18} stroke={1.8} color="#B8191B" />
            Dôkaz z lesa
          </span>
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
