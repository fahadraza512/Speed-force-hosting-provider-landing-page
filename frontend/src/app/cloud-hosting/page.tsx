import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";

export const metadata: Metadata = { title: "Cloud Hosting – Speed Force" };

const features = [
  { icon: "bolt",          title: "NVMe Storage",        desc: "Up to 10x faster than traditional SSD with sub-millisecond I/O." },
  { icon: "shield",        title: "Free SSL + DDoS",     desc: "Automatic SSL provisioning and enterprise DDoS protection included." },
  { icon: "cloud_upload",  title: "One-click Deploy",    desc: "Deploy WordPress, Node.js, or any stack in seconds." },
  { icon: "support_agent", title: "24/7 Expert Support", desc: "Real engineers on call. Average response time under 3 minutes." },
  { icon: "backup",        title: "Daily Backups",        desc: "Automated daily backups with one-click restore." },
  { icon: "language",      title: "Global CDN",           desc: "Edge nodes across 8 regions for blazing-fast delivery worldwide." },
];

export default function CloudHostingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-100">
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Cloud Hosting
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-5 text-neutral-900">
            Blazing Fast.<br /><span className="text-primary italic">Always On.</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            NVMe-powered cloud servers with 99.9% uptime SLA, instant scaling, and one-click deployments. Built for developers and growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/get-started" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              Get Started Free
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link href="/network-status" className="w-full sm:w-auto border border-neutral-300 hover:border-neutral-400 text-neutral-700 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center justify-center gap-2">
              View Network Status
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<1ms",  label: "Avg. Latency" },
            { value: "2M+",   label: "Sites Hosted" },
            { value: "24/7",  label: "Expert Support" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-black tracking-tighter text-neutral-900 mb-1">{value}</p>
              <p className="text-xs text-neutral-500 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">What&apos;s Included</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Everything you need to scale.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
              </div>
              <h3 className="text-neutral-900 font-black text-sm mb-1.5">{title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 mx-6 mb-16 rounded-3xl overflow-hidden relative">
        <div className="relative max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">Ready to accelerate?</h2>
          <p className="text-neutral-400 text-sm mb-8">Start your free trial today. No credit card required.</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
            Start Free Trial
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-neutral-100 py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Speed Force Hosting, Inc. All rights reserved.
      </footer>
    </div>
  );
}
