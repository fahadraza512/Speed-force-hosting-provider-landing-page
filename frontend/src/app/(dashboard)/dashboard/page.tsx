"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const stats = [
  { label: "Active Services", value: "0", icon: "cloud" },
  { label: "Domains",         value: "0", icon: "language" },
  { label: "Open Tickets",    value: "0", icon: "support_agent" },
  { label: "Last Invoice",    value: "—", icon: "receipt_long" },
];

const actions = [
  { href: "/dashboard/services", icon: "cloud",         label: "My Services",   desc: "View and manage your hosting plans" },
  { href: "/dashboard/support",  icon: "support_agent", label: "Open a Ticket", desc: "Get help from our expert team" },
  { href: "/dashboard/billing",  icon: "receipt_long",  label: "Billing",       desc: "View invoices and manage billing" },
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="bg-white min-h-full">
      <div className="border-b border-neutral-100 px-8 py-7">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Overview</h1>
        <p className="text-sm text-neutral-500 mt-1">Welcome back, {user?.name ?? "there"}.</p>
      </div>

      <div className="px-8 py-10 max-w-3xl divide-y divide-neutral-100">

        <section className="pb-10">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Current Plan</h2>
          <div className="flex items-center justify-between border border-neutral-200 rounded-lg px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-neutral-900">Free Plan</p>
              <p className="text-sm text-neutral-400 mt-0.5">
                Member since {new Date(user?.createdAt ?? Date.now()).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </div>
            <Link href="/contact-sales" className="text-sm font-semibold text-primary hover:text-primary/80 transition">
              Upgrade →
            </Link>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Account Summary</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ label, value, icon }) => (
              <div key={label} className="border border-neutral-200 rounded-lg p-5">
                <span className="material-symbols-outlined text-neutral-400 text-xl mb-3 block">{icon}</span>
                <p className="text-2xl font-bold tracking-tight text-neutral-900">{value}</p>
                <p className="text-xs text-neutral-400 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Quick Actions</h2>
          <div className="divide-y divide-neutral-100 border border-neutral-200 rounded-lg overflow-hidden">
            {actions.map(({ href, icon, label, desc }) => (
              <Link key={href} href={href}
                className="flex items-center gap-4 px-5 py-4 hover:bg-neutral-50 transition group">
                <span className="material-symbols-outlined text-neutral-400 group-hover:text-neutral-600 transition text-xl shrink-0">{icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-neutral-900">{label}</p>
                  <p className="text-sm text-neutral-400 mt-0.5">{desc}</p>
                </div>
                <span className="text-neutral-300 group-hover:text-neutral-500 transition text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
