"use client";

import { DisplayOrdersSkeleton } from "@/app/ui/containers/profile/orders/displayOrders/displayOrder";

/**
 * Loading component that displays skeleton loaders while the content is loading.
 * This component renders skeleton components for order attributes.
 *
 * @returns {JSX.Element} The Loading page component displaying a skeleton loader.
 */
export default function Loading(): JSX.Element {
  return (
    <div className="flex flex-col gap-3">
      <DisplayOrdersSkeleton />
    </div>
  );
}
