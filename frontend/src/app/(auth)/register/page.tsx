"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { validateRegister } from "@/lib/validations";

export default function RegisterPage() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const errs = validateRegister(name, email, password, confirm);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await register(name, email, password);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
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
          <h1 className="text-2xl font-black text-white tracking-tighter mb-1">Create your account</h1>
          <p className="text-neutral-400 text-sm mb-8">Start your free trial — no credit card required</p>

          {serverError && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-neutral-400 mb-1.5">Full name</label>
              <input
                type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="John Doe" autoComplete="name"
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-primary ${errors.name ? "border-red-500/60" : "border-white/10"}`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

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
              <label className="block text-xs font-bold text-neutral-400 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 6 characters" autoComplete="new-password"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-primary ${errors.password ? "border-red-500/60" : "border-white/10"}`}
                />
                <button type="button" onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors">
                  <span className="material-symbols-outlined text-lg">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 mb-1.5">Confirm password</label>
              <input
                type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••" autoComplete="new-password"
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-primary ${errors.confirm ? "border-red-500/60" : "border-white/10"}`}
              />
              {errors.confirm && <p className="mt-1 text-xs text-red-400">{errors.confirm}</p>}
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
              {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {loading ? "Creating account..." : "Create Account"}
            </button>

            <p className="text-center text-xs text-neutral-500">
              By registering you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>

        <p className="text-center text-sm text-neutral-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary/80 font-bold transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
