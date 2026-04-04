import Link from "next/link";

type Props = {
  heading: string;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageCTA({ heading, sub, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: Props) {
  return (
    <section className="bg-neutral-900 mx-6 mb-16 rounded-3xl overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">{heading}</h2>
        <p className="text-neutral-400 text-sm mb-8">{sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={primaryHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
            {primaryLabel}
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref}
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 text-center">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
