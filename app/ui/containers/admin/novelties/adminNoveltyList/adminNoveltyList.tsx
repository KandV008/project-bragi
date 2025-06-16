"use client";

import { useState, useEffect } from "react";
import { getNoveltiesRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import NoveltyContainer from "@/app/ui/components/novelties/noveltyContainer/noveltyContainer";
import { NoveltyContainerSkeleton } from "@/app/ui/components/novelties/noveltyContainer/noveltyContainer";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage";
import AdminPanel from "../../adminPanel/adminPanel";

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
      <AdminPanel
        entity={"novelty"}
        context={"ALL"}
        extras={{
          entityId: undefined,
          url: "/admin",
        }}
      />
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
