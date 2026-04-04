import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = { title: "Dedicated Servers – Speed Force" };

const stats = [
  { value: "64",     label: "Max CPU Cores" },
  { value: "512 GB", label: "Max DDR5 RAM" },
  { value: "10 Gbps",label: "Network Uplink" },
  { value: "24/7",   label: "Dedicated Support" },
];

export default function DedicatedServersPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-5">
            Full Power.<br /><span className="text-primary italic">Zero Compromise.</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Bare-metal dedicated servers with enterprise-grade hardware, full root access, and a named engineer assigned to your account.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact-sales"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20">
              View Server Plans <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link href="/contact-sales"
              className="inline-flex items-center gap-2 border border-neutral-300 hover:border-neutral-400 text-neutral-700 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105">
              Talk to an Engineer
            </Link>
          </div>
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

      {/* ── Server Types ── */}
      <section id="server-types" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Server Types</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">Hardware built for demanding workloads.</h2>
          <p className="text-neutral-500 text-sm max-w-lg mx-auto">Every server ships with RAID storage, hardware firewall, IPMI access, and a 10 Gbps uplink. Choose the spec that fits your workload.</p>
        </div>

        {/* Entry Dedicated */}
        <div id="entry" className="scroll-mt-24 border border-neutral-200 rounded-2xl overflow-hidden mb-5 hover:border-neutral-300 hover:shadow-md transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">memory</span>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">Entry</p>
                  <h3 className="text-xl font-black tracking-tight text-neutral-900">Entry Dedicated</h3>
                </div>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">The ideal entry point into bare-metal performance. Up to 16 cores and 64 GB RAM gives you the raw power to run high-traffic applications, databases, and development environments without sharing resources.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[["CPU", "Up to 16 cores"], ["RAM", "Up to 64 GB"], ["Storage", "2× 1 TB NVMe"], ["Network", "10 Gbps uplink"]].map(([k, v]) => (
                  <div key={k} className="bg-neutral-50 rounded-lg px-3 py-2.5">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{k}</p>
                    <p className="text-sm font-black text-neutral-900 mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact-sales" className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all">
                Configure Server <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="p-8 bg-neutral-50">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Included</p>
              <ul className="space-y-3">
                {["Full root access", "Hardware RAID storage", "IPMI out-of-band management", "Hardware firewall", "DDoS protection", "10 Gbps uplink", "24/7 expert support", "99.9% uptime SLA"].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-600">
                    <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Server */}
        <div id="performance" className="scroll-mt-24 border border-primary/30 rounded-2xl overflow-hidden mb-5 shadow-lg shadow-primary/5 relative">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-black px-4 py-1 rounded-full tracking-widest">Most Popular</div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">storage</span>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-primary uppercase">Performance</p>
                  <h3 className="text-xl font-black tracking-tight text-neutral-900">Performance Server</h3>
                </div>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">Up to 32 cores and 256 GB RAM for serious workloads. Built for high-traffic e-commerce, SaaS platforms, and data-intensive applications that can&apos;t afford to slow down under load.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[["CPU", "Up to 32 cores"], ["RAM", "Up to 256 GB"], ["Storage", "4× 2 TB NVMe"], ["Network", "10 Gbps uplink"]].map(([k, v]) => (
                  <div key={k} className="bg-neutral-50 rounded-lg px-3 py-2.5">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{k}</p>
                    <p className="text-sm font-black text-neutral-900 mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact-sales" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
                Configure Server <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="p-8 bg-neutral-50">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Included</p>
              <ul className="space-y-3">
                {["Full root access", "Hardware RAID 10 storage", "IPMI out-of-band management", "Hardware firewall + WAF", "Advanced DDoS mitigation", "10 Gbps redundant uplink", "Priority support queue", "Custom OS provisioning"].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-600">
                    <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise Server */}
        <div id="enterprise" className="scroll-mt-24 border border-neutral-200 rounded-2xl overflow-hidden mb-5 hover:border-neutral-300 hover:shadow-md transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">hard_drive</span>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">Enterprise</p>
                  <h3 className="text-xl font-black tracking-tight text-neutral-900">Enterprise Server</h3>
                </div>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">Up to 64 cores and 512 GB DDR5 RAM. The most powerful configuration in our fleet — designed for AI/ML workloads, large-scale databases, and mission-critical infrastructure that demands the absolute best.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[["CPU", "Up to 64 cores"], ["RAM", "Up to 512 GB DDR5"], ["Storage", "8× 4 TB NVMe"], ["Network", "10 Gbps uplink"]].map(([k, v]) => (
                  <div key={k} className="bg-neutral-50 rounded-lg px-3 py-2.5">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{k}</p>
                    <p className="text-sm font-black text-neutral-900 mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact-sales" className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all">
                Configure Server <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="p-8 bg-neutral-50">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Included</p>
              <ul className="space-y-3">
                {["Full root access", "Hardware RAID 10 + hot-swap", "IPMI out-of-band management", "Hardware firewall + WAF", "Enterprise DDoS mitigation", "Redundant 10 Gbps uplink", "Named dedicated engineer", "Custom SLA available"].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-600">
                    <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Build */}
        <div id="custom" className="scroll-mt-24 border border-dashed border-neutral-300 rounded-2xl p-8 text-center hover:border-primary/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-neutral-600 text-2xl">network_node</span>
          </div>
          <h3 className="text-xl font-black tracking-tight text-neutral-900 mb-2">Custom Build</h3>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md mx-auto mb-6">Need something specific? Our engineering team will spec the perfect server for your exact workload — custom CPU, RAM, storage, and networking configurations available.</p>
          <Link href="/contact-sales"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
            Talk to an Engineer <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ── Included ── */}
      <section id="included" className="bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Included</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">Everything included on every server.</h2>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto">No hidden extras. Every dedicated server ships with the same enterprise-grade stack regardless of tier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div id="root-access" className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">lock</span>
                </div>
                <h3 className="text-base font-black text-neutral-900">Full Root Access</h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">Complete server control. Install any OS, configure any software stack, and manage every aspect of your environment. No restrictions, no shared resources, no noisy neighbours.</p>
              <ul className="space-y-2">
                {["SSH root access from day one", "Custom OS provisioning", "Full kernel control", "No resource contention"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>

            <div id="uplink" className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">speed</span>
                </div>
                <h3 className="text-base font-black text-neutral-900">10 Gbps Uplink</h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">Bare-metal performance. Every server connects to our network via a dedicated 10 Gbps uplink — no shared bandwidth, no throttling. Move data at full wire speed, every time.</p>
              <ul className="space-y-2">
                {["Dedicated 10 Gbps port", "Unmetered bandwidth available", "Low-latency network fabric", "BGP routing & IP transit"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>

            <div id="firewall" className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">verified_user</span>
                </div>
                <h3 className="text-base font-black text-neutral-900">Hardware Firewall</h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">Enterprise DDoS protection. A dedicated hardware firewall sits in front of every server, filtering malicious traffic before it reaches your machine — protecting against volumetric attacks up to 10 Tbps.</p>
              <ul className="space-y-2">
                {["Hardware-level packet filtering", "DDoS mitigation up to 10 Tbps", "IP reputation filtering", "Real-time threat intelligence"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>

            <div id="dedicated-support" className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">handshake</span>
                </div>
                <h3 className="text-base font-black text-neutral-900">Dedicated Support</h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">Named engineer on your account. Every dedicated server customer is assigned a senior engineer who knows your infrastructure. Direct line, no ticket queues, no escalation delays.</p>
              <ul className="space-y-2">
                {["Named senior engineer assigned", "Direct phone & chat line", "Proactive monitoring & alerts", "Custom SLA agreements available"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 mx-6 my-16 rounded-3xl overflow-hidden">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">Need a custom configuration?</h2>
          <p className="text-neutral-400 text-sm mb-8">Our engineering team will spec the perfect server for your workload. No obligation, no pressure.</p>
          <Link href="/contact-sales"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
            Talk to an Engineer <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
