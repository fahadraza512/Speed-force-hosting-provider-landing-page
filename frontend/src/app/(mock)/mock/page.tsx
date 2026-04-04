"use client";

import { useRouter } from "next/navigation";
import { getMockState, setMockState, type Plan } from "@/lib/mockState";

const plans: Plan[] = [
  { id: "free",  name: "Free",  price: "$0/mo" },
  { id: "pro",   name: "Pro",   price: "$7.99/mo" },
  { id: "team",  name: "Team",  price: "$14.99/mo" },
];

export default function MockLandingPage() {
  const router = useRouter();

  function handleSelect(plan: Plan) {
    setMockState({ selectedPlan: plan });
    const { isLoggedIn } = getMockState();
    router.push(isLoggedIn ? "/mock/checkout" : "/mock/signup");
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 pb-16">
      <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Mock Flow</p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-center">Choose your plan.</h1>
      <p className="text-neutral-500 text-sm mb-14">Select a plan to start the mock signup flow.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-3xl">
        {plans.map((plan) => (
          <div key={plan.id}
            className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1
              ${plan.id === "pro"
                ? "bg-neutral-900 border-primary/40 shadow-2xl shadow-primary/10"
                : "bg-neutral-900 border-white/10 hover:border-white/20"}`}>
            {plan.id === "pro" && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-primary text-[9px] font-black px-4 py-1 rounded-full tracking-widest border border-primary/40 bg-neutral-950">
                Most Popular
              </span>
            )}
            <h2 className="text-xl font-black mb-1">{plan.name}</h2>
            <p className="text-3xl font-black tracking-tighter text-primary mb-6">{plan.price}</p>
            <button
              onClick={() => handleSelect(plan)}
              className={`mt-auto w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]
                ${plan.id === "pro"
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "border border-white/20 text-white hover:border-white/40"}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
