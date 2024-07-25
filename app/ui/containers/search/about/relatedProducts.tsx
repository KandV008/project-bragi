'use client';

import SomeProductContainer, { SomeProductContainerSkeleton } from "@/app/ui/components/common/someProductContainer";
import { useState, useEffect } from "react";

interface RelatedProductsProps {
  id: string, // TODO Check that the product available doesn't have this id
  brand: string,
  price: number
}

export default function RelatedProducts({ brand, price}: RelatedProductsProps) {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    if (brand && price) {
      fetch(`/api/getRelatedProducts?brand=${brand}&price=${price.toString}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [brand, price]);

  if (isLoading) return <RelatedProductsSkeleton /> // TODO Loanding Screen
  if (!data) return <p>No product data</p>

  return (
    <section className="flex flex-col jusify-center sm:justify-start">
      <h1
        className="text-primary2 dark:text-secondary0
            text-xl md:text-2xl lg:text-3xl font-bold
            w-fit"
      >
        Productos relacionados
        <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
      </h1>
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <SomeProductContainer listProducts={data}/>
      </article>
    </section>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function RelatedProductsSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <h1
        className="text-primary2 dark:text-secondary0
              text-xl md:text-2xl lg:text-3xl font-bold
              w-fit sm:w-48 md:w-60 lg:w-72"
      >
        Productos relacionados
        <div className="sm:w-48 md:w-60 lg:w-72 border-t mb-3 border-primary2 dark:border-secondary0"></div>
      </h1>
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <SomeProductContainerSkeleton />
      </article>
    </div>
  );
}
