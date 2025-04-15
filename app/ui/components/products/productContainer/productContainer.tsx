'use client';

import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { checkFavoriteListRoute } from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";
import Product, { ProductSkeleton } from "../product/product";
import { shimmer } from "../../../tailwindClasses";
import MediumButton from "../../buttons/mediumButton/mediumButton";

/**
 * Props for the ProductContainer component.
 * 
 * @property {ProductEntity[]} products - Array of products to be displayed.
 * @property {() => void} [moreProduct] - Function to fetch more products when 'Ver más' button is clicked.
 * @property {boolean} showMoreButton - Flag indicating whether to show the 'Ver más' button.
 * @property {boolean} [isPreview] - Flag indicating whether the products are in preview mode.
 */
interface ProductContainerProps {
  products: ProductEntity[];
  moreProduct?: () => void;
  showMoreButton: boolean;
  isPreview?: boolean;
}

/**
 * Component that displays a list of products, optionally allowing users to fetch more products.
 * Also checks whether products are marked as favorite by the current user.
 * 
 * @param {ProductContainerProps} props - Component properties.
 */
export default function ProductContainer({
  products,
  moreProduct,
  showMoreButton,
  isPreview,
}: ProductContainerProps) {
  const { user } = useUser();
  const [favoritesProducts, setFavoritesProducts] = useState<boolean[]>([]);

  /**
   * Fetches the favorite status of the displayed products for the current user.
   */
  useEffect(() => {
    if (products.length > 0 && user) {
      const productIdsParam = products.map(product => product.id).join(',');
  
      fetch(`${checkFavoriteListRoute}?productIds=${productIdsParam}&userId=${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setFavoritesProducts(data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [products, user]);

  return (
    <section className="flex flex-col gap-10 w-full items-center">
      <article className="flex flex-wrap shrink-0 w-fit gap-4 lg:gap-6 place-self-center items-center justify-center lg:justify-between">
        {products.map((product, index) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.imageURL}
            name={product.name}
            brand={product.brand}
            price={product.price.toString()}
            isFavorite={favoritesProducts[index]}
            isPreview={isPreview}
          />
        ))}
      </article>
      {showMoreButton ? (
        <article className="self-center">
          <MediumButton text="Ver más" onClick={moreProduct} />
        </article>
      ) : null}
    </section>
  );
}

/**
 * Skeleton loader for the ProductContainer component, displaying placeholder product cards.
 */
export function ProductContainerSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}>
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
