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

  const inputClass = (field: string) =>
    `w-full bg-neutral-900 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors[field] ? "border-red-500/50 focus:ring-red-500/20 focus:border-red-500/50" : "border-white/10 hover:border-white/20"}`;

  return (
    <div className="min-h-screen flex bg-neutral-950">

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] shrink-0 flex-col justify-between bg-neutral-900 border-r border-white/6 p-12 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <Link href="/">
          <Image
            src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
            alt="Speed Force" width={400} height={100}
            style={{ height: "52px", width: "auto" }}
            priority
          />
        </Link>

        <div className="relative z-10 space-y-6">
          {[
            { icon: "bolt",         title: "Deploy in seconds",       desc: "One-click deployments with zero downtime and instant rollbacks." },
            { icon: "shield",       title: "Enterprise security",      desc: "DDoS protection, SSL, and WAF included on every plan." },
            { icon: "support_agent",title: "24/7 expert support",      desc: "Real engineers, not bots. Average response time under 3 minutes." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-0.5">{title}</p>
                <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          All systems operational
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="lg:hidden mb-10">
          <Link href="/">
            <Image
              src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
              alt="Speed Force" width={400} height={100}
              style={{ height: "52px", width: "auto" }}
              priority
            />
          </Link>
        </div>

        <div className="w-full max-w-[400px]">
          <div className="mb-8">
            <h1 className="text-2xl font-black text-white tracking-tight mb-1.5">Create your account</h1>
            <p className="text-neutral-500 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          {serverError && (
            <div className="mb-6 flex items-start gap-3 px-4 py-3 rounded-lg bg-red-500/8 border border-red-500/20 text-red-400 text-sm">
              <span className="material-symbols-outlined text-base mt-0.5 shrink-0">error</span>
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Full name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="John Doe" autoComplete="name" className={inputClass("name")} />
              {errors.name && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com" autoComplete="email" className={inputClass("email")} />
              {errors.email && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 6 characters" autoComplete="new-password"
                  className={inputClass("password") + " pr-10"} />
                <button type="button" onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
              {errors.password && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Confirm password</label>
              <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••" autoComplete="new-password" className={inputClass("confirm")} />
              {errors.confirm && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.confirm}</p>}
            </div>

            <button type="submit" disabled={loading}
              className="w-full mt-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              {loading
                ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Creating account...</>
                : "Create account"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-neutral-600 leading-relaxed">
            By creating an account you agree to our{" "}
            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-2">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-2">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
