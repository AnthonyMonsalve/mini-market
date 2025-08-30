import { ApiResponse, Product } from "@shared/types";
import { QueryParams } from "@shared/query";

export async function fetchProducts(
  params: QueryParams = { page: 1, limit: 10 }
): Promise<ApiResponse<Product[]>> {
  const query = new URLSearchParams();

  query.append("page", params.page.toString());
  query.append("limit", params.limit.toString());

  if (params.search) query.append("search", params.search);
  if (params.sortField) query.append("sort", params.sortField);
  if (params.order) query.append("order", params.order);
  if (params.available !== undefined) {
    query.append("available", params.available.toString());
  }

  try {
    const res = await fetch(`/api/products?${query.toString()}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Error al obtener productos",
        data: [],
      };
    }

    return res.json();
  } catch (err) {
    return {
      success: false,
      message: "Error de conexión con la API",
      data: [],
    };
  }
}

export async function fetchProduct(id: string): Promise<ApiResponse<Product>> {
  try {
    const res = await fetch(`/api/products/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Producto no encontrado",
        data: {} as Product,
      };
    }

    return res.json();
  } catch (err) {
    return {
      success: false,
      message: "Error de conexión con la API",
      data: {} as Product,
    };
  }
}
