"use client";

import { useState } from "react";

export default function SupportPage() {
  const [subject, setSubject]   = useState("");
  const [message, setMessage]   = useState("");
  const [priority, setPriority] = useState("medium");
  const [success, setSuccess]   = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return;
    setSuccess(true);
    setSubject(""); setMessage(""); setPriority("medium");
    setTimeout(() => setSuccess(false), 3000);
  }

  const inp = "w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/5";

  return (
    <div className="bg-white min-h-full">
      <div className="border-b border-neutral-100 px-8 py-7">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Support</h1>
        <p className="text-sm text-neutral-500 mt-1">Get help from our expert support team.</p>
      </div>

      <div className="px-8 py-10 max-w-3xl divide-y divide-neutral-100">

        <section className="pb-10">
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">New Ticket</h2>
            <p className="text-sm text-neutral-500">Describe your issue and we&apos;ll get back to you shortly.</p>
          </div>
          {success && <p className="text-sm text-emerald-600 font-medium mb-5">Ticket submitted successfully.</p>}
          <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
              <input value={subject} onChange={e => setSubject(e.target.value)}
                placeholder="Brief description of your issue" className={inp} />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Priority</label>
              <select value={priority} onChange={e => setPriority(e.target.value)} className={inp}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6}
                placeholder="Describe your issue in detail..." className={inp + " resize-none"} />
            </div>
            <button type="submit"
              className="inline-flex items-center px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-lg transition">
              Submit Ticket
            </button>
          </form>
        </section>

        <section className="pt-10">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Your Tickets</h2>
          <div className="border border-neutral-200 rounded-lg p-16 text-center">
            <span className="material-symbols-outlined text-neutral-300 text-4xl mb-4 block">inbox</span>
            <p className="text-base font-semibold text-neutral-900 mb-1">No tickets yet</p>
            <p className="text-sm text-neutral-400">Submit a ticket above to get help.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
