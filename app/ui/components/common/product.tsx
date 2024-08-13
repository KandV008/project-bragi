"use client";

import Image from "next/image";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FavoriteToggleButton from "../../components/buttons/favoriteToggleButton";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  brand: string;
  price: string;
  isFavorite: boolean;
}

export default function Product({
  id,
  image,
  name,
  brand,
  price,
  isFavorite,
}: ProductProps) {  
  return (
    <article
      className="flex flex-col justify-between items-center gap-3 p-3 md:p-4 xl:p-5 
    bg-emerald-100 dark:bg-emerald-800  
    border-emerald-900 dark:border-emerald-100 border-solid border-2
    text-emerald-900 dark:text-emerald-100
    rounded rounded-tr-3xl 
    md:w-48 xl:w-64 h-fit"
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
        <div className="flex flex-col text-center">
          <span className="text-xs md:self-start md:text-sm xl:text-lg font-bold ">
            {name}
          </span>
          <span className="text-xs md:self-start md:text-sm xl:text-base ">
            {brand}
          </span>
          <span className="text-sm md:self-end md:text-base xl:text-xl font-bold ">
            {price}€
          </span>
        </div>
      </section>
      {/* Buttons */}
      <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-2 xl:gap-1">
        <Link
          href={`/search/about/${id}`}
          className="flex flex-row items-center justify-center md:justify-around md:px-2
          rounded-2xl  
          bg-emerald-900 text-emerald-100
          dark:bg-emerald-100 dark:text-emerald-800
          hover:bg-emerald-700 hover:dark:bg-emerald-200
          h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40 "
        >
          <div className=" mr-0 md:mr-2 xl:mr-0">
            <FontAwesomeIcon icon={faCartShopping} className="" />
          </div>
          <span className="hidden xl:block text-sm font-black">
            Ver producto
          </span>
          <span className="hidden md:block xl:hidden text-xs font-black">
            Ver más
          </span>
        </Link>
        <FavoriteToggleButton productId={id} isActive={isFavorite}/>
      </section>
    </article>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

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
          <div className="h-8 w-12 md:size-10 xl:size-12 rounded-2xl border-2 bg-gray-200" />
        </section>
      </div>
    </div>
  );
}
