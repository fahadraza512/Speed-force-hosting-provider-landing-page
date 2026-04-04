import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = { title: "Cloud Hosting – Speed Force" };

const plans = [
  { id: "shared",    icon: "cloud",   title: "Shared Hosting",    desc: "Perfect for small sites",           price: "$3.99/mo" },
  { id: "cloud",     icon: "bolt",    title: "Cloud Hosting",     desc: "NVMe-powered, instant scaling",     price: "$7.99/mo" },
  { id: "vps",       icon: "dns",     title: "VPS Hosting",       desc: "Full control, dedicated resources", price: "$14.99/mo" },
  { id: "wordpress", icon: "storage", title: "WordPress Hosting", desc: "Optimised for WordPress",           price: "$4.99/mo" },
];

const features = [
  { id: "ssl",     icon: "shield",        title: "Free SSL + DDoS",     desc: "Security on every plan. Automatic SSL provisioning and enterprise DDoS protection included at no extra cost." },
  { id: "backups", icon: "backup",        title: "Daily Backups",       desc: "One-click restore. Automated daily backups with instant recovery so your data is always protected." },
  { id: "cdn",     icon: "language",      title: "Global CDN",          desc: "8 edge regions worldwide. Blazing-fast content delivery no matter where your visitors are located." },
  { id: "support", icon: "support_agent", title: "24/7 Expert Support", desc: "Real engineers, fast response. Average response time under 3 minutes — no bots, no scripts." },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<1ms",  label: "Avg. Latency" },
  { value: "2M+",   label: "Sites Hosted" },
  { value: "24/7",  label: "Expert Support" },
];

export default function CloudHostingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-5 text-neutral-900">
            Blazing Fast.<br /><span className="text-primary italic">Always On.</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            NVMe-powered cloud servers with 99.9% uptime SLA, instant scaling, and one-click deployments.
          </p>
          <Link href="/contact-sales"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20">
            Get Started
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-black tracking-tighter text-neutral-900 mb-1">{value}</p>
              <p className="text-xs text-neutral-500 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hosting Plans */}
      <section id="plans" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Hosting Plans</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Pick your plan.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {plans.map(({ id, icon, title, desc, price }) => (
            <div id={id} key={title} className="scroll-mt-24 border border-neutral-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-neutral-500 group-hover:text-primary transition-colors text-xl">{icon}</span>
              </div>
              <h3 className="font-black text-sm text-neutral-900 mb-1">{title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed flex-1">{desc}</p>
              <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-sm font-black text-neutral-900">{price}</span>
                <Link href="/contact-sales" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">
                  Get started →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Everything included.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ id, icon, title, desc }) => (
              <div id={id} key={title} className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-6 flex items-start gap-4 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-500 text-xl">{icon}</span>
                </div>
                <div>
                  <h3 className="font-black text-sm text-neutral-900 mb-1">{title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
