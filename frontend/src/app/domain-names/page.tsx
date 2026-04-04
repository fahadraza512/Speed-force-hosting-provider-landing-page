import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = { title: "Domain Names – Speed Force" };

const extensions = [
  { ext: ".com", price: "$9.99/yr",  popular: true },
  { ext: ".io",  price: "$39.99/yr", popular: false },
  { ext: ".app", price: "$14.99/yr", popular: false },
  { ext: ".dev", price: "$12.99/yr", popular: false },
  { ext: ".net", price: "$11.99/yr", popular: false },
  { ext: ".org", price: "$10.99/yr", popular: false },
  { ext: ".co",  price: "$24.99/yr", popular: false },
  { ext: ".store",price: "$4.99/yr", popular: false },
];

const stats = [
  { value: "500+",  label: "Extensions" },
  { value: "$9.99", label: "Starting from" },
  { value: "Free",  label: "WHOIS Privacy" },
  { value: "24/7",  label: "Support" },
];

export default function DomainNamesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* Hero */}
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-5">
            Claim Your Corner<br /><span className="text-primary italic">of the Web.</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Search and register from 500+ domain extensions. Free WHOIS privacy, DNS management, and auto-renewal on every domain.
          </p>
          {/* Search bar */}
          <div className="flex gap-2 w-full max-w-lg mx-auto">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-neutral-400 text-lg">search</span>
              <input type="text" placeholder="Search for your perfect domain..."
                className="w-full bg-white border border-neutral-300 hover:border-neutral-400 focus:border-primary rounded-xl pl-11 pr-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:ring-2 focus:ring-primary/15 shadow-sm" />
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-sm shadow-primary/20 shrink-0">
              Search
            </button>
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

      {/* ── Find a Domain ── */}
      <section id="search" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Find a Domain</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">The right domain for every idea.</h2>
          <p className="text-neutral-500 text-sm max-w-lg mx-auto">From classic .com to modern .io and .app — we support over 500 extensions so you can find the perfect match for your brand.</p>
        </div>

        {/* Search Domains */}
        <div id="search-domains" className="scroll-mt-24 border border-neutral-200 rounded-2xl overflow-hidden mb-5 hover:border-neutral-300 hover:shadow-md transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">search</span>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">Instant</p>
                  <h3 className="text-xl font-black tracking-tight text-neutral-900">Search Domains</h3>
                </div>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">Find your perfect domain name in seconds. Our real-time search checks availability across all 500+ extensions simultaneously, with instant suggestions if your first choice is taken.</p>
              <ul className="space-y-3 mb-6">
                {["Real-time availability check", "Instant alternative suggestions", "Bulk search up to 50 domains", "Price comparison across extensions"].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-600">
                    <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact-sales" className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all">
                Search Now <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="p-8 bg-neutral-50">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Popular Extensions</p>
              <div className="grid grid-cols-2 gap-2">
                {extensions.map(({ ext, price, popular }) => (
                  <div key={ext} className={`flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all cursor-pointer hover:border-primary/30 ${popular ? "border-primary/30 bg-primary/5" : "border-neutral-200 bg-white"}`}>
                    <span className={`font-black text-sm ${popular ? "text-primary" : "text-neutral-900"}`}>{ext}</span>
                    <span className="text-xs text-neutral-400">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transfer Domain */}
        <div id="transfer" className="scroll-mt-24 border border-neutral-200 rounded-2xl overflow-hidden mb-5 hover:border-neutral-300 hover:shadow-md transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">transfer_within_a_station</span>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">Seamless</p>
                  <h3 className="text-xl font-black tracking-tight text-neutral-900">Transfer Domain</h3>
                </div>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">Move your domain to us in minutes. Our transfer process is fully guided — just enter your domain and auth code, and we handle the rest. Your domain stays live throughout the entire process.</p>
              <ul className="space-y-3 mb-6">
                {["Zero downtime during transfer", "Free 1-year extension on transfer", "Guided step-by-step process", "All registrars supported"].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-600">
                    <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact-sales" className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all">
                Start Transfer <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="p-8 bg-neutral-50">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">How It Works</p>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Enter your domain", desc: "Type in the domain you want to transfer and we check eligibility instantly." },
                  { step: "02", title: "Provide auth code", desc: "Get the EPP/auth code from your current registrar and paste it in." },
                  { step: "03", title: "We handle the rest", desc: "Approve the transfer email and your domain moves over — usually within 24 hours." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <span className="text-2xl font-black text-neutral-200 shrink-0 w-8">{step}</span>
                    <div>
                      <p className="text-sm font-black text-neutral-900 mb-0.5">{title}</p>
                      <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 500+ Extensions */}
        <div id="extensions" className="scroll-mt-24 border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-neutral-600 text-xl">list</span>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">Variety</p>
              <h3 className="text-xl font-black tracking-tight text-neutral-900">500+ Extensions</h3>
            </div>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-2xl">.com .io .app .dev and hundreds more. Whether you need a classic .com for credibility, a .io for your tech startup, or a niche extension like .store or .agency — we have every extension you need at competitive prices.</p>
          <div className="flex flex-wrap gap-2">
            {[".com",".net",".org",".io",".co",".app",".dev",".store",".shop",".tech",".agency",".cloud",".design",".studio",".xyz",".me",".info",".biz",".online",".site"].map(ext => (
              <span key={ext} className="px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full text-xs font-bold text-neutral-600 hover:border-primary/40 hover:text-primary cursor-pointer transition-all">
                {ext}
              </span>
            ))}
            <span className="px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full text-xs font-bold text-neutral-400">+480 more</span>
          </div>
        </div>
      </section>

      {/* ── Domain Tools ── */}
      <section id="tools" className="bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Domain Tools</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">Everything included, free.</h2>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto">Every domain registered with Speed Force comes with a full suite of management tools at no extra cost.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div id="whois" className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">visibility_off</span>
                </div>
                <h3 className="text-base font-black text-neutral-900">Free WHOIS Privacy</h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">Protect your personal info. By default, domain registrations are publicly visible in the WHOIS database — your name, address, email, and phone number. We include WHOIS privacy protection free on every domain, replacing your details with ours.</p>
              <ul className="space-y-2">
                {["Hides your name, address & email", "Prevents spam & cold calls", "Included free on every domain", "Enabled automatically on registration"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>

            <div id="dns" className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">dns</span>
                </div>
                <h3 className="text-base font-black text-neutral-900">DNS Management</h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">Full DNS control panel. Manage every aspect of your domain&apos;s DNS from an intuitive dashboard. Add, edit, and delete records in real time with changes propagating globally within minutes.</p>
              <ul className="space-y-2">
                {["A, AAAA, CNAME, MX, TXT records", "Changes propagate in minutes", "Bulk record import/export", "DNSSEC support"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>

            <div id="email-forwarding" className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">email</span>
                </div>
                <h3 className="text-base font-black text-neutral-900">Email Forwarding</h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">Forward to any inbox, free. Create professional email addresses like hello@yourdomain.com and forward them to any existing inbox — Gmail, Outlook, or anywhere else. No email hosting required.</p>
              <ul className="space-y-2">
                {["Unlimited forwarding addresses", "Forward to any email provider", "Catch-all address support", "No email hosting needed"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>

            <div id="auto-renewal" className="scroll-mt-24 bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-neutral-600 text-xl">autorenew</span>
                </div>
                <h3 className="text-base font-black text-neutral-900">Auto-Renewal</h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">Never lose your domain. Expired domains can be snapped up by competitors or domain squatters within hours. Auto-renewal ensures your domain renews automatically before expiry, with advance email reminders so you&apos;re always in control.</p>
              <ul className="space-y-2">
                {["Automatic renewal before expiry", "60-day advance email reminder", "30-day grace period if it lapses", "Easy to disable anytime"].map(f => (
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
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">Your domain is waiting.</h2>
          <p className="text-neutral-400 text-sm mb-8">Register today and get free WHOIS privacy, DNS management, and email forwarding included.</p>
          <Link href="/contact-sales"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
            Search Domains <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
