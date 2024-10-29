"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import { getNoveltyRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/Novelty";
import NoveltyForm from "@/app/ui/containers/admin/novelties/noveltyForm";

export default function Page() {
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

  if (isLoading) return <Loading />;
  if (!novelty) return <EmptyMessage />; 

  return (
    <section>
      <NoveltyForm novelty={novelty} />
    </section>
  );
}
