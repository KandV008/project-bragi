import { ProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import ProductShoppingList, { ProductInformationSkeleton } from "../../components/products/productShoppingList";

interface ShoppingListProps {
  products: ProductDTO[];
}

export default function ShoppingList({ products }: ShoppingListProps) {
  return (
    <section className="flex flex-col gap-5">
      {products.map((product, index) => (
        <ProductShoppingList key={index}
                            id={product.id}
                            imageURL={product.imageURL}
                            name={product.name}
                            brand={product.brand}
                            price={product.price}
                            earSide={product.earSide}
                            guarantee={product.guarantee}
                            color={product.color}
                            quantity={product.quantity} />
      ))}
    </section>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ShoppingListSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}
    >
      <section className="flex flex-col gap-5">
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
      </section>
    </div>
  );
}