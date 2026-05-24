import { Cinzel, EB_Garamond, JetBrains_Mono, Bodoni_Moda, Cormorant_Upright, Lora, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TweaksPanel from "@/components/TweaksPanel";
import ApplyTweaksEarly from "@/components/ApplyTweaksEarly";

// Load fonts via next/font for self-hosting + zero layout shift
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cinzel" });
const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-eb-garamond" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains-mono" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "600", "800"], variable: "--font-bodoni", display: "swap", adjustFontFallback: false });
const cormorant = Cormorant_Upright({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-cormorant" });
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-lora" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });

export const metadata = {
  title: "Renaissance Project · NC A&T",
  description:
    "A student-led community service organization at NC A&T reviving the spirit of inquiry, art, and civic duty.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a1733",
};

export default function RootLayout({ children }) {
  const fontVars = [
    cinzel.variable,
    ebGaramond.variable,
    jetbrainsMono.variable,
    bodoni.variable,
    cormorant.variable,
    lora.variable,
    inter.variable,
  ].join(" ");

  return (
    <html lang="en" data-mode="dark" data-palette="vermillion" data-type="classic" className={fontVars}>
      <body>
        <ApplyTweaksEarly />
        <Nav />
        {children}
        <Footer />
        <TweaksPanel />
      </body>
    </html>
  );
}
