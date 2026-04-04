"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { validateLogin } from "@/lib/validations";
import { authService } from "@/services/authService";
import PageNavbar from "@/components/layout/PageNavbar";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
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
      setServerError(err instanceof Error ? err.message : "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setGoogleLoading(true);
    try {
      await authService.signInWithGoogle();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Google sign-in failed.");
      setGoogleLoading(false);
    }
  }

  const inp = (field: string) =>
    `w-full bg-white border rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary ${errors[field] ? "border-red-400 focus:ring-red-400/20" : "border-neutral-300 hover:border-neutral-400"}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageNavbar />

      <div className="flex flex-1">
        {/* Left — dark branding panel */}
        <div className="hidden lg:flex lg:w-[440px] xl:w-[480px] shrink-0 flex-col justify-between bg-neutral-900 p-12 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-8">Trusted by 2M+ sites</p>
            <blockquote className="text-white/90 text-lg font-medium leading-relaxed mb-6">
              &ldquo;Speed Force cut our deployment time by 80%. The infrastructure just works — we never think about it.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center text-white font-black text-sm">A</div>
              <div>
                <p className="text-white text-sm font-bold">Alex Morgan</p>
                <p className="text-neutral-500 text-xs">CTO, Launchpad Inc.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            All systems operational
          </div>
        </div>

        {/* Right — white form panel */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white">
          <div className="w-full max-w-[400px]">
            <div className="mb-8">
              <h1 className="text-2xl font-black text-neutral-900 tracking-tight mb-1.5">Sign in to your account</h1>
              <p className="text-neutral-500 text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                  Create one free
                </Link>
              </p>
            </div>

            {serverError && (
              <div className="mb-6 flex items-start gap-3 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                <span className="material-symbols-outlined text-base mt-0.5 shrink-0">error</span>
                {serverError}
              </div>
            )}

            {/* Google button */}
            <button onClick={handleGoogle} disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-all mb-4 disabled:opacity-50">
              {googleLoading
                ? <span className="w-4 h-4 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin" />
                : <GoogleIcon />}
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-neutral-200" />
              <span className="text-xs text-neutral-400 font-medium">or</span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com" autoComplete="email" className={inp("email")} />
                {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.email}</p>}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-sm font-medium text-neutral-700">Password</label>
                  <Link href="/forgot-password" className="text-xs text-neutral-500 hover:text-primary transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" autoComplete="current-password"
                    className={inp("password") + " pr-10"} />
                  <button type="button" onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">{showPassword ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
                {errors.password && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.password}</p>}
              </div>

              <button type="submit" disabled={loading}
                className="w-full mt-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20">
                {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Signing in...</> : "Sign in"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-neutral-100 text-center text-xs text-neutral-400">
              Protected by Speed Force Security &middot;{" "}
              <a href="#" className="hover:text-neutral-600 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
