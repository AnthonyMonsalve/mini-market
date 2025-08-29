import {
  SORT_FIELDS,
  SORT_ORDERS,
  SortField,
  SortOrder,
} from "../../../shared/constants";

import { QueryParams } from "../../../shared/query";

export function parseQueryParams(query: any): QueryParams {
  const {
    search = "",
    sort,
    order = SORT_ORDERS.ASC,
    page = "1",
    limit = "10",
    available,
  } = query;

  const allowedSort: SortField[] = [SORT_FIELDS.PRICE, SORT_FIELDS.NAME];
  const sortField = allowedSort.includes(sort as SortField)
    ? (sort as SortField)
    : null;

  const orderValue: SortOrder =
    order === SORT_ORDERS.DESC ? SORT_ORDERS.DESC : SORT_ORDERS.ASC;

  const pageNum = Math.max(parseInt(page as string) || 1, 1);
  const limitNum = Math.min(Math.max(parseInt(limit as string) || 10, 1), 100);

  const availabilityFilter =
    available === "true" ? true : available === "false" ? false : undefined;

  return {
    search,
    sortField,
    order: orderValue,
    page: pageNum,
    limit: limitNum,
    available: availabilityFilter,
  };
}
