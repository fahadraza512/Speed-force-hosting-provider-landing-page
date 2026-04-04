"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMockState, type Plan } from "@/lib/mockState";

export default function MockDashboardPage() {
  const router = useRouter();
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const { isLoggedIn, selectedPlan } = getMockState();
    if (!isLoggedIn) { router.replace("/mock"); return; }
    setPlan(selectedPlan);
  }, [router]);

  if (!plan) return null;

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 pb-16">
      <div className="w-full max-w-sm text-center">
        {/* Success banner */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3 flex items-center gap-3 mb-8 text-left">
          <span className="material-symbols-outlined text-emerald-400 text-xl shrink-0">check_circle</span>
          <p className="text-emerald-400 text-sm font-bold">Payment successful — you&apos;re all set.</p>
        </div>

        <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
        </div>
        <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Mock Flow</p>
        <h1 className="text-3xl font-black tracking-tighter mb-3">Welcome!</h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          You are now on the <span className="text-white font-black">{plan.name}</span> plan at{" "}
          <span className="text-primary font-black">{plan.price}</span>.
        </p>
      </div>
    </div>
  );
}
