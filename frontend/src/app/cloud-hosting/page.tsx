import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cloud Hosting – Speed Force" };

export default function CloudHostingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 pt-32 pb-20">
      <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-4">Cloud Hosting</span>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6">
        Blazing Fast.<br />Always On.
      </h1>
      <p className="text-neutral-400 text-sm max-w-lg text-center leading-relaxed mb-10">
        NVMe-powered cloud servers with 99.9% uptime SLA, instant scaling, and one-click deployments. Built for developers and growing businesses.
      </p>
      <button className="bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105">
        Get Started Free
      </button>
    </main>
  );
}
