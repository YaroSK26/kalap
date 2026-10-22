import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
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

export const metadata: Metadata = {
  title: "KALAP - ľudová hudba z Košíc",
  description:
    "Štyria chalani z Košíc, ktorí hrajú ľudovku na svadbách, plesoch, oslavách a festivaloch. Objednávky: 0949 555 034.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sk" className={`${inter.variable} ${merriweather.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
