import { OrderContainerSkeleton } from "@/app/ui/components/orders/orderContainer/orderContainer";

/**
 * Loading component that displays a skeleton loader while the content is being fetched.
 * This component renders the `OrderContainerSkeleton` inside a flex container to center it on the page.
 *
 * @returns {JSX.Element} The Loading component displaying the order skeleton loader.
 */
export default function Loading(): JSX.Element {
  return (
    <div className="flex flex-row w-full justify-center">
      <OrderContainerSkeleton />
    </div>
  );
}
