import ShoppingFormAdvice from "@/app/ui/components/advices/shoppingFormAdvice";
import NoShoppingCartMessage from "@/app/ui/components/messages/noShoppingCartMessage/noShoppingCartMessage";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import ShoppingForm from "@/app/ui/containers/shoppingList/shoppingForm/shoppingForm";
import { getShoppingList } from "@/db/shoppingList/shoppingList";
import { Metadata } from "next";

/**
 * Metadata for the Shopping List page.
 * Sets the page title to "Cesta de la compra".
 */
export const metadata: Metadata = {
  title: "Proceso de compra",
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
  // TODO Apply bargains

  return (
    <>
      {shoppingList.length === 0 ? (
        <NoShoppingCartMessage />
      ) : (
        <>
          {/* Page header */}
          <SectionHeader text="Proceso de Compra" />
          {/* Advise about BTE and CIC products */}
          <ShoppingFormAdvice products={shoppingList} />
          {/* Shopping form and summary section */}
          <ShoppingForm products={shoppingList} />
        </>
      )}
    </>
  );
}
