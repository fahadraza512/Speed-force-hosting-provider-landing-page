"use client";

import { useRouter } from "next/navigation";

export default function MockPaymentFailedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 pb-16">
      <div className="w-full max-w-sm text-center">
        <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-red-400 text-3xl">error</span>
        </div>
        <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Mock Flow</p>
        <h1 className="text-3xl font-black tracking-tighter mb-3">Payment unsuccessful</h1>
        <p className="text-neutral-500 text-sm mb-10 leading-relaxed">
          Your card was declined. No charges were made.
        </p>
        <button
          onClick={() => router.push("/mock/checkout")}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-sm transition-all">
          Try Again
        </button>
      </div>
    </div>
  );
}
