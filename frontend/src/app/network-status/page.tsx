import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageNavbar from "@/components/layout/PageNavbar";

export const metadata: Metadata = {
  title: "Network Status – Speed Force",
  description: "Real-time status of Speed Force infrastructure, edge network, and core services.",
};

const regions = [
  { name: "North America — East",  location: "New York, US",     latency: "0.4ms", uptime: "100%",   status: "operational" as const },
  { name: "North America — West",  location: "Los Angeles, US",  latency: "0.6ms", uptime: "100%",   status: "operational" as const },
  { name: "Europe — West",         location: "Frankfurt, DE",    latency: "0.5ms", uptime: "100%",   status: "operational" as const },
  { name: "Europe — North",        location: "Amsterdam, NL",    latency: "0.7ms", uptime: "99.98%", status: "operational" as const },
  { name: "Asia Pacific — East",   location: "Singapore, SG",    latency: "0.9ms", uptime: "100%",   status: "operational" as const },
  { name: "Asia Pacific — South",  location: "Mumbai, IN",       latency: "1.1ms", uptime: "99.95%", status: "degraded"    as const },
  { name: "Middle East",           location: "Dubai, AE",        latency: "1.2ms", uptime: "100%",   status: "operational" as const },
  { name: "South America",         location: "São Paulo, BR",    latency: "1.4ms", uptime: "100%",   status: "operational" as const },
];

const serviceGroups = [
  {
    group: "Hosting Infrastructure",
    services: [
      { name: "Web Servers",        status: "operational" as const },
      { name: "Database Clusters",  status: "degraded"    as const },
      { name: "File Storage",       status: "operational" as const },
      { name: "Backup Services",    status: "operational" as const },
    ],
  },
  {
    group: "Network & Security",
    services: [
      { name: "CDN Edge Network",   status: "operational" as const },
      { name: "DDoS Protection",    status: "operational" as const },
      { name: "SSL Provisioning",   status: "operational" as const },
      { name: "DNS Resolution",     status: "operational" as const },
    ],
  },
  {
    group: "Platform Services",
    services: [
      { name: "Control Panel",      status: "operational" as const },
      { name: "API Gateway",        status: "operational" as const },
      { name: "Email Delivery",     status: "operational" as const },
      { name: "Billing System",     status: "operational" as const },
    ],
  },
];

const incidents = [
  {
    id: "INC-2026-041",
    date: "Apr 2, 2026 · 11:14 UTC",
    title: "Elevated latency — Mumbai region",
    severity: "degraded" as const,
    updates: [
      { time: "14:32 UTC", status: "Investigating", message: "We are investigating elevated response times affecting a subset of servers in the Mumbai data center. Other regions are unaffected." },
      { time: "12:05 UTC", status: "Identified",    message: "Root cause identified as a misconfigured routing table following a scheduled maintenance window. Fix is being deployed." },
      { time: "11:14 UTC", status: "Detected",      message: "Automated monitoring detected elevated p99 latency in the Mumbai region. Engineers have been paged." },
    ],
  },
];

const pastIncidents = [
  { date: "Mar 18, 2026", title: "Scheduled maintenance — Frankfurt region", duration: "22 min", resolved: true },
  { date: "Feb 27, 2026", title: "Brief DNS propagation delay",              duration: "8 min",  resolved: true },
  { date: "Jan 14, 2026", title: "CDN cache purge latency spike",            duration: "14 min", resolved: true },
];

const statusConfig = {
  operational: {
    label: "Operational",
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 border-emerald-200 text-emerald-600",
    banner: "bg-emerald-50 border-emerald-200",
    icon: "check_circle",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  degraded: {
    label: "Degraded",
    dot: "bg-amber-400",
    badge: "bg-amber-50 border-amber-200 text-amber-600",
    banner: "bg-amber-50 border-amber-200",
    icon: "warning",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
  },
  outage: {
    label: "Outage",
    dot: "bg-red-500",
    badge: "bg-red-50 border-red-200 text-red-600",
    banner: "bg-red-50 border-red-200",
    icon: "error",
    iconColor: "text-red-600",
    iconBg: "bg-red-50",
  },
};

const allOperational =
  regions.every((r) => r.status === "operational") &&
  serviceGroups.every((g) => g.services.every((s) => s.status === "operational"));

const overallStatus = allOperational ? "operational" : "degraded";
const cfg = statusConfig[overallStatus];

export default function NetworkStatusPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* ── Overall status ── */}
        <div className={`rounded-2xl border p-7 mb-4 flex items-center gap-5 ${cfg.banner}`}>
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${cfg.iconBg}`}>
            <span className={`material-symbols-outlined text-3xl ${cfg.iconColor}`}>{cfg.icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-black tracking-tight text-neutral-900 mb-1">
              {allOperational ? "All systems operational" : "Minor service disruption"}
            </h1>
            <p className="text-neutral-500 text-sm">Last updated: April 3, 2026 at 14:32 UTC</p>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
              <span className={`w-2 h-2 rounded-full animate-pulse ${cfg.dot}`} />
              Live monitoring
            </div>
            <p className="text-xs text-neutral-600">Updates every 60s</p>
          </div>
        </div>

        {/* ── Quick stats ── */}
        <div className="grid grid-cols-3 gap-3 mb-12">
          {[
            { label: "Regions online",    value: `${regions.filter(r => r.status === "operational").length}/${regions.length}` },
            { label: "Services healthy",  value: `${serviceGroups.flatMap(g => g.services).filter(s => s.status === "operational").length}/${serviceGroups.flatMap(g => g.services).length}` },
            { label: "30-day uptime",     value: "99.97%" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-neutral-200 rounded-xl px-5 py-4 text-center shadow-sm">
              <p className="text-xl font-black tracking-tighter text-neutral-900">{value}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Active incidents ── */}
        {incidents.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Active Incidents
            </h2>
            {incidents.map(({ id, date, title, severity, updates }) => {
              const icfg = statusConfig[severity];
              return (
                <div key={id} className={`rounded-2xl border p-6 ${icfg.banner}`}>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-neutral-600 font-mono">{id}</span>
                        <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${icfg.badge}`}>
                          {icfg.label}
                        </span>
                      </div>
                      <h3 className="text-neutral-900 font-bold text-base">{title}</h3>
                      <p className="text-neutral-500 text-xs mt-0.5">{date}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {updates.map(({ time, status, message }) => (
                      <div key={time} className="flex gap-4">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                          <div className="w-px flex-1 bg-neutral-200 mt-1" />
                        </div>
                        <div className="pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-neutral-900 text-xs font-bold">{status}</span>
                            <span className="text-neutral-400 text-xs">{time}</span>
                          </div>
                          <p className="text-neutral-500 text-sm leading-relaxed">{message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* ── Service groups ── */}
        <section className="mb-12">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-neutral-500 mb-4">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {serviceGroups.map(({ group, services }) => (
              <div key={group} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-5 py-3.5 border-b border-neutral-100">
                  <p className="text-xs font-bold text-neutral-500">{group}</p>
                </div>
                {services.map(({ name, status }, i) => {
                  const scfg = statusConfig[status];
                  return (
                    <div key={name} className={`flex items-center justify-between px-5 py-3.5 hover:bg-neutral-50 transition-colors ${i < services.length - 1 ? "border-b border-neutral-100" : ""}`}>
                      <span className="text-sm text-neutral-700">{name}</span>
                      <span className={`flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border ${scfg.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${scfg.dot} ${status !== "operational" ? "animate-pulse" : ""}`} />
                        {scfg.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* ── Edge regions ── */}
        <section className="mb-12">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-neutral-500 mb-4">Global Edge Network</h2>
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 px-5 py-3 border-b border-neutral-100 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
              <span className="col-span-2">Region</span>
              <span className="text-center">Latency</span>
              <span className="text-right">Status</span>
            </div>
            {regions.map(({ name, location, latency, uptime, status }, i) => {
              const rcfg = statusConfig[status];
              return (
                <div key={name} className={`grid grid-cols-4 items-center px-5 py-4 hover:bg-neutral-50 transition-colors ${i < regions.length - 1 ? "border-b border-neutral-100" : ""}`}>
                  <div className="col-span-2">
                    <p className="text-sm text-neutral-900 font-medium">{name}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{location} &middot; {uptime} uptime</p>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-mono text-neutral-500">{latency}</span>
                  </div>
                  <div className="flex justify-end">
                    <span className={`flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border ${rcfg.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${rcfg.dot} ${status !== "operational" ? "animate-pulse" : ""}`} />
                      {rcfg.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Uptime history ── */}
        <section className="mb-12">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-neutral-500 mb-4">90-Day Uptime History</h2>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-end gap-0.5 mb-3 h-12">
              {Array.from({ length: 90 }, (_, i) => {
                const isDegraded = i === 72 || i === 45;
                const height = isDegraded ? "h-7" : ["h-10", "h-11", "h-12", "h-10", "h-11"][i % 5];
                return (
                  <div key={i} title={isDegraded ? "Incident" : "Operational"}
                    className={`flex-1 rounded-sm transition-all hover:opacity-80 cursor-default ${isDegraded ? `bg-amber-400/70 ${height}` : `bg-emerald-500/60 ${height}`}`} />
                );
              })}
            </div>
            <div className="flex justify-between items-center text-xs text-neutral-600">
              <span>90 days ago</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-emerald-500/60" />Operational</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-amber-400/70" />Incident</span>
                <span className="text-emerald-600 font-bold">99.97% uptime</span>
              </div>
              <span>Today</span>
            </div>
          </div>
        </section>

        {/* ── Past incidents ── */}
        <section className="mb-12">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-neutral-500 mb-4">Past Incidents</h2>
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
            {pastIncidents.map(({ date, title, duration, resolved }, i) => (
              <div key={title} className={`flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors ${i < pastIncidents.length - 1 ? "border-b border-neutral-100" : ""}`}>
                <div>
                  <p className="text-sm text-neutral-700 font-medium">{title}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{date} &middot; Duration: {duration}</p>
                </div>
                {resolved && (
                  <span className="shrink-0 flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Resolved
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Subscribe ── */}
        <section className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 text-center">
          <span className="material-symbols-outlined text-primary text-3xl mb-3 block">notifications</span>
          <h3 className="text-neutral-900 font-black text-lg tracking-tight mb-2">Stay informed</h3>
          <p className="text-neutral-500 text-sm mb-6">Get notified instantly when incidents are created or resolved.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input type="email" placeholder="you@company.com"
              className="flex-1 bg-white border border-neutral-300 hover:border-neutral-400 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all hover:scale-105 shrink-0">
              Subscribe
            </button>
          </div>
        </section>

      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-neutral-100 py-8 text-center text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} Speed Force Hosting, Inc. &middot; <Link href="/" className="hover:text-neutral-500 transition-colors">speedforce.agency</Link></p>
      </footer>

    </div>
  );
}
