"use client";

import { SomeProductContainerSkeleton } from "@/app/ui/components/products/someProductContainer/someProductContainer";
import { ProductDetailsSkeleton } from "@/app/ui/containers/search/about/displayProductDetails";
import { ProductOptionsSkeleton } from "@/app/ui/containers/search/about/displayProductAttributes";

/**
 * Loading component that displays skeleton loaders while the content is loading.
 * This component renders skeleton components for product options, details, and related products.
 *
 * @returns {JSX.Element} The Loading page component displaying various skeleton loaders.
 */
export default function Loading(): JSX.Element {
  return (
    <div className="flex flex-col gap-3">
      <ProductOptionsSkeleton />
      <ProductDetailsSkeleton />
      <SomeProductContainerSkeleton title="Productos relacionados" />
    </div>
  );
}
