"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";
import { ProductEntity } from "@/app/model/entities/Product";
import Guarantee from "@/app/ui/containers/search/about/guarantee";
import SomeProductContainer from "@/app/ui/components/products/someProductContainer";
import ProductDetails from "@/app/ui/containers/search/about/productDetails";
import ProductOptions from "@/app/ui/containers/search/about/productOptions";
import { getProductRoute, getRelatedProductsRoute } from "@/app/api/routes";

export default function Page() {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();

  const [product, setProduct] = useState<ProductEntity | null>(null);
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
  if (!product) return <p>No product data</p>;

  return (
    <div className="flex flex-col gap-3">
      <ProductOptions
        id={product.id}
        name={product.name}
        price={product.price.toString()}
        colors={product.colors}
        brand={product.brand}
        include={product.include}
      />
      <ProductDetails
        description={product.description}
        adaptationRange={product.adaptationRange}
        dustWaterResistance={product.waterDustResistance}
        location={product.location}
        levelOfDiscretion={product.levelOfDiscretion}
        degreeOfLoss={product.degreeOfLoss}
        uses={product.uses}
      />
      <Guarantee />
      <SomeProductContainer
        fetchUrl={`${getRelatedProductsRoute}?id=${product.id}&brand=${
          product.brand
        }&price=${product.price.toString()}`}
        title={"Productos relacionados"}
      />
    </div>
  );
}
