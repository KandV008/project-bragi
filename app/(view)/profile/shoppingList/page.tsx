import SectionHeader from "@/app/ui/components/common/sectionHeader";
import ShoppingList from "@/app/ui/containers/shoppingList/shoppingList";
import Summary from "@/app/ui/containers/shoppingList/summary";
import { getShoppingList } from "@/db/postgresData";

export default async function Page() {
  const shoppingList = await getShoppingList();
  console.log(shoppingList);

  return (
    <>
      <SectionHeader text="Cesta de la compra" />
      <section className="flex flex-col-reverse lg:flex-row gap-3">
        <ShoppingList products={shoppingList} />
        <div className="shrink-0">
          <Summary products={shoppingList} />
        </div>
      </section>
    </>
  );
}
