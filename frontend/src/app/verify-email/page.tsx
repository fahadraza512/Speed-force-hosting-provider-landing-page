"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const [resent, setResent] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">mark_email_unread</span>
        </div>

        <h1 className="text-2xl font-black text-neutral-900 tracking-tight mb-3">
          Check your inbox
        </h1>
        <p className="text-neutral-500 text-sm leading-relaxed mb-2">
          We sent a confirmation link to
        </p>
        {email && (
          <p className="text-neutral-900 font-semibold text-sm mb-6">{email}</p>
        )}
        <p className="text-neutral-400 text-xs leading-relaxed mb-8">
          Click the link in the email to activate your account. Check your spam folder if you don&apos;t see it.
        </p>

        {resent ? (
          <div className="flex items-center justify-center gap-2 text-emerald-600 text-sm font-semibold mb-6">
            <span className="material-symbols-outlined text-base">check_circle</span>
            Email resent successfully
          </div>
        ) : (
          <button
            onClick={() => setResent(true)}
            className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg font-semibold text-sm transition-all mb-4">
            Resend confirmation email
          </button>
        )}

        <Link href="/login"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-700 transition-colors">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
