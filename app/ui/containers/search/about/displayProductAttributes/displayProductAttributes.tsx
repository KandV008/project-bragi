"use client";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
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
import { SmallImageSkeleton } from "@/app/ui/components/images/smallImage";
import Link from "next/link";
import { addProductToShoppingList } from "@/db/shoppingList";
import { checkFavoriteRoute } from "@/app/api/routes";
import { EarphoneColor } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneColor";
import {
  DISCOUNT_PER_UNIT,
  GUARANTEE_VALUE,
} from "@/app/model/entities/product/ProductConfiguration";
import { brandName, colorHexName, colorTextName, earSideName, guaranteeName, imageURLName, nameName, priceName, productIdName } from "@/app/model/JSONnames";

/**
 * Represents the properties of a product, used for displaying product details and options.
 *
 * @interface ProductOptionsProps
 * @property {string} id - The unique identifier of the product.
 * @property {string} name - The name of the product.
 * @property {string} price - The price of the product in string format.
 * @property {string} imageURL - The URL of the product image.
 * @property {EarphoneColor[] | null} colors - A list of available colors for the product, or null if not applicable.
 * @property {boolean} isCofosis - A flag indicating whether the product is designed for cofosis users.
 * @property {string} brand - The brand name of the product.
 * @property {string[]} include - A list of items included with the product.
 */
interface ProductOptionsProps {
  id: string;
  name: string;
  price: string;
  imageURL: string;
  colors: EarphoneColor[] | null;
  isCofosis: boolean;
  brand: string;
  include: string[];
}

/**
 * Displays the attributes of a product, including its image, name, brand, price, and interactive options.
 *
 * @param {Object} props - The properties of the product.
 * @param {string} props.id - The unique identifier of the product.
 * @param {string} props.name - The name of the product.
 * @param {string} props.price - The price of the product as a string.
 * @param {string} props.imageURL - The URL of the product image.
 * @param {Array} props.colors - Available colors for the product.
 * @param {boolean} props.isCofosis - Indicates if the product is designed for cofosis users.
 * @param {string} props.brand - The brand of the product.
 * @param {Array<string>} props.include - List of items included with the product.
 * @returns {JSX.Element} The JSX representation of the product attributes.
 */
export default function DisplayProductAttributes({
  id,
  name,
  price,
  imageURL,
  colors,
  isCofosis,
  brand,
  include,
}: ProductOptionsProps) {
  const { user } = useUser();

  const LEFT_SIDE = "left";
  const RIGHT_SIDE = "right";
  const BOTH_SIDE = "both";

  const parsePrice = parseFloat(price);
  const [currentPrice, setCurrentPrice] = useState(parsePrice);
  const [isFavorite, setIsFavorite] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const [guarantee, setGuarantee] = useState(false);
  const handleInsuranceButton = () => {
    setGuarantee(!guarantee);
  };
  const guaranteeButtonClasses = guarantee
    ? pressedButton
    : `${negativeComponentText} ${negativeComponentBackground} ${negativeHoverComponentBackground} ${componentBorder} ${hoverComponentBorder}`;

  const [earSide, setEarSide] = useState("");
  const [isOneSide, setIsOneSide] = useState(false);
  const handleEarSideButtonClick = (buttonName: string) => {
    setIsOneSide(buttonName === LEFT_SIDE || buttonName === RIGHT_SIDE);
    updatePrice();
    setEarSide(buttonName);
  };
  const getEarSideButtonClasses = (buttonName: string) => {
    const baseClasses = "h-8 w-24 border-2 rounded font-bold";
    return buttonName === earSide
      ? `${baseClasses} ${pressedButton}`
      : `${baseClasses} ${negativeComponentText} ${negativeComponentBackground} ${negativeHoverComponentBackground} ${componentBorder} ${hoverComponentBorder}`;
  };

  function updatePrice() {
    // TODO Optimize the change
    const guaranteePrice = Number(guarantee) * GUARANTEE_VALUE;

    if (isOneSide && !isCofosis) {
      setCurrentPrice(parsePrice * DISCOUNT_PER_UNIT + guaranteePrice);
    } else {
      setCurrentPrice(parsePrice + guaranteePrice);
    }
  }

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

  /* Form Handler */
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
        {/* Product Image */}
        <article className="flex flex-col md:w-1/2 gap-3 lg:gap-2">
          {/* Main Image */}
          <div className="place-self-center">
            <BigImage src={imageURL} alt={"img-" + id} />
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
            {currentPrice}€
          </h1>
          <br className="hidden sm:block" />
          {/* Color Buttons */}
          {colors ? (
            <div className="w-fit">
              <ArticleHeader text={"Colores disponibles"} />
              <ColorButton
                colors={colors}
                action={(index: number) => setColorIndex(index)}
              />
            </div>
          ) : (
            <></>
          )}
          {/* Hearing Aid Side Buttons */}
          <div className="w-fit">
            <ArticleHeader text={"Lado del Audífono"} />
            <div className="flex flex-row flex-wrap gap-3">
              {/* RIGHT SIDE */}
              <button
                className={getEarSideButtonClasses(RIGHT_SIDE)}
                onClick={() => handleEarSideButtonClick(RIGHT_SIDE)}
              >
                Derecho
              </button>
              {/* LEFT SIDE */}
              <button
                className={getEarSideButtonClasses(LEFT_SIDE)}
                onClick={() => handleEarSideButtonClick(LEFT_SIDE)}
              >
                Izquierdo
              </button>
              {/* BOTH SIDE */}
              {!isCofosis ? (
                <button
                  className={getEarSideButtonClasses(BOTH_SIDE)}
                  onClick={() => handleEarSideButtonClick(BOTH_SIDE)}
                >
                  Ambos
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
          {/* Insurance Button */}
          <div className="w-fit">
            <ArticleHeader text={"Añadir seguro de 1 año al producto"} />
            <button
              onClick={() => handleInsuranceButton()}
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
              <input type="hidden" name={productIdName} value={id} />
              {colors ? ( 
                <>
                  <input
                    type="hidden"
                    name={colorTextName}
                    value={colors[colorIndex].name}
                  />
                  <input
                    type="hidden"
                    name={colorHexName}
                    value={colors[colorIndex].hex}
                  />
                </>
              ) : (
                <></>
              )}
              <input type="hidden" name={earSideName} value={earSide} />
              <input
                type="hidden"
                name={guaranteeName}
                value={guarantee.toString()}
              />
              <input type="hidden" name={nameName} value={name} />
              <input type="hidden" name={brandName} value={brand} />
              <input type="hidden" name={priceName} value={currentPrice} />
              <input type="hidden" name={imageURLName} value={imageURL} />
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
          {/* Unregistered Advice */}
          <>
            {!user ? (
              <strong className="font-semibold">
                *
                <Link
                  href={"/log-in"}
                  className="hover:underline font-extrabold"
                >
                  Inicia Sesión o Regístrate
                </Link>{" "}
                para poder añadirlo a la cesta.
              </strong>
            ) : (
              <></>
            )}
          </>
        </article>
      </div>
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && <FormValidationPopUp handleShowModal={handleShowModal} />}
      </article>
    </>
  );
}

/**
 * Skeleton loader component for the product options. It displays a placeholder for the product's 
 * image, name, brand, price, options (such as colors and ear side), insurance button, and 
 * included items while the actual content is loading.
 * 
 * @returns {JSX.Element} A skeleton structure representing the layout of product options.
 */
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
