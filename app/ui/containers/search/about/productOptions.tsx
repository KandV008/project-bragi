"use client";

import Image from "next/image";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ProductColor } from "@/app/model/entities/Product";
import FavoriteToggleButton, {
  FavoriteToggleButtonSkeleton,
} from "@/app/ui/components/buttons/favoriteToggleButton";
import SubmitButton, {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton";
import ColorButton, {
  ColorButtonSkeleton,
} from "@/app/ui/components/buttons/colorButton";
import { validateAddShoppingCart } from "@/lib/validations";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp";
import ArticleHeader, {
  ArticleHeaderSkeleton,
} from "@/app/ui/components/tags/articleHeader";
import {
  pressedButton,
  negativeComponentText,
  negativeComponentBackground,
  negativeHoverComponentBackground,
  componentBorder,
  hoverComponentBorder,
  componentBackground,
  componentText,
  shimmer,
} from "@/app/ui/tailwindClasses";
import toast from "react-hot-toast";
import BigImage, {
  BigImageSkeleton,
} from "@/app/ui/components/images/bigImage";
import SmallImage, {
  SmallImageSkeleton,
} from "@/app/ui/components/images/smallImage";
import Link from "next/link";
import { addProductToShoppingList } from "@/db/shoppingList";
import { checkFavoriteRoute } from "@/app/api/routes";

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
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (id && user) {
      fetch(`${checkFavoriteRoute}?productId=${id}&userId=${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setIsFavorite(data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id, user]);

  const [imgIndex, setImgIndex] = useState(0);
  const [earSide, setEarSide] = useState("");
  const handleEarSideButtonClick = (buttonName: string) => {
    setEarSide(buttonName);
  };

  const getEarSideButtonClasses = (buttonName: string) => {
    const baseClasses = "h-8 w-24 border-2 rounded font-bold";
    return buttonName === earSide
      ? `${baseClasses} ${pressedButton}`
      : `${baseClasses} ${negativeComponentText} ${negativeComponentBackground} ${negativeHoverComponentBackground} ${componentBorder} ${hoverComponentBorder}`;
  };

  const [guarantee, setGuarantee] = useState(false);
  const guaranteeButtonClasses = guarantee
    ? pressedButton
    : `${negativeComponentText} ${negativeComponentBackground} ${negativeHoverComponentBackground} ${componentBorder} ${hoverComponentBorder}`;

  const handleForm = (formData: FormData) => {
    const isValid = validateAddShoppingCart(formData);
    if (isValid) {
      addProductToShoppingList(formData)
        .then((_) => toast.success("Se ha añadido a la cesta."))
        .catch((_) => toast.error("No se ha podido añadir a la cesta."));
    } else handleShowModal();
  };

  return (
    <>
      <div
        className={`flex flex-col md:flex-row rounded rounded-tr-3xl p-5
            ${componentBorder} ${componentBackground} ${componentText}`}
      >
        {/* Product Images */}
        <article className="flex flex-col md:w-1/2 gap-3 lg:gap-2">
          {/* Main Image */}
          <div className="place-self-center">
            <BigImage src={colors[imgIndex].images[0]} alt={"img-" + 0} />
          </div>
          {/* Secondary Images */}
          <div className="flex flex-row gap-2 justify-center">
            {colors[imgIndex].images.map((image, index) => (
              <div key={colors[imgIndex].color.name + "-img-" + index}>
                {index === 0 ? (
                  <></>
                ) : (
                  <SmallImage
                    alt={colors[imgIndex].color.name + "-img-" + index}
                    src={image}
                  />
                )}
              </div>
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
            <ArticleHeader text={"Colores disponibles"} />
            <ColorButton
              colors={colors}
              action={(index: number) => setImgIndex(index)}
            />
          </div>
          {/* Hearing Aid Side Buttons */}
          <div className="w-fit">
            <ArticleHeader text={"Lado del Audífono"} />
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
            <ArticleHeader text={"Añadir seguro de 1 año al producto"} />
            <button
              onClick={() => {
                setGuarantee(!guarantee);
              }}
              className={`h-8 w-24 border-2 rounded font-bold ${guaranteeButtonClasses}`}
            >
              Añadir
            </button>
          </div>
          {/* Include list */}
          <div className="mb-3 md:mb-1 lg:mb-3 w-fit">
            <ArticleHeader text={"Incluye"} />
            <ul className="px-2 text-sm lg:text-base">
              {include.map((text, index) => (
                <li key={"include-" + index}>{text}</li>
              ))}
            </ul>
          </div>
          {/* Shopping Button */}
          <section className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 md:gap-2 xl:gap-1">
            <form action={handleForm}>
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
              <SubmitButton
                text={"Añadir a la cesta"}
                icon={faCartShopping}
                isDisable={!user ? true : false}
              />
            </form>
            <div className="hidden xl:block">
              <FavoriteToggleButton productId={id} isActive={isFavorite} />
            </div>
          </section>
          {!user ? (
            <strong className="font-semibold">
              *
              <Link href={"/log-in"} className="hover:underline font-extrabold">
                Inicia Sesión o Regístrate
              </Link>{" "}
              para poder añadirlo a la cesta.
            </strong>
          ) : (
            <></>
          )}
        </article>
      </div>
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && <FormValidationPopUp handleShowModal={handleShowModal} />}
      </article>
    </>
  );
}

export function ProductOptionsSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded rounded-tr-3xl bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Product Images */}
        <article className="flex flex-col md:w-1/2 gap-3 lg:gap-2">
          {/* Main Image */}
          <BigImageSkeleton />
          {/* Secondary Images */}
          <div className="flex flex-row gap-2 justify-center">
            <SmallImageSkeleton />
            <SmallImageSkeleton />
            <SmallImageSkeleton />
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
            <ArticleHeaderSkeleton />
            <ColorButtonSkeleton />
          </div>
          {/* Hearing Aid Side Buttons */}
          <div className="w-fit">
            <ArticleHeaderSkeleton />
            <div className="flex flex-row flex-wrap gap-3">
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
            </div>
          </div>
          {/* Insurance Button */}
          <div className="w-fit">
            <ArticleHeaderSkeleton />
            <div className="flex flex-row flex-wrap gap-1">
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
            </div>
          </div>
          {/* Include list */}
          <div className="w-fit">
            <ArticleHeaderSkeleton />
            <div className="flex flex-col flex-wrap gap-1 px-5">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
          {/* Shopping Button */}
          <div className="flex flex-row self-start gap-2">
            <SubmitButtonSkeleton />
            <FavoriteToggleButtonSkeleton />
          </div>
        </article>
      </div>
    </div>
  );
}
