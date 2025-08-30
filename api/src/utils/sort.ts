import {
  SORT_FIELDS,
  SORT_ORDERS,
  SortField,
  SortOrder,
} from "@shared/constants";

export function sortProducts<T>(
  items: T[],
  field: SortField = SORT_FIELDS.NAME,
  order: SortOrder = SORT_ORDERS.ASC
) {
  return [...items].sort((a, b) => {
    if (field === SORT_FIELDS.PRICE) {
      return order === SORT_ORDERS.DESC
        ? (b as any).price - (a as any).price
        : (a as any).price - (b as any).price;
    }
    return order === SORT_ORDERS.DESC
      ? (b as any).name.localeCompare((a as any).name)
      : (a as any).name.localeCompare((b as any).name);
  });
}
