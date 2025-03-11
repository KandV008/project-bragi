"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import BargainForm, { BargainFormSkeleton } from "@/app/ui/containers/admin/bargains/bargainForm";
import { BargainEntity } from "@/app/model/entities/Bargain";
import { getBargainRoute } from "@/app/api/routes";

/**
 * AdminUpdateBargain component for fetching and updating a bargain's details.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function AdminUpdateBargain(): JSX.Element {
  const pathnameSegments = usePathname().split("/");
  const bargainId = pathnameSegments[pathnameSegments.length - 2];

  const [bargain, setBargain] = useState<BargainEntity | null>(null);
  const [isLoading, setLoading] = useState(true);

  /**
   * Fetches the bargain details when the component mounts.
   */
  useEffect(() => {
    if (!bargainId) return;

    fetch(`${getBargainRoute}?id=${bargainId}`)
      .then((response) => response.json())
      .then((data) => {
        setBargain(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching bargain:", error));
  }, [bargainId]);

  if (isLoading) return <AdminUpdateBargainSkeleton />;
  if (!bargain) return <EmptyMessage />;

  return (
    <section>
      <BargainForm bargain={bargain} />
    </section>
  );
}

/**
 * Skeleton loading state for the AdminUpdateBargain component.
 *
 * @returns {JSX.Element} The loading skeleton UI.
 */
export function AdminUpdateBargainSkeleton(): JSX.Element {
  return (
    <div className="flex flex-col">
      <BargainFormSkeleton />
    </div>
  );
}
