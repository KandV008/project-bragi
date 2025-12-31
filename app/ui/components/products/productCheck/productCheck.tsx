"use client";

import Image from "next/image";
import {
  componentBorder,
  componentText,
  fillDefaultComponentBackground,
  pressedButton,
  shimmer,
} from "../../../tailwindClasses";
import { FavoriteToggleButtonSkeleton } from "../../buttons/favoriteToggleButton/favoriteToggleButton";
import { ChangeEvent, MouseEvent, useContext } from "react";
import { DeletingContext } from "../../contexts/deletingContext";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  brand: string;
  price: string;
}

export default function ProductCheck({
  id,
  image,
  name,
  brand,
  price,
}: ProductProps) {
  const priceFormatted = Number(price).toFixed(2);
  const { selectedValues, setSelectedValues } = useContext(
    DeletingContext
  );

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSelection = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === "input") return;

    setSelectedValues((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCheckBoxStatus = (productId: string): string => {
    const baseClasses =
      "flex flex-col justify-between items-center gap-3 h-fit p-3 md:p-4 xl:p-5 w-40 md:w-48 xl:w-64 border-solid rounded rounded-tr-3xl cursor-pointer";
    return selectedValues.includes(productId)
      ? `${baseClasses} ${pressedButton} ${componentBorder}`
      : `${baseClasses} ${fillDefaultComponentBackground} ${componentText} ${componentBorder}`;
  };

  return (
    <article className={getCheckBoxStatus(id)}>
      <section
        className="flex flex-col items-center justify-between gap-3 w-full"
        onClick={toggleSelection}
      >
        <input
          type="checkbox"
          id={`delete-check-${id}`}
          name={`delete-check-${id}`}
          value={id}
          onChange={handleCheckboxChange}
          checked={selectedValues.includes(id)}
          className="cursor-pointer"
        />
        <div className="relative size-28 md:size-40 xl:size-56 bg-white rounded z-0">
          <Image
            src={image}
            width={150}
            height={150}
            alt={"img-" + id}
            className="size-28 md:size-40 xl:size-56 bg-white rounded"
          />
        </div>
        <div className="flex flex-col w-full px-2">
          <span className="text-xs md:text-sm xl:text-lg font-bold w-full h-10 md:h-11 xl:h-14 text-center md:text-start">
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
        <section className="flex flex-col items-center justify-between gap-3">
          <div className="flex p-4">
            <div className="size-28 md:size-40 xl:size-56 rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col text-center truncate w-full px-6">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-20 rounded-md bg-gray-200" />
            <div className="md:self-end h-4 sm:h-6 xl:h-7 w-20 rounded-md bg-gray-200" />
          </div>
        </section>
        <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-2 xl:gap-1">
          <div className="h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40 rounded-2xl border-2 bg-gray-200" />
          <FavoriteToggleButtonSkeleton />
        </section>
      </div>
    </div>
  );
}
