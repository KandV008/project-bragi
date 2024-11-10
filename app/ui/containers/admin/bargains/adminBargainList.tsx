"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import BargainContainer, { BargainContainerSkeleton } from "@/app/ui/components/bargains/bargainContainer";
import { BargainEntity } from "@/app/model/entities/Bargain";
import { getBargainsRoute } from "@/app/api/routes";

export default function AdminBargainList() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [bargains, setBargains] = useState<BargainEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${getBargainsRoute}?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        if (startIndex === 0) {
          setBargains(data);
        } else {
          setBargains((prev) => prev.concat(data));
        }
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, startIndex]);

  if (isLoading) return <AdminBargainListSkeleton />;
  if (!bargains) return <EmptyMessage />;

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
      <GoBackButton link="/admin" />
      {/* List */}
      <article className="md:size-fit lg:px-12">
        <BargainContainer
          bargains={bargains}
          moreBargain={addMoreProducts}
          showMoreButton={bargains.length === endIndex + 1}
          isPreview={true}
        />
      </article>
    </section>
  );
}

export function AdminBargainListSkeleton() {
    return (
      <div className="flex flex-row w-full justify-center">
        <BargainContainerSkeleton />
      </div>
    );
  }
  