"use client";

import NoShoppingCartMessage from "@/app/ui/components/messages/noShoppingCartMessage/noShoppingCartMessage";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { useEffect, useRef, useState } from "react";
import ShoppingList, {
  ShoppingListSkeleton,
} from "../shoppingList/shoppingList";
import Summary, { SummarySkeleton } from "../summary/summary";
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { getShoppingListRoute } from "@/app/api/routes";
import { ShoppingListContext } from "@/app/ui/components/contexts/shoppingListContext";

/**
 * Fetches and displays the user's shopping cart. If the cart is empty,
 * a message is shown instead. Otherwise, the shopping list and order
 * summary are displayed.
 *
 * @returns {JSX.Element} The shopping cart page content.
 */
export default function ShoppingListInformation(): JSX.Element {
  const [shoppingList, setShoppingList] = useState<ShoppingProductDTO[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const originalShoppingList = useRef<ShoppingProductDTO[]>([]);

  useEffect(() => {
    fetch(getShoppingListRoute)
      .then((response) => response.json())
      .then((data) => {
        setShoppingList(data);
        setLoading(false);
        if (originalShoppingList.current.length === 0) {
          originalShoppingList.current = data;
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  if (isLoading) return <ShoppingListInformationSkeleton />;
  if (shoppingList.length === 0) return <NoShoppingCartMessage />;

  return (
    <ShoppingListContext.Provider value={{shoppingList, setShoppingList}}>
      {/* Page header */}
      <SectionHeader text="Cesta de la compra" />
      {/* Shopping list and summary section */}
      <section className="flex flex-col-reverse lg:flex-row gap-3 justify-center">
        {/* Shopping list container */}
        <ShoppingList />
        <div className="shrink-0 z-10">
          {/* Order summary section */}
          <Summary
            changeableProducts={shoppingList}
          />
        </div>
      </section>
    </ShoppingListContext.Provider>
  );
}

/**
 * Displays skeleton loaders for the shopping list information
 * while the actual shopping data is being fetched.
 *
 * @returns {JSX.Element} The skeleton UI for the shopping page.
 */
export function ShoppingListInformationSkeleton(): JSX.Element {
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
