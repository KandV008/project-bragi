'use client';

import { useState } from "react";
import { useEffect } from "react";
import { shimmer } from "../../../tailwindClasses";
import { ProductSkeleton } from "../product/product";
import ProductContainer from "../productContainer/productContainer";
import EmptyMessage from "../../messages/emptyMessage/emptyMessage";
import SectionHeader from "../../tags/sectionHeader/sectionHeader";

/**
 * Props for the SomeProductContainer component.
 * 
 * @property {string} fetchUrl - The API endpoint to fetch product data.
 * @property {string} title - The title to display above the product list.
 */
interface SomeProductContainerProps {
  fetchUrl: string;
  title: string;
}

/**
 * Component that fetches and displays a list of products from a given API endpoint.
 * Displays a loading skeleton while fetching data and an empty message if no data is found.
 * 
 * @param {SomeProductContainerProps} props - Component properties.
 * @returns {JSX.Element}
 */
export default function SomeProductContainer({
  fetchUrl,
  title,
}: SomeProductContainerProps): JSX.Element {
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
    <section className="flex flex-col items-start sm:justify-start">
      <SectionHeader text={title} />
      <ProductContainer products={data} showMoreButton={false} />
    </section>
  );
}

/**
 * Props for the SomeProductContainerSkeleton component.
 * 
 * @property {string} title - The title to display above the skeleton loader.
 */
interface SkeletonProps{
    title: string
}

/**
 * Skeleton loader for the SomeProductContainer component, displaying placeholder product cards.
 * 
 * @param {SkeletonProps} props - Component properties.
 * @returns {JSX.Element}
 */
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
