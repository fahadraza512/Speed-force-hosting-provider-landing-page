"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function SettingsPage() {
  const { user } = useAuth();
  const [name, setName]             = useState(user?.name ?? "");
  const [profileMsg, setProfileMsg] = useState("");
  const [newPw, setNewPw]           = useState("");
  const [confirmPw, setConfirmPw]   = useState("");
  const [pwMsg, setPwMsg]           = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const inp = "w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/5";

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    setProfileMsg("Saved.");
    setTimeout(() => setProfileMsg(""), 3000);
  }

  function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    if (newPw !== confirmPw) { setPwMsg("Passwords do not match."); return; }
    if (newPw.length < 6)   { setPwMsg("Minimum 6 characters required."); return; }
    setPwMsg("Password updated.");
    setNewPw(""); setConfirmPw("");
    setTimeout(() => setPwMsg(""), 3000);
  }

  return (
    <div className="bg-white min-h-full">
      <div className="border-b border-neutral-100 px-8 py-7">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Settings</h1>
        <p className="text-sm text-neutral-500 mt-1">Manage your account and security preferences.</p>
      </div>

      <div className="px-8 py-10 max-w-2xl divide-y divide-neutral-100">

        <section className="pb-10">
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">Profile</h2>
            <p className="text-sm text-neutral-500">Update your display name.</p>
          </div>
          {profileMsg && <p className="text-sm text-emerald-600 font-medium mb-5">{profileMsg}</p>}
          <form onSubmit={handleSaveProfile} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Full name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className={inp} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email address</label>
                <input value={user?.email ?? ""} readOnly className={inp + " bg-neutral-50 text-neutral-400 cursor-not-allowed"} />
              </div>
            </div>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-lg transition">
              Save changes
            </button>
          </form>
        </section>

        <section className="py-10">
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">Password</h2>
            <p className="text-sm text-neutral-500">Change your account password.</p>
          </div>
          {pwMsg && <p className={`text-sm font-medium mb-5 ${pwMsg.includes("updated") ? "text-emerald-600" : "text-red-500"}`}>{pwMsg}</p>}
          <form onSubmit={handleChangePassword} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">New password</label>
                <input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="Min. 6 characters" className={inp} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Confirm password</label>
                <input type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="••••••••" className={inp} />
              </div>
            </div>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-lg transition">
              Update password
            </button>
          </form>
        </section>

        <section className="pt-10">
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">Danger Zone</h2>
            <p className="text-sm text-neutral-500">Permanently delete your account and all associated data. This cannot be undone.</p>
          </div>
          {!deleteConfirm ? (
            <button onClick={() => setDeleteConfirm(true)}
              className="inline-flex items-center px-5 py-2.5 border border-red-200 text-red-600 hover:bg-red-50 text-sm font-semibold rounded-lg transition">
              Delete account
            </button>
          ) : (
            <div className="border border-neutral-200 rounded-lg p-5 bg-neutral-50">
              <p className="text-sm text-neutral-700 mb-4">
                To delete your account, email{" "}
                <a href="mailto:support@speedforce.agency" className="text-neutral-900 font-semibold underline underline-offset-2">
                  support@speedforce.agency
                </a>
              </p>
              <button onClick={() => setDeleteConfirm(false)} className="text-sm font-medium text-neutral-500 hover:text-neutral-700 transition">
                Cancel
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
