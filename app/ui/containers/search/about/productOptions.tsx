'use client';

import Image from "next/image";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ProductColor } from "@/app/model/entities/Product";
import { addProductToShoppingList } from "@/db/action";
import FavoriteToggleButton from "@/app/ui/components/buttons/favoriteToggleButton";

interface ProductOptionsProps {
  id: string;
  name: string;
  price: string;
  colors: ProductColor[];
  brand: string;
  include: string[];
}

export default function ProductOptions({
  id,
  name,
  price,
  colors,
  brand,
  include,
}: ProductOptionsProps) {
  const { user } = useUser();

  const [imgIndex, setImgIndex] = useState(0);
  const getColorButtonClasses = (buttonName: number) => {
    const baseClasses =
      "size-8 md:size-6 lg:size-8 border-2 dark:border-secondary0";
    return buttonName === imgIndex
      ? `${baseClasses}  border-red-500`
      : `${baseClasses} border-primary2`;
  };

  const [earSide, setEarSide] = useState("");
  const handleEarSideButtonClick = (buttonName: string) => {
    setEarSide(buttonName);
  };

  const getEarSideButtonClasses = (buttonName: string) => {
    const baseClasses =
      "h-8 w-24 border-2 rounded border-primary2 dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700";
    return buttonName === earSide
      ? `${baseClasses} text-red-500 bg-red-200 border-red-500`
      : `${baseClasses} text-primary2 bg-primary0 border-primary2`;
  };

  const [guarantee, setGuarantee] = useState(false);
  const textColor = guarantee ? "text-red-500" : "text-primary2";
  const bgColor = guarantee ? "bg-red-200" : "bg-primary0";
  const borderColor = guarantee ? "border-red-500" : "border-primary2";

  return (
    <div
      className="flex flex-col md:flex-row rounded rounded-tr-3xl
     border-2 border-primary2 dark:border-secondary1 bg-primary0 dark:bg-secondary2 text-primary2 dark:text-secondary0 p-5"
    >
      {/* Product Images */}
      <article className="flex flex-col md:w-1/2 gap-3 lg:gap-2">
        {/* Main Image */}
        <div className="place-self-center">
          <Image
            src={colors[imgIndex].images[0]}
            width={1500}
            height={1500}
            alt={"img-" + 0}
            className="size-64 sm:size-72 lg:size-96 bg-white"
          />
        </div>
        {/* Secondary Images */}
        <div className="flex flex-row gap-2 justify-center">
          {colors[imgIndex].images.map((image, index) => (
            <>
              {index === 0 ? (
                <span></span>
              ) : (
                <Image
                  key={index}
                  src={image}
                  width={1500}
                  height={1500}
                  alt={"img-" + index}
                  className="size-20 sm:size-24 lg:size-32 bg-white"
                />
              )}
            </>
          ))}
        </div>
      </article>
      {/* Product Options */}
      <article className="flex flex-col  md:w-1/2 md:justify-around">
        {/* Name */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold w-fit">
          {name}
        </h1>
        {/* Brand */}
        <h2 className="text-lg sm:text-xl lg:text-2xl w-fit">{brand}</h2>
        {/* Price */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold w-fit">
          {price}€
        </h1>
        <br className="hidden sm:block" />
        {/* Color Buttons */}
        <div className="w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Colores disponibles
            <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
          </h3>
          <div className="flex flex-row flex-wrap gap-1">
            {colors.map((color, index) => (
              <button
                key={color.color.name}
                className={getColorButtonClasses(index)}
                style={{ backgroundColor: color.color.hex }}
                title={color.color.name}
                onClick={() => setImgIndex(index)} // Update imgIndex on button click
              ></button>
            ))}
          </div>
        </div>
        {/* Hearing Aid Side Buttons */}
        <div className="w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Lado del Audífono
            <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
          </h3>
          <div className="flex flex-row flex-wrap gap-3">
            <button
              className={getEarSideButtonClasses("right")}
              onClick={() => handleEarSideButtonClick("right")}
            >
              Derecho
            </button>
            <button
              className={getEarSideButtonClasses("left")}
              onClick={() => handleEarSideButtonClick("left")}
            >
              Izquierdo
            </button>
            <button
              className={getEarSideButtonClasses("both")}
              onClick={() => handleEarSideButtonClick("both")}
            >
              Ambos
            </button>
          </div>
        </div>
        {/* Insurance Button */}
        <div className="w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Añadir seguro de 1 año al producto
            <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
          </h3>
          <button
            onClick={() => {
              setGuarantee(!guarantee);
            }}
            className={`h-8 w-24 border-2 rounded dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700 ${bgColor} ${borderColor} ${textColor}`}
          >
            Añadir
          </button>
        </div>
        {/* Include list */}
        <div className="mb-3 md:mb-1 lg:mb-3 w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Incluye
            <div className="w-full border-t mb-1 lg:mb-3 border-primary2 dark:border-secondary0"></div>
          </h3>
          <ul className="px-2 text-sm lg:text-base">
            {include.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
        {/* Shopping Button */}
        <section className="flex flex-row flex-wrap justify-start gap-3 md:gap-2 xl:gap-1">
          {!user ? (
            <></>
          ) : (
            <form action={addProductToShoppingList}>
              
              <input type="hidden" name="id" value={id} />
              <input type="hidden" name="color" value={colors[imgIndex].color.name} />
              <input type="hidden" name="earSide" value={earSide} />
              <input type="hidden" name="guarantee" value={guarantee.toString()} />
              <input type="hidden" name="name" value={name} />
              <input type="hidden" name="brand" value={brand} />
              <input type="hidden" name="price" value={price} />
              <input type="hidden" name="imageURL" value={colors[imgIndex].images[0]} />

              <button
                type="submit"
                className="w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center
          border-2 rounded border-primary2 dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700"
              >
                <div className="flex flex-row place-self-center gap-3">
                  <div className=" mr-0 md:mr-2 xl:mr-0">
                    <FontAwesomeIcon icon={faCartShopping} className="" />
                  </div>
                  <span className="text-base font-black">
                    Añadir a la cesta
                  </span>
                </div>
              </button>
            </form>
          )}
          <FavoriteToggleButton productId={id} />
        </section>
      </article>
    </div>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ProductOptionsSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded rounded-tr-3xl bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Product Images */}
        <article className="flex flex-col md:w-1/2 gap-3 lg:gap-2">
          {/* Main Image */}
          <div className="place-self-center">
            <div className="size-64 sm:size-72 lg:size-96 bg-gray-200"></div>
          </div>
          {/* Secondary Images */}
          <div className="flex flex-row gap-2 justify-center">
            <div className="size-20 sm:size-24 lg:size-32 bg-gray-200"></div>
            <div className="size-20 sm:size-24 lg:size-32 bg-gray-200"></div>
            <div className="size-20 sm:size-24 lg:size-32 bg-gray-200"></div>
          </div>
        </article>
        {/* Product Options */}
        <article className="flex flex-col  md:w-1/2 md:justify-around">
          {/* Name */}
          <div className="md:self-start h-7 sm:h-8 lg:h-10 w-64 rounded-md bg-gray-200" />
          {/* Brand */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          {/* Price */}
          <div className="md:self-start h-8 sm:h-10 xl:h-12 w-40 rounded-md bg-gray-200" />

          {/* Color Buttons */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-row flex-wrap gap-1">
              <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
              <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
              <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
              <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
            </div>
          </div>

          {/* Hearing Aid Side Buttons */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-row flex-wrap gap-3">
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
            </div>
          </div>
          {/* Insurance Button */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-row flex-wrap gap-1">
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
            </div>
          </div>
          {/* Include list */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-col flex-wrap gap-1">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
          {/* Shopping Button */}
          <div
            className="w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center
          border-2 rounded bg-gray-200"
          />
        </article>
      </div>
    </div>
  );
}