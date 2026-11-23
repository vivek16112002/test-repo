export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validatePassword(password: string): ValidationResult {
  const errors: string[] = [];
  if (password.length < 8) errors.push("Too short");
  if (!/[A-Z]/.test(password)) errors.push("Missing uppercase letter");
  if (!/[0-9]/.test(password)) errors.push("Missing digit");
  return { valid: errors.length === 0, errors };
}

export async function isUsernameAvailable(
  username: string,
  checkExists: (name: string) => Promise<boolean>
): Promise<boolean> {
  const trimmed = username.trim();
  if (trimmed.length < 3) return false;
  return !(await checkExists(trimmed));
}
