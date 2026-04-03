import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";

export const metadata: Metadata = { title: "Client Area – Speed Force" };

const features = [
  { icon: "dns",           title: "Manage Services",    desc: "View and control all your hosting plans, domains, and add-ons." },
  { icon: "receipt_long",  title: "Billing & Invoices", desc: "Download invoices, update payment methods, and manage subscriptions." },
  { icon: "support_agent", title: "Support Tickets",    desc: "Open, track, and respond to support requests directly from your dashboard." },
  { icon: "language",      title: "Domain Manager",     desc: "Renew domains, update DNS records, and manage WHOIS settings." },
];

export default function ClientAreaPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-100">
        <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-20 text-center">

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-5 text-neutral-900">
            Welcome Back.
          </h1>
          <p className="text-neutral-500 text-lg max-w-lg mx-auto leading-relaxed mb-10">
            Manage your services, billing, support tickets, and domains — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/login" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-base">login</span>
              Log In to Dashboard
            </Link>
            <Link href="/register" className="w-full sm:w-auto border border-neutral-300 hover:border-neutral-400 text-neutral-700 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center justify-center">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Your Dashboard</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Everything in one place.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
              </div>
              <div>
                <h3 className="text-neutral-900 font-black text-sm mb-1.5">{title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security note */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-emerald-600 text-xl">verified_user</span>
          </div>
          <div>
            <h3 className="text-neutral-900 font-black text-sm mb-1">Your account is protected</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              All client area sessions are encrypted with 256-bit SSL. We support two-factor authentication and never store plain-text passwords.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-100 py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Speed Force Hosting, Inc. All rights reserved.
      </footer>
    </div>
  );
}
