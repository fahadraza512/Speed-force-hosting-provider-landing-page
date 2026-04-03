import WPPreview from "./WPPreview";
import BuilderPreview from "./BuilderPreview";
import StorePreview from "./StorePreview";

const lc = "group relative overflow-hidden rounded-xl border border-primary/10 bg-primary/3 transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-800 hover:shadow-lg p-5";
const dc = "group relative overflow-hidden rounded-xl border border-white/5 bg-neutral-900 transition-all duration-300 hover:border-primary/30 hover:shadow-lg p-5";

const Icon = ({ name }: { name: string }) => (
  <span className="material-symbols-outlined text-2xl text-primary group-hover:text-white transition-colors">{name}</span>
);

const HostingPreview = () => (
  <div className="mt-2 rounded-lg overflow-hidden border border-neutral-100 shadow-sm">
    <div className="bg-neutral-950 px-3 py-1 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="ml-auto font-mono text-[8px] text-emerald-400 font-bold">+85.2% faster</span>
    </div>
    <div className="bg-white px-3 pt-3 pb-2">
      <div className="flex items-end gap-1 h-14">
        {[
          { h: 25, color: "bg-neutral-200" },
          { h: 38, color: "bg-neutral-200" },
          { h: 30, color: "bg-neutral-200" },
          { h: 50, color: "bg-neutral-200" },
          { h: 42, color: "bg-neutral-200" },
          { h: 62, color: "bg-primary/20" },
          { h: 55, color: "bg-primary/30" },
          { h: 78, color: "bg-primary/50" },
          { h: 68, color: "bg-primary/70" },
          { h: 100, color: "bg-primary" },
        ].map(({ h, color }, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end gap-0.5">
            <div className={`w-full rounded-t-sm ${color} transition-all`} style={{ height: `${h}%` }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1.5 border-t border-neutral-100 pt-1">
        <span className="text-[8px] text-neutral-300 font-medium">Jan</span>
        <span className="text-[8px] text-primary font-bold">Now ↑</span>
      </div>
    </div>
  </div>
);

const EmailPreview = () => (
  <div className="mt-2 relative h-20">
    <div className="absolute top-1 right-0 w-24 h-14 bg-neutral-50 rounded-lg border border-neutral-100 rotate-3 overflow-hidden">
      <div className="h-1 w-full bg-primary/20" />
      <div className="p-1.5 space-y-1">
        <div className="h-1 w-3/4 bg-neutral-200 rounded-full" />
        <div className="h-3 bg-primary/10 rounded flex items-center justify-center">
          <span className="text-[6px] font-black text-primary tracking-widest">OPEN →</span>
        </div>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-28 h-16 bg-white rounded-lg border border-neutral-100 shadow-md -rotate-1 overflow-hidden">
      <div className="h-1 w-full bg-primary" />
      <div className="p-1.5 space-y-1">
        <div className="h-1 w-full bg-neutral-100 rounded-full" />
        <div className="h-1 w-2/3 bg-neutral-100 rounded-full" />
        <div className="flex gap-1 mt-1">
          <div className="h-4 w-4 rounded-full bg-primary/20" />
          <div className="h-4 w-4 rounded-full bg-primary/10" />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 bg-neutral-900 text-white rounded-full px-2 py-0.5 flex items-center gap-1 shadow-lg">
      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-[8px] font-bold">42% open rate</span>
    </div>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="min-h-screen px-6 py-12 bg-white kinetic-grid-bg flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-6 bg-primary" />
              <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tighter leading-tight">
              Everything You Need <br />To Scale Fast.
            </h2>
          </div>
          <p className="text-neutral-400 text-xs max-w-xs text-left leading-relaxed">
            One platform. Every tool you need to launch, grow, and scale your online presence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 auto-rows-auto gap-5">

          {/* WordPress Wide */}
          <div className={`sm:col-span-2 md:col-span-8 ${lc} min-h-[180px]`}>
            <div className="md:w-1/2 relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="php" />
                <span className="text-[9px] font-black px-2 py-0.5 rounded-full border border-primary/40 text-primary tracking-wide">Most Popular</span>
              </div>
              <h3 className="text-base font-black text-neutral-900 group-hover:text-white mb-1">Hosting for WordPress</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-3 group-hover:text-neutral-300">Optimized for speed and security. One-click installs, managed updates, and expert support.</p>
              <button className="text-primary font-black text-[10px] flex items-center gap-1 group-hover:gap-2.5 transition-all tracking-wide">
                LEARN MORE <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
            <WPPreview />
          </div>

          {/* Website Builder */}
          <div className={`md:col-span-4 ${lc}`}>
            <Icon name="dashboard_customize" />
            <h3 className="text-base font-black text-neutral-900 group-hover:text-white mt-3 mb-1">Website Builder</h3>
            <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300">Launch a stunning AI-powered website in minutes. No tech skills required.</p>
            <BuilderPreview />
          </div>

          {/* Online Store */}
          <div className={`md:col-span-4 md:row-span-2 ${lc}`}>
            <Icon name="shopping_cart" />
            <h3 className="text-base font-black text-neutral-900 group-hover:text-white mt-3 mb-1">Online Store</h3>
            <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300">Scale your business with powerful e-commerce tools and zero transaction fees.</p>
            <StorePreview />
          </div>

          {/* Web Hosting */}
          <div className={`md:col-span-4 ${lc}`}>
            <Icon name="speed" />
            <h3 className="text-base font-black text-neutral-900 group-hover:text-white mt-3 mb-1">Web Hosting</h3>
            <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300">NVMe-powered servers for any project. Deploy in seconds, scale in minutes.</p>
            <HostingPreview />
          </div>

          {/* Email Marketing */}
          <div className={`md:col-span-4 ${lc}`}>
            <Icon name="alternate_email" />
            <h3 className="text-base font-black text-neutral-900 group-hover:text-white mt-3 mb-1">Email Marketing</h3>
            <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300">Convert visitors into loyal customers with high-converting email campaigns.</p>
            <EmailPreview />
          </div>

          {/* Speed Force AI */}
          <div className={`sm:col-span-2 md:col-span-8 md:col-start-5 ${dc} relative`}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
            <div className="flex flex-col md:flex-row h-full gap-6">
              <div className="md:w-56 shrink-0 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-2xl text-white">auto_awesome</span>
                  <span className="bg-primary text-white text-[8px] px-2 py-0.5 rounded-full font-black tracking-widest">NEW</span>
                </div>
                <h3 className="text-base font-black text-white mb-0.5">Speed Force AI</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-2">Predicts traffic spikes and scales resources automatically — before you notice.</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Auto-scaling", "Anomaly detection", "Cost optimizer"].map((t) => (
                    <span key={t} className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">{t}</span>
                  ))}
                </div>
                <button className="text-white font-black text-[10px] flex items-center gap-1 group-hover:gap-2.5 transition-all tracking-wide">
                  TRY BETA <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
              <div className="flex-1 relative min-h-[140px]">
                <div className="absolute inset-0 flex items-center">
                  <div className="bg-[#0d1117] rounded-xl w-full p-4 font-mono text-[10px] border border-white/8 shadow-2xl group-hover:-translate-y-1 transition-transform duration-500">
                    {/* Title bar */}
                    <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/8">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex-1 mx-2 bg-white/5 rounded px-2 py-0.5 text-[8px] text-white/30 text-center">
                        ~/speedforce/autoscale.js
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400/70 text-[8px] font-bold">LIVE</span>
                      </div>
                    </div>
                    {/* Code */}
                    <div className="space-y-1 leading-relaxed">
                      <div className="flex gap-3">
                        <span className="text-white/20 w-3 shrink-0">1</span>
                        <span><span className="text-violet-400">const </span><span className="text-sky-300">autoScale</span><span className="text-white/50"> = </span><span className="text-violet-400">async</span><span className="text-white/50"> (load) {"=>"} {"{"}</span></span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-white/20 w-3 shrink-0">2</span>
                        <span className="pl-4 text-neutral-600 italic">{"// AI-powered threshold detection"}</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-white/20 w-3 shrink-0">3</span>
                        <span className="pl-4"><span className="text-amber-300">if </span><span className="text-white/50">(load </span><span className="text-pink-400">{">"} </span><span className="text-sky-300">threshold</span><span className="text-white/50">) {"{"}</span></span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-white/20 w-3 shrink-0">4</span>
                        <span className="pl-8"><span className="text-violet-400">await </span><span className="text-white/70">provision(</span><span className="text-emerald-400">node_k8s</span><span className="text-white/70">);</span></span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-white/20 w-3 shrink-0">5</span>
                        <span className="pl-8"><span className="text-sky-300">notify</span><span className="text-white/50">(</span><span className="text-orange-300">&quot;Scaled ✓&quot;</span><span className="text-white/50">);</span></span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-white/20 w-3 shrink-0">6</span>
                        <span className="pl-4 text-white/40">{"}"}</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-white/20 w-3 shrink-0">7</span>
                        <span className="text-white/40">{"}"}</span>
                      </div>
                    </div>
                    {/* Output bar */}
                    <div className="mt-3 pt-2.5 border-t border-white/8 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 text-[8px] font-bold">Node provisioned</span>
                        <span className="text-white/30 text-[8px]">·</span>
                        <span className="text-white/40 text-[8px]">340ms</span>
                        <span className="text-white/30 text-[8px]">·</span>
                        <span className="text-white/40 text-[8px]">k8s-node-07</span>
                      </div>
                      <span className="text-[8px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">✓ OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
