"use client";

import { ShoppingListContext } from "@/app/ui/components/contexts/shoppingListContext";
import ProductShoppingList, {
  ProductInformationSkeleton,
} from "@/app/ui/components/products/productShoppingList/productShoppingList";
import { shimmer } from "@/app/ui/tailwindClasses";
import { useContext } from "react";

/**
 * Renders a shopping list displaying a list of products.
 *
 * @returns JSX element representing the shopping list.
 */
export default function ShoppingList() {
  const { shoppingList, setShoppingList:_ } = useContext(ShoppingListContext)

  return (
    <section className="flex flex-col gap-5 w-full">
      {shoppingList.map((product, index) => (
        <ProductShoppingList
          key={`${product.id}-${index}`}
          id={product.id}
          imageURL={product.imageURL}
          name={product.name}
          category={product.category}
          brand={product.brand}
          price={product.price}
          discountPrice={product.discountPrice ?? null}
          earSide={product.earSide}
          earphoneShape={product.earphoneShape}
          colorText={product.colorText}
          colorHex={product.colorHex}
          quantity={product.quantity}
          accessories={product.accessories}
        />
      ))}
    </section>
  );
}

/**
 * Displays a skeleton loader for the shopping list while data is being fetched.
 *
 * @returns JSX element representing the skeleton loading state.
 */
export function ShoppingListSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}
    >
      <section className="flex flex-col gap-5">
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
      </section>
    </div>
  );
}
