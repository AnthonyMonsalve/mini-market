import Link from "next/link";
import Image from "next/image";
import { Product } from "@shared/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      key={product.id}
      className="max-w-[250px]"
    >
      <div className="shadow border-gray-400 rounded p-4" key={product.id}>
        <div className="w-[200px] h-[200px] relative m-auto">
          <div
            className={`badge text-[12px] font-semibold absolute px-6 py-1 rounded-br-2xl shadow z-10 ${
              product.isAvailable
                ? "bg-green-400 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            {product.isAvailable ? "En stock" : "Sin stock"}
          </div>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="p-3 flex flex-col gap-1 justify-center items-center">
          <h3 className="text-[16px] font-semibold text-center">
            {product.name}
          </h3>
          <p className="text-[14px] bg-amber-200 rounded-full px-6 py-1 text-center">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
