import { ShoppingFormSkeleton } from "@/app/ui/containers/shoppingList/shoppingForm/shoppingForm";

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
