"use client";

import HeroCanvas from "./HeroCanvas";
import MagneticText from "./MagneticText";
import FeaturePills from "./FeaturePills";

export default function Hero() {
  return (
    <section
      className="hero-reveal fixed top-0 left-0 w-full h-screen min-h-[700px] flex items-center"
      style={{ backgroundColor: "#111111", zIndex: 0 }}
    >
      <HeroCanvas />

      {/* Layout: text left, pills right */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:pl-16 lg:pr-6 flex items-center justify-between gap-8 pt-16">

        {/* Left — text content */}
        <div className="text-left w-full lg:max-w-xl lg:shrink-0">
          <h1 className="hero-zoom-in delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tighter mb-4 sm:mb-6">
            <MagneticText>
              ENGINEERED FOR <br />
              <span className="text-primary italic">MOMENTUM.</span>
            </MagneticText>
          </h1>
          <p className="hero-zoom-in delay-300 text-white/60 text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-8 font-medium">
            High-performance hosting built for scale. Experience the power of enterprise-grade cloud
            architecture with sub-millisecond latency.
          </p>
          <div className="hero-zoom-in delay-400 flex flex-col sm:flex-row items-stretch sm:items-start gap-3">
            <button className="bg-primary hover:bg-primary-container text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(183,18,42,0.4)]">
              Accelerate Your Website
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105">
              View Network Status
            </button>
          </div>
        </div>

        {/* Right — scrolling pills */}
        <div className="hidden lg:flex flex-1 items-center justify-end pr-32 hero-zoom-in delay-300">
          <FeaturePills />
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
        role="button"
        aria-label="Scroll to features"
      >
        <span className="material-symbols-outlined text-white/40 text-3xl">expand_more</span>
      </div>
    </section>
  );
}
