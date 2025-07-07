"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";
import DisplayProductDetails from "@/app/ui/containers/search/about/displayProductDetails/displayProductDetails";
import DisplayProductAttributes from "@/app/ui/containers/search/about/displayProductAttributes/displayProductAttributes";
import { getProductRoute, getRelatedProductsRoute } from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";
import SomeProductContainer from "@/app/ui/components/products/someProductContainer/someProductContainer";
import { EarphoneShape } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneShape";

/**
 * Page component that displays product details, attributes, related products, and a guarantee section.
 * It fetches product data based on the product ID from the URL and renders various components such as 
 * product attributes, details, related products, and a guarantee message.
 *
 * @returns {JSX.Element} The Product Details page component.
 */
export default function Page(): JSX.Element {
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

  const isCofosis = product.earphoneAttributes?.earphoneShape === EarphoneShape.COFOSIS;

  return (
    <div className="flex flex-col gap-3">
      <DisplayProductAttributes
        id={product.id}
        name={product.name}
        category={product.category}
        price={product.price.toString()}
        imageURL={product.imageURL}
        colors={product.earphoneAttributes ? product.earphoneAttributes.colors : null}
        earphoneShape={product.earphoneAttributes ? product.earphoneAttributes.earphoneShape : null}
        isCofosis={isCofosis}
        brand={product.brand}
        include={product.include}
      />
      <DisplayProductDetails
        description={product.description}
        earphoneAttributes={product.earphoneAttributes}
      />
      <SomeProductContainer
        fetchUrl={`${getRelatedProductsRoute}?id=${product.id}&brand=${
          product.brand
        }&price=${product.price.toString()}`}
        title={"Productos relacionados"}
      />
    </div>
  );
}
