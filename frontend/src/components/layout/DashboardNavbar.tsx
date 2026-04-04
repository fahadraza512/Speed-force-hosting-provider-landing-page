"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardNavbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full z-50 bg-neutral-900 border-b border-white/8 sticky top-0">
      <div className="max-w-full px-6 py-3.5 flex justify-between items-center">
        <Link href="/" className="flex items-center -ml-2">
          <Image
            src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
            alt="Speed Force" width={200} height={52}
            priority style={{ height: "44px", width: "auto" }}
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* User info */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-black text-xs">
              {user?.name?.[0]?.toUpperCase() ?? "U"}
            </div>
            <span className="text-sm text-white/70 font-medium">{user?.email}</span>
          </div>

          {/* Sign out */}
          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white font-bold transition-colors border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-base">logout</span>
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
