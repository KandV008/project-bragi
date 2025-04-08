import NoShoppingCartMessage from "@/app/ui/components/messages/noShoppingCartMessage";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import ShoppingList from "@/app/ui/containers/shoppingList/shoppingList";
import Summary from "@/app/ui/containers/shoppingList/summary";
import { getShoppingList } from "@/db/shoppingList/shoppingList";
import { Metadata } from "next";

/**
 * Metadata for the Shopping List page.
 * Sets the page title to "Cesta de la compra".
 */
export const metadata: Metadata = {
  title: "Cesta de la compra",
};

/**
 * Fetches and displays the user's shopping cart. If the cart is empty,
 * a message is shown instead. Otherwise, the shopping list and order
 * summary are displayed.
 *
 * @returns {JSX.Element} The shopping cart page content.
 */
export default async function Page() {
  const shoppingList = await getShoppingList();

  return (
    <>
      {shoppingList.length === 0 ? (
        <NoShoppingCartMessage />
      ) : (
        <>
          {/* Page header */}
          <SectionHeader text="Cesta de la compra" />
          {/* Shopping list and summary section */}
          <section className="flex flex-col-reverse lg:flex-row gap-3">
            {/* Shopping list container */}
            <ShoppingList products={shoppingList} />
            <div className="shrink-0 z-10">
              {/* Order summary section */}
              <Summary products={shoppingList} />
            </div>
          </section>
        </>
      )}
    </>
  );
}
