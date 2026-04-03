import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";

export const metadata: Metadata = { title: "Dedicated Servers – Speed Force" };

const specs = [
  { label: "CPU",     value: "Up to 64 cores",    icon: "memory" },
  { label: "RAM",     value: "Up to 512 GB DDR5", icon: "storage" },
  { label: "Storage", value: "Up to 10 TB NVMe",  icon: "hard_drive" },
  { label: "Network", value: "10 Gbps uplink",    icon: "network_node" },
];

const features = [
  { icon: "lock",          title: "Full Root Access",       desc: "Complete control over your server environment. Install any OS, software, or configuration." },
  { icon: "speed",         title: "Bare-Metal Performance", desc: "No virtualization overhead. Every CPU cycle and GB of RAM is exclusively yours." },
  { icon: "support_agent", title: "Dedicated Support",      desc: "A named engineer assigned to your account. Direct line, no ticket queues." },
  { icon: "shield",        title: "Hardware Firewall",      desc: "Enterprise-grade firewall and DDoS mitigation at the network edge." },
  { icon: "backup",        title: "RAID Storage",           desc: "Hardware RAID with hot-swap drives. Your data is always protected." },
  { icon: "bolt",          title: "IPMI Access",            desc: "Out-of-band management for remote reboots, OS reinstalls, and console access." },
];

export default function DedicatedServersPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-100">
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Dedicated Servers
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-5 text-neutral-900">
            Full Power.<br /><span className="text-primary italic">Zero Compromise.</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Bare-metal dedicated servers with enterprise-grade hardware, full root access, and 24/7 expert support. Your resources, exclusively yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact-sales" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              View Server Plans
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link href="/get-started" className="w-full sm:w-auto border border-neutral-300 hover:border-neutral-400 text-neutral-700 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center justify-center">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {specs.map(({ label, value, icon }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
              </div>
              <div>
                <p className="text-neutral-900 font-black text-sm">{value}</p>
                <p className="text-neutral-500 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Enterprise Grade</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Built for demanding workloads.</h2>
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
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">Need a custom configuration?</h2>
          <p className="text-neutral-400 text-sm mb-8">Our team will spec the perfect server for your workload.</p>
          <Link href="/contact-sales" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
            Talk to an Engineer
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
