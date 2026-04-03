"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Cloud Hosting",     href: "/cloud-hosting" },
  { label: "Dedicated Servers", href: "/dedicated-servers" },
  { label: "Domain Names",      href: "/domain-names" },
  { label: "Agency Solutions",  href: "/agency-solutions" },
  { label: "Client Area",       href: "/client-area" },
];

export default function PageNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen(o => !o), []);

  return (
    <nav className="w-full z-50 bg-neutral-900 border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <Link href="/" className="flex items-center -ml-2">
          <Image
            src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
            alt="Speed Force" width={200} height={52}
            priority style={{ height: "44px", width: "auto" }}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-7 text-sm font-bold tracking-tight">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}
              className="text-white/70 hover:text-white transition-colors duration-200">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block text-white/70 hover:text-white text-sm font-bold transition-colors">
            Log In
          </Link>
          <Link href="/register"
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95">
            Get Started
          </Link>
          <button className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-neutral-900 px-6 pb-6 flex flex-col gap-1 border-t border-white/8">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}
              className="text-sm font-bold py-3 border-b border-white/5 text-white/70 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
          <Link href="/register" className="mt-4 bg-primary text-white px-5 py-3 rounded-full font-bold text-sm w-full text-center block">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
