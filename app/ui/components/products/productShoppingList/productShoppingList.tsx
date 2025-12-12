"use client";

import Image from "next/image";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import {
  decrementProductInShoppingList,
  incrementProductInShoppingList,
} from "@/db/shoppingList/shoppingList";
import ConfirmationPopUp from "../../popUps/confirmationPopUp/confirmationPopUp";
import {
  componentBackground,
  componentText,
  componentBorder,
  shimmer,
} from "@/app/ui/tailwindClasses";
import AmountButton from "../../buttons/amountButton/amountButton";
import { ShoppingListContext } from "../../contexts/shoppingListContext";
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { getProduct } from "@/db/product/product";
import {
  checkAccessoryByPairs,
  checkRemoveAccessoryByPairs,
} from "@/lib/utils";
import { CountShoppingListContext } from "../../contexts/countShoppingListContext";

/**
 * Props for the ProductShoppingList component.
 */
interface ProductInformationProps {
  /** Unique identifier of the product */
  id: string;
  /** URL of the product image */
  imageURL: string;
  /** Name of the product */
  name: string;
  /** Category of the product */
  category: string;
  /** Brand of the product */
  brand: string;
  /** Price of a single product */
  price: number;
  /** Price of a single product with discount */
  discountPrice: number | null;
  /** Ear side specification (e.g., left, right, both) */
  earSide: string;
  /** Earphone Shape of the product */
  earphoneShape: string;
  /** Text description of the product color */
  colorText: string;
  /** Hexadecimal code of the product color */
  colorHex: string;
  /** Quantity of the product in the shopping list */
  quantity: number;
  /** Accessories of the product */
  accessories: string[];
}

/**
 * Displays a product's information in the shopping list with options to adjust the quantity.
 * Includes a modal for confirming the removal of a product when quantity is 1.
 *
 * @param props - The product details to be displayed.
 * @returns JSX element representing the product in the shopping list.
 */
export default function ProductShoppingList({
  id,
  imageURL,
  name,
  category,
  brand,
  price,
  discountPrice,
  earSide,
  earphoneShape,
  colorText,
  colorHex,
  quantity,
  accessories,
}: ProductInformationProps) {
  let showEarSide: string = getEarSideLabel(earSide);
  const { shoppingList:_1, setShoppingList } = useContext(ShoppingListContext);
  const { counter:_2, setCounter } = useContext(CountShoppingListContext);

  const [showModal, setShowModal] = useState(false);
  const [currentFormData, setFormData] = useState<FormData>();

  /**
   * Toggles the visibility of the modal.
   */
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Checks if the product can be decremented. If the quantity is 1,
   * a confirmation modal is shown before decrementing.
   *
   * @param formData - The form data related to the product.
   */
  const checkBeforeDecrement = (formData: FormData) => {
    if (quantity === 1) {
      setFormData(formData);
      handleShowModal();
    } else {
      decrementProductInShoppingList(formData);
    }
  };

  /**
   * Decrements the product amount after confirming the modal.
   */
  const handleDecrementAmount = () => {
    handleShowModal();
    setShoppingList((prev) => {
      return prev.filter((product) => product.quantity !== 0);
    });
    decrementProductInShoppingList(currentFormData!);
  };

  return (
    <section
      className={`flex flex-col gap-2 p-5 rounded rounded-tr-3xl
       2xl:justify-between 2xl:gap-5 w-full
      ${componentBackground}  
      ${componentText}
      ${componentBorder}`}
    >
      {/* About */}
      <div className="flex flex-row">
        {/* Image */}
        <>
          <Image
            src={imageURL}
            width={150}
            height={150}
            alt={"img-" + name}
            className="size-64 md:size-56 2xl:size-48 bg-white rounded self-center justify-self-center"
          />
        </>
        {/* Information */}
        <article className="flex flex-row self-center 2xl:flex-col gap-2 rounded-md p-3">
          {/* Product */}
          <div className="flex flex-col gap-1 2xl:flex-row text-start">
            {/* Name */}
            <div className="flex flex-col ">
              <span className="text-xl font-bold text-center">{name}</span>
              {/* Brand */}
              <span className="text-lg font-bold">{brand}</span>
            </div>
          </div>
          {/* Choices */}
          <div className="flex flex-col gap-2 text-start justify-between w-48">
            {/* EarSide */}
            {category === "EARPHONE" ? (
              <div className="flex flex-row w-full">
                <span className="font-bold w-20">Lado</span>
                <span className="">{showEarSide}</span>
              </div>
            ) : (
              <></>
            )}
            {/* Earphone Shape */}
            {category === "EARPHONE" ? (
              <div className="flex flex-row w-full">
                <span className="font-bold w-20">Forma</span>
                <span className="">{earphoneShape}</span>
              </div>
            ) : (
              <></>
            )}

            {/* Color */}
            {category === "EARPHONE" ? (
              <div className="flex flex-row w-full">
                <span className="font-bold w-20">Color</span>
                <span className="">{colorText}</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </article>
      </div>
      {/* Amount & Price */}
      <div className="flex flex-row justify-between">
        {/* Amount Button */}
        <article
          className="gap-4 self-center
              flex flex-row sm:justify-around 
              2xl:justify-center"
        >
          <h1 className="text-xl font-bold self-center">Cantidad</h1>
          <div className="flex flex-row gap-0">
            {/* Substract Button */}
            <AmountButton
              symbol={faMinus}
              productId={id}
              colorText={colorText}
              colorHex={colorHex}
              earSide={earSide}
              price={price}
              action={checkBeforeDecrement}
              updateQuantity={updateQuantity(-1)}
            />
            {/* Amount */}
            <span className="px-5 py-2 text-2xl font-bold">{quantity}</span>
            {/* Addition Button */}
            <AmountButton
              symbol={faPlus}
              productId={id}
              colorText={colorText}
              colorHex={colorHex}
              earSide={earSide}
              price={price}
              action={incrementProductInShoppingList}
              updateQuantity={updateQuantity(1)}
            />
          </div>
        </article>
        {/* Price */}
        <div className="flex flex-col text-cente justify-center">
          <div className="flex flex-row gap-2">
            <span className="text-xl font-bold">Precio </span>
            <div className="flex flex-row gap-1 justify-center">
              {!discountPrice ? (
                <span className="text-2xl font-bold">
                  {(price * quantity).toFixed(2)}€
                </span>
              ) : (
                <span className="text-2xl font-bold text-red-500">
                  {(discountPrice * quantity).toFixed(2)}€
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pop Up */}
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && (
          <ConfirmationPopUp
            handleShowModal={handleShowModal}
            handleAction={handleDecrementAmount}
            message={"Borrar un producto es una acción irreversible."}
          />
        )}
      </article>
    </section>
  );

  function updateQuantity(delta: 1 | -1) {
    return () => {
      setShoppingList((prev) => {
        const updated = prev.map((product) =>
          isEquals(product)
            ? {
                ...product,
                quantity: Math.max(product.quantity + delta, 0),
              }
            : product
        );

        const shouldSkipAccessory =
          delta > 0
            ? !checkAccessoryByPairs(updated, name, accessories[0])
            : checkRemoveAccessoryByPairs(updated, name, accessories[0]);

        const finalList = shouldSkipAccessory
          ? updated
          : updated.map((product) =>
              product.id === accessories[0] && product.price === 0
                ? {
                    ...product,
                    quantity: Math.max(product.quantity + delta, 0),
                  }
                : product
            );

        const newCounter = finalList.reduce((prev, p) => prev + p.quantity, 0);
        setCounter(newCounter);

        return finalList;
      });
    };

    function isEquals(product: ShoppingProductDTO) {
      return (
        product.id === id &&
        product.name === name &&
        product.earSide === earSide &&
        product.earphoneShape === earphoneShape &&
        product.colorText === colorText &&
        product.colorHex === colorHex &&
        product.price === price
      );
    }
  }

  /**
   * Returns a label for the ear side (e.g., "Derecho", "Izquierda", "Ambos").
   *
   * @param earSide - The ear side value ("right", "left", or "both").
   * @returns A human-readable label for the ear side.
   */
  function getEarSideLabel(earSide: String) {
    if (earSide === "right") {
      return "Derecho";
    }

    if (earSide === "left") {
      return "Izquierdo";
    }

    return "Ambos";
  }
}

/**
 * Skeleton loader for the product information while data is being fetched.
 *
 * @returns JSX element representing the skeleton loading state.
 */
export function ProductInformationSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded rounded-tr-3xl bg-gray-100 shadow-sm`}
    >
      <section className="flex flex-row bg-gray-100 text-primary2 gap-5 p-5 border-2  rounded rounded-tr-3xl">
        {/* Image */}
        <div className="flex p-4">
          <div className="size-48  bg-gray-200 rounded" />
        </div>
        {/* Information */}
        <article className="flex flex-row gap-10 rounded-md p-3">
          {/* Product */}
          <div className="flex flex-col gap-10">
            {/* Name */}
            <div className="flex flex-col">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
              {/* Brand */}
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-16 rounded-md bg-gray-200 mb-1" />
            </div>
            {/* Price */}
            <div className="flex flex-col">
              <div className="md:self-start h-5 sm:h-6 xl:h-8 w-32 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-6 sm:h-8 xl:h-10 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
          {/* Choices */}
          <div className="flex flex-col self-center">
            {/* EarSide */}
            <div className="flex flex-col">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-16 rounded-md bg-gray-200 mb-1" />
            </div>
            {/* Guarantee */}
            <div className="flex flex-col">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-8 rounded-md bg-gray-200 mb-1" />{" "}
            </div>
            {/* Color */}
            <div className="flex flex-col">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-16 rounded-md bg-gray-200 mb-1" />{" "}
            </div>
          </div>
        </article>
        {/* Amount Button */}
        <article className="flex flex-col gap-4 self-center">
          <div className="md:self-center h-5 sm:h-6 xl:h-8 w-28 rounded-md bg-gray-200 mb-1" />
          <div className="flex flex-row gap-2">
            {/* Substract Button */}
            <div className="h-8 w-12 md:size-10 xl:size-11 rounded-2xl border-2 bg-gray-200" />
            {/* Amount */}
            <div className="md:self-start h-6 sm:h-8 xl:h-11 w-8 rounded-md bg-gray-200 mb-1" />
            {/* Addition Button */}
            <div className="h-8 w-12 md:size-10 xl:size-11 rounded-2xl border-2 bg-gray-200" />
          </div>
        </article>
      </section>
    </div>
  );
}
