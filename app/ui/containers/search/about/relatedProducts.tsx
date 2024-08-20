"use client";

import ProductContainer, {
  SomeProductContainerSkeleton,
} from "@/app/ui/components/common/productContainer";
import SectionHeader from "@/app/ui/components/common/sectionHeader";
import { useState, useEffect } from "react";

interface RelatedProductsProps {
  id: string; // TODO Check that the product available doesn't have this id
  brand: string;
  price: number;
}

export default function RelatedProducts({
  brand,
  price,
}: RelatedProductsProps) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (brand && price) {
      fetch(`/api/getRelatedProducts?brand=${brand}&price=${price.toString()}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [brand, price]);

  if (isLoading) return <RelatedProductsSkeleton />; // TODO Loanding Screen
  if (!data) return <p>No product data</p>;

  return (
    <section className="flex flex-col jusify-center sm:justify-start">
      <SectionHeader text="Productos relacionados" />
      <ProductContainer products={data} showMoreButton={false} />
    </section>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function RelatedProductsSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <SectionHeader text="Productos relacionados" />
      <SomeProductContainerSkeleton />
    </div>
  );
}
