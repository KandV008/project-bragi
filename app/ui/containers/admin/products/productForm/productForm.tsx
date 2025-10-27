"use client";

import { Brand } from "@/app/model/entities/product/enums/Brand";
import {
  Category,
  EARPHONE_VALUE,
} from "@/app/model/entities/product/enums/Category";
import {
  usesList,
  valueOfUses,
} from "@/app/model/entities/product/enums/earphoneAttributes/Uses";
import {
  faEarListen,
  faImage,
  faMoneyBill,
  faPlus,
  faTextHeight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { validateFormProduct } from "@/lib/validations/validations";
import { useState } from "react";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp/formValidationPopUp";
import {
  componentBackground,
  componentBorder,
  shimmer,
} from "@/app/ui/tailwindClasses";
import toast from "react-hot-toast";
import {
  brandName,
  categoryNameParam,
  degreeOfLossName,
  includeName,
  earphoneShapeName,
  nameName,
  priceName,
  productDescriptionName,
  productIdName,
  usesName,
  dustWaterResistanceName,
  imageURLName,
} from "@/app/config/JSONnames";
import { ProductEntity } from "@/app/model/entities/product/Product";
import { earphoneShapeList } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneShape";
import { earphoneDegreeOfLossList } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneDegreeOfLoss";
import { actionUpdateProduct, actionCreateProduct } from "@/db/product/product";
import SubmitButton, {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton/submitButton";
import CheckBoxInput, {
  CheckBoxInputSkeleton,
} from "@/app/ui/components/inputs/checkBoxInput/checkBoxInput";
import ColorInput, {
  ColorInputSkeleton,
} from "@/app/ui/components/inputs/colorInput/colorInput";
import IncrementalTextInput, {
  IncrementalTextInputSkeleton,
} from "@/app/ui/components/inputs/incrementalTextInput/incrementalTextInput";
import RadioInput, {
  RadioInputSkeleton,
} from "@/app/ui/components/inputs/radioInput/radioInput";
import TextAreaInput, {
  TextAreaInputSkeleton,
} from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import TextInput, {
  TextInputSkeleton,
} from "@/app/ui/components/inputs/textInput/textInput";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { useRouter } from "next/navigation";
import AccessoriesInput, { AccessoriesInputSkeleton } from "@/app/ui/components/inputs/accessoriesInput/AccessoriesInput";

interface FormProps {
  product?: ProductEntity;
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
export default function ProductForm({ product }: FormProps) {
  const router = useRouter();

  const actionText = product ? "Actualizar producto" : "Crear nuevo producto";
  const actionForm = product ? actionUpdateProduct : actionCreateProduct;
  const navigateToURL = product
    ? `/admin/products/${product.id}`
    : `/admin/products`;
  const succesToastText = product
    ? "Se ha actualizado el produto."
    : "Se ha creado el producto";
  const errorToastText = product
    ? "No se ha podido actualizar el produto."
    : "Se ha podido crear el producto";
  const [showModal, setShowModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    product ? product.category : ""
  );

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
  const handleForm = async (formData: FormData) => {
    console.log(formData);
    const isValid = validateFormProduct(formData);

    if (isValid) {
      const status = await actionForm(formData);

      if (!status) {
        toast.success(succesToastText);
        router.push(navigateToURL);
      } else {
        toast.error(errorToastText);
      }
    } else handleShowModal();
  };

  return (
    <>
      <form
        action={handleForm}
        className={`flex flex-col gap-5 p-5 sm:p-10 
                   ${componentBackground}
                   ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={actionText} />
        {/* Id */}
        {product ? (
          <input type="hidden" name={productIdName} value={product.id} />
        ) : (
          <></>
        )}
        {/* Name */}
        <TextInput
          name={nameName}
          type={"text"}
          placeholder={"Audífono X"}
          label={"Nombre del producto"}
          icon={faEarListen}
          value={product ? product.name : ""}
        />
        {/* Category */}
        <RadioInput
          name={categoryNameParam}
          label={"Categoría del producto"}
          list={Object.values(Category)}
          valueOf={(x) => x}
          value={product ? product.category : ""}
          valueHook={(category: string) => setSelectedCategory(category)}
        />
        {/* Brand */}
        <RadioInput
          name={brandName}
          label={"Marca del producto"}
          list={Object.values(Brand)}
          valueOf={(x) => x}
          value={product ? product.brand : ""}
        />
        {/* Price */}
        <TextInput
          name={priceName}
          type={"number"}
          placeholder={"1234.56"}
          label={"Precio del producto (€)"}
          icon={faMoneyBill}
          value={product ? product.price.toString() : ""}
        />
        {/* Image URL */}
        <TextInput
          name={imageURLName}
          type={"text"}
          placeholder={"https://example.url.com"}
          label={"URL de la imagen asociada al producto"}
          icon={faImage}
          value={product ? product.imageURL : ""}
        />
        {/* Description */}
        <TextAreaInput
          name={productDescriptionName}
          placeholder={"Lore ipsum..."}
          label={"Descripción del producto"}
          icon={faTextHeight}
          value={product ? product.description : ""}
        />
        {/* Includes */}
        <IncrementalTextInput
          name={includeName}
          type={"text"}
          placeholder={"Incluye..."}
          label={"Incluye el producto"}
          icon={faPlus}
          values={product ? product.include : undefined}
        />
        {/* Earphone Attributes */}
        {selectedCategory === EARPHONE_VALUE ? (
          <>
            {/* Colors */}
            <ColorInput
              label={"Colores disponibles del producto"}
              values={product ? product.earphoneAttributes?.colors : undefined}
            />
            {/* Water Dust Resistance */}
            <CheckBoxInput
              name={dustWaterResistanceName}
              label={"Resistencia al Agua y al Polvo"}
              optionLabels={["YES"]}
              optionValues={["YES"]}
              values={
                product
                  ? product.earphoneAttributes?.waterDustResistance
                    ? ["YES"]
                    : []
                  : undefined
              }
            />
            {/* Earphone Shape */}
            <RadioInput
              name={earphoneShapeName}
              label={"Forma del producto"}
              list={earphoneShapeList}
              valueOf={(x) => x}
              value={product ? product.earphoneAttributes?.earphoneShape : ""}
            />
            {/* Degree of Loss */}
            <RadioInput
              name={degreeOfLossName}
              label={"Grado de pérdida del producto"}
              list={earphoneDegreeOfLossList}
              valueOf={(x) => x}
              value={product ? product.earphoneAttributes?.degreeOfLoss : ""}
            />
            {/* Uses */}
            <CheckBoxInput
              name={usesName}
              label={"Usos del producto"}
              optionLabels={usesList}
              optionValues={usesList}
              values={
                product
                  ? product.earphoneAttributes?.uses.map((x) =>
                      valueOfUses(x.text)
                    )
                  : undefined
              }
            />
            {/* Accessories */}
            <AccessoriesInput values={product ? product.earphoneAttributes?.accessories : []}/>
          </>
        ) : (
          <></>
        )}

        {/* Submit Button */}
        <section className="self-center">
          <SubmitButton text={actionText} icon={faUpload} isDisable={false} />
        </section>
      </form>
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && <FormValidationPopUp handleShowModal={handleShowModal} />}
      </article>
    </>
  );
}

/**
 * Skeleton component for ProductForm to display a loading state.
 * @returns JSX.Element
 */
export function ProductFormSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col gap-5 p-5 sm:p-10">
        <SectionHeaderSkeleton />
        {/* Name */}
        <TextInputSkeleton />
        {/* Category */}
        <RadioInputSkeleton />
        {/* Brand */}
        <RadioInputSkeleton />
        {/* Price */}
        <TextInputSkeleton />
        {/* Description */}
        <TextAreaInputSkeleton />
        {/* Colors */}
        <ColorInputSkeleton />
        {/* Includes */}
        <IncrementalTextInputSkeleton />
        {/* Adaptation Range */}
        <RadioInputSkeleton />
        {/* Water Dust Resistance */}
        <CheckBoxInputSkeleton />
        {/* Ear Location */}
        <RadioInputSkeleton />
        {/* Level of Discretion */}
        <RadioInputSkeleton />
        {/* Degree of Loss */}
        <RadioInputSkeleton />
        {/* Uses */}
        <CheckBoxInputSkeleton />
        {/* Accessories */}
        <AccessoriesInputSkeleton />
        {/* Submit Button */}
        <SubmitButtonSkeleton />
      </div>
    </div>
  );
}
