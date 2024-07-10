

import ProductContainer from "@/app/components/pages/search/productContainer";
import { getFavorites } from "@/app/lib/postgresData";
import { ProductEntity } from "@/app/model/Product";

export default async function Page(){
    const favoriteProducts: ProductEntity[] = await getFavorites();

    return (
        <main className="flex flex-col flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6">
            <ProductContainer products={favoriteProducts} />
        </main>
    )
}