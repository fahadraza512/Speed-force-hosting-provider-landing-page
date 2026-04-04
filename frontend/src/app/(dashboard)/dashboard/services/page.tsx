"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-full">
      <div className="border-b border-neutral-100 px-8 py-7 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">My Services</h1>
          <p className="text-sm text-neutral-500 mt-1">Manage your active hosting plans.</p>
        </div>
        <Link href="/contact-sales"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-lg transition">
          <span className="material-symbols-outlined text-base">add</span>
          Add Service
        </Link>
      </div>

      <div className="px-8 py-10 max-w-3xl">
        <div className="border border-neutral-200 rounded-lg p-16 text-center">
          <span className="material-symbols-outlined text-neutral-300 text-4xl mb-4 block">cloud_off</span>
          <p className="text-base font-semibold text-neutral-900 mb-1">No active services</p>
          <p className="text-sm text-neutral-400 mb-6">You don&apos;t have any hosting plans yet.</p>
          <Link href="/contact-sales"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-lg transition">
            View Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
