import type { Metadata } from "next";

export const metadata: Metadata = { title: "Agency Solutions – Speed Force" };

export default function AgencySolutionsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 pt-32 pb-20">
      <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-4">Agency Solutions</span>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6">
        Built for Agencies.<br />Loved by Clients.
      </h1>
      <p className="text-neutral-400 text-sm max-w-lg text-center leading-relaxed mb-10">
        Manage all your client sites from one dashboard. White-label hosting, reseller plans, bulk discounts, and a dedicated agency support line.
      </p>
      <button className="bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105">
        Explore Agency Plans
      </button>
    </main>
  );
}
