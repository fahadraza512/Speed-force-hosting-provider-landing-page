export type Plan = { id: string; name: string; price: string };

export type MockState = {
  isLoggedIn: boolean;
  isEmailVerified: boolean;
  selectedPlan: Plan | null;
  paymentSuccess: boolean | null;
};

const KEY = "sf_mock";

const defaults: MockState = {
  isLoggedIn: false,
  isEmailVerified: false,
  selectedPlan: null,
  paymentSuccess: null,
};

export function getMockState(): MockState {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...defaults, ...JSON.parse(raw) } : { ...defaults };
  } catch {
    return { ...defaults };
  }
}

export function setMockState(patch: Partial<MockState>) {
  const next = { ...getMockState(), ...patch };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function resetMockState() {
  localStorage.removeItem(KEY);
}
