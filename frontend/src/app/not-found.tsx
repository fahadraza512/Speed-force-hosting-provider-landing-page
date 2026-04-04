import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white text-neutral-900">
      <h2 className="text-2xl font-black tracking-tighter">404 - Page Not Found</h2>
      <Link href="/" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
