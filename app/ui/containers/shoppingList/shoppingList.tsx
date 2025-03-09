import { ProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import { shimmer } from "../../tailwindClasses";
import ProductShoppingList, { ProductInformationSkeleton } from "../../components/products/productShoppingList/productShoppingList";

/**
 * Props for the ShoppingList component.
 */
interface ShoppingListProps {
  /** Array of products to be displayed in the shopping list */
  products: ProductDTO[];
}

/**
 * Renders a shopping list displaying a list of products.
 * 
 * @param products - Array of `ProductDTO` objects to display.
 * @returns JSX element representing the shopping list.
 */
export default function ShoppingList({ products }: ShoppingListProps) {
  return (
    <section className="flex flex-col gap-5">
      {products.map((product, index) => (
        <ProductShoppingList 
          key={index}
          id={product.id}
          imageURL={product.imageURL}
          name={product.name}
          category={product.category}
          brand={product.brand}
          price={product.price}
          earSide={product.earSide}
          guarantee={product.guarantee}
          colorText={product.colorText}
          colorHex={product.colorHex}
          quantity={product.quantity} 
        />
      ))}
    </section>
  );
}

/**
 * Displays a skeleton loader for the shopping list while data is being fetched.
 * 
 * @returns JSX element representing the skeleton loading state.
 */
export function ShoppingListSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}>
      <section className="flex flex-col gap-5">
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
      </section>
    </div>
  );
}
