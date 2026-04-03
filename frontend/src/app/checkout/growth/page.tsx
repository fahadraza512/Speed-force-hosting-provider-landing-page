"use client";

import Link from "next/link";
import Image from "next/image";

const features = ["30 GB SSD Storage", "Free SSL + CDN", "Unlimited Websites", "On-demand Backups", "Priority Support", "Staging Environment"];

export default function GrowthCheckoutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex">

      {/* Left — order summary */}
      <div className="hidden lg:flex lg:w-[440px] xl:w-[480px] shrink-0 flex-col justify-between bg-neutral-900 border-r border-white/6 p-12 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

        <Link href="/">
          <Image src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
            alt="Speed Force" width={400} height={100} style={{ height: "48px", width: "auto" }} priority />
        </Link>

        <div className="relative z-10">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-6">Order Summary</p>

          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 mb-6 relative">
            <span className="absolute -top-3 left-6 bg-primary text-white text-[9px] font-black px-3 py-0.5 rounded-full tracking-widest">Most Popular</span>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white font-black text-lg tracking-tight">Growth Plan</h3>
                <p className="text-neutral-500 text-xs mt-0.5">Cloud Hosting</p>
              </div>
              <div className="text-right">
                <p className="text-white font-black text-2xl tracking-tighter">$7.99</p>
                <p className="text-neutral-500 text-xs">/month</p>
              </div>
            </div>
            <div className="h-px bg-white/6 mb-4" />
            <ul className="space-y-2.5">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-400">
                  <span className="material-symbols-outlined text-primary text-sm shrink-0">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-neutral-500"><span>Subtotal</span><span>$7.99</span></div>
            <div className="flex justify-between text-neutral-500"><span>Tax</span><span>$0.00</span></div>
            <div className="h-px bg-white/6 my-2" />
            <div className="flex justify-between text-white font-black text-base"><span>Total today</span><span>$7.99</span></div>
            <p className="text-neutral-600 text-xs pt-1">Then $7.99/month. Cancel anytime.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span className="material-symbols-outlined text-sm text-primary/60">lock</span>
          Secured by 256-bit SSL encryption
        </div>
      </div>

      {/* Right — checkout form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="lg:hidden mb-8">
          <Link href="/">
            <Image src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
              alt="Speed Force" width={400} height={100} style={{ height: "48px", width: "auto" }} priority />
          </Link>
        </div>

        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-black text-white tracking-tight mb-1.5">Get started with Growth</h1>
            <p className="text-neutral-500 text-sm">Everything you need to scale your business.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">First name</label>
                <input type="text" placeholder="John" autoComplete="given-name"
                  className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Last name</label>
                <input type="text" placeholder="Doe" autoComplete="family-name"
                  className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email address</label>
              <input type="email" placeholder="you@company.com" autoComplete="email"
                className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Password</label>
              <input type="password" placeholder="Create a password" autoComplete="new-password"
                className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold text-neutral-400 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary/60">credit_card</span>
                Payment details
              </p>
              <div className="bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-neutral-600 mb-3">
                •••• •••• •••• ••••
                <span className="float-right text-xs text-neutral-700">Stripe integration</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="MM / YY"
                  className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                <input type="text" placeholder="CVC"
                  className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>
            </div>

            <button type="submit"
              className="w-full mt-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-base">lock</span>
              Get Started — $7.99/mo
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-neutral-600 leading-relaxed">
            By continuing you agree to our{" "}
            <a href="#" className="text-neutral-500 hover:text-neutral-300 underline underline-offset-2 transition-colors">Terms</a>{" "}
            and{" "}
            <a href="#" className="text-neutral-500 hover:text-neutral-300 underline underline-offset-2 transition-colors">Privacy Policy</a>.
          </p>

          <div className="mt-6 pt-6 border-t border-white/6 text-center">
            <Link href="/#pricing" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
