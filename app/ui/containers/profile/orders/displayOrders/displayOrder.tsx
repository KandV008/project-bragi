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
import { validateAddShoppingCart } from "@/lib/validations/validations";
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
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";

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
interface DisplayOrderProps {
  id: string;
  creationDate: any;
  userName: string;
  firstName: string;
  phoneNumber: string;
  email: string;
  address: string;
  products: ShoppingProductDTO[];
  totalPrice: number;
}

/** TODO Update String Doc
 * Displays the attributes of an order .
 *
 * @param {Object} props - The properties of the order.
 * @param {string} props.id - The unique identifier of the product.
 * @returns {JSX.Element} The JSX representation of the product attributes.
 */
export default function DisplayOrder({
  id,
  creationDate,
  userName,
  firstName,
  phoneNumber,
  email,
  address,
  products,
  totalPrice,
}: DisplayOrderProps): JSX.Element {
  return (
    <div
      className={`flex flex-col rounded rounded-tr-3xl p-5
            ${componentBorder} ${componentBackground} ${componentText}`}
    >
      {/* Order Data */}
      <article className="flex flex-col md:justify-around">
        {/* Id */}
        <div className="flex flex-row justify-between">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold w-fit">
            Pedido Nº {id}
          </h1>
        </div>
        {/* Creation Date */}
        <h2 className="text-lg sm:text-xl lg:text-2xl w-fit">
          Fecha del Pedido: {creationDate}
        </h2>
        {/* Total Price */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold w-fit">
          Importe por el Pedido: {totalPrice}€
        </h1>
      </article>
      <div className={`w-full border-t my-3 ${componentBorder}`}></div>
      {/* Client Data */}
      <section>
        {/* User Name and First Name */}
        <h2 className="text-lg sm:text-xl lg:text-2xl w-fit">
          Cliente: {userName} {firstName}
        </h2>
        {/* Contact Data */}
        <h2 className="text-lg sm:text-xl lg:text-2xl w-fit">
          <p>Teléfono asociado: {phoneNumber}</p>
          <p>Correo electrónico asociado: {email}</p>
          <p>Dirección asociado: {address}</p>
        </h2>
      </section>
      {/* Order List */}
      <section>
        {/* Products */}
        <div className="mb-3 md:mb-1 lg:mb-3 w-fit">
          <ArticleHeader text={"Productos del pedido"} />
          <ul className="px-2 text-sm lg:text-base">
            {products.map((product, index) => (
              <li key={"product-" + index}>
                {index + 1}. {product.name} - {product.brand} -{" "}
                {product.earSide} - {product.colorText} - {product.price}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

/**
 * Skeleton loader component for the order. It displays a placeholder for the orders attributes while the actual content is loading.
 *
 * @returns {JSX.Element} A skeleton structure representing the layout of an order.
 */
export function DisplayOrdersSkeleton(): JSX.Element {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded rounded-tr-3xl bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col gap-3">
        {/* Order Data */}
        <article className="flex flex-col gap-2 md:justify-around">
          {/* Id */}
          <div className="flex flex-row justify-between">
            <div className="md:self-start h-7 sm:h-8 lg:h-10 w-2/3 rounded-md bg-gray-200" />
          </div>
          {/* Creation Date */}
          <div className="md:self-start h-7 sm:h-8 lg:h-10 w-1/2 rounded-md bg-gray-200" />
          {/* Total Price */}
          <div className="md:self-start h-7 sm:h-8 lg:h-10 w-1/3 rounded-md bg-gray-200" />
        </article>
        <div className="w-full border-2 border-t mb-3"></div>
        {/* Client Data */}
        <section className="flex flex-col gap-2">
          {/* User Name and First Name */}
          <div className="md:self-start h-7 sm:h-8 lg:h-10 w-72 rounded-md bg-gray-200" />
          {/* Contact Data */}
          <div className="md:self-start h-7 sm:h-8 lg:h-10 w-64 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-8 lg:h-10 w-64 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-8 lg:h-10 w-64 rounded-md bg-gray-200" />
        </section>
        {/* Order List */}
        <section>
          {/* Products */}
          <div className="mb-3 md:mb-1 lg:mb-3 w-fit">
            <ArticleHeaderSkeleton />
            <div className="flex flex-col flex-wrap gap-1 px-5">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-96 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-96 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-96 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-96 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
