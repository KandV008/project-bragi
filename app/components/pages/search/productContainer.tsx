import { ProductEntity } from "@/app/model/Product";
import Product from "./product";

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
