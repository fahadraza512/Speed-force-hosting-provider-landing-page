"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex">

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[440px] xl:w-[480px] shrink-0 flex-col justify-between bg-neutral-900 border-r border-white/6 p-12 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

        <Link href="/">
          <Image src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
            alt="Speed Force" width={400} height={100} style={{ height: "48px", width: "auto" }} priority />
        </Link>

        <div className="relative z-10">
          <h2 className="text-2xl font-black text-white tracking-tight mb-2">Let&apos;s talk.</h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-8">Whether you need a dedicated server, a custom hosting setup, or just want to understand your options — our engineers are here to help.</p>

          <div className="space-y-5">
            {[
              { icon: "support_agent", title: "Dedicated account manager", desc: "A real senior engineer assigned to your account from day one." },
              { icon: "speed",         title: "Custom SLA",                 desc: "99.99% uptime guarantee with financial backing available." },
              { icon: "handshake",     title: "Volume discounts",           desc: "Special pricing for multi-server and agency deployments." },
              { icon: "timer",         title: "Response within 1 hour",     desc: "We get back to every enquiry within one business hour." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className="text-white text-sm font-semibold">{title}</p>
                  <p className="text-neutral-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span className="material-symbols-outlined text-sm text-primary/60">lock</span>
          Secured by 256-bit SSL encryption
        </div>
      </div>

      {/* Right — contact form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="lg:hidden mb-8">
          <Link href="/">
            <Image src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
              alt="Speed Force" width={400} height={100} style={{ height: "48px", width: "auto" }} priority />
          </Link>
        </div>

        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-black text-white tracking-tight mb-1.5">Talk to our sales team</h1>
            <p className="text-neutral-500 text-sm">We&apos;ll get back to you within 1 business hour.</p>
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
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Work email</label>
              <input type="email" placeholder="you@company.com" autoComplete="email"
                className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Company name</label>
              <input type="text" placeholder="Acme Corp" autoComplete="organization"
                className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Team size</label>
              <select className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-neutral-400 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none">
                <option value="">Select team size</option>
                <option>1–10 employees</option>
                <option>11–50 employees</option>
                <option>51–200 employees</option>
                <option>200+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">How can we help?</label>
              <textarea rows={3} placeholder="Tell us about your infrastructure needs..."
                className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
            </div>

            <button type="submit"
              className="w-full mt-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-base">send</span>
              Contact Sales
            </button>
          </form>

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
