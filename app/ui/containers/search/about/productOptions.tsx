"use client";

import Image from "next/image";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (id && user) {
      fetch(`/api/checkFavorite?productId=${id}&userId=${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setIsFavorite(data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id, user]);

  const [imgIndex, setImgIndex] = useState(0);
  const getColorButtonClasses = (buttonName: number) => {
    const baseClasses = "size-8 md:size-6 lg:size-8 border-2";
    return buttonName === imgIndex
      ? `${baseClasses} border-rose-600`
      : `${baseClasses} border-emerald-900 dark:border-emerald-100`;
  };

  const [earSide, setEarSide] = useState("");
  const handleEarSideButtonClick = (buttonName: string) => {
    setEarSide(buttonName);
  };

  const getEarSideButtonClasses = (buttonName: string) => {
    const baseClasses = "h-8 w-24 border-2 rounded font-bold";
    return buttonName === earSide
      ? `${baseClasses} text-rose-600 bg-rose-200 border-rose-600`
      : `${baseClasses} text-emerald-100 dark:text-emerald-800 bg-emerald-900 dark:bg-emerald-100 hover:bg-emerald-700 hover:dark:bg-emerald-200 border-emerald-900 dark:border-emerald-100 hover:border-emerald-700 hover:dark:border-emerald-200`;
  };

  const [guarantee, setGuarantee] = useState(false);
  const textColor = guarantee
    ? "text-rose-600"
    : "text-emerald-100 dark:text-emerald-800";
  const bgColor = guarantee
    ? "bg-rose-200 hover:bg-rose-300"
    : "bg-emerald-900 dark:bg-emerald-100 hover:bg-emerald-700 hover:dark:bg-emerald-200";
  const borderColor = guarantee
    ? "border-rose-600"
    : "border-emerald-900 dark:border-emerald-100 hover:border-emerald-700 hover:dark:border-emerald-200";

  return (
    <div
      className="flex flex-col md:flex-row rounded rounded-tr-3xl p-5
     border-emerald-900 dark:border-emerald-100 border-2
     bg-emerald-100 dark:bg-emerald-800 
     text-emerald-900 dark:text-emerald-100 "
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
            className="size-64 sm:size-72 lg:size-96 bg-white rounded border-2 border-emerald-900 dark:border-emerald-100"
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
                  key={"img-" + index}
                  src={image}
                  width={1500}
                  height={1500}
                  alt={"img-" + index}
                  className="size-20 sm:size-24 lg:size-32 bg-white rounded border-2 border-emerald-900 dark:border-emerald-100"
                />
              )}
            </>
          ))}
        </div>
      </article>
      {/* Product Options */}
      <article className="flex flex-col  md:w-1/2 md:justify-around">
        {/* Name */}
        <div className="flex flex-row justify-between">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold w-fit">
            {name}
          </h1>
          <div className=" block xl:hidden">
            <FavoriteToggleButton productId={id} isActive={isFavorite} /> 
          </div>
        </div>
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
            <div className="w-full border-t mb-3 border-emerald-900 dark:border-emerald-100"></div>
          </h3>
          <div className="flex flex-row flex-wrap gap-1">
            {colors.map((color, index) => (
              <button
                key={color.color.name + "-" + index}
                className={getColorButtonClasses(index)}
                style={{ backgroundColor: color.color.hex }}
                title={color.color.name}
                onClick={() => setImgIndex(index)}
              ></button>
            ))}
          </div>
        </div>
        {/* Hearing Aid Side Buttons */}
        <div className="w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Lado del Audífono
            <div className="w-full border-t mb-3 border-emerald-900 dark:border-emerald-100"></div>
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
            <div className="w-full border-t mb-3 border-emerald-900 dark:border-emerald-100"></div>
          </h3>
          <button
            onClick={() => {
              setGuarantee(!guarantee);
            }}
            className={`h-8 w-24 border-2 rounded font-bold ${bgColor} ${borderColor} ${textColor}`}
          >
            Añadir
          </button>
        </div>
        {/* Include list */}
        <div className="mb-3 md:mb-1 lg:mb-3 w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Incluye
            <div className="w-full border-t mb-1 lg:mb-3 border-emerald-900 dark:border-emerald-100"></div>
          </h3>
          <ul className="px-2 text-sm lg:text-base">
            {include.map((text, index) => (
              <li key={"li-" + index}>{text}</li>
            ))}
          </ul>
        </div>
        {/* Shopping Button */}
        <section className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 md:gap-2 xl:gap-1">
          {!user ? (
            <></>
          ) : (
            <form action={addProductToShoppingList}>
              <input type="hidden" name="id" value={id} />
              <input
                type="hidden"
                name="color"
                value={colors[imgIndex].color.name}
              />
              <input type="hidden" name="earSide" value={earSide} />
              <input
                type="hidden"
                name="guarantee"
                value={guarantee.toString()}
              />
              <input type="hidden" name="name" value={name} />
              <input type="hidden" name="brand" value={brand} />
              <input type="hidden" name="price" value={price} />
              <input
                type="hidden"
                name="imageURL"
                value={colors[imgIndex].images[0]}
              />

              <button
                type="submit"
                className="w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center rounded 
                          bg-emerald-900 text-emerald-100
                          dark:bg-emerald-100 dark:text-emerald-800
                          hover:bg-emerald-700 hover:dark:bg-emerald-200"
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
          <div className="hidden xl:block">
            <FavoriteToggleButton productId={id} isActive={isFavorite}/>
          </div>
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
