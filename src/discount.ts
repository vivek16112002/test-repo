export type CustomerTier = "standard" | "silver" | "gold";

export function calculateDiscount(price: number, tier: CustomerTier, promoCode?: string): number {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }
  const tierRates: Record<CustomerTier, number> = {
    standard: 0,
    silver: 0.1,
    gold: 0.2,
  };
  let rate = tierRates[tier];
  if (promoCode === "SAVE10") {
    rate = Math.min(rate + 0.1, 0.5);
  }
  return Number((price * (1 - rate)).toFixed(2));
}
