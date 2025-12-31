"use client";

import { useEffect, useState } from "react";
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
  postalCodeName,
  localityName,
  countryName,
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
import {
  ShoppingFormData,
  shoppingSchema,
} from "@/lib/validations/shopping.scheme";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "@/app/ui/fontAwesomeIcons";
import Spinner from "@/app/ui/components/common/spinner/spinner";

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
  const [isSpinnerActive, setSpinnerActive] = useState(false);
  const [bargainCode, setBargainCode] = useState<string | undefined>(undefined);
  const [currentProducts, setCurrentProducts] =
    useState<ShoppingProductDTO[]>(products);

  useEffect(() => {
    const bargain = searchParams.get("bargain");
    console.log("BARGAIN", bargain);

    if (!bargain || bargain === "undefined") {
      setBargainCode(undefined);
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

  const totalPrice = currentProducts.reduce((total, product) => {
    if (product.discountPrice || product.discountPrice === 0) {
      return total + product.discountPrice * product.quantity;
    }

    return total + product.price * product.quantity;
  }, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShoppingFormData>({
    resolver: zodResolver(shoppingSchema),
  });

  const onSubmit = async (data: ShoppingFormData) => {
    try {
      setSpinnerActive(true);
      const formData = new FormData();

      formData.append(userIdName, data[userIdName]);

      if (data[bargainCodeName]) {
        formData.append(bargainCodeName, data[bargainCodeName]);
      }

      formData.append(userNameName, data[userNameName]);
      formData.append(userFirstName, data[userFirstName]);
      formData.append(userDNIName, data[userDNIName]);
      formData.append(phoneNumberName, data[phoneNumberName]);
      formData.append(emailName, data[emailName]);
      formData.append(addressName, data[addressName]);
      formData.append(postalCodeName, data[postalCodeName]);
      formData.append(localityName, data[localityName]);
      formData.append(countryName, data[countryName]);
      formData.append(audiometryFileName, data[audiometryFileName][0]);

      const {
        status,
        id: _,
        orderNumber,
      } = await actionCreateOrder(formData, currentProducts, bargainCode);

      if (status) {
        toast.error("Ha habido un problema con el pedido");
        setSpinnerActive(false);
        return;
      }

      await redirectTPV(totalPrice, orderNumber);
    } catch {
      setSpinnerActive(false);
      toast.error("No se ha podido realizar el pago");
    }
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

    const {
      Ds_SignatureVersion,
      Ds_MerchantParameters,
      Ds_Signature,
      TPV_Origin,
    } = await res.json();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = TPV_Origin;

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
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:flex-row gap-3"
    >
      {isSpinnerActive ? (
        <div className="fixed top-36 right-0 xl:right-80 transform -translate-x-1/2 z-50">
          <Spinner />
        </div>
      ) : (
        <></>
      )}
      {/* Shopping Form */}
      <section
        className={`flex flex-col gap-5 p-5 sm:p-10 w-full
                   ${componentBackground}
                   ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={"Información del Usuario"} />
        {/* User Identification Data */}
        <article>
          {/* Hidden data */}
          <div>
            {/* User Id */}
            <input type="hidden" value={user?.id} {...register(userIdName)} />
            {/* Bargain Code */}
            {bargainCode ? (
              <input
                type="hidden"
                value={bargainCode}
                {...register(bargainCodeName)}
              />
            ) : (
              <></>
            )}
          </div>
          {/* User Information */}
          <div className=" flex flex-col md:flex-row md:gap-2">
            {/* User Name */}
            <div className="md:w-96">
              <TextInput
                name={userNameName}
                type={"text"}
                placeholder={"Tu nombre"}
                label={"Nombre"}
                icon={Icons.user}
                register={register(userNameName)}
                error={errors[userNameName]?.message}
              />
            </div>
            {/* User Firstname */}
            <TextInput
              name={userFirstName}
              type={"text"}
              placeholder={"Tus apellidos"}
              label={"Apellidos"}
              icon={Icons.user}
              register={register(userFirstName)}
              error={errors[userFirstName]?.message}
            />
          </div>
          {/* User DNI */}
          <div className="lg:w-80">
            <TextInput
              name={userDNIName}
              type={"text"}
              placeholder={"99999999A"}
              label={"Documento identificativo"}
              icon={Icons.dni}
              register={register(userDNIName)}
              error={errors[userDNIName]?.message}
            />
          </div>
        </article>
        {/** User Contact Data */}
        <section>
          {/* Contact */}
          <div className="flex flex-col md:flex-row md:gap-2">
            {/* Phone Number */}
            <div className="md:w-96">
              <TextInput
                name={phoneNumberName}
                type={"number"}
                placeholder={"XXX XXX XXX"}
                label={"Teléfono"}
                icon={Icons.phone}
                register={register(phoneNumberName)}
                error={errors[phoneNumberName]?.message}
              />
            </div>
            {/* E-mail */}
            <TextInput
              name={emailName}
              type={"text"}
              placeholder={"email@example.com"}
              label={"Correo electrónico"}
              icon={Icons.email}
              register={register(emailName)}
              error={errors[emailName]?.message}
            />
          </div>
          {/* Address */}
          <div>
            <TextInput
              name={addressName}
              type={"text"}
              placeholder={"C/ Dirección Nº, Piso, Puerta, etc"}
              label={"Dirección"}
              icon={Icons.map}
              register={register(addressName)}
              error={errors[addressName]?.message}
            />
            <TextInput
              name={postalCodeName}
              type={"text"}
              placeholder={"XXXXX"}
              label={"Código Postal"}
              icon={Icons.map}
              register={register(postalCodeName)}
              error={errors[postalCodeName]?.message}
            />
            <TextInput
              name={localityName}
              type={"text"}
              placeholder={"Localidad"}
              label={"Localidad"}
              icon={Icons.map}
              register={register(localityName)}
              error={errors[localityName]?.message}
            />
            <TextInput
              name={countryName}
              type={"text"}
              placeholder={"País"}
              label={"País"}
              icon={Icons.map}
              register={register(countryName)}
              error={errors[countryName]?.message}
            />
          </div>
        </section>
        {/* Audiometry */}
        <FileInput
          name={audiometryFileName}
          label={"Archivo de Audiometría"}
          icon={Icons.file}
          register={register(audiometryFileName)}
          error={errors[audiometryFileName]?.message?.toString()}
        />
      </section>
      {/* Summary */}
      <section
        className={`lg:sticky lg:top-32 lg:z-0 flex flex-col h-fit w-max-80 rounded justify-start gap-4 p-6 ${componentBorder} ${componentBackground} ${componentText}`}
      >
        <div className="h-max-96">
          <SectionHeader text={"Resumen"} />
          {/* Bargain Applyed */}
          <article className="flex flex-row gap-3">
            <p>Código de oferta aplicado:</p>
            {bargainCode ? (
              <strong>{bargainCode}</strong>
            ) : (
              <strong>Ninguno</strong>
            )}
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
                  icon={Icons.upload}
                  isDisable={false}
                />
              </section>
            </div>
          </article>
        </div>
        {/* Product List */}
        <div className=" ">
          <SectionHeader text={"Lista de productos"} />
          <article className="flex flex-col gap-3">
            <div className="flex flex-row gap-1 justify-between">
              <span>Nombre</span>
              <span>Color</span>
              <span>Cantidad</span>
              <span>Coste</span>
            </div>
            {products.map((product, index) => (
              <div key={index}>
                <TableShoppingRow product={product} />
              </div>
            ))}
          </article>
        </div>
      </section>
    </form>
  );
}

export function TableShoppingRow({ product }: { product: ShoppingProductDTO }) {
  const lockStyle = "w-14";
  const specialLockStyle = "text-red-500 w-14";
  const rowStyle = "flex flex-row gap-1 justify-between text-center";

  return (
    <div className={rowStyle}>
      <span className={lockStyle}>{product.name}</span>
      <span className={lockStyle}>{product.colorText}</span>
      <span className={lockStyle}>x{product.quantity}</span>
      {product.discountPrice ? (
        <>
          <span className={specialLockStyle}>
            {(product.discountPrice * product.quantity).toFixed(2)}€
          </span>
        </>
      ) : (
        <>
          <span className={lockStyle}>
            {(product.price * product.quantity).toFixed(2)}€
          </span>
        </>
      )}
    </div>
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
