"use client";

import PricingCards from "./PricingCards";

export default function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">Simple Pricing</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter mb-4">
            Plans That Scale <br />With You.
          </h2>
          <p className="text-neutral-500 max-w-xl text-sm leading-relaxed">
            No hidden fees. No lock-in contracts. Cancel anytime.
          </p>
        </div>

        <PricingCards />
      </div>
    </section>
  );
}
