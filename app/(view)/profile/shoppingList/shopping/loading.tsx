import { ShoppingFormSkeleton } from "@/app/ui/containers/shoppingList/shoppingForm";
import { ShoppingListSkeleton } from "@/app/ui/containers/shoppingList/shoppingList";
import { SummarySkeleton } from "@/app/ui/containers/shoppingList/summary";

/**
 * Displays skeleton loaders for the shopping list and summary components
 * while the actual shopping data is being fetched.
 *
 * @returns {JSX.Element} The skeleton UI for the shopping page.
 */
export default function Loading(): JSX.Element {
  return (
    <main>
      <ShoppingFormSkeleton />
    </main>
  );
}
