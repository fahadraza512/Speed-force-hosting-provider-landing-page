import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Stats from "@/components/stats/Stats";
import Pricing from "@/components/pricing/Pricing";
import Footer from "@/components/footer/Footer";
import ScrollReset from "@/components/shared/ScrollReset";

export default function Home() {
  return (
    <>
      <ScrollReset />
      <Navbar />
      <Hero />
      <div style={{ height: "100vh" }} />
      <div className="relative z-10 rounded-t-3xl overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.4)]">
        <Features />
        <Stats />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
