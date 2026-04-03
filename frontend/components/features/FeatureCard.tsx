import { ReactNode } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  colSpan?: string;
  cta?: { label: string };
  badge?: string;
  contentWidth?: string;
  cardClass?: string;
  children?: ReactNode;
}

export default function FeatureCard({
  icon,
  title,
  description,
  colSpan = "md:col-span-4",
  cta,
  badge,
  contentWidth = "w-full",
  cardClass = "",
  children,
}: FeatureCardProps) {
  return (
    <div
      className={`${colSpan} group relative overflow-hidden bg-surface-container-low rounded-xl p-8 border border-outline-variant/30 transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary/5 ${cardClass}`}
    >
      <div className={`relative z-10 ${contentWidth}`}>
        <div className="text-primary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-4xl">{icon}</span>
          {badge && (
            <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-black">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-6">{description}</p>
        {cta && (
          <button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
            {cta.label}{" "}
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
