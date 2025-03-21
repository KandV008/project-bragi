"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import { getNoveltyRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import NoveltyForm, { NoveltyFormSkeleton } from "@/app/ui/containers/admin/novelties/noveltyForm";

/**
 * This component fetches a specific novelty (offer) based on its ID from the URL
 * and displays a form to update it. If the data is still loading, a skeleton loader is shown.
 * 
 * @returns {JSX.Element} The rendered admin update novelty component.
 */
export default function AdminUpdateNovelty() {
  const pathname = usePathname().split("/");
  pathname.pop();
  const id = pathname.pop();

  const [novelty, setNovelty] = useState<NoveltyEntity>();
  const [isLoading, setLoading] = useState(true);

  /**
   * Fetches novelty data from the API based on the extracted ID.
   */
  useEffect(() => {
    if (id) {
      fetch(`${getNoveltyRoute}?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setNovelty(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching novelty:", error));
    }
  }, [id]);

  if (isLoading) return <AdminUpdateNoveltySkeleton />;
  if (!novelty) return <EmptyMessage />; 

  return (
    <section>
      <NoveltyForm novelty={novelty} />
    </section>
  );
}

/**
 * Displays a skeleton loader for the update novelty page while data is being fetched.
 * 
 * @returns {JSX.Element} The rendered skeleton loader component.
 */
export function AdminUpdateNoveltySkeleton(): JSX.Element {
    return (
      <div className="flex flex-col">
          <NoveltyFormSkeleton />
      </div>
    );
}
