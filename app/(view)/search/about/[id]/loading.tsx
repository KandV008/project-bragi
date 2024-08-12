import { AboutProductSkeleton } from "@/app/ui/containers/search/about/aboutProduct";
import { RelatedProductsSkeleton } from "@/app/ui/containers/search/about/relatedProducts";

export default function Loading() {
  return (
    <div className="flex flex-col">
      <AboutProductSkeleton />
      <RelatedProductsSkeleton />
    </div>
  );
}
