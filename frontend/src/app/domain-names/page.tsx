import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";

export const metadata: Metadata = { title: "Domain Names – Speed Force" };

const extensions = [".com", ".net", ".org", ".io", ".co", ".app", ".dev", ".store", ".shop", ".tech"];
const features = [
  { icon: "visibility_off", title: "Free WHOIS Privacy", desc: "Your personal info stays private. Included free on every domain." },
  { icon: "dns",            title: "DNS Management",     desc: "Full DNS control with an intuitive dashboard. A, CNAME, MX, TXT records." },
  { icon: "autorenew",      title: "Auto-Renewal",       desc: "Never lose your domain. Auto-renewal with advance email reminders." },
  { icon: "lock",           title: "Domain Lock",        desc: "Transfer lock prevents unauthorized domain transfers." },
  { icon: "email",          title: "Email Forwarding",   desc: "Forward your domain email to any inbox for free." },
  { icon: "language",       title: "500+ Extensions",    desc: "From .com to .xyz — we support over 500 domain extensions." },
];

export default function DomainNamesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-100">
        <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-5 text-neutral-900">
            Claim Your Corner<br /><span className="text-primary italic">of the Web.</span>
          </h1>
          <p className="text-neutral-500 text-base max-w-lg mx-auto leading-relaxed mb-10">
            Search and register from 500+ domain extensions. Free WHOIS privacy, DNS management, and auto-renewal on every domain.
          </p>

          {/* Search bar */}
          <div className="flex gap-2 w-full max-w-lg mx-auto mb-8">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-neutral-400 text-lg">search</span>
              <input type="text" placeholder="Search for your perfect domain..."
                className="w-full bg-white border border-neutral-300 hover:border-neutral-400 focus:border-primary rounded-xl pl-11 pr-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:ring-2 focus:ring-primary/15 shadow-sm" />
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-sm shadow-primary/20 shrink-0">
              Search
            </button>
          </div>

          {/* Popular extensions */}
          <div className="flex flex-wrap justify-center gap-2">
            {extensions.map((ext) => (
              <span key={ext} className="px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-xs font-bold text-neutral-600 hover:border-primary/40 hover:text-primary cursor-pointer transition-all">
                {ext}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing strip */}
      <section className="border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { ext: ".com", price: "$9.99/yr" },
            { ext: ".io",  price: "$39.99/yr" },
            { ext: ".app", price: "$14.99/yr" },
            { ext: ".dev", price: "$12.99/yr" },
          ].map(({ ext, price }) => (
            <div key={ext} className="bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer">
              <p className="text-xl font-black text-neutral-900 mb-0.5">{ext}</p>
              <p className="text-xs text-neutral-500">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Everything Included</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">More than just a domain.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4">
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
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">Your domain is waiting.</h2>
          <p className="text-neutral-400 text-sm mb-8">Register today and get free WHOIS privacy, DNS management, and email forwarding.</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
            Search Domains
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
