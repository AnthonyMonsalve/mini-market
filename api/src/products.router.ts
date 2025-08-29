import { Router } from "express";
import products from "./data/products.json";
import { ApiResponse, Product } from "../../shared/types";
import {
  SORT_ORDERS,
  SortOrder,
  SORT_FIELDS,
  SortField,
} from "../../shared/constants";
import { paginate } from "./utils/pagination";
import { sortProducts } from "./utils/sort";
import { parseQueryParams } from "./utils/query";

const router = Router();

// GET /api/products
router.get("/", (req, res) => {
  let result = [...products];

  const { search, sortField, order, page, limit, available } = parseQueryParams(
    req.query
  );

  console.log({ search, sortField, order, page, limit, available });

  if (available !== undefined) {
    result = result.filter((p) => p.isAvailable === available);
  }

  if (sortField) {
    result = sortProducts(result, sortField, order);
  }

  if (search && search.trim() !== "") {
    const term = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }

  // Paginación
  const { data, total, lastPage } = paginate(result, page, limit);

  const response: ApiResponse<Product[]> = {
    success: true,
    data,
    metadata: { total, page, lastPage, limit },
  };

  res.json(response);
});

// GET /api/products/:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    const errorResponse: ApiResponse<null> = {
      success: false,
      message: "Producto no encontrado",
      code: "PRODUCT_NOT_FOUND",
    };
    return res.status(404).json(errorResponse);
  }

  const response: ApiResponse<Product> = {
    success: true,
    data: product,
  };

  res.json(response);
});

export default router;
