import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2>404 - Page Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
