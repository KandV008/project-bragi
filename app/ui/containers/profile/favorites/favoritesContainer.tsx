"use client";

import Loading from "@/app/(view)/profile/favorites/loading";
import { ProductEntity } from "@/app/model/entities/Product";
import NoFavoritesMessage from "@/app/ui/components/messages/noFavoritesMessage";
import ProductContainer from "@/app/ui/components/products/productContainer";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import { useEffect, useState } from "react";

export default function FavoritesContainer() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [favorites, setFavorites] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/getFavorites?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        setFavorites((prev) => prev.concat(data));
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, startIndex]);

  if (isLoading) return <Loading />;
  if (favorites.length === 0) return <NoFavoritesMessage />

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
