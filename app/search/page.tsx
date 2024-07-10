import Filter from "../components/pages/search/filter";
import ProductContainer from "../components/pages/search/productContainer";
import { getAllProducts } from "../lib/mongoData";
import { ProductEntity } from "../model/Product";

export default async function Page() {
  const allProducts: ProductEntity[] = await getAllProducts();

  return (
    <main className="flex flex-grow  justify-center space-x-2 py-5 sm:w-5/6 xl:w-4/6 place-self-center ">
      <Filter />
      <div className="md:size-fit lg:px-12">
        <ProductContainer products={allProducts} />
      </div>
    </main>
  );
}
