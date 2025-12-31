"use client";

import ProductForm, {
  ProductFormSkeleton,
} from "@/app/ui/containers/admin/products/productForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getProductRoute } from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage";
import dynamic from "next/dynamic";

const AdminPanel = dynamic(() => import("../adminPanel"), { ssr: false });

/**
 * This component allows an admin to update the details of an existing product.
 * It fetches product data based on the `productId` extracted from the URL path
 * and renders the `ProductForm` for editing the product.
 *
 * @returns {JSX.Element} A React component for updating a product's information.
 */
export default function AdminUpdateProduct(): JSX.Element {
  const pathname = usePathname().split("/");
  pathname.pop();
  const productId = pathname.pop();

  const [product, setProduct] = useState<ProductEntity>(); // State for product data
  const [isLoading, setLoading] = useState(true); // State for loading indicator

  /**
   * Fetches the product data from the API based on `productId` when the component is mounted.
   *
   * @returns {void}
   */
  useEffect(() => {
    if (productId) {
      fetch(`${getProductRoute}?id=${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  if (isLoading) return <AdminUpdateProductSkeleton />;
  if (!product) return <EmptyMessage />;

  return (
    <section>
      <AdminPanel
        entity={"product"}
        context={"UPDATE"} extras={{
          entityId: undefined,
          url: undefined
        }}
      />
      <ProductForm product={product} />
    </section>
  );
}

/**
 * A skeleton loader for the AdminUpdateProduct component. Displays a loading
 * state while the product data is being fetched.
 *
 * @returns {JSX.Element} A React component that renders a loading placeholder.
 */
export function AdminUpdateProductSkeleton(): JSX.Element {
  return (
    <div className="flex flex-col">
      <ProductFormSkeleton />
    </div>
  );
}
