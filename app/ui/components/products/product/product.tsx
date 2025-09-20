"use client";

import Image from "next/image";
import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "../../../tailwindClasses";
import SeeMoreButton from "../../buttons/seeMoreButton/seeMoreButton";
import FavoriteToggleButton, {
  FavoriteToggleButtonSkeleton,
} from "../../buttons/favoriteToggleButton/favoriteToggleButton";

/**
 * Props for the Product component
 * @property {string} id - Unique identifier for the product.
 * @property {string} image - Image URL of the product.
 * @property {string} name - Name of the product.
 * @property {string} brand - Brand of the product.
 * @property {string} price - Price of the product in Euros.
 * @property {boolean} isFavorite - Indicates whether the product is marked as a favorite.
 * @property {boolean} [isPreview] - Determines if the component is in preview mode.
 */
interface ProductProps {
  id: string;
  image: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  isFavorite: boolean;
  isPreview?: boolean;
}

/**
 * Renders a product card with image, details, and action buttons.
 * @param {ProductProps} props - The properties of the Product component.
 */
export default function Product({
  id,
  image,
  name,
  category,
  brand,
  price,
  isFavorite,
  isPreview,
}: ProductProps) {
  const linkURL = isPreview ? `/admin/products/${id}` : `/search/about/${id}`;
  const priceFormatted = Number(price).toFixed(2);
  const isEarphone = category == "EARPHONE"

  return (
    <article
      className={`flex flex-col justify-between items-center gap-3 h-fit
        p-3 md:p-4 xl:p-5 
        w-40 md:w-48 xl:w-64 
    ${componentBackground}  
    ${componentBorder} border-solid rounded rounded-tr-3xl 
    ${componentText}`}
    >
      {/* Display */}
      <section className="flex flex-col items-center justify-between gap-3">
        <div className="relative size-28 md:size-40 xl:size-56 bg-white rounded z-0">
          {/* Imagen */}
          <Image
            src={image}
            width={150}
            height={150}
            alt={"img-" + id}
            className="size-28 md:size-40 xl:size-56 bg-white rounded"
          />
        </div>
        <div className="flex flex-col w-full px-2">
          <span className="text-xs md:text-sm xl:text-lg font-bold w-full text-center md:text-start">
            {name}
          </span>
          <span className="text-xs md:text-sm xl:text-base w-full text-center md:text-start">
            {brand}
          </span>
          <span className="text-sm md:self-end md:text-base xl:text-xl font-bold w-full text-center md:text-end">
            {priceFormatted}€
          </span>
        </div>
      </section>
      {/* Buttons */}
      <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-2 xl:gap-1">
        <SeeMoreButton link={linkURL} thing={"Producto"} />
        {isPreview ? (
          <></>
        ) : (
          <FavoriteToggleButton productId={id} isActive={isFavorite} />
        )}
      </section>
    </article>
  );
}

/**
 * Skeleton component for loading state of Product component.
 */
export function ProductSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded rounded-tr-3xl bg-gray-100 shadow-sm`}
    >
      <div
        className="flex flex-col justify-between items-center gap-3 p-3 md:p-4 xl:p-5
     border-solid text-primary2 dark:text-secondary0
    rounded rounded-tr-3xl 
    md:w-48 xl:w-64 h-fit"
      >
        {/* Information */}
        <section className="flex flex-col items-center justify-between gap-3">
          {/* Image */}
          <div className="flex p-4">
            <div className="size-28 md:size-40 xl:size-56 rounded-md bg-gray-200" />
          </div>
          {/* Text */}
          <div className="flex flex-col text-center truncate w-full px-6">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-20 rounded-md bg-gray-200" />
            <div className="md:self-end h-4 sm:h-6 xl:h-7 w-20 rounded-md bg-gray-200" />
          </div>
        </section>
        {/* Buttons */}
        <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-2 xl:gap-1">
          <div className="h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40 rounded-2xl border-2 bg-gray-200" />
          <FavoriteToggleButtonSkeleton />
        </section>
      </div>
    </div>
  );
}
