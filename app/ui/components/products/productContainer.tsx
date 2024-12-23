'use client';

import { ProductEntity } from "@/app/model/entities/Product";
import { useUser } from "@clerk/clerk-react";
import Product, { ProductSkeleton } from "./product";
import { useState, useEffect } from "react";
import MediumButton from "../buttons/mediumButton";
import { shimmer } from "../../tailwindClasses";
import { checkFavoriteListRoute } from "@/app/api/routes";

interface ProductContainerProps {
  products: ProductEntity[];
  moreProduct?: () => void;
  showMoreButton: boolean;
  isPreview?: boolean
}

export default function ProductContainer({
  products,
  moreProduct,
  showMoreButton,
  isPreview,
}: ProductContainerProps) {
  const { user } = useUser();
  const [favoritesProducts, setFavoritesProducts] = useState<boolean[]>([]);

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
      <article className="flex flex-wrap shrink-0 w-fit
                gap-4 lg:gap-6 
                place-self-center items-center justify-center lg:justify-between ">
        {products.map((product, index) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.colors[0].images[0]}
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
      ) : (
        <></>
      )}
    </section>
  );
}

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


