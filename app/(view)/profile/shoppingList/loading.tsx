import { ShoppingListSkeleton } from "@/app/ui/containers/shoppingList/shoppingList/shoppingList";
import { SummarySkeleton } from "@/app/ui/containers/shoppingList/summary/summary";

/**
 * Displays skeleton loaders for the shopping list and summary components
 * while the actual shopping data is being fetched.
 *
 * @returns {JSX.Element} The skeleton UI for the shopping page.
 */
export default function Loading(): JSX.Element {
  return (
    <main className="flex flex-row">
      {/* Skeleton loader for the shopping list */}
      <ShoppingListSkeleton />
      <div className="shrink-0">
        {/* Skeleton loader for the order summary */}
        <SummarySkeleton />
      </div>
    </main>
  );
}
