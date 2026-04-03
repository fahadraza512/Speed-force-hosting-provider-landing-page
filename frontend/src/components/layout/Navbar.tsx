"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Cloud Hosting",     href: "/cloud-hosting",      active: true },
  { label: "Dedicated Servers", href: "/dedicated-servers" },
  { label: "Domain Names",      href: "/domain-names" },
  { label: "Agency Solutions",  href: "/agency-solutions" },
  { label: "Client Area",       href: "/client-area" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen(o => !o), []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-neutral-900/95 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center -ml-2">
          <Image
            src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
            alt="Speed Force"
            width={200}
            height={52}
            priority
            style={{ height: "48px", width: "auto" }}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-tight">
          {navLinks.map(({ label, href, active }) => (
            <Link key={label} href={href ?? "/"}
              className={`transition-colors duration-200 ${active ? "text-white border-b-2 border-primary pb-1" : "text-white/70 hover:text-white"}`}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block text-white/70 hover:text-white text-sm font-bold transition-colors">Log In</Link>
          <Link href="/register" className="bg-primary hover:bg-primary-container text-white px-5 py-2 rounded-full font-bold transition-all duration-200 hover:scale-105 active:scale-95 text-sm">
            Get Started
          </Link>
          <button className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-neutral-900 px-6 pb-6 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map(({ label, href, active }) => (
            <Link key={label} href={href ?? "/"}
              className={`text-sm font-bold py-3 border-b border-white/5 transition-colors ${active ? "text-primary" : "text-white/70 hover:text-white"}`}>
              {label}
            </Link>
          ))}
          <button className="mt-4 bg-primary text-white px-5 py-3 rounded-full font-bold text-sm w-full">Get Started</button>
        </div>
      )}
    </nav>
  );
}
