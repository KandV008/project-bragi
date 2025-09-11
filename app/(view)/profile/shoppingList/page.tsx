import ShoppingListInformation from "@/app/ui/containers/shoppingList/shoppingInformation/shoppingInformation";
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
  return <ShoppingListInformation />;
}
