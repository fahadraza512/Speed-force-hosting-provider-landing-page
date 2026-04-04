import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/features/hero/Hero";
import ScrollReset from "@/components/ui/ScrollReset";

const Features = lazy(() => import("@/components/features/Features"));
const Stats    = lazy(() => import("@/components/features/stats/Stats"));
const Pricing  = lazy(() => import("@/components/features/pricing/Pricing"));
const Footer   = lazy(() => import("@/components/layout/Footer"));

export default function Home() {
  return (
    <>
      <ScrollReset />
      <Navbar />
      <Hero />
      <div style={{ height: "100vh" }} />
      <div className="relative z-10 rounded-t-3xl overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.4)]">
        <Suspense fallback={null}>
          <Features />
          <Stats />
          <Pricing />
          <Footer showBanner />
        </Suspense>
      </div>
    </>
  );
}
