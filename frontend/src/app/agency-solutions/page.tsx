import type { Metadata } from "next";
import Link from "next/link";
import PageNavbar from "@/components/layout/PageNavbar";
import Footer from "@/components/layout/Footer";
import FeatureGrid from "@/components/ui/FeatureGrid";
import PageCTA from "@/components/ui/PageCTA";

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

      <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-100">
        <div className="relative max-w-4xl mx-auto px-6 pt-8 pb-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-3 text-neutral-900">
            Built for Agencies.<br /><span className="text-primary italic">Loved by Clients.</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed mb-0">
            Manage all your client sites from one dashboard. White-label hosting, reseller plans, bulk discounts, and a dedicated agency support line.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Built for Scale</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Everything your agency needs.</h2>
        </div>
        <FeatureGrid features={features} />
      </section>

      <section className="bg-neutral-50 border-y border-neutral-100 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-2">What Agencies Say</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-900">Trusted by agencies worldwide.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map(({ quote, name, role, avatar }) => (
            <div key={name} className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
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


      <Footer />
    </div>
  );
}
