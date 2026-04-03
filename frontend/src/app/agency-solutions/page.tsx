import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";

export const metadata: Metadata = { title: "Agency Solutions – Speed Force" };

const features = [
  { icon: "dashboard",          title: "Unified Dashboard",   desc: "Manage all client sites, domains, and billing from a single control panel." },
  { icon: "branding_watermark", title: "White-Label Hosting", desc: "Your brand, your pricing. Resell hosting under your own label." },
  { icon: "group",              title: "Team Access",         desc: "Granular role-based access for developers, designers, and account managers." },
  { icon: "percent",            title: "Bulk Discounts",      desc: "Volume pricing that scales with your agency. The more you host, the more you save." },
  { icon: "support_agent",      title: "Agency Support Line", desc: "Dedicated support channel for agencies. Skip the queue, talk to a senior engineer." },
  { icon: "analytics",          title: "Client Reporting",    desc: "Automated uptime and performance reports you can send directly to clients." },
];

const testimonials = [
  { quote: "We manage 120 client sites from one dashboard. Speed Force made that possible.", name: "James Okafor", role: "Founder, Okafor Digital", avatar: "J" },
  { quote: "White-label hosting let us add a new revenue stream overnight.", name: "Lisa Park", role: "CEO, Park Creative Agency", avatar: "L" },
];

export default function AgencySolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-100">
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-20 text-center">

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-5 text-neutral-900">
            Built for Agencies.<br /><span className="text-primary italic">Loved by Clients.</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Manage all your client sites from one dashboard. White-label hosting, reseller plans, bulk discounts, and a dedicated agency support line.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact-sales" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              Explore Agency Plans
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link href="/get-started" className="w-full sm:w-auto border border-neutral-300 hover:border-neutral-400 text-neutral-700 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center justify-center">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Built for Scale</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Everything your agency needs.</h2>
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

      {/* Testimonials */}
      <section className="bg-neutral-50 border-y border-neutral-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map(({ quote, name, role, avatar }) => (
              <div key={name} className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-primary text-base" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-5">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary font-black text-sm shrink-0">{avatar}</div>
                  <div>
                    <p className="text-neutral-900 text-sm font-bold">{name}</p>
                    <p className="text-neutral-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 mx-6 my-16 rounded-3xl overflow-hidden relative">
        <div className="relative max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">Ready to grow your agency?</h2>
          <p className="text-neutral-400 text-sm mb-8">Talk to our agency team and get a custom plan built for your needs.</p>
          <Link href="/contact-sales" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
            Talk to Sales
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
