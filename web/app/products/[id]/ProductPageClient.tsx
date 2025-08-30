"use client";

import { useState, useEffect } from "react";
import { fetchProduct } from "@/app/lib/api";
import Image from "next/image";
import { Product } from "@shared/types";
import ProductSkeleton from "../../components/ProductPageSkeleton";

export default function ProductPageClient({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const response = await fetchProduct(id);

        if (!response.success || !response.data) {
          setError("No se pudo cargar el producto");
          return;
        }

        setProduct(response.data);
      } catch {
        setError("Error en la carga de producto");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-[80vh] flex items-center justify-center">
        <ProductSkeleton />
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-[80vh] flex items-center justify-center">
        <p className="text-red-500">{error ?? "Error desconocido"}</p>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center">
      <section className="flex flex-col gap-6 p-6 max-w-3xl w-full mt-5">
        {/* Imagen */}
        <div className="relative w-full min-h-[400px] border border-gray-200 shadow-lg rounded-xl overflow-hidden">
          <Image
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* Info */}
        <div className="w-full border border-gray-200 shadow-md rounded-lg p-6 flex flex-col gap-4 text-center bg-white">
          <h1 className="text-[20px] font-semibold text-gray-800">
            {product.name}
          </h1>
          <p className="text-[18px] font-bold text-gray-900 bg-amber-200 rounded-full px-6 py-2 inline-block">
            ${product.price}
          </p>
          <div className="flex gap-2">
            <button className="cursor-pointer w-1/2 bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
              Add to Favorites
            </button>
            <button className="cursor-pointer w-1/2 bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
