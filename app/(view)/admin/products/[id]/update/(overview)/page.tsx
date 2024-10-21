"use client";

import { ProductEntity } from "@/app/model/entities/Product";
import ProductForm from "@/app/ui/containers/admin/products/productForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import { getProductRoute } from "@/app/api/routes";

export default function Page() {
  const pathname = usePathname().split("/");
  pathname.pop();
  const productId = pathname.pop();

  const [product, setProduct] = useState<ProductEntity>();
  const [isLoading, setLoading] = useState(true);

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

  if (isLoading) return <Loading />;
  if (!product) return <EmptyMessage />; 

  return (
    <section>
      <ProductForm product={product} />
    </section>
  );
}
