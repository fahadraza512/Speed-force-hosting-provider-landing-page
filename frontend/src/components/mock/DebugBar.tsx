"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMockState, resetMockState, type MockState } from "@/lib/mockState";

export default function DebugBar() {
  const router = useRouter();
  const [state, setState] = useState<MockState | null>(null);

  useEffect(() => {
    setState(getMockState());
    const onStorage = () => setState(getMockState());
    window.addEventListener("storage", onStorage);
    // also poll so same-tab writes reflect
    const id = setInterval(() => setState(getMockState()), 500);
    return () => { window.removeEventListener("storage", onStorage); clearInterval(id); };
  }, []);

  if (!state) return null;

  const pill = (label: string, val: boolean | null) => {
    const color =
      val === true  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" :
      val === false ? "bg-red-500/20 text-red-400 border-red-500/30" :
                     "bg-neutral-700 text-neutral-400 border-neutral-600";
    return (
      <span key={label} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold ${color}`}>
        {label}: {val === null ? "null" : String(val)}
      </span>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-999 bg-neutral-950 border-t border-white/10 px-4 py-2 flex flex-wrap items-center gap-2">
      <span className="text-[9px] font-black text-neutral-600 uppercase tracking-widest shrink-0">Mock State</span>
      {pill("isLoggedIn", state.isLoggedIn)}
      {pill("isEmailVerified", state.isEmailVerified)}
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-neutral-600 bg-neutral-700 text-neutral-400 text-[10px] font-bold">
        plan: {state.selectedPlan ? state.selectedPlan.name : "null"}
      </span>
      {pill("paymentSuccess", state.paymentSuccess)}
      <button
        onClick={() => { resetMockState(); router.push("/"); }}
        className="ml-auto text-[10px] font-black px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-colors"
      >
        Reset All
      </button>
    </div>
  );
}
