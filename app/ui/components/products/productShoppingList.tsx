'use client';

import Image from "next/image";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import AmountButton from "../buttons/amountButton";
import {
  decrementProductInShoppingList,
  incrementProductInShoppingList,
} from "@/db/action";
import { componentBackground, componentText, componentBorder, shimmer } from "../../tailwindClasses";
import { useState } from "react";
import ConfirmationPopUp from "../popUps/confirmationPopUp";

interface ProductInformationProps {
  id: string;
  imageURL: string;
  name: string;
  brand: string;
  price: number;
  earSide: string;
  guarantee: boolean;
  color: string;
  quantity: number;
}

export default function ProductShoppingList({
  id,
  imageURL,
  name,
  brand,
  price,
  earSide,
  guarantee,
  color,
  quantity,
}: ProductInformationProps) {
  let showEarSide: string = getEarSideLabel(earSide);

  const [showModal, setShowModal] = useState(false);
  const [currentFormData, setFormData] = useState<FormData>()
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const checkBeforeDecrement = (formData: FormData) => {
    if (quantity === 1){
      setFormData(formData)
      handleShowModal()
    } else {
      decrementProductInShoppingList(formData)
    }
  }

  const handleDecrementAmount = () => {
    handleShowModal()
    decrementProductInShoppingList(currentFormData!)
  }
  

  return (
    <section
      className={`flex flex-col sm:grid sm:grid-cols-2 gap-2 p-5 rounded rounded-tr-3xl
      2xl:flex 2xl:flex-row 2xl:justify-between 2xl:gap-5 
      ${componentBackground}  
      ${componentText}
      ${componentBorder}`}
    >
      {/* Image */}
      <>
        <Image
          src={imageURL}
          width={150}
          height={150}
          alt={"img-" + name}
          className="size-64 sm:size-full 2xl:size-48 bg-white rounded self-center"
        />
      </>
      {/* Information */}
      <article className="flex flex-col self-center 2xl:flex-row gap-5 rounded-md p-3">
        {/* Product */}
        <div className="flex flex-col sm:flex-row 2xl:flex-col sm:gap-10">
          {/* Name */}
          <div className="flex flex-col">
            <span className="text-xl font-bold">{name}</span>
            {/* Brand */}
            <span className="text-lg font-bold">{brand}</span>
          </div>
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Precio total</span>
            <span className="text-2xl font-bold">{price * quantity}€</span>
          </div>
        </div>
        {/* Choices */}
        <div className="flex flex-col self-center">
          {/* EarSide */}
          <div className="flex flex-col sm:flex-row 2xl:flex-col">
            <span className="font-bold">Lado del audífono</span>
            <span className="mx-2">{showEarSide}</span>
          </div>
          {/* Guarantee */}
          <div className="flex flex-col sm:flex-row 2xl:flex-col">
            <span className="font-bold">Seguro de 1 año</span>
            <span className="mx-2">{guarantee ? "Sí" : "No"}</span>
          </div>
          {/* Color */}
          <div className="flex flex-col sm:flex-row 2xl:flex-col">
            <span className="font-bold">Color del producto</span>
            <span className="mx-2">{color}</span>
          </div>
        </div>
      </article>
      {/* Amount Button */}
      <article
        className="sm:col-span-2 gap-4 self-center
      flex flex-col
      sm:flex-row sm:justify-around 
      2xl:flex-col 2xl:justify-center"
      >
        <h1 className="text-2xl font-bold self-center">Cantidad</h1>
        <div className="flex flex-row gap-2">
          {/* Substract Button */}
          <AmountButton
            symbol={faMinus}
            productId={id}
            color={color}
            earSide={earSide}
            guarantee={guarantee}
            action={checkBeforeDecrement}
          />
          {/* Amount */}
          <span className="px-5 py-2 text-2xl font-bold">{quantity}</span>
          {/* Addition Button */}
          <AmountButton
            symbol={faPlus}
            productId={id}
            color={color}
            earSide={earSide}
            guarantee={guarantee}
            action={incrementProductInShoppingList}
          />
        </div>
      </article>
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


}

function getEarSideLabel(earSide: String) {
  if (earSide === "right") {
    return "Derecho";
  } 
  
  if (earSide === "left") {
    return "Izquierda";
  } 
  
  return"Ambos";
}

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
