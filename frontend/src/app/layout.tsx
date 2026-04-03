import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "@/styles/globals.css";
import MaterialSymbols from "@/components/ui/MaterialSymbols";
import CustomCursor from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speed Force | Engineered for Momentum",
  description:
    "High-performance hosting built for scale. Enterprise-grade cloud architecture with sub-millisecond latency.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="text-on-surface antialiased selection:bg-primary selection:text-on-primary"
        suppressHydrationWarning
      >
        <CustomCursor />
        <MaterialSymbols />
        {children}
      </body>
    </html>
  );
}
