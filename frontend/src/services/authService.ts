import type { User } from "@/types/user.types";

export interface AuthResponse {
  user: User;
  token: string;
}

// Mock auth — replace with real API calls when backend is ready
export const authService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    await new Promise((r) => setTimeout(r, 800)); // simulate network
    if (password.length < 6) throw new Error("Invalid credentials");
    return {
      token: "mock-jwt-token-" + Date.now(),
      user: { id: "1", name: email.split("@")[0], email, createdAt: new Date().toISOString() },
    };
  },

  register: async (name: string, email: string, _password: string): Promise<AuthResponse> => {
    await new Promise((r) => setTimeout(r, 800));
    return {
      token: "mock-jwt-token-" + Date.now(),
      user: { id: "2", name, email, createdAt: new Date().toISOString() },
    };
  },

  forgotPassword: async (email: string): Promise<void> => {
    await new Promise((r) => setTimeout(r, 800));
    if (!email) throw new Error("Email not found");
  },
};
