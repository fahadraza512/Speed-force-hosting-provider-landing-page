"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMockState, setMockState } from "@/lib/mockState";

export default function MockVerifyEmailPage() {
  const router = useRouter();

  useEffect(() => {
    const { isLoggedIn, isEmailVerified } = getMockState();
    if (!isLoggedIn) router.replace("/mock/signup");
    else if (isEmailVerified) router.replace("/mock/checkout");
  }, [router]);

  function handleVerify() {
    setMockState({ isEmailVerified: true });
    router.push("/mock/checkout");
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 pb-16">
      <div className="w-full max-w-sm text-center">
        <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">mail</span>
        </div>
        <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Mock Flow</p>
        <h1 className="text-3xl font-black tracking-tighter mb-3">Check your email</h1>
        <p className="text-neutral-500 text-sm mb-10 leading-relaxed">
          We sent a verification link to your inbox. In a real app you&apos;d click that link — here just press the button below.
        </p>
        <button
          onClick={handleVerify}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-sm transition-all">
          Simulate Email Verified
        </button>
      </div>
    </div>
  );
}
