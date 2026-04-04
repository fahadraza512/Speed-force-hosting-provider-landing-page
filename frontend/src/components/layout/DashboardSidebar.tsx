"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const navLinks = [
  { href: "/dashboard",                   icon: "dashboard",       label: "Overview" },
  { href: "/dashboard/services",          icon: "cloud",           label: "My Services" },
  { href: "/dashboard/domains",           icon: "language",        label: "Domains" },
  { href: "/dashboard/billing",           icon: "receipt_long",    label: "Billing" },
  { href: "/dashboard/support",           icon: "support_agent",   label: "Support" },
  { href: "/dashboard/settings",          icon: "manage_accounts", label: "Settings" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      {/* ── Desktop ── */}
      <div className="hidden lg:flex gap-2 p-3 shrink-0" style={{ minHeight: "calc(100vh - 57px)" }}>

        {/* Narrow icon strip */}
        <div className="flex flex-col items-center rounded-2xl bg-[#12121f] w-14 py-3 gap-1">
          {/* Expand toggle — always visible */}
          <button
            onClick={() => setExpanded(v => !v)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/8 transition-all mb-2"
            aria-label="Toggle sidebar"
          >
            <span className="text-sm font-black text-white/60">{expanded ? "«" : "»"}</span>
          </button>

          {/* Icons */}
          {navLinks.map(({ href, icon, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} title={label}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  active ? "text-white bg-white/15" : "text-white/40 hover:text-white hover:bg-white/8"
                }`}>
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
              </Link>
            );
          })}

          {/* Sign out icon */}
          <button onClick={logout} title="Sign Out"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/30 hover:text-white hover:bg-white/8 transition-all mt-auto">
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>

        {/* Expanded panel */}
        <div className={`flex flex-col rounded-2xl bg-[#12121f] overflow-hidden transition-all duration-300 ${
          expanded ? "w-52 opacity-100" : "w-0 opacity-0 pointer-events-none"
        }`}>
          {/* Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/6 shrink-0">
            <span className="text-white font-black text-sm tracking-tight">SpeedForce</span>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-hidden">
            {navLinks.map(({ href, icon, label }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}>
                  <span className="material-symbols-outlined text-[18px] shrink-0">{icon}</span>
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* User */}
          <div className="px-3 py-3 border-t border-white/6 shrink-0">
            <div className="flex items-center gap-2.5 px-2 py-2 rounded-xl hover:bg-white/5 transition-all cursor-default">
              <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-black text-xs shrink-0">
                {user?.name?.[0]?.toUpperCase() ?? "U"}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-white text-xs font-bold truncate">{user?.name ?? "User"}</p>
                <p className="text-white/30 text-[10px] truncate">{user?.email}</p>
              </div>
              <button onClick={logout} title="Sign Out"
                className="text-white/30 hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined text-base">logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile bottom tab bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#12121f] border-t border-white/8 flex items-center justify-around px-2 py-2">
        {navLinks.map(({ href, icon, label }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
                active ? "text-white" : "text-white/40 hover:text-white"
              }`}>
              <span className="material-symbols-outlined text-xl">{icon}</span>
              <span className="text-[9px] font-bold">{label.split(" ")[0]}</span>
            </Link>
          );
        })}
        <button onClick={logout}
          className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl text-white/40 hover:text-white transition-all">
          <span className="material-symbols-outlined text-xl">logout</span>
          <span className="text-[9px] font-bold">Out</span>
        </button>
      </div>
    </>
  );
}
