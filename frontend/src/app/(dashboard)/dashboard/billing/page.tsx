"use client";

import Link from "next/link";

export default function BillingPage() {
  return (
    <div className="bg-white min-h-full">
      <div className="border-b border-neutral-100 px-8 py-7">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Billing & Invoices</h1>
        <p className="text-sm text-neutral-500 mt-1">Manage your subscription and payment history.</p>
      </div>

      <div className="px-8 py-10 max-w-3xl divide-y divide-neutral-100">

        <section className="pb-10">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Current Plan</h2>
          <div className="flex items-center justify-between border border-neutral-200 rounded-lg px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-neutral-900">Free Plan</p>
              <p className="text-sm text-neutral-400 mt-0.5">No active subscription</p>
            </div>
            <Link href="/contact-sales" className="text-sm font-semibold text-primary hover:text-primary/80 transition">
              Upgrade →
            </Link>
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Invoice History</h2>
          <div className="border border-neutral-200 rounded-lg p-16 text-center">
            <span className="material-symbols-outlined text-neutral-300 text-4xl mb-4 block">receipt_long</span>
            <p className="text-base font-semibold text-neutral-900 mb-1">No invoices yet</p>
            <p className="text-sm text-neutral-400">Your invoices will appear here after your first payment.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
