"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fetchProducts } from "@lib/api";
import ProductCard from "../components/ProductCard";
import { Product } from "@shared/types";

export default function ListProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const limit = 10;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await fetchProducts({ page, limit });

      if (response.success && response.data) {
        setProducts(response.data);
        setTotalPages(response.metadata?.lastPage ?? 1);

        // 👇 Si alguien pone un page que no existe, lo rediriges
        if (page > (response.metadata?.lastPage ?? 1)) {
          router.push(`?page=${response.metadata?.lastPage}`);
        }
        if (page < 1) {
          router.push("?page=1");
        }
      }
      setLoading(false);
    };
    load();
  }, [page, limit]);

  if (error) return <p className="text-center p-4">{error}</p>;

  return (
    <main className="flex flex-col gap-4 p-4 justify-center items-center">
      <h2 className="font-bold text-[25px] my-5">Listado de Productos</h2>

      <section className="grid min-w-[250px] place-items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[16px] w-4/5">
        {loading
          ? Array.from({ length: limit }).map((_, i) => (
              <div
                key={i}
                className="w-full max-w-[250px] h-70 bg-gray-200 rounded-md animate-pulse"
              />
            ))
          : products.map((p) => <ProductCard key={p.id} product={p} />)}
      </section>

      {/* Paginador */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => router.push(`?page=${Math.max(page - 1, 1)}`)}
          disabled={page === 1}
          className="cursor-pointer px-3 py-1 rounded bg-gray-200 disabled:opacity-60"
        >
          Prev
        </button>
        <span className="px-3 py-1 font-medium">
          Página {page} de {totalPages}
        </span>
        <button
          disabled={totalPages === page}
          onClick={() => router.push(`?page=${page + 1}`)}
          className="cursor-pointer px-3 py-1 rounded bg-gray-200 disabled:opacity-60"
        >
          Next
        </button>
      </div>
    </main>
  );
}
