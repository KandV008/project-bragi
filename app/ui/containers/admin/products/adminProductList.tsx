"use client";

import { ProductEntity } from "@/app/model/entities/Product";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ProductContainer, { ProductContainerSkeleton } from "@/app/ui/components/products/product/productContainer";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import { getAllProductsRoute } from "@/app/api/routes";

export default function AdminProductList() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [products, setProduct] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${getAllProductsRoute}?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        if (startIndex === 0) {
          setProduct(data);
        } else {
          setProduct((prev) => prev.concat(data));
        }
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, startIndex]);

  if (isLoading) return <AdminProductListSkeleton />;
  if (!products) return <EmptyMessage />;

  const addMoreProducts = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <section className="flex flex-col gap-5 w-full justify-between">
      {/* Actions */}
      <FloatButton
        icon={faPlus}
        text={"Crear Producto"}
        subtext={"Añadir un nuevo producto"}
        type={"default"}
        position="end"
        navigationURL={"/admin/products/create"}
      />
      <GoBackButton link="/admin" />
      {/* List */}
      <article className="md:size-fit lg:px-12">
        <ProductContainer
          products={products}
          moreProduct={addMoreProducts}
          showMoreButton={products.length === endIndex + 1}
          isPreview={true}
        />
      </article>
    </section>
  );
}

export function AdminProductListSkeleton() {
    return (
      <div className="flex flex-row w-full justify-center">
        <ProductContainerSkeleton />
      </div>
    );
  }
