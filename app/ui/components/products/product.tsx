"use client";

import Image from "next/image";
import { faEye, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FavoriteToggleButton, { FavoriteToggleButtonSkeleton } from "../../components/buttons/favoriteToggleButton";
import {
  componentBackground,
  componentBorder,
  componentText,
  negativeComponentBackground,
  negativeHoverComponentBackground,
  negativeComponentText,
  shimmer,
} from "../../tailwindClasses";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  brand: string;
  price: string;
  isFavorite: boolean;
  isPreview?: boolean;
}

export default function Product({
  id,
  image,
  name,
  brand,
  price,
  isFavorite,
  isPreview,
}: ProductProps) {
  const linkURL = isPreview ? `/admin/products/${id}` : `/search/about/${id}`;
  const buttonIcon = isPreview ? faFile : faEye;

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
        <Image
          src={image}
          width={150}
          height={150}
          alt={"img-" + id}
          className="size-28 md:size-40 xl:size-56 bg-white rounded"
        />
        <div className="flex flex-col w-full px-2">
          <span className="text-xs md:text-sm xl:text-lg font-bold w-full text-center md:text-start">
            {name}
          </span>
          <span className="text-xs md:text-sm xl:text-base w-full text-center md:text-start">
            {brand}
          </span>
          <span className="text-sm md:self-end md:text-base xl:text-xl font-bold w-full text-center md:text-end">
            {price}€
          </span>
        </div>
      </section>
      {/* Buttons */}
      <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-2 xl:gap-1">
        <Link
          href={linkURL}
          className={`flex flex-row items-center justify-center md:justify-around md:px-2
          rounded-2xl h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40
          ${negativeComponentBackground} ${negativeHoverComponentBackground}
          ${negativeComponentText}`}
        >
          <div className=" mr-0 md:mr-2 xl:mr-0">
            <FontAwesomeIcon icon={buttonIcon} className="" />
          </div>
          <span className="hidden xl:block text-sm font-black">
            Ver producto
          </span>
          <span className="hidden md:block xl:hidden text-xs font-black">
            Ver más
          </span>
        </Link>
        {isPreview ? (
          <></>
        ) : (
          <FavoriteToggleButton productId={id} isActive={isFavorite} />
        )}
      </section>
    </article>
  );
}

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
