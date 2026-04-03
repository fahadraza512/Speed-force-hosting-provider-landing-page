import type { Metadata } from "next";

export const metadata: Metadata = { title: "Domain Names – Speed Force" };

export default function DomainNamesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 pt-32 pb-20">
      <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-4">Domain Names</span>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6">
        Claim Your<br />Corner of the Web.
      </h1>
      <p className="text-neutral-400 text-sm max-w-lg text-center leading-relaxed mb-10">
        Search and register from 500+ domain extensions. Free WHOIS privacy, DNS management, and auto-renewal included on every domain.
      </p>
      <div className="flex gap-3 w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a domain..."
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-primary transition-colors"
        />
        <button className="bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shrink-0">
          Search
        </button>
      </div>
    </main>
  );
}
