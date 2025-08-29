import { SortField, SortOrder } from "./constants";

export interface QueryParams {
  page: number;
  limit: number;
  order?: SortOrder;
  sortField?: SortField | null;
  search?: string;
  available?: boolean;
}
