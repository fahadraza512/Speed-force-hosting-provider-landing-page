import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dedicated Servers – Speed Force" };

export default function DedicatedServersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 pt-32 pb-20">
      <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-4">Dedicated Servers</span>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6">
        Full Power.<br />Zero Compromise.
      </h1>
      <p className="text-neutral-400 text-sm max-w-lg text-center leading-relaxed mb-10">
        Bare-metal dedicated servers with enterprise-grade hardware, full root access, and 24/7 expert support. Your resources, exclusively yours.
      </p>
      <button className="bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105">
        View Server Plans
      </button>
    </main>
  );
}
