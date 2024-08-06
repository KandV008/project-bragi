import { ProductEntity } from "@/app/model/entities/Product";
import ProductContainer from "@/app/ui/components/common/productContainer";
import { getFavorites } from "@/db/postgresData";

export default async function Page() {
  const favoriteProducts: ProductEntity[] = await getFavorites();

  return (
    <section>
      <h1
        className="text-emerald-900 dark:text-emerald-100
            text-xl md:text-2xl lg:text-3xl font-bold
            w-fit"
      >
        Lista de Favoritos
        <div className="w-full border-t mb-3 border-emerald-900 dark:border-emerald-100"></div>
      </h1>
      <ProductContainer products={favoriteProducts} />
    </section>
  );
}
