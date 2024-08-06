import ShoppingList from "@/app/ui/containers/shoppingList/shoppingList";
import Summary from "@/app/ui/containers/shoppingList/summary";
import { getShoppingList } from "@/db/postgresData";

export default async function Page() {
  const shoppingList = await getShoppingList();
  console.log(shoppingList);

  return (
    <>
      <h1
        className="text-emerald-900 dark:text-emerald-100
            text-xl md:text-2xl lg:text-3xl font-bold
            w-fit"
      >
        Cesta de la compra
        <div className="w-full border-t  border-emerald-900 dark:border-emerald-100"></div>
      </h1>
      <section className="flex flex-col-reverse lg:flex-row gap-3">
        <ShoppingList products={shoppingList} />
        <div className="shrink-0">
          <Summary products={shoppingList} />
        </div>
      </section>
    </>
  );
}
