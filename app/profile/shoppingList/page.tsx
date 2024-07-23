import ShoppingList from "@/app/components/pages/shoppingList/shoppingList";
import Summary from "@/app/components/pages/shoppingList/summary";
import { getShoppingList } from "@/app/lib/postgresData";

export default async function Page() {

  const shoppingList = await getShoppingList();
  console.log(shoppingList)

  return (
    <main className="flex flex-row flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6 gap-2">
      <ShoppingList products={shoppingList}/>
      <div className="shrink-0">
        <Summary products={shoppingList}/>
      </div>
    </main>
  );
}
