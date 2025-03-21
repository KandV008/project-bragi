"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import { getNoveltiesRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import NoveltyContainer from "@/app/ui/components/novelties/novletyContainer";
import { NoveltyContainerSkeleton } from "@/app/ui/components/novelties/novletyContainer";

/**
 * This component fetches and displays a paginated list of novelties (offers).
 * It includes a floating button for creating new novelties, a back button, and a novelty container.
 * 
 * @returns {JSX.Element} The rendered admin novelty list component.
 */
export default function AdminNoveltyList(): JSX.Element {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [novelties, setNovelties] = useState<NoveltyEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  /**
   * Fetches novelties from the API based on the current start and end indices.
   */
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

  if (isLoading) return <AdminNoveltyListSkeleton />;
  if (!novelties) return <EmptyMessage />;

  /**
   * Loads more novelties by updating the start and end indices.
   */
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
      <GoBackButton link="/admin" />
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

/**
 * Displays a skeleton loader for the admin novelty list while data is being fetched.
 * 
 * @returns {JSX.Element} The rendered skeleton loader component.
 */
export function AdminNoveltyListSkeleton(): JSX.Element {
  return (
    <div className="flex flex-row w-full justify-center">
      <NoveltyContainerSkeleton />
    </div>
  );
}