
import { ProductEntity } from "@/app/model/entities/Product";
import ProductContainer from "@/app/ui/components/common/productContainer";
import { getFavorites } from "@/db/postgresData";

export default async function Page(){
    const favoriteProducts: ProductEntity[] = await getFavorites();

    return (
        <main className="flex flex-col flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6">
            <ProductContainer products={favoriteProducts} />
        </main>
    )
}