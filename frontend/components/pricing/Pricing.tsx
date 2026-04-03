const plans = [
  {
    name: "Starter",
    price: "$3.99",
    period: "/mo",
    description: "Perfect for personal projects and small sites.",
    features: ["10 GB SSD Storage", "Free SSL Certificate", "1 Website", "Daily Backups", "24/7 Support"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$7.99",
    period: "/mo",
    description: "For growing businesses that need more power.",
    features: ["30 GB SSD Storage", "Free SSL + CDN", "Unlimited Websites", "On-demand Backups", "Priority Support", "Staging Environment"],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: "$14.99",
    period: "/mo",
    description: "Enterprise-grade for high-traffic applications.",
    features: ["100 GB NVMe Storage", "Free SSL + CDN + WAF", "Unlimited Websites", "Real-time Backups", "Dedicated Support", "Custom Server Config"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const guarantees = [
  { icon: "verified_user", label: "30-day money back" },
  { icon: "lock", label: "No lock-in contracts" },
  { icon: "visibility_off", label: "No hidden fees" },
  { icon: "support_agent", label: "Cancel anytime" },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">Simple Pricing</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter mb-4">
            Plans That Scale <br />With You.
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed">
            No hidden fees. No lock-in contracts. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {plans.map(({ name, price, period, description, features, cta, highlight, badge }) => (
            <div
              key={name}
              className="relative rounded-2xl p-8 border border-neutral-100 bg-white shadow-sm transition-all duration-300 group hover:bg-neutral-900 hover:border-neutral-800 hover:shadow-xl"
            >
              {badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-black px-4 py-1 rounded-full tracking-widest shadow-lg shadow-primary/30">
                  {badge}
                </span>
              )}

              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-black text-neutral-900 group-hover:text-white transition-colors">{name}</h3>
                  {highlight && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                </div>
                <p className="text-xs text-neutral-500 mb-5 leading-relaxed">{description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black tracking-tighter text-neutral-900 group-hover:text-white transition-colors">{price}</span>
                  <span className="text-sm text-neutral-500 mb-2">{period}</span>
                </div>
              </div>

              <div className="h-px bg-neutral-100 group-hover:bg-white/10 mb-6 transition-colors" />

              <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm shrink-0">check_circle</span>
                    <span className="text-xs text-neutral-600 group-hover:text-neutral-300 transition-colors">{f}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl font-black text-sm transition-all duration-200 hover:scale-105 active:scale-95 tracking-wide border border-neutral-200 text-neutral-900 group-hover:bg-primary group-hover:border-primary group-hover:text-white">
                {cta}
              </button>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {guarantees.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-neutral-600">
              <span className="material-symbols-outlined text-sm text-primary/60">{icon}</span>
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
