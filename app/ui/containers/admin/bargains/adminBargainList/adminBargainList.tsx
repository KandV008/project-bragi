"use client";

import { useState, useEffect } from "react";
import BargainContainer, {
  BargainContainerSkeleton,
} from "@/app/ui/components/bargains/bargainContainer/bargainContainer";
import { BargainEntity } from "@/app/model/entities/bargain/Bargain";
import { getBargainsRoute } from "@/app/api/routes";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage";
import AdminPanel from "../../adminPanel/adminPanel";
import AdminDeletionPanel from "../../adminDeletionPanel/adminDeletionPanel";
import { deleteBargains } from "@/db/bargain/bargain";
import { DeletingContext } from "@/app/ui/components/contexts/deletingContext";

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
  const [statusDeleteAction, setStatusDelecteAction] = useState(true);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

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
    <DeletingContext.Provider value={{ selectedValues, setSelectedValues }}>
      <section className="flex flex-col gap-5 w-full justify-between">
        {/* Actions */}
        <AdminPanel
          entity={"bargain"}
          context={"ALL"}
          extras={{
            entityId: undefined,
            url: "/admin",
          }}
        />
        {/* Delete Bargains */}
        <AdminDeletionPanel
          status={statusDeleteAction}
          action={deleteBargains}
          updateDeletionStatus={() => {
            setStatusDelecteAction((prev) => !prev);
          }}
        />
        {/* List */}
        <article className="md:size-fit lg:px-12">
          <BargainContainer
            bargains={bargains}
            moreBargain={loadMoreBargains}
            showMoreButton={bargains.length === endIndex + 1}
            isPreview={true}
            isDeleting={statusDeleteAction}
          />
        </article>
      </section>
    </DeletingContext.Provider>
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
