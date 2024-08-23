'use client';

import { SomeProductContainerSkeleton } from "@/app/ui/components/products/someProductContainer";
import { AboutProductSkeleton } from "@/app/ui/containers/search/about/aboutProduct";

export default function Loading() {
  return (
    <div className="flex flex-col">
      <AboutProductSkeleton />
      <SomeProductContainerSkeleton title="Productos relacionados" />
    </div>
  );
}
