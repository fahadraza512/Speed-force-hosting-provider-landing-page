"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const services = [
  { icon: "cloud", label: "Cloud Hosting",     status: "Active",   color: "text-emerald-400" },
  { icon: "dns",   label: "Dedicated Server",  status: "Active",   color: "text-emerald-400" },
  { icon: "mail",  label: "Email Marketing",   status: "Inactive", color: "text-neutral-500" },
  { icon: "language", label: "Domain Names",   status: "Active",   color: "text-emerald-400" },
];

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top bar */}
      <header className="border-b border-white/8 bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
              alt="Speed Force" width={140} height={36}
              style={{ height: "36px", width: "auto" }}
            />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-400 hidden sm:block">
              {user?.email}
            </span>
            <button onClick={logout}
              className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors font-bold">
              <span className="material-symbols-outlined text-base">logout</span>
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome */}
        <div className="mb-10">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-2">Client Area</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-neutral-400 text-sm mt-2">Here&apos;s an overview of your services.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Active Services", value: "3", icon: "check_circle" },
            { label: "Domains",         value: "2", icon: "language" },
            { label: "Open Tickets",    value: "0", icon: "support_agent" },
            { label: "Next Invoice",    value: "$29", icon: "receipt" },
          ].map(({ label, value, icon }) => (
            <div key={label} className="bg-neutral-900 border border-white/8 rounded-2xl p-5">
              <span className="material-symbols-outlined text-primary text-xl mb-3 block">{icon}</span>
              <div className="text-2xl font-black tracking-tighter">{value}</div>
              <div className="text-xs text-neutral-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="bg-neutral-900 border border-white/8 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
            <h2 className="font-black tracking-tight">Your Services</h2>
            <button className="text-xs text-primary font-bold hover:text-primary/80 transition-colors">
              + Add Service
            </button>
          </div>
          <div className="divide-y divide-white/5">
            {services.map(({ icon, label, status, color }) => (
              <div key={label} className="px-6 py-4 flex items-center justify-between hover:bg-white/2 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neutral-400 text-lg">{icon}</span>
                  <span className="text-sm font-bold">{label}</span>
                </div>
                <span className={`text-xs font-bold ${color}`}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
