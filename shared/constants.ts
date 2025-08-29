export const SORT_ORDERS = {
  ASC: "asc",
  DESC: "desc",
} as const;

export type SortOrder = (typeof SORT_ORDERS)[keyof typeof SORT_ORDERS];

export const SORT_FIELDS = {
  PRICE: "price",
  NAME: "name",
} as const;

export type SortField = (typeof SORT_FIELDS)[keyof typeof SORT_FIELDS];
