"use client";

export default function DomainsPage() {
  return (
    <div className="bg-white min-h-full">
      <div className="border-b border-neutral-100 px-8 py-7">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Domains</h1>
        <p className="text-sm text-neutral-500 mt-1">Manage your registered domain names.</p>
      </div>

      <div className="px-8 py-10 max-w-3xl">
        <div className="border border-neutral-200 rounded-lg p-16 text-center">
          <span className="material-symbols-outlined text-neutral-300 text-4xl mb-4 block">language</span>
          <p className="text-base font-semibold text-neutral-900 mb-1">No domains yet</p>
          <p className="text-sm text-neutral-400">Domains you register will appear here.</p>
        </div>
      </div>
    </div>
  );
}
