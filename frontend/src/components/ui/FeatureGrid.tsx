type Feature = { icon: string; title: string; desc: string };

export default function FeatureGrid({ features }: { features: Feature[] }) {
  return (
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
  );
}
