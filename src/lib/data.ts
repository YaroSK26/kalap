export const PHONE = "0949 555 034";
export const PHONE_HREF = "tel:+421949555034";

export const LINKS = {
  instagram: "https://www.instagram.com/skupina_kalap/",
  facebook: "https://www.facebook.com/skupinakalap/",
  youtube: "https://www.youtube.com/channel/UCoBPQyMrIwB0j2muo6FOv1w",
  tiktok: "https://www.tiktok.com/@skupina_kalap",
  videoclip: "https://www.youtube.com/watch?v=vsRwIBoEapo",
};

export const icons = {
  arrowUR: "M7 17L17 7M9 7h8v8",
  list: "M4 7h16M4 12h16M4 17h16",
  x: "M6 6l12 12M18 6L6 18",
  play: "M8 5.5v13l11-6.5z",
  phone:
    "M8.5 3.5h-3a2 2 0 0 0-2 2.2A16 16 0 0 0 18.3 20.5a2 2 0 0 0 2.2-2v-3l-4-1.6-2 2a12 12 0 0 1-6.4-6.4l2-2z",
  music:
    "M9 18V5.5l11-2.5v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  ig: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01",
  fb: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM15.5 8H14a2 2 0 0 0-2 2v11M9 13h6",
  yt: "M6 5h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4zM10 9l5 3-5 3z",
  tt: "M15.5 3a4.5 4.5 0 0 0 4.5 4.5v3a7.5 7.5 0 0 1-4.5-1.5V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3z",
  soundOn: "M4 9.5h3.5L12 5.5v13l-4.5-4H4zM15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11",
  soundOff: "M4 9.5h3.5L12 5.5v13l-4.5-4H4zM16 9.5l5 5M21 9.5l-5 5",
};

export const socials = [
  { label: "Instagram", href: LINKS.instagram, d: icons.ig },
  { label: "Facebook", href: LINKS.facebook, d: icons.fb },
  { label: "YouTube", href: LINKS.youtube, d: icons.yt },
  { label: "TikTok", href: LINKS.tiktok, d: icons.tt },
];

export const legalPages = [
  { label: "Ochrana osobných údajov (GDPR)", href: "/ochrana-osobnych-udajov" },
  { label: "Zásady používania cookies", href: "/cookies" },
  { label: "Obchodné podmienky", href: "/obchodne-podmienky" },
];

export const menuItems = [
  { n: "01", label: "O nás", href: "#o-nas", delay: "0.15s" },
  { n: "02", label: "Čo robíme", href: "#co-robime", delay: "0.22s" },
  { n: "03", label: "Video", href: "#video", delay: "0.29s" },
  { n: "04", label: "Merch", href: "#merch", delay: "0.36s" },
  { n: "05", label: "Instagram", href: "#instagram", delay: "0.43s" },
  { n: "06", label: "Kontakt", href: "#kontakt", delay: "0.5s" },
];

export const members = [
  {
    name: "Dávid",
    role: "Husle",
    img: "/img/david.jpg",
    alt: "Dávid s husľami",
    pos: "45% 30%",
    text: "Husle sú hlasom kapely. Dávid vedie melódiu od pomalých piesní až po rýchle čardáše.",
  },
  {
    name: "Oliver",
    role: "Akordeón",
    img: "/img/oliver.jpg",
    alt: "Oliver s akordeónom",
    pos: "50% 30%",
    text: "Úsmev, ktorý nezmizne ani o tretej ráno. Oliverov akordeón drží harmóniu kapely aj náladu na parkete.",
  },
  {
    name: "Adrián",
    role: "Gitara",
    img: "/img/adrian.jpg",
    alt: "Adrián s gitarou",
    pos: "40% 30%",
    text: "Rytmický základ kapely. Na pohľad pokojný, no keď sa rozohrá, v sále nikto neostane sedieť.",
  },
  {
    name: "Kubo",
    role: "Bicie",
    img: "/img/kubo.jpg",
    alt: "Kubo s paličkami",
    pos: "50% 30%",
    text: "Za bicími udáva tempo celej zábave. Od valčíka po rýchly odzemok - Kubo presne vie, kedy pridať.",
  },
];

// `photo` sa na počítači ukáže pri hover nad riadkom, na mobile je pod textom.
export const events = [
  {
    title: "Svadby",
    text: "Od čepčenia po ranné rozlúčky - ľudovka, pri ktorej tancujú všetky generácie.",
    photo: "/img/foto3.jpg",
    alt: "KALAP s novomanželmi na svadbe",
  },
  {
    title: "Plesy",
    text: "Slávnostná atmosféra, plný parket a program presne podľa organizátora.",
    photo: "/img/foto6.jpg",
    alt: "KALAP hrá na pódiu",
  },
  {
    title: "Oslavy",
    text: "Narodeniny, jubileá aj rodinné stretnutia - v sále, v záhrade či na dvore.",
    photo: "/img/foto4.jpg",
    alt: "KALAP na oslave narodenín",
  },
  {
    title: "Firemné akcie",
    text: "Večierky, teambuildingy aj behy. Ľudí roztancujeme kdekoľvek.",
    photo: "/img/foto5.jpg",
    alt: "KALAP hrá bežcom na behu",
  },
  {
    title: "Festivaly a dni obcí",
    text: "Pódiá pod holým nebom a námestia plné ľudí - tam sa cítime ako doma.",
    photo: "/img/foto1.jpg",
    alt: "KALAP medzi hosťami pod holým nebom",
  },
];

// `icon` = kľúč ikony v sekcii Merch.
export const merch = [
  {
    name: "Tričko",
    icon: "tshirt",
    bg: "#F6F3EF",
    fg: "#0A0A0A",
    orn: 0.9,
  },
  {
    name: "Mikina",
    icon: "hoodie",
    bg: "#0A0A0A",
    fg: "#FFFFFF",
    orn: 0.9,
  },
  {
    name: "Šiltovka",
    icon: "cap",
    bg: "#B8191B",
    fg: "#FFFFFF",
    orn: 0.25,
  },
  {
    name: "Taška",
    icon: "tote",
    bg: "#F6F3EF",
    fg: "#0A0A0A",
    orn: 0.9,
  },
  {
    name: "Klobúk",
    icon: "hat",
    bg: "#0A0A0A",
    fg: "#FFFFFF",
    orn: 0.9,
  },
  {
    name: "Hrnček",
    icon: "mug",
    bg: "#B8191B",
    fg: "#FFFFFF",
    orn: 0.25,
  },
] as const;

/**
 * Fotky v sekcii „Sme všade“ – dve vľavo, dve vpravo. Prichádzajú postupne pri scrollovaní:
 * `from` = odkiaľ priletia (vw / vh), `start` = kedy (0 až 1 z dĺžky sekcie).
 * Horné fotky začínajú pod navbarom, aby bolo vidno tváre.
 */
export const floatingPhotos = [
  { src: "/img/foto2.jpg", alt: "Pred vystúpením", className: "left-[3%] top-[max(108px,14%)] w-[38%] md:w-[19%] aspect-square -rotate-4", from: [-70, 0], start: 0, front: false },
  { src: "/img/foto6.jpg", alt: "Na pódiu", className: "right-[4%] bottom-[5%] w-[46%] md:w-[22%] aspect-[4/3] -rotate-3", from: [0, 80], start: 0.17, front: true },
  { src: "/img/foto3.jpg", alt: "S novomanželmi na svadbe", className: "right-[4%] top-[max(108px,14%)] w-[32%] md:w-[15%] aspect-[4/5] rotate-3", from: [70, 0], start: 0.34, front: false },
  { src: "/img/foto1.jpg", alt: "S hosťami v záhrade", className: "left-[6%] bottom-[5%] w-[40%] md:w-[17%] aspect-square rotate-4", from: [0, 80], start: 0.51, front: true },
] as const;
