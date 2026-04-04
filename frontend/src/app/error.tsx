"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white text-neutral-900">
      <h2 className="text-2xl font-black tracking-tighter">Something went wrong</h2>
      <button onClick={reset} className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">
        Try again
      </button>
    </div>
  );
}
