import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Client Area – Speed Force" };

export default function ClientAreaPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 pt-32 pb-20">
      <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-4">Client Area</span>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6">
        Welcome Back.
      </h1>
      <p className="text-neutral-400 text-sm max-w-lg text-center leading-relaxed mb-10">
        Manage your services, billing, support tickets, and domains all in one place.
      </p>
      <div className="flex gap-3">
        <Link href="/login" className="bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105">
          Log In
        </Link>
        <Link href="/register" className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105">
          Register
        </Link>
      </div>
    </main>
  );
}
