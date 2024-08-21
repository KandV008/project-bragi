import { ProductContainerSkeleton } from "@/app/ui/components/common/productContainer";

export default function Loading() {
  return (
    <div className="flex flex-row w-full justify-center">
      <ProductContainerSkeleton />
    </div>
  );
}
