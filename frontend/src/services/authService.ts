import type { User } from "@/types/user.types";

export interface AuthResponse {
  user: User;
  token: string;
}

export interface SignUpResponse {
  success: true;
  emailConfirmationRequired: true;
  email: string;
}

const STORAGE_KEY = "sf_auth";

function mockUser(name: string, email: string): User {
  return { id: "mock-id", name, email, createdAt: new Date().toISOString() };
}

export const authService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    await new Promise(r => setTimeout(r, 600));
    if (password.length < 6) throw new Error("Invalid email or password.");
    const user = mockUser(email.split("@")[0], email);
    return { token: "mock-token", user };
  },

  register: async (_name: string, email: string, _password: string): Promise<SignUpResponse> => {
    await new Promise(r => setTimeout(r, 600));
    return { success: true, emailConfirmationRequired: true, email };
  },

  signInWithGoogle: async (): Promise<void> => {
    await new Promise(r => setTimeout(r, 400));
    // Mock: store a fake user and redirect
    const user = mockUser("Google User", "google@example.com");
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token: "mock-google-token" }));
    window.location.href = "/dashboard";
  },

  forgotPassword: async (_email: string): Promise<void> => {
    await new Promise(r => setTimeout(r, 600));
  },

  logout: async (): Promise<void> => {
    localStorage.removeItem(STORAGE_KEY);
  },

  getCurrentUser: async (): Promise<User | null> => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw).user : null;
    } catch { return null; }
  },
};
