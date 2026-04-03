"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { validateLogin } from "@/lib/validations";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const errs = validateLogin(email, password);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
              alt="Speed Force" width={160} height={40}
              style={{ height: "60px", width: "auto" }}
            />
          </Link>
        </div>

        <div className="bg-neutral-900 border border-white/8 rounded-2xl p-8">
          <h1 className="text-2xl font-black text-white tracking-tighter mb-1">Welcome back</h1>
          <p className="text-neutral-400 text-sm mb-8">Sign in to your Speed Force account</p>

          {serverError && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {serverError}
            </div>
          )}

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

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-neutral-400">Password</label>
                <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" autoComplete="current-password"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-primary ${errors.password ? "border-red-500/60" : "border-white/10"}`}
                />
                <button type="button" onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors">
                  <span className="material-symbols-outlined text-lg">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
              {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-neutral-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:text-primary/80 font-bold transition-colors">
            Create one free
          </Link>
        </p>
      </div>
    </main>
  );
}
