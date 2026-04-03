"use client";

import HeroCanvas from "./HeroCanvas";
import MagneticText from "./MagneticText";

export default function Hero() {
  return (
    <section
      className="hero-reveal fixed top-0 left-0 w-full h-screen min-h-[700px] flex items-center justify-center"
      style={{ backgroundColor: "#111111", zIndex: 0 }}
    >
      {/* Animated canvas */}
      <HeroCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="hero-zoom-in delay-200 inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-white bg-white/10 backdrop-blur-md rounded-full">
          ULTRA-FAST INFRASTRUCTURE
        </span>
        <h1 className="hero-zoom-in delay-300 text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8">
          <MagneticText>
            ENGINEERED FOR <br />
            <span className="text-primary italic">MOMENTUM.</span>
          </MagneticText>
        </h1>
        <p className="hero-zoom-in delay-400 text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          High-performance hosting built for scale. Experience the power of enterprise-grade cloud
          architecture with sub-millisecond latency.
        </p>
        <div className="hero-zoom-in delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(183,18,42,0.4)]">
            Accelerate Your Website
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
            View Network Status
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={() =>
          document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
        }
        role="button"
        aria-label="Scroll to features"
      >
        <span className="material-symbols-outlined text-white/40 text-3xl">expand_more</span>
      </div>
    </section>
  );
}
