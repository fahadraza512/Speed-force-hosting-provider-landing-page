const stats = [
  { value: "99.9%", label: "Uptime SLA", icon: "verified" },
  { value: "2M+", label: "Domains Hosted", icon: "language" },
  { value: "<1ms", label: "Avg. Latency", icon: "bolt" },
  { value: "24/7", label: "Expert Support", icon: "support_agent" },
];

const trustedBy = ["Vercel", "Stripe", "Shopify", "Notion", "Linear", "Figma"];

export default function Stats() {
  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-linear-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tighter mb-1">{value}</div>
              <div className="text-sm text-neutral-500 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="border-t border-neutral-100 pt-12">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-neutral-400 mb-8">TRUSTED BY TEAMS AT</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedBy.map((name) => (
              <span key={name} className="text-neutral-400 hover:text-neutral-900 font-black text-lg tracking-tight transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
