import ProductInformation from "@/app/components/pages/shoppingList/productInformation";
import { ProductDTO } from "@/app/model/DTOs/ProductDTO";

interface ShoppingListProps {
  products: ProductDTO[];
}

export default function ShoppingList({ products }: ShoppingListProps) {
  return (
    <section className="flex flex-col gap-5">
      {products.map((product, index) => (
        <ProductInformation key={index}
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
