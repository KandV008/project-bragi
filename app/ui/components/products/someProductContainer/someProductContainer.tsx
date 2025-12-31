"use client";

import { useState } from "react";
import { useEffect } from "react";
import { shimmer } from "../../../tailwindClasses";
import Product, { ProductSkeleton } from "../product/product";
import ProductContainer from "../productContainer/productContainer";
import EmptyMessage from "../../messages/emptyMessage/emptyMessage";
import SectionHeader from "../../tags/sectionHeader/sectionHeader";
import { ProductEntity } from "@/app/model/entities/product/Product";
import { useUser } from "@clerk/nextjs";
import { checkFavoriteListRoute } from "@/app/api/routes";

/**
 * Props for the SomeProductContainer component.
 *
 * @property {string} fetchUrl - The API endpoint to fetch product data.
 * @property {string} title - The title to display above the product list.
 */
interface SomeProductContainerProps {
  fetchUrl: string;
  title: string;
}

/**
 * Component that fetches and displays a list of products from a given API endpoint.
 * Displays a loading skeleton while fetching data and an empty message if no data is found.
 *
 * @param {SomeProductContainerProps} props - Component properties.
 * @returns {JSX.Element}
 */
export default function SomeProductContainer({
  fetchUrl,
  title,
}: SomeProductContainerProps): JSX.Element {
  const { user } = useUser();
  const [products, setData] = useState<ProductEntity[]>([]);
  const [favoritesProducts, setFavoritesProducts] = useState<boolean[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [fetchUrl]);

  /**
   * Fetches the favorite status of the displayed products for the current user.
   */
  useEffect(() => {
    if (products.length > 0 && user) {
      const productIdsParam = products.map((product) => product.id).join(",");

      fetch(
        `${checkFavoriteListRoute}?productIds=${productIdsParam}&userId=${user.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setFavoritesProducts(data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [products, user]);

  if (isLoading) return <SomeProductContainerSkeleton title={title} />;
  if (!products || products.length === 0) return <></>;

  const isOnlyOneProduct = products.length === 1 ? "self-start px-10" : "self-center"

  return (
    <section className="flex flex-col items-start sm:justify-start">
      <SectionHeader text={title} />
      <article
        className={`flex flex-wrap justify-center ${isOnlyOneProduct} shrink-0 w-fit gap-2 lg:gap-4`}
      >
        {/* Product 1 */}
        <Product
          key={products[0].id}
          id={products[0].id}
          image={products[0].imageURL}
          name={products[0].name}
          brand={products[0].brand}
          price={products[0].price.toString()}
          isFavorite={favoritesProducts[0]}
        />
        {/* Product 2 */}
        {products[1] && (
          <Product
            key={products[1].id}
            id={products[1].id}
            image={products[1].imageURL}
            name={products[1].name}
            brand={products[1].brand}
            price={products[1].price.toString()}
            isFavorite={favoritesProducts[1]}
          />
        )}
        {/* Product 3 */}
        {products[2] && (
          <div className="hidden sm:block">
            <Product
              key={products[2].id}
              id={products[2].id}
              image={products[2].imageURL}
              name={products[2].name}
              brand={products[2].brand}
              price={products[2].price.toString()}
              isFavorite={favoritesProducts[2]}
            />
          </div>
        )}
        {/* Product 4 */}
        {products[3] && (
          <div className="hidden lg:block">
            <Product
              key={products[3].id}
              id={products[3].id}
              image={products[3].imageURL}
              name={products[3].name}
              brand={products[3].brand}
              price={products[3].price.toString()}
              isFavorite={favoritesProducts[3]}
            />
          </div>
        )}
      </article>
    </section>
  );
}

/**
 * Props for the SomeProductContainerSkeleton component.
 *
 * @property {string} title - The title to display above the skeleton loader.
 */
interface SkeletonProps {
  title: string;
}

/**
 * Skeleton loader for the SomeProductContainer component, displaying placeholder product cards.
 *
 * @param {SkeletonProps} props - Component properties.
 * @returns {JSX.Element}
 */
export function SomeProductContainerSkeleton({ title }: SkeletonProps) {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <SectionHeader text={title} />
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </article>
    </div>
  );
}
