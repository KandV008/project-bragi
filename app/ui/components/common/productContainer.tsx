import { ProductEntity } from "@/app/model/entities/Product";
import Product, { ProductSkeleton } from "./product";

interface ProductContainerProps {
  products: ProductEntity[];
}

export default function ProductContainer({products}: ProductContainerProps) {
  return (
    <section className="flex flex-wrap gap-4 lg:gap-8 justify-center lg:justify-start shrink-0 w-fit">
      {products.map((product) => (
        <Product key={product.id} 
                 id={product.id}
                 image={product.colors[0].images[0]} 
                 name={product.name}
                 brand={product.brand}
                 price={product.price.toString()} />
      ))}

    </section>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ProductContainerSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}
    >
      <section className="flex flex-wrap gap-4 lg:gap-8 justify-center lg:justify-start shrink-0 w-fit">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </section>
    </div>
  );
}