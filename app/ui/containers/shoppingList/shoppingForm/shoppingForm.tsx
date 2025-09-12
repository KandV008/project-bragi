"use client";

import {
  faDriversLicense,
  faFile,
  faMailBulk,
  faMap,
  faPhone,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { validateFormShopping } from "@/lib/validations/validations";
import { useEffect, useState } from "react";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp/formValidationPopUp";
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
  userDNIName,
  bargainCodeName,
} from "@/app/config/JSONnames";
import { useUser } from "@clerk/nextjs";
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { useSearchParams } from "next/navigation";
import { getCodeAction } from "@/app/model/entities/bargain/Bargain";
import FileInput from "../../../components/inputs/fileInput/fileInput";
import { actionCreateOrder } from "@/db/order/order";
import SubmitButton, {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton/submitButton";
import TextInput, {
  TextInputSkeleton,
} from "@/app/ui/components/inputs/textInput/textInput";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import toast from "react-hot-toast";
import { checkInvalidEarphoneShape } from "@/app/ui/components/advices/shoppingFormAdvice";

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
  const [currentProducts, setCurrentProducts] =
    useState<ShoppingProductDTO[]>(products);

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

    const { shoppingList, status: _ } = bargainAction(products);
    setCurrentProducts(shoppingList);
  }, [products, searchParams]);

  const [showModal, setShowModal] = useState(false);

  /**
   * Toggles the validation popup modal.
   */
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const totalPrice = currentProducts.reduce(
    (total, product) => {
    if (checkInvalidEarphoneShape(product)){
      return total
    }

    if (product.discountPrice || product.discountPrice === 0) {
      return total + product.discountPrice * product.quantity
    }

    return total + product.price * product.quantity
    },
    0
  );

  /**
   * Handles form submission, validates input, and performs the respective action.
   *
   * @param {FormData} formData - The submitted form data.
   */
  const handlePayment = async (formData: FormData) => {
    console.log(formData);
    const isValid = validateFormShopping(formData);
    if (!isValid) {handleShowModal(); return};

    const { status, id, orderNumber } = await actionCreateOrder(
      formData,
      currentProducts,
      bargainCode
    );

    if (status) {toast.error("Ha habido un problema con el pedido"); return}

    //const orderNumber = Number(String(Date.now()).slice(-8))

    await redirectTPV(totalPrice, orderNumber);
  };

  /**
   * Redirect to the TPV to do the payment of the order
   * @param orderAmount Amount to pay
   * @param orderNumber Number of the order to identify
   */
  const redirectTPV = async (orderAmount: number, orderNumber: number) => {
    const res = await fetch("/api/redsys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: orderAmount,
        order: orderNumber,
      }),
    });

    const { Ds_SignatureVersion, Ds_MerchantParameters, Ds_Signature } =
      await res.json();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://sis-t.redsys.es:25443/sis/realizarPago";

    const addInput = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addInput("Ds_SignatureVersion", Ds_SignatureVersion);
    addInput("Ds_MerchantParameters", Ds_MerchantParameters);
    addInput("Ds_Signature", Ds_Signature);

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <form
      action={handlePayment}
      className="flex flex-col-reverse lg:flex-row gap-3"
    >
      {/* Shopping Form */}
      <section
        className={`flex flex-col gap-5 p-5 sm:p-10  w-1/2
                   ${componentBackground}
                   ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={"Información del Usuario"} />

        {/* User Identification Data */}
        <article>
          {/* User Id */}
          <input type="hidden" name={userIdName} value={user?.id} />
          {/* Bargain Code */}
          {bargainCode ? (
            <input type="hidden" name={bargainCodeName} value={bargainCode} />
          ) : (
            <></>
          )}
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
          {/* User DNI */}
          <TextInput
            name={userDNIName}
            type={"text"}
            placeholder={"99999999A"}
            label={"Documento identificativo"}
            icon={faDriversLicense}
          />
        </article>
        {/** User Contact Data */}
        <section>
          {/* Phone Number */}
          <TextInput // TODO add prefix
            name={phoneNumberName}
            type={"number"}
            placeholder={"+YY XXX XXX XXX"}
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
            placeholder={"C/ Dirección Nº, Piso, Puerta, CP, Localidad"}
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
        className={`sticky top-32 z-0 flex flex-col w-1/2 rounded justify-between p-6 ${componentBorder} ${componentBackground} ${componentText}`}
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
              {checkInvalidEarphoneShape(product) ? (
                <span className="text-red-500">
                  Pedir Cita -{" "}
                  {product.discountPrice == null
                    ? (product.price * product.quantity).toFixed(2)
                    : (product.discountPrice * product.quantity).toFixed(2)}
                  €
                </span>
              ) : (
                <>
                  {product.discountPrice ? (
                    <>
                      <span className="text-red-500">
                        {(product.discountPrice * product.quantity).toFixed(2)}€
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        {(product.price * product.quantity).toFixed(2)}€
                      </span>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </article>
        {/* Bargain Applyed */}
        <article className="flex flex-row gap-3">
          <p>Código de oferta aplicado:</p>
          {bargainCode != undefined ? <p>{bargainCode}</p> : <p>Ninguno</p>}
        </article>
        {/* Total */}
        <article className="flex flex-col gap-2">
          <div className={`w-full border-t my-3 ${componentBorder}`}></div>
          <div className="flex flex-row justify-between gap-10">
            <h2 className="text-2xl font-bold">Total</h2>
            <span className="text-2xl font-bold text-red-1">
              {totalPrice.toFixed(2)}€
            </span>
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
