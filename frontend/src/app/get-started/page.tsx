import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageNavbar from "@/components/layout/PageNavbar";

export const metadata: Metadata = {
  title: "Get Started – Speed Force",
  description: "Launch your website on enterprise-grade cloud infrastructure. Deploy in seconds, scale in minutes.",
};

const plans = [
  {
    name: "Starter",
    price: "$3.99",
    period: "/mo",
    description: "Perfect for personal projects and small sites.",
    features: ["10 GB SSD Storage", "Free SSL Certificate", "1 Website", "Daily Backups", "24/7 Support"],
    href: "/checkout/starter",
    highlight: false,
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    price: "$7.99",
    period: "/mo",
    description: "For growing businesses that need more power.",
    features: ["30 GB SSD Storage", "Free SSL + CDN", "Unlimited Websites", "Priority Support", "Staging Environment"],
    href: "/checkout/growth",
    highlight: true,
    badge: "Most Popular",
    cta: "Get Started",
  },
  {
    name: "Scale",
    price: "$14.99",
    period: "/mo",
    description: "Enterprise-grade for high-traffic applications.",
    features: ["100 GB NVMe Storage", "SSL + CDN + WAF", "Unlimited Websites", "Dedicated Support", "Custom Server Config"],
    href: "/contact-sales",
    highlight: false,
    cta: "Contact Sales",
  },
];

const steps = [
  {
    step: "01",
    icon: "manage_accounts",
    title: "Create your account",
    desc: "Sign up in under 60 seconds. No credit card required to start your free trial.",
  },
  {
    step: "02",
    icon: "dns",
    title: "Configure your site",
    desc: "One-click WordPress installs, custom domain setup, and automatic SSL provisioning.",
  },
  {
    step: "03",
    icon: "rocket_launch",
    title: "Go live instantly",
    desc: "Deploy to our global edge network in seconds. Your site is live before you finish your coffee.",
  },
];

const logos = ["Vercel", "Stripe", "Shopify", "Notion", "Linear", "Figma"];

const testimonials = [
  {
    quote: "We migrated 40 client sites in a weekend. Zero downtime, zero headaches.",
    name: "Sarah Chen",
    role: "Lead Developer, Pixel Studio",
    avatar: "S",
  },
  {
    quote: "Page load times dropped from 3.2s to 0.4s. Our conversion rate jumped 28%.",
    name: "Marcus Webb",
    role: "CTO, Launchpad Inc.",
    avatar: "M",
  },
  {
    quote: "The support team responds in minutes, not hours. That alone is worth the price.",
    name: "Priya Nair",
    role: "Founder, Bloom Commerce",
    avatar: "P",
  },
];

const guarantees = [
  { icon: "verified_user",  label: "30-day money back" },
  { icon: "lock",           label: "No lock-in contracts" },
  { icon: "visibility_off", label: "No hidden fees" },
  { icon: "cancel",         label: "Cancel anytime" },
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageNavbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-100">
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">


          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 text-neutral-900">
            Accelerate Your<br />
            <span className="text-primary italic">Website Today.</span>
          </h1>

          <p className="text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Sub-millisecond latency. 99.9% uptime SLA. Global edge network across 8 regions.
            Built for developers who refuse to compromise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Link href="/checkout/growth"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
              Start Free Trial
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link href="/contact-sales"
              className="w-full sm:w-auto border border-neutral-300 hover:border-neutral-400 text-neutral-700 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center justify-center gap-2">
              Talk to Sales
            </Link>
          </div>

          {/* Social proof bar */}
          <div className="border-t border-neutral-200 pt-10">
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {logos.map((name) => (
                <span key={name} className="text-neutral-400 hover:text-neutral-700 font-black text-base tracking-tight transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "99.9%",  label: "Uptime SLA" },
            { value: "<1ms",   label: "Avg. Latency" },
            { value: "2M+",    label: "Sites Hosted" },
            { value: "24/7",   label: "Expert Support" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-black tracking-tighter text-neutral-900 mb-1">{value}</p>
              <p className="text-xs text-neutral-500 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Up and running in minutes.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {steps.map(({ step, icon, title, desc }) => (
            <div key={step} className="relative bg-white border border-neutral-200 rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
                </div>
                <span className="text-3xl font-black text-neutral-100">{step}</span>
              </div>
              <h3 className="text-neutral-900 font-black text-base mb-2">{title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="border-y border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900 mb-3">Plans that scale with you.</h2>
            <p className="text-neutral-500 text-sm">No hidden fees. No lock-in. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {plans.map(({ name, price, period, description, features, href, highlight, badge, cta }) => (
              <div key={name} className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1
                ${highlight
                  ? "bg-neutral-900 border-neutral-800 shadow-2xl shadow-black/20"
                  : "bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-md"}`}>
                {badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-primary text-[9px] font-black px-4 py-1 rounded-full tracking-widest border border-primary/40 bg-white">
                    {badge}
                  </span>
                )}

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-black text-base ${highlight ? "text-white" : "text-neutral-900"}`}>{name}</h3>
                    {highlight && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                  </div>
                  <p className={`text-xs leading-relaxed mb-5 ${highlight ? "text-neutral-400" : "text-neutral-500"}`}>{description}</p>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-black tracking-tighter ${highlight ? "text-white" : "text-neutral-900"}`}>{price}</span>
                    <span className="text-sm text-neutral-500 mb-1">{period}</span>
                  </div>
                </div>

                <div className={`h-px mb-5 ${highlight ? "bg-white/10" : "bg-neutral-100"}`} />

                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${highlight ? "text-neutral-400" : "text-neutral-600"}`}>
                      <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={href} className={`block w-full py-3 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02] active:scale-[0.98]
                  ${highlight
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                    : "border border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50"}`}>
                  {cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {guarantees.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-neutral-500 text-xs">
                <span className="material-symbols-outlined text-sm text-primary/60">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-3">Customer Stories</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Trusted by thousands of teams.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, avatar }) => (
            <div key={name} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-7 hover:border-primary/20 hover:shadow-md transition-all">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary text-base" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                ))}
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed mb-6">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary font-black text-sm shrink-0">
                  {avatar}
                </div>
                <div>
                  <p className="text-neutral-900 text-sm font-bold">{name}</p>
                  <p className="text-neutral-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-neutral-900 mx-6 mb-16 rounded-3xl overflow-hidden relative">
        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-5">
            Ready to accelerate?
          </h2>
          <p className="text-neutral-400 text-base mb-10 leading-relaxed">
            Join 2 million+ websites already running on Speed Force. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/checkout/growth"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-base transition-all hover:scale-105 shadow-xl shadow-primary/25">
              Start Free Trial
            </Link>
            <Link href="/network-status"
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-full font-bold text-base transition-all hover:scale-105">
              View Network Status
            </Link>
          </div>
          <p className="mt-5 text-xs text-neutral-600">No credit card required &middot; 30-day money back guarantee</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-neutral-100 py-8 text-center text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} Speed Force Hosting, Inc. All rights reserved.</p>
      </footer>

    </div>
  );
}
