"use client";

import Loading from "@/app/(view)/profile/favorites/loading";
import { getFavoritesRoute } from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";
import NoFavoritesMessage from "@/app/ui/components/messages/noFavoritesMessage/noFavoritesMessage";
import ProductContainer from "@/app/ui/components/products/productContainer/productContainer";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { useEffect, useState } from "react";

/**
 * Fetches and displays the user's favorite products. If no favorites exist, 
 * it displays a message indicating the list is empty. Handles infinite scrolling 
 * by fetching additional products when requested.
 *
 * @returns {JSX.Element} The favorites section containing products or a message if empty.
 */
export default function FavoritesContainer(): JSX.Element {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [favorites, setFavorites] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${getFavoritesRoute}?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        setFavorites((prev) => prev.concat(data));
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, startIndex]);

  if (isLoading) return <Loading />;
  if (favorites.length === 0) return <NoFavoritesMessage />;

  /**
   * Loads more favorite products by updating the indices for fetching.
   */
  const addMoreProducts = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <section>
      <SectionHeader text="Lista de Favoritos" />
      <ProductContainer
        products={favorites}
        moreProduct={addMoreProducts}
        showMoreButton={favorites.length === endIndex + 1}
      />
    </section>
  );
}
