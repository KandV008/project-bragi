"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import BargainForm from "@/app/ui/containers/admin/bargains/bargainForm";
import { BargainEntity } from "@/app/model/entities/Bargain";

export default function Page() {
  const pathname = usePathname().split("/");
  pathname.pop();
  const code = pathname.pop();

  const [bargain, setBargain] = useState<BargainEntity>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (code) {
      fetch(`/api/getBargain?code=${code}`)
        .then((response) => response.json())
        .then((data) => {
          setBargain(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching bargain:", error));
    }
  }, [code]);

  if (isLoading) return <Loading />;
  if (!bargain) return <EmptyMessage />; 

  return (
    <section>
      <BargainForm bargain={bargain} />
    </section>
  );
}
