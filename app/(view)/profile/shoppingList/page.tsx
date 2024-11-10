import NoShoppingCartMessage from "@/app/ui/components/messages/noShoppingCartMessage";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import ShoppingList from "@/app/ui/containers/shoppingList/shoppingList";
import Summary from "@/app/ui/containers/shoppingList/summary";
import { getShoppingList } from "@/db/shoppingList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cesta de la compra",
};

export default async function Page() {
  const shoppingList = await getShoppingList();

  return (
    <>
      {shoppingList.length === 0 ? (
        <NoShoppingCartMessage />
      ) : (
        <>
          {" "}
          <SectionHeader text="Cesta de la compra" />
          <section className="flex flex-col-reverse lg:flex-row gap-3">
            <ShoppingList products={shoppingList} />
            <div className="shrink-0 z-10">
              <Summary products={shoppingList} />
            </div>
          </section>{" "}
        </>
      )}
    </>
  );
}
