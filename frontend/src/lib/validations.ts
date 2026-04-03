export interface ValidationError {
  [field: string]: string;
}

export function validateLogin(email: string, password: string): ValidationError {
  const errors: ValidationError = {};
  if (!email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email address";
  if (!password) errors.password = "Password is required";
  else if (password.length < 6) errors.password = "Password must be at least 6 characters";
  return errors;
}

export function validateRegister(name: string, email: string, password: string, confirm: string): ValidationError {
  const errors: ValidationError = {};
  if (!name || name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email address";
  if (!password) errors.password = "Password is required";
  else if (password.length < 6) errors.password = "Password must be at least 6 characters";
  if (password !== confirm) errors.confirm = "Passwords do not match";
  return errors;
}

export function validateForgotPassword(email: string): ValidationError {
  const errors: ValidationError = {};
  if (!email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email address";
  return errors;
}
