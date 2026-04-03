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

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
              alt="Speed Force" width={160} height={40}
              style={{ height: "40px", width: "auto" }}
            />
          </Link>
        </div>

        <div className="bg-neutral-900 border border-white/8 rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-4">
              <span className="material-symbols-outlined text-5xl text-primary mb-4 block">mark_email_read</span>
              <h1 className="text-xl font-black text-white tracking-tighter mb-2">Check your inbox</h1>
              <p className="text-neutral-400 text-sm mb-6">
                We sent a password reset link to <span className="text-white font-bold">{email}</span>
              </p>
              <Link href="/login" className="text-primary hover:text-primary/80 font-bold text-sm transition-colors">
                Back to Sign In
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-black text-white tracking-tighter mb-1">Reset your password</h1>
              <p className="text-neutral-400 text-sm mb-8">
                Enter your email and we&apos;ll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 mb-1.5">Email address</label>
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com" autoComplete="email"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-primary ${errors.email ? "border-red-500/60" : "border-white/10"}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-sm text-neutral-500 mt-6">
          <Link href="/login" className="text-primary hover:text-primary/80 font-bold transition-colors">
            ← Back to Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
