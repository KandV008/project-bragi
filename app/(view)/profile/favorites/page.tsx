import { ProductEntity } from "@/app/model/entities/Product";
import ProductContainer from "@/app/ui/components/common/productContainer";
import SectionHeader from "@/app/ui/components/common/sectionHeader";
import { getFavorites } from "@/db/postgresData";

export default async function Page() {
  const favoriteProducts: ProductEntity[] = await getFavorites();

  return (
    <section>
      <SectionHeader text="Lista de Favoritos" />
      <ProductContainer products={favoriteProducts} />
    </section>
  );
}
