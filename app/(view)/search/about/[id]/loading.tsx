"use client";

import { SomeProductContainerSkeleton } from "@/app/ui/components/products/someProductContainer";
import { ProductDetailsSkeleton } from "@/app/ui/containers/search/about/productDetails";
import { ProductOptionsSkeleton } from "@/app/ui/containers/search/about/productOptions";

export default function Loading() {
  return (
    <div className="flex flex-col gap-3">
      <ProductOptionsSkeleton />
      <ProductDetailsSkeleton />
      <SomeProductContainerSkeleton title="Productos relacionados" />
    </div>
  );
}
