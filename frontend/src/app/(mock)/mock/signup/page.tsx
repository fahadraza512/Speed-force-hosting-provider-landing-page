"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getMockState, setMockState } from "@/lib/mockState";

export default function MockSignupPage() {
  const router = useRouter();

  useEffect(() => {
    const { isLoggedIn } = getMockState();
    if (isLoggedIn) router.replace("/mock/checkout");
  }, [router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMockState({ isLoggedIn: true, isEmailVerified: false });
    router.push("/mock/verify-email");
  }

  const inp = "w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 pb-16">
      <div className="w-full max-w-sm">
        <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Mock Flow</p>
        <h1 className="text-3xl font-black tracking-tighter mb-1">Create account</h1>
        <p className="text-neutral-500 text-sm mb-8">Mock signup — no real validation.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Name</label>
            <input type="text" placeholder="Jane Doe" className={inp} />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email</label>
            <input type="email" placeholder="you@example.com" className={inp} />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Password</label>
            <input type="password" placeholder="••••••••" className={inp} />
          </div>
          <button type="submit"
            className="w-full mt-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-sm transition-all">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link href="/mock/login" className="text-primary hover:text-primary/80 font-bold transition-colors">Log in</Link>
        </p>
      </div>
    </div>
  );
}
