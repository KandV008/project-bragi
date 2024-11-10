"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import BargainForm, { BargainFormSkeleton } from "@/app/ui/containers/admin/bargains/bargainForm";
import { BargainEntity } from "@/app/model/entities/Bargain";
import { getBargainRoute } from "@/app/api/routes";

export default function AdminUpdateBargain() {
  const pathname = usePathname().split("/");
  pathname.pop();
  const id = pathname.pop();

  const [bargain, setBargain] = useState<BargainEntity>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`${getBargainRoute}?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBargain(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching bargain:", error));
    }
  }, [id]);

  if (isLoading) return <AdminUpdateBargainSkeleton />;
  if (!bargain) return <EmptyMessage />; 

  return (
    <section>
      <BargainForm bargain={bargain} />
    </section>
  );
}

export function AdminUpdateBargainSkeleton() {
    return (
      <div className="flex flex-col">
          <BargainFormSkeleton />
      </div>
    );
  }
