"use client";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { validateAddShoppingCart } from "@/lib/validations/validations";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp/formValidationPopUp";
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
} from "@/app/ui/components/images/bigImage/bigImage";
import Link from "next/link";
import { addProductToShoppingList } from "@/db/shoppingList/shoppingList";
import { checkFavoriteRoute } from "@/app/api/routes";
import { EarphoneColor } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneColor";
import {
  brandName,
  categoryName,
  colorHexName,
  colorTextName,
  earphoneShapeName,
  earSideName,
  imageURLName,
  nameName,
  priceName,
  productIdName,
} from "@/app/config/JSONnames";
import { EarphoneShape } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneShape";
import ColorButton, {
  ColorButtonSkeleton,
} from "@/app/ui/components/buttons/colorButton/colorButton";
import FavoriteToggleButton, {
  FavoriteToggleButtonSkeleton,
} from "@/app/ui/components/buttons/favoriteToggleButton/favoriteToggleButton";
import SubmitButton, {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton/submitButton";
import { SmallImageSkeleton } from "@/app/ui/components/images/smallImage/smallImage";
import ArticleHeader, {
  ArticleHeaderSkeleton,
} from "@/app/ui/components/tags/articleHeader/articleHeader";
import { DISCOUNT_PER_UNIT } from "@/app/model/entities/novelty/codes/70percentDiscount/70percentDiscount";

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
  category: string;
  price: string;
  imageURL: string;
  colors: EarphoneColor[] | null;
  earphoneShape: EarphoneShape | null;
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
 * @param {Object} props.earphoneShape - Earphone shape of the product.
 * @param {boolean} props.isCofosis - Indicates if the product is designed for cofosis users.
 * @param {string} props.brand - The brand of the product.
 * @param {Array<string>} props.include - List of items included with the product.
 * @returns {JSX.Element} The JSX representation of the product attributes.
 */
export default function DisplayProductAttributes({
  id,
  name,
  category,
  price,
  imageURL,
  colors,
  earphoneShape,
  isCofosis,
  brand,
  include,
}: ProductOptionsProps): JSX.Element {
  const { user } = useUser();
  const priceFormatted = Number(price).toFixed(2);
  const discountFormatted = (Number(price) * DISCOUNT_PER_UNIT).toFixed(2);

  const LEFT_SIDE = "left";
  const RIGHT_SIDE = "right";
  const BOTH_SIDE = "both";

  const [isFavorite, setIsFavorite] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

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
    if (isValid || category === "ACCESSORY") {
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
        <article className="flex flex-col md:w-1/2 gap-3 lg:gap-2  my-auto">
          {/* Main Image */}
          <div className="place-self-center ">
            <BigImage src={imageURL} alt={"img-" + id} />
          </div>
        </article>
        {/* Product Options */}
        <article className="flex flex-col md:w-1/2 md:justify-around">
          {/* Header */}
          <div className="flex flex-row justify-between">
            <div>
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
            </div>
            {/* Price */}
            <div className="flex flex-col gap-2 first-letter:text-xl sm:text-2xl lg:text-3xl font-semibold w-fit">
              <h1>
                <span className="font-bold">{priceFormatted}€</span>
              </h1>
            </div>
          </div>
          <br className="hidden sm:block" />
          {/* Options */}
          <div className="flex flex-col gap-3">
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
            {colors ? (
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
            ) : (
              <></>
            )}
            {/* Include list */}
            <div className="mb-3 md:mb-1 lg:mb-3 w-fit">
              <ArticleHeader text={"Incluye"} />
              <ul className="px-2 text-sm lg:text-base">
                {include.map((text, index) => (
                  <li key={"include-" + index}>{text}</li>
                ))}
              </ul>
            </div>
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
                name={earphoneShapeName}
                value={earphoneShape ? earphoneShape : " "}
              />
              <input type="hidden" name={nameName} value={name} />
              <input type="hidden" name={categoryName} value={category} />
              <input type="hidden" name={brandName} value={brand} />
              <input type="hidden" name={priceName} value={price} />
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
