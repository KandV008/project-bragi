'use client';

import { useState } from "react";
import { useEffect } from "react";
import SectionHeader from "../../components/tags/sectionHeader";
import { ProductSkeleton } from "./product";
import ProductContainer from "./productContainer";
import EmptyMessage from "../messages/emptyMessage";
import { shimmer } from "../../tailwindClasses";

interface SomeProductContainerProps {
  fetchUrl: string;
  title: string;
}

export default function SomeProductContainer({
  fetchUrl,
  title,
}: SomeProductContainerProps) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [fetchUrl]);

  if (isLoading) return <SomeProductContainerSkeleton title={title} />;
  if (!data) return <EmptyMessage />

  return (
    <section className="flex flex-col jusify-center sm:justify-start">
      <SectionHeader text={title} />
      <ProductContainer products={data} showMoreButton={false} />
    </section>
  );
}

interface SkeletonProps{
    title: string
}

export function SomeProductContainerSkeleton({ title }: SkeletonProps) {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <SectionHeader text={title} />
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </article>
    </div>
  );
}
