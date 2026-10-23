import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "900"],
});

const title = "KALAP - ľudová hudba z Košíc";
const description =
  "Štyria chalani z Košíc, ktorí hrajú ľudovku na svadbách, plesoch, oslavách a festivaloch. Objednávky: 0949 555 034.";

// OG obrázok a favicon sú súbory v app/ (opengraph-image.jpg, twitter-image.jpg, icon.png, apple-icon.png, favicon.ico).
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "sk_SK", siteName: "KALAP" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sk" className={`${inter.variable} ${merriweather.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a
          href="#obsah"
          className="fixed top-3 left-3 z-100 -translate-y-[200%] rounded-full bg-red px-5 py-3 font-semibold text-white no-underline focus:translate-y-0 focus:text-white"
        >
          Preskočiť na obsah
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
