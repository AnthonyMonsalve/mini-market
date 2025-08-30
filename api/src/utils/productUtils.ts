import { Product } from "@shared/types";

export function getTopCheapestAvailable(
  products: Product[],
  limit = 3
): Product[] {
  return products
    .filter((p) => p.isAvailable)
    .sort((a, b) => a.price - b.price)
    .slice(0, limit);
}
