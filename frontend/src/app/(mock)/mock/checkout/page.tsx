"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMockState, setMockState, type Plan } from "@/lib/mockState";

export default function MockCheckoutPage() {
  const router = useRouter();
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const { isLoggedIn, selectedPlan } = getMockState();
    if (!selectedPlan) { router.replace("/mock"); return; }
    if (!isLoggedIn)   { router.replace("/mock/signup"); return; }
    setPlan(selectedPlan);
  }, [router]);

  function handleSuccess() {
    setMockState({ paymentSuccess: true });
    router.push("/mock/dashboard");
  }

  function handleFailure() {
    setMockState({ paymentSuccess: false });
    router.push("/mock/payment-failed");
  }

  const inp = "w-full bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-neutral-500 outline-none cursor-not-allowed";

  if (!plan) return null;

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 pb-16">
      <div className="w-full max-w-sm">
        <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Mock Flow</p>
        <h1 className="text-3xl font-black tracking-tighter mb-1">Checkout</h1>
        <p className="text-neutral-500 text-sm mb-8">Fake payment — nothing is charged.</p>

        {/* Plan summary */}
        <div className="bg-neutral-900 border border-white/10 rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-500 mb-0.5">Selected plan</p>
              <p className="font-black text-lg">{plan.name}</p>
            </div>
            <p className="text-2xl font-black text-primary">{plan.price}</p>
          </div>
        </div>

        {/* Fake card fields */}
        <div className="space-y-3 mb-8">
          <p className="text-xs font-bold text-neutral-500 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-primary/60">credit_card</span>
            Card details (mock — not functional)
          </p>
          <input readOnly value="4242 4242 4242 4242" className={inp} />
          <div className="grid grid-cols-2 gap-3">
            <input readOnly value="12 / 28" className={inp} />
            <input readOnly value="123" className={inp} />
          </div>
        </div>

        <div className="space-y-3">
          <button onClick={handleSuccess}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">check_circle</span>
            Simulate Payment Success
          </button>
          <button onClick={handleFailure}
            className="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">cancel</span>
            Simulate Payment Failure
          </button>
        </div>
      </div>
    </div>
  );
}
