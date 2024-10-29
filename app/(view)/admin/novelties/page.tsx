"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import Loading from "./loading";
import { getNoveltiesRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/Novelty";
import NoveltyContainer from "@/app/ui/components/novelties/novletyContainer";

export default function Page() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [novelties, setNovelties] = useState<NoveltyEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${getNoveltiesRoute}?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        if (startIndex === 0) {
          setNovelties(data);
        } else {
          setNovelties((prev) => prev.concat(data));
        }
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, startIndex]);

  if (isLoading) return <Loading />;
  if (!novelties) return <EmptyMessage />;

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
        navigationURL={"/admin/novelties/create"}
      />
      <GoBackButton />
      {/* List */}
      <article className="md:size-fit lg:px-12">
        <NoveltyContainer
          novelties={novelties}
          moreNovelty={addMoreProducts}
          showMoreButton={novelties.length === endIndex + 1}
          isPreview={true}
        />
      </article>
    </section>
  );
}
