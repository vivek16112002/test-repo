export function capitalize(input: string): string {
  if (!input) {
    return "";
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function reverseWords(sentence: string): string {
  return sentence.trim().split(/\s+/).reverse().join(" ");
}

export function isPalindrome(input: string): boolean {
  const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalized === normalized.split("").reverse().join("");
}
