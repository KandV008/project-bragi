import { ShoppingListSkeleton } from "@/app/ui/containers/shoppingList/shoppingList";
import { SummarySkeleton } from "@/app/ui/containers/shoppingList/summary";

export default function Loading() {
  return (
    <>
      <ShoppingListSkeleton />
      <div className="shrink-0">
        <SummarySkeleton />
      </div>
    </>
  );
}
