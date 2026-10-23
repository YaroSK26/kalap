import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "./Reveal";

type IconProps = {
  d: string;
  size?: number | string;
  stroke?: number;
  color?: string;
  fill?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** Čiarová ikona 24×24 - rovnaká ako v pôvodnom návrhu. */
export function Icon({ d, size = 20, stroke = 1.7, color = "currentColor", fill = false, className, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill ? color : "none"}
      stroke={fill ? undefined : color}
      strokeWidth={fill ? undefined : stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d={d} />
    </svg>
  );
}

/** Ľudový kvet (malý), používa sa pri nadpisoch sekcií. */
export function Flower({ className = "size-5" }: { className?: string }) {
  return <img src="/svg/flower.svg" alt="" aria-hidden="true" className={className} />;
}

/** Štítok sekcie s kvetom, napr. „O nás“. */
export function Eyebrow({ children, className = "text-red" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal y={16} className={`flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.16em] ${className}`}>
      <Flower />
      <span>{children}</span>
    </Reveal>
  );
}

/** Nadpis sekcie - najviac na dva riadky, preto sa veľkosť dá zmeniť cez `size`. */
export function SectionTitle({
  children,
  size = "text-[clamp(30px,6vw,88px)]",
  className = "",
}: {
  children: ReactNode;
  size?: string;
  className?: string;
}) {
  return (
    <Reveal delay={0.1}>
      <h2 className={`m-0 font-serif font-black uppercase leading-none ${size} ${className}`}>
        {children}
      </h2>
    </Reveal>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-[clamp(16px,4vw,48px)] ${className}`}>{children}</div>;
}

// Stonka vetvičky (kubická Bézierova krivka) - lístky sa na ňu ukladajú presne podľa jej smeru.
const STEM = [
  [22, 172],
  [20, 116],
  [62, 70],
  [140, 58],
] as const;

function stemAt(t: number) {
  const [p0, p1, p2, p3] = STEM;
  const u = 1 - t;
  const pt = (i: 0 | 1) => u * u * u * p0[i] + 3 * u * u * t * p1[i] + 3 * u * t * t * p2[i] + t * t * t * p3[i];
  const dt = (i: 0 | 1) => 3 * u * u * (p1[i] - p0[i]) + 6 * u * t * (p2[i] - p1[i]) + 3 * t * t * (p3[i] - p2[i]);
  return { x: pt(0), y: pt(1), angle: (Math.atan2(dt(1), dt(0)) * 180) / Math.PI };
}

// Lístky striedavo na oboch stranách, smerom ku koncu menšie (ako na logu).
const LEAVES = [0.14, 0.27, 0.4, 0.53, 0.66, 0.79].map((t, i) => {
  const { x, y, angle } = stemAt(t);
  const side = i % 2 === 0 ? -1 : 1;
  return { x, y, rotate: angle + side * 52, scale: 1.05 - i * 0.07 };
});

const r = (n: number) => Math.round(n * 10) / 10;

const DRAW_S = 1.4; // ako dlho sa kreslí stonka so slučkou
const LEAF_GAP_S = 0.12; // rozostup medzi lístkami
const LEAF_S = 0.55; // ako dlho rastie jeden lístok
/** Za koľko sekúnd od začiatku je vetvička celá hotová (stonka aj lístky). */
export const BRANCH_TOTAL_S = DRAW_S * 0.85 + (LEAVES.length - 1) * LEAF_GAP_S + LEAF_S;

/**
 * Kreslená vetvička s lístkami a závitom na konci (motív z loga).
 * Najprv sa zdola nahor nakreslí stonka so slučkou (jedna čiara),
 * potom od slučky smerom dole postupne vyrastú lístky – každý zo svojej stopky.
 * S `reverse` sa stonka kreslí opačne – od slučky k stopke – a lístky rastú v rovnakom smere.
 */
export function Branch({
  className = "",
  color = "#B8191B",
  delay = 0.2,
  reverse = false,
  style,
}: {
  className?: string;
  color?: string;
  delay?: number;
  reverse?: boolean;
  style?: CSSProperties;
}) {
  const [p0, p1, p2, p3] = STEM;
  return (
    <svg viewBox="0 0 200 180" aria-hidden="true" className={`k-draw flex-none overflow-visible ${className}`} style={style}>
      <path
        className="k-line"
        pathLength={1}
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        style={{ animationDelay: `${delay}s`, animationDuration: `${DRAW_S}s`, strokeDashoffset: reverse ? -1 : undefined }}
        d={`M${p0} C${p1} ${p2} ${p3} C160 55 176 44 176 28 C176 14 162 8 153 15 C145 21 149 33 158 31 C163 30 164 23 159 22`}
      />
      <g fill={color}>
        {LEAVES.map((l, i) => (
          // Vonkajšia skupina lístok umiestni, vnútorná cesta rastie z bodu 0 0 (stopka lístka).
          <g key={l.x} transform={`translate(${r(l.x)} ${r(l.y)}) rotate(${r(l.rotate)}) scale(${r(l.scale * 100) / 100})`}>
            <path
              className="k-leaf"
              d="M0 0 C6 -8 20 -13 31 -9 C39 -6 40 4 33 8 C24 13 9 8 0 0Z"
              style={{ animationDelay: `${r(delay + DRAW_S * 0.85 + (LEAVES.length - 1 - i) * LEAF_GAP_S)}s` }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
