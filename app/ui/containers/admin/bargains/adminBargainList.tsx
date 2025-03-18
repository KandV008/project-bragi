"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import BargainContainer, { BargainContainerSkeleton } from "@/app/ui/components/bargains/bargainContainer/bargainContainer";
import { BargainEntity } from "@/app/model/entities/bargain/Bargain";
import { getBargainsRoute } from "@/app/api/routes";

/**
 * AdminBargainList component for displaying and managing a list of bargains.
 * Provides options to add new bargains and load more.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function AdminBargainList(): JSX.Element {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [bargains, setBargains] = useState<BargainEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  /**
   * Fetches the list of bargains based on start and end indices.
   */
  useEffect(() => {
    fetch(`${getBargainsRoute}?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        setBargains((prev) => (startIndex === 0 ? data : prev.concat(data)));
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching bargains:", error));
  }, [endIndex, startIndex]);

  if (isLoading) return <AdminBargainListSkeleton />;
  if (!bargains.length) return <EmptyMessage />;

  /**
   * Loads more bargains by increasing the indices.
   */
  const loadMoreBargains = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <section className="flex flex-col gap-5 w-full justify-between">
      {/* Actions */}
      <FloatButton
        icon={faPlus}
        text="Crear Oferta"
        subtext="Añadir una nueva oferta"
        type="default"
        position="end"
        navigationURL="/admin/bargains/create"
      />
      <GoBackButton link="/admin" />

      {/* List */}
      <article className="md:size-fit lg:px-12">
        <BargainContainer
          bargains={bargains}
          moreBargain={loadMoreBargains}
          showMoreButton={bargains.length === endIndex + 1}
          isPreview={true}
        />
      </article>
    </section>
  );
}

/**
 * Skeleton loading state for the AdminBargainList component.
 *
 * @returns {JSX.Element} The loading skeleton UI.
 */
export function AdminBargainListSkeleton(): JSX.Element {
  return (
    <div className="flex flex-row w-full justify-center">
      <BargainContainerSkeleton />
    </div>
  );
}
