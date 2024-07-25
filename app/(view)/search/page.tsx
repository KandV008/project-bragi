import Filter from "@/app/ui/containers/search/filter";
import { ProductEntity } from "@/app/model/entities/Product";
import { getAllProducts } from "@/db/mongoData";
import ProductContainer from "@/app/ui/components/common/productContainer";


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
