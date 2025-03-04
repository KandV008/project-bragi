"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";
import Guarantee from "@/app/ui/containers/search/about/guarantee";
import DisplayProductDetails from "@/app/ui/containers/search/about/displayProductDetails/displayProductDetails";
import DisplayProductAttributes from "@/app/ui/containers/search/about/displayProductAttributes/displayProductAttributes";
import { getProductRoute, getRelatedProductsRoute } from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";
import SomeProductContainer from "@/app/ui/components/products/someProductContainer";
import { EarphoneShape } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneShape";

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

  const isCofosis = product.earphoneAttributes?.earphoneShape === EarphoneShape.COFOSIS

  return (
    <div className="flex flex-col gap-3">
      <DisplayProductAttributes
        id={product.id}
        name={product.name}
        price={product.price.toString()}
        imageURL={product.imageURL}
        colors={product.earphoneAttributes ? product.earphoneAttributes.colors : null}
        isCofosis={isCofosis}
        brand={product.brand}
        include={product.include}
      />
      <DisplayProductDetails
        description={product.description}
        earphoneAttributes={product.earphoneAttributes}
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
