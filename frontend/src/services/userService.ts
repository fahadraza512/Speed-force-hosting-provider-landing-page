import { apiFetch } from "./api";

export const userService = {
  getAll: () => apiFetch("/api/users"),
};
