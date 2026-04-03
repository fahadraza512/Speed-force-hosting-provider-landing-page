"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authService } from "@/services/authService";
import { validateForgotPassword } from "@/lib/validations";

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

  const Logo = () => (
    <Link href="/">
      <Image
        src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
        alt="Speed Force" width={400} height={100}
        style={{ height: "52px", width: "auto" }}
        priority
      />
    </Link>
  );

  return (
    <div className="min-h-screen flex bg-neutral-950">

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] shrink-0 flex-col justify-between bg-neutral-900 border-r border-white/6 p-12 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <Logo />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-2xl">lock_reset</span>
          </div>
          <h2 className="text-white text-xl font-black tracking-tight mb-3">Account recovery</h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            We&apos;ll send a secure link to your email. The link expires in 30 minutes for your security.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          All systems operational
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="lg:hidden mb-10"><Logo /></div>

        <div className="w-full max-w-[400px]">
          {sent ? (
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-emerald-400 text-3xl">mark_email_read</span>
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight mb-2">Check your inbox</h1>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                We sent a reset link to <span className="text-white font-semibold">{email}</span>. It expires in 30 minutes.
              </p>
              <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-black text-white tracking-tight mb-1.5">Forgot your password?</h1>
                <p className="text-neutral-500 text-sm">Enter your email and we&apos;ll send you a reset link.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email address</label>
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com" autoComplete="email"
                    className={`w-full bg-neutral-900 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors.email ? "border-red-500/50" : "border-white/10 hover:border-white/20"}`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">error</span>{errors.email}
                    </p>
                  )}
                </div>

                <button type="submit" disabled={loading}
                  className="w-full mt-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  {loading
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    : "Send reset link"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/login" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  Back to sign in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
