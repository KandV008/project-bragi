"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import { getNoveltyRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/Novelty";
import NoveltyForm, { NoveltyFormSkeleton } from "@/app/ui/containers/admin/novelties/noveltyForm";

export default function AdminUpdateNovelty() {
  const pathname = usePathname().split("/");
  pathname.pop();
  const id = pathname.pop();

  const [novelty, setNovelty] = useState<NoveltyEntity>();
  const [isLoading, setLoading] = useState(true);

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

export function AdminUpdateNoveltySkeleton() {
    return (
      <div className="flex flex-col">
          <NoveltyFormSkeleton />
      </div>
    );
  }
