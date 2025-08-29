import { ApiResponse, Product } from "@shared/types";
import { QueryParams } from "@shared/query";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3001";

export async function fetchProducts(
  params: QueryParams = {
    page: 1,
    limit: 10,
  }
): Promise<ApiResponse<Product[]>> {
  const query = new URLSearchParams();

  query.append("page", params.page.toString());
  query.append("limit", params.limit.toString());

  if (params.search) query.append("search", params.search);
  if (params.sortField) query.append("sort", params.sortField);
  if (params.order) query.append("order", params.order);
  if (params.available !== undefined)
    query.append("available", params.available.toString());

  const res = await fetch(`${BASE_URL}/api/products?${query.toString()}`, {});

  if (!res.ok) {
    throw new Error("Error al obtener productos");
  }

  return res.json();
}

export async function fetchProduct(id: string): Promise<ApiResponse<Product>> {
  const res = await fetch(`${BASE_URL}/api/products/${id}`, {});

  if (!res.ok) {
    throw new Error("Producto no encontrado");
  }

  return res.json();
}
