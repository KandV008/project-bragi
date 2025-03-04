"use client";

import { SomeProductContainerSkeleton } from "@/app/ui/components/products/someProductContainer";
import { ProductDetailsSkeleton } from "@/app/ui/containers/search/about/displayProductDetails/displayProductDetails";
import { ProductOptionsSkeleton } from "@/app/ui/containers/search/about/displayProductAttributes/displayProductAttributes";

export default function Loading() {
  return (
    <div className="flex flex-col gap-3">
      <ProductOptionsSkeleton />
      <ProductDetailsSkeleton />
      <SomeProductContainerSkeleton title="Productos relacionados" />
    </div>
  );
}
