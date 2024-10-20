"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import BargainContainer from "@/app/ui/components/bargains/bargainContainer";
import { BargainEntity } from "@/app/model/entities/Bargain";
import Loading from "./loading";

export default function Page() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [products, setProduct] = useState<BargainEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/getBargains?start=${startIndex}&end=${endIndex}`)
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
        text={"Crear Oferta"}
        subtext={"Añadir una nueva oferta"}
        type={"default"}
        position="end"
        navigationURL={"/admin/bargains/create"}
      />
      <GoBackButton />
      {/* List */}
      <article className="md:size-fit lg:px-12">
        <BargainContainer
          bargains={products}
          moreBargain={addMoreProducts}
          showMoreButton={products.length === endIndex + 1}
          isPreview={true}
        />
      </article>
    </section>
  );
}
