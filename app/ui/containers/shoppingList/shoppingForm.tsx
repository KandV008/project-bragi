"use client";

import SubmitButton, {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader";
import { CheckBoxInputSkeleton } from "@/app/ui/components/inputs/checkBoxInput";
import { ColorInputSkeleton } from "@/app/ui/components/inputs/colorInput";
import { IncrementalTextInputSkeleton } from "@/app/ui/components/inputs/incrementalTextInput";
import { RadioInputSkeleton } from "@/app/ui/components/inputs/radioInput";
import { TextAreaInputSkeleton } from "@/app/ui/components/inputs/textAreaInput";
import TextInput, {
  TextInputSkeleton,
} from "@/app/ui/components/inputs/textInput";
import {
  faFile,
  faMailBulk,
  faMap,
  faPhone,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { validateFormProduct, validateFormShopping } from "@/lib/validations";
import { useEffect, useState } from "react";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp";
import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "@/app/ui/tailwindClasses";
import {
  userIdName,
  userNameName,
  userFirstName,
  phoneNumberName,
  emailName,
  addressName,
  audiometryFileName,
} from "@/app/model/JSONnames";
import { useUser } from "@clerk/nextjs";
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { useSearchParams } from "next/navigation";
import { getCodeAction } from "@/app/model/entities/bargain/Bargain";
import FileInput from "../../components/inputs/fileInput";
import { actionCreateOrder, createOrder } from "@/db/order";

interface FormProps {
  products: ShoppingProductDTO[];
}

/**
 * ProductForm component handles the creation and updating of product details.
 * It includes fields for name, category, brand, price, image URL, description,
 * available colors, product includes, adaptation range, water and dust resistance,
 * earphone shape, degree of loss, and usage scenarios.
 *
 * @param {FormProps} product - Optional product data for editing an existing product.
 * @returns JSX.Element
 */
export default function ShoppingForm({ products }: FormProps) {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const [bargainCode, setBargainCode] = useState<string | undefined>(undefined);
  const [currentProducts, setCurrentProducts] = useState<ShoppingProductDTO[]>(
    products.map((product: ShoppingProductDTO) => {
      if (checkInvalidEarphoneShape(product)) {
        product.price = -0;
      }

      return product;
    })
  );

  /**
   * Checks if the product's earphone shape requires special handling.
   *
   * @param {ShoppingProductDTO} product - The product to check.
   * @returns {boolean} True if the earphone shape requires an appointment.
   */
  function checkInvalidEarphoneShape(product: ShoppingProductDTO) {
    return product.earphoneShape === "BTE" || product.earphoneShape === "CIC";
  }

  useEffect(() => {
    const bargain = searchParams.get("bargain");

    if (!bargain) {
      return;
    }

    setBargainCode(bargain);
    const bargainAction = getCodeAction(bargain);

    if (!bargainAction) {
      return;
    }

    const { shoppingList, status } = bargainAction(products);
    setCurrentProducts(shoppingList);
  }, [products, searchParams]);

  const [showModal, setShowModal] = useState(false);

  /**
   * Toggles the validation popup modal.
   */
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Handles form submission, validates input, and performs the respective action.
   *
   * @param {FormData} formData - The submitted form data.
   */
  const handleForm = (formData: FormData) => {
    console.log(formData);
    const isValid = validateFormShopping(formData);
    if (isValid) {
      actionCreateOrder(formData, currentProducts)
        .then((_) => {})
        .catch((_) => {});
    } else handleShowModal();
  };

  const totalPrice = currentProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <form
      action={handleForm}
      className="flex flex-col-reverse lg:flex-row gap-3"
    >
      {/* Shopping Form */}
      <section
        className={`flex flex-col gap-5 p-5 sm:p-10 
                   ${componentBackground}
                   ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={"Información del Usuario"} />

        {/* User Identification Data */}
        <article>
          {/* User Id */}
          <input type="hidden" name={userIdName} value={user?.id} />
          {/* User Name */}
          <TextInput
            name={userNameName}
            type={"text"}
            placeholder={"Tu nombre"}
            label={"Nombre del cliente"}
            icon={faUser}
          />
          {/* User Firstname */}
          <TextInput
            name={userFirstName}
            type={"text"}
            placeholder={"Tus apellidos"}
            label={"Apellidos del cliente"}
            icon={faUser}
          />
        </article>
        {/** User Contact Data */}
        <section>
          {/* Phone Number */}
          <TextInput // TODO add prefix
            name={phoneNumberName}
            type={"number"}
            placeholder={"XXX XXX XXX"}
            label={"Número de teléfono"}
            icon={faPhone}
          />
          {/* E-mail */}
          <TextInput
            name={emailName}
            type={"text"}
            placeholder={"email@example.com"}
            label={"Correo electrónico"}
            icon={faMailBulk}
          />
          {/* Address */}
          <TextInput // TODO Add more information
            name={addressName}
            type={"text"}
            placeholder={"C/ Ejemplo 1 2C"}
            label={"Dirección"}
            icon={faMap}
          />
        </section>
        {/* Audiometry */}
        <FileInput
          name={audiometryFileName}
          label={"Archivo de Audiometría"}
          icon={faFile}
        />
      </section>
      {/* Summary */}
      <section
        className={`sticky top-32 z-0 flex flex-col w-full rounded justify-between p-6 ${componentBorder} ${componentBackground} ${componentText}`}
      >
        <SectionHeader text={"Resumen"} />
        {/* Product List */}
        <article className="flex flex-col gap-3">
          <div className="flex flex-row gap-1 justify-between">
            <span>Nombre</span>
            <span>Color</span>
            <span>Cantidad</span>
            <span>Coste</span>
          </div>
          {products.map((product, index) => (
            <div className="flex flex-row gap-1 justify-between" key={index}>
              <span>{product.name}</span>
              <span>{product.colorText}</span>
              <span>x{product.quantity}</span>
              {product.price == 0 && checkInvalidEarphoneShape(product) ? (
                <span>Pedir Cita</span>
              ) : (
                <span>{product.price * product.quantity}€</span>
              )}
            </div>
          ))}
        </article>
        {/* Bargain Applyed */}
        <article className="flex flex-row gap-3">
          <p>Código de oferta aplicado:</p>
          {bargainCode ? <p>{bargainCode}</p> : <p>Ninguno</p>}
        </article>
        {/* Total */}
        <article className="flex flex-col gap-2">
          <div className={`w-full border-t my-3 ${componentBorder}`}></div>
          <div className="flex flex-row justify-between gap-10">
            <h2 className="text-2xl font-bold">Total</h2>
            <span className="text-2xl font-bold text-red-1">{totalPrice}€</span>
          </div>
          <div className="place-self-center">
            {/* Submit Button */}
            <section className="self-center">
              <SubmitButton
                text={"Finalizar pedido"}
                icon={faUpload}
                isDisable={false}
              />
            </section>
          </div>
        </article>
      </section>
      {/* Validation Pop-Up */}
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && <FormValidationPopUp handleShowModal={handleShowModal} />}
      </article>
    </form>
  );
}

/**
 * Skeleton component for ShoppingForm to display a loading state.
 * @returns JSX.Element
 */
export function ShoppingFormSkeleton() {
  return (
    <div className={`p-5 flex flex-col-reverse lg:flex-row gap-3`}>
      {/* Shopping Form */}
      <div
        className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 shadow-sm flex flex-col gap-5 p-5 sm:p-10 w-1/2`}
      >
        <SectionHeaderSkeleton />
        {/* User Identification Data */}
        <section>
          {/* User Name */}
          <TextInputSkeleton />
          {/* User Firstname */}
          <TextInputSkeleton />
        </section>
        {/** User Contact Data */}
        <section>
          <section>
            {/* Phone Number */}
            <TextInputSkeleton />
            {/* E-mail */}
            <TextInputSkeleton />
            {/* Address */}
            <TextInputSkeleton />
          </section>
        </section>
      </div>
      {/* Summary */}
      <div
        className={`${shimmer} overflow-hidden bg-gray-100 shadow-sm sticky top-32 flex flex-col w-1/2 justify-between p-6 border-2 rounded`}
      >
        <SectionHeaderSkeleton />
        <article className="flex flex-col gap-3">
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
        </article>
        <article className="flex flex-col gap-2">
          <div className="flex flex-row justify-start gap-10">
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
          </div>
          <div className="w-full border-2 border-t mb-3"></div>
          <div className="flex flex-row justify-between gap-10">
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
          </div>
          <div className="place-self-center">
            {/* Submit Button */}
            <SubmitButtonSkeleton />
          </div>
        </article>
      </div>
    </div>
  );
}
