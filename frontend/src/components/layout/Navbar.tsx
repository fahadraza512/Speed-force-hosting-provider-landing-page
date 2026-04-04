"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const megaMenus: Record<string, { cols: { heading: string; items: { icon: string; label: string; desc?: string; href: string }[] }[] }> = {
  "Cloud Hosting": {
    cols: [
      {
        heading: "Hosting Plans",
        items: [
          { icon: "cloud",         label: "Shared Hosting",      desc: "Perfect for small sites",          href: "/cloud-hosting#shared" },
          { icon: "bolt",          label: "Cloud Hosting",       desc: "NVMe-powered, instant scaling",    href: "/cloud-hosting#cloud" },
          { icon: "dns",           label: "VPS Hosting",         desc: "Full control, dedicated resources",href: "/cloud-hosting#vps" },
          { icon: "storage",       label: "WordPress Hosting",   desc: "Optimised for WordPress",          href: "/cloud-hosting#wordpress" },
        ],
      },
      {
        heading: "Features",
        items: [
          { icon: "shield",        label: "Free SSL + DDoS",     desc: "Security on every plan",           href: "/cloud-hosting#ssl" },
          { icon: "backup",        label: "Daily Backups",       desc: "One-click restore",                href: "/cloud-hosting#backups" },
          { icon: "language",      label: "Global CDN",          desc: "8 edge regions worldwide",         href: "/cloud-hosting#cdn" },
          { icon: "support_agent", label: "24/7 Expert Support", desc: "Real engineers, fast response",    href: "/cloud-hosting#support" },
        ],
      },
    ],
  },
  "Dedicated Servers": {
    cols: [
      {
        heading: "Server Types",
        items: [
          { icon: "memory",        label: "Entry Dedicated",     desc: "Up to 16 cores, 64 GB RAM",        href: "/dedicated-servers#entry" },
          { icon: "storage",       label: "Performance Server",  desc: "Up to 32 cores, 256 GB RAM",       href: "/dedicated-servers#performance" },
          { icon: "hard_drive",    label: "Enterprise Server",   desc: "Up to 64 cores, 512 GB DDR5",      href: "/dedicated-servers#enterprise" },
          { icon: "network_node",  label: "Custom Build",        desc: "Spec your own configuration",      href: "/dedicated-servers#custom" },
        ],
      },
      {
        heading: "Included",
        items: [
          { icon: "lock",          label: "Full Root Access",    desc: "Complete server control",          href: "/dedicated-servers#root-access" },
          { icon: "speed",         label: "10 Gbps Uplink",      desc: "Bare-metal performance",           href: "/dedicated-servers#uplink" },
          { icon: "verified_user", label: "Hardware Firewall",   desc: "Enterprise DDoS protection",       href: "/dedicated-servers#firewall" },
          { icon: "handshake",     label: "Dedicated Support",   desc: "Named engineer on your account",   href: "/dedicated-servers#dedicated-support" },
        ],
      },
    ],
  },
  "Domain Names": {
    cols: [
      {
        heading: "Find a Domain",
        items: [
          { icon: "search",        label: "Search Domains",      desc: "Find your perfect domain name",    href: "/domain-names#search-domains" },
          { icon: "transfer_within_a_station", label: "Transfer Domain", desc: "Move your domain to us",  href: "/domain-names#transfer" },
          { icon: "list",          label: "500+ Extensions",     desc: ".com .io .app .dev and more",      href: "/domain-names#extensions" },
        ],
      },
      {
        heading: "Domain Tools",
        items: [
          { icon: "visibility_off",label: "Free WHOIS Privacy",  desc: "Protect your personal info",       href: "/domain-names#whois" },
          { icon: "dns",           label: "DNS Management",      desc: "Full DNS control panel",           href: "/domain-names#dns" },
          { icon: "email",         label: "Email Forwarding",    desc: "Forward to any inbox free",        href: "/domain-names#email-forwarding" },
          { icon: "autorenew",     label: "Auto-Renewal",        desc: "Never lose your domain",           href: "/domain-names#auto-renewal" },
        ],
      },
    ],
  },
};

const navLinks = [
  { label: "Cloud Hosting",     href: "/cloud-hosting",     hasMega: true },
  { label: "Dedicated Servers", href: "/dedicated-servers", hasMega: true },
  { label: "Domain Names",      href: "/domain-names",      hasMega: true },
  { label: "Agency Solutions",  href: "/agency-solutions",  hasMega: false },
  { label: "Client Area",       href: "/client-area",       hasMega: false },
];

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  // initialise from actual scroll position so there's no flash on load
  const [scrolled,   setScrolled]   = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 60 : false
  );
  const navRef = useRef<HTMLElement>(null);
  // stable nav height tracked via ResizeObserver — no layout-read on every render
  const [navHeight, setNavHeight] = useState(64);

  useEffect(() => {
    // sync scroll state immediately in case page loaded mid-scroll
    setScrolled(window.scrollY > 60);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setScrolled(window.scrollY > 60); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const ro = new ResizeObserver(([entry]) => setNavHeight(entry.contentRect.height));
    ro.observe(navRef.current);
    return () => ro.disconnect();
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen(o => !o), []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || activeMenu ? "bg-neutral-900/95 shadow-lg" : "bg-transparent"
      } ${mounted ? "opacity-100" : "opacity-0"}`}
      style={{ transition: "background-color 300ms, box-shadow 300ms, opacity 150ms" }}
    >
      {/* Click-outside overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-45"
          style={{ top: `${navHeight}px` }}
          onClick={() => setActiveMenu(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center -ml-2">
          <Image
            src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
            alt="Speed Force" width={200} height={52}
            priority style={{ height: "48px", width: "auto" }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-5 text-sm font-bold tracking-tight whitespace-nowrap">
          {navLinks.map(({ label, href, hasMega }) => (
            <div key={label} className="relative">
              <Link
                href={href}
                onClick={(e) => {
                  if (hasMega) { e.preventDefault(); setActiveMenu(activeMenu === label ? null : label); }
                }}
                className="flex items-center gap-1 text-white/70 hover:text-white transition-colors duration-200 py-4"
              >
                {label}
                {hasMega && (
                  <span className={`material-symbols-outlined text-[14px] transition-transform duration-200 ${activeMenu === label ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                )}
              </Link>

              {hasMega && megaMenus[label] && (
                <div
                  className={`fixed left-0 right-0 bg-white border-b border-neutral-200 shadow-xl z-46 transition-all duration-300 ease-out ${
                    activeMenu === label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ top: `${navHeight}px` }}
                >
                  <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className={`grid gap-10 ${megaMenus[label].cols.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {megaMenus[label].cols.map(({ heading, items }, colIdx) => (
                        <div
                          key={heading}
                          className={`transition-all duration-500 ease-out ${
                            activeMenu === label ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                          }`}
                          style={{ transitionDelay: activeMenu === label ? `${colIdx * 60}ms` : "0ms" }}
                        >
                          <p className="text-[10px] font-black tracking-[0.2em] text-neutral-400 uppercase mb-4">{heading}</p>
                          <div className="grid grid-cols-2 gap-1">
                            {items.map(({ icon, label: itemLabel, desc, href: itemHref }, itemIdx) => (
                              <Link
                                key={itemLabel}
                                href={itemHref}
                                onClick={() => setActiveMenu(null)}
                                className={`flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-neutral-50 transition-all group duration-300 ease-out ${
                                  activeMenu === label ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                                }`}
                                style={{ transitionDelay: activeMenu === label ? `${colIdx * 60 + itemIdx * 40}ms` : "0ms" }}
                              >
                                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-primary/8 transition-colors">
                                  <span className="material-symbols-outlined text-neutral-500 text-lg group-hover:text-primary transition-colors">{icon}</span>
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-neutral-900 group-hover:text-primary transition-colors leading-tight">{itemLabel}</p>
                                  {desc && <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{desc}</p>}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between transition-all duration-500 ease-out ${
                        activeMenu === label ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                      style={{ transitionDelay: activeMenu === label ? "180ms" : "0ms" }}
                    >
                      <p className="text-xs text-neutral-400">Need help choosing the right plan?</p>
                      <Link href="/contact-sales" onClick={() => setActiveMenu(null)}
                        className="text-xs font-black text-primary hover:text-primary/70 transition-colors flex items-center gap-1">
                        Talk to Sales
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block text-white/70 hover:text-white text-sm font-bold transition-colors">Log In</Link>
          <Link href="/register"
            className="bg-primary hover:bg-primary-container text-white px-5 py-2 rounded-full font-bold transition-all duration-200 hover:scale-105 active:scale-95 text-sm">
            Get Started
          </Link>
          <button
            className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-900 px-6 pb-6 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}
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
