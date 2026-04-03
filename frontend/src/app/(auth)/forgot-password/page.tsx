"use client";

import { useState } from "react";
import Link from "next/link";
import { authService } from "@/services/authService";
import { validateForgotPassword } from "@/lib/validations";
import PageNavbar from "@/components/layout/PageNavbar";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateForgotPassword(email);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await authService.forgotPassword(email);
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageNavbar />

      <div className="flex flex-1">
        {/* Left — dark branding panel */}
        <div className="hidden lg:flex lg:w-[440px] xl:w-[480px] shrink-0 flex-col justify-between bg-neutral-900 p-12 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">lock_reset</span>
            </div>
            <h2 className="text-white text-xl font-black tracking-tight mb-3">Account recovery</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We&apos;ll send a secure link to your email. The link expires in 30 minutes for your security.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            All systems operational
          </div>
        </div>

        {/* Right — white form panel */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white">
          <div className="w-full max-w-[400px]">
            {sent ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-emerald-600 text-3xl">mark_email_read</span>
                </div>
                <h1 className="text-2xl font-black text-neutral-900 tracking-tight mb-2">Check your inbox</h1>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                  We sent a reset link to <span className="text-neutral-900 font-semibold">{email}</span>. It expires in 30 minutes.
                </p>
                <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  Back to sign in
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-black text-neutral-900 tracking-tight mb-1.5">Forgot your password?</h1>
                  <p className="text-neutral-500 text-sm">Enter your email and we&apos;ll send you a reset link.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com" autoComplete="email"
                      className={`w-full bg-white border rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary ${errors.email ? "border-red-400" : "border-neutral-300 hover:border-neutral-400"}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">error</span>{errors.email}
                      </p>
                    )}
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full mt-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20">
                    {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : "Send reset link"}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link href="/login" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Back to sign in
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
