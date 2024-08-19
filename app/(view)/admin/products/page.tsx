"use client";

import { ProductEntity } from "@/app/model/entities/Product";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon";
import ProductPreviewContainer from "@/app/ui/components/products/productPreviewContainer";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();
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

  if (isLoading) return <>Loading...</>;
  if (!products) return <p>No product data</p>; // TODO Add message

  const addMoreProducts = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <div className="flex flex-col gap-10 w-full justify-between">
      {/* Actions */}
      <section className="flex flex-center shrink-0 justify-center">
        <div className="fixed top-36">
          <MediumButtonWithIcon
            icon={faPlus}
            text={"Crear Producto"}
            subtext={"Añadir un nuevo producto"}
            type={"default"}
            onClick={() => router.push("/admin/products/create")}
          />
        </div>
      </section>
      {/* List */}
      <div className="md:size-fit lg:px-12">
        <ProductPreviewContainer
          products={products}
          moreProduct={addMoreProducts}
          showMoreButton={products.length === endIndex + 1}
        />
      </div>
    </div>
  );
}
