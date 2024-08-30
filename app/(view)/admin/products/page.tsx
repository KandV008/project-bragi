"use client";

import { ProductEntity } from "@/app/model/entities/Product";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Loading from "./loading";
import ProductContainer from "@/app/ui/components/products/productContainer";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";

export default function Page() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [products, setProduct] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/getAllProducts?start=${startIndex}&end=${endIndex}`)
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

  if (isLoading) return <Loading />;
  if (!products) return <EmptyMessage />

  const addMoreProducts = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <section className="flex flex-col gap-5 w-full justify-between">
      {/* Actions */}
      <article className="flex flex-center shrink-0 justify-center">
        <div className="fixed top-44 md:top-36">
          <MediumButtonWithIcon
            icon={faPlus}
            text={"Crear Producto"}
            subtext={"Añadir un nuevo producto"}
            type={"default"}
            navigationURL="/admin/products/create"
          />
        </div>
      </article>
      <GoBackButton />
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
