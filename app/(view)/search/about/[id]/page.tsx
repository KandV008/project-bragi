"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";
import { ProductEntity } from "@/app/model/entities/Product";
import AboutProduct from "@/app/ui/containers/search/about/aboutProduct";
import Guarantee from "@/app/ui/containers/search/about/guarantee";
import RelatedProducts from "@/app/ui/containers/search/about/relatedProducts";

export default function Page() {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();

  const [product, setProduct] = useState<ProductEntity | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      fetch(`/api/getProduct?id=${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  if (isLoading) return <Loading />;
  if (!product) return <p>No product data</p>;

  return (
    <div className="flex flex-col">
      <AboutProduct product={product} />
      <Guarantee />
      <RelatedProducts id={product.id} brand={product.brand} price={product.price}/>
    </div>
  );
}
