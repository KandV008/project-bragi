import { ProductFormSkeleton } from "@/app/ui/containers/admin/products/productForm";

export default function Loading() {
  return (
    <div className="flex flex-col">
      <ProductFormSkeleton />
    </div>
  );
}
