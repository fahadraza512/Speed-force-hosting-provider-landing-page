"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AuthContext, type AuthState } from "@/store/authStore";
import { authService } from "@/services/authService";
import type { User } from "@/types/user.types";

const STORAGE_KEY = "sf_auth";

function loadFromStorage(): { user: User; token: string } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null, token: null, isAuthenticated: false, isLoading: true,
  });

  useEffect(() => {
    const saved = loadFromStorage();
    if (saved) {
      setState({ user: saved.user, token: saved.token, isAuthenticated: true, isLoading: false });
    } else {
      setState(s => ({ ...s, isLoading: false }));
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const { user, token } = await authService.login(email, password);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
    setState({ user, token, isAuthenticated: true, isLoading: false });
    router.push("/dashboard");
  }, [router]);

  const register = useCallback(async (name: string, email: string, password: string) => {
    const result = await authService.register(name, email, password);
    if (result.emailConfirmationRequired) {
      router.push(`/verify-email?email=${encodeURIComponent(result.email)}`);
    }
  }, [router]);

  const logout = useCallback(async () => {
    await authService.logout();
    setState({ user: null, token: null, isAuthenticated: false, isLoading: false });
    router.push("/login");
  }, [router]);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
