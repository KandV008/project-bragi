"use client";

import {
  adaptationRangeList,
  valueOfAdaptationRange,
} from "@/app/model/entities/enums/AdaptionRange";
import { Brand } from "@/app/model/entities/enums/Brand";
import { Category } from "@/app/model/entities/enums/Category";
import {
  degreeOfLossList,
  valueOfDegreeOfLoss,
} from "@/app/model/entities/enums/DegreeOfLoss";
import {
  earLocationList,
  valueOfEarLocation,
} from "@/app/model/entities/enums/EarLocation";
import {
  levelOfDiscretionList,
  valueOfLevelOfDiscretion,
} from "@/app/model/entities/enums/LevelOfDiscretion";
import { usesList, valueOfUses } from "@/app/model/entities/enums/Uses";
import { ProductEntity } from "@/app/model/entities/Product";
import SubmitButton, {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader";
import CheckBoxInput, {
  CheckBoxInputSkeleton,
} from "@/app/ui/components/inputs/checkBoxInput";
import ColorInput, {
  ColorInputSkeleton,
} from "@/app/ui/components/inputs/colorInput";
import IncrementalTextInput, {
  IncrementalTextInputSkeleton,
} from "@/app/ui/components/inputs/incrementalTextInput";
import RadioInput, {
  RadioInputSkeleton,
} from "@/app/ui/components/inputs/radioInput";
import TextAreaInput, {
  TextAreaInputSkeleton,
} from "@/app/ui/components/inputs/textAreaInput";
import TextInput, {
  TextInputSkeleton,
} from "@/app/ui/components/inputs/textInput";
import { actionCreateProduct, actionUpdateProduct } from "@/db/action";
import {
  faEarListen,
  faMoneyBill,
  faPlus,
  faTextHeight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { validateFormProduct } from "@/lib/validations";
import { useState } from "react";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp";
import {
  componentBackground,
  componentBorder,
  shimmer,
} from "@/app/ui/tailwindClasses";
import toast from "react-hot-toast";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";

interface FormProps {
  product?: ProductEntity;
}

export default function ProductForm({ product }: FormProps) {
  const actionText = product ? "Actualizar producto" : "Crear nuevo producto";
  const actionForm = product ? actionUpdateProduct : actionCreateProduct;
  const succesToastText = product
    ? "Se ha actualizado el produto."
    : "Se ha creado el producto";
  const errorToastText = product
    ? "No se ha podido actualizar el produto."
    : "Se ha podido crear el producto";
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleForm = (formData: FormData) => {
    const isValid = validateFormProduct(formData);
    if (isValid) {
      actionForm(formData)
        .then((_) => toast.success(succesToastText))
        .catch((_) => toast.error(errorToastText));
    } else handleShowModal();
  };

  return (
    <>
      <GoBackButton />
      <form
        action={handleForm}
        className={`flex flex-col gap-5 p-5 sm:p-10 
                   ${componentBackground}
                   ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={actionText} />
        {/* Id */}
        {product ? <input type="hidden" name="id" value={product.id} /> : <></>}
        {/* Name */}
        <TextInput
          name={"name"}
          type={"text"}
          placeholder={"Audífono X"}
          label={"Nombre del producto"}
          icon={faEarListen}
          value={product ? product.name : ""}
        />
        {/* Category */}
        <RadioInput
          name={"category"}
          label={"Categoría del producto"}
          list={Object.values(Category)}
          valueOf={(x) => x}
          value={product ? product.category : ""}
        />
        {/* Brand */}
        <RadioInput
          name={"brand"}
          label={"Marca del producto"}
          list={Object.values(Brand)}
          valueOf={(x) => x}
          value={product ? product.brand : ""}
        />
        {/* Price */}
        <TextInput
          name={"price"}
          type={"number"}
          placeholder={"1234.56"}
          label={"Precio del producto (€)"}
          icon={faMoneyBill}
          value={product ? product.price.toString() : ""}
        />
        {/* Description */}
        <TextAreaInput
          name={"description"}
          placeholder={"Lore ipsum..."}
          label={"Descripción"}
          icon={faTextHeight}
          value={product ? product.description : ""}
        />
        {/* Colors */}
        <ColorInput
          name={"color"}
          label={"Colores disponibles del producto"}
          values={product ? product.colors : []}
        />
        {/* Includes */}
        <IncrementalTextInput
          name={"INCLUDE"}
          type={"text"}
          placeholder={"Incluye..."}
          label={"Incluye el producto"}
          icon={faPlus}
          values={product ? product.include : []}
        />
        {/* Adaptation Range */}
        <RadioInput
          name={"adaptation_range"}
          label={"Rango de adaptación del producto"}
          list={adaptationRangeList}
          valueOf={(x) => x}
          value={product ? valueOfAdaptationRange(product.adaptationRange) : ""}
        />
        {/* Water Dust Resistance */}
        <CheckBoxInput
          name={"water_dust_resistance"}
          label={"Resistencia al Agua y al Polvo"}
          list={["YES"]}
          values={
            product ? (product.waterDustResistance ? ["YES"] : []) : undefined
          }
        />
        {/* Ear Location */}
        <RadioInput
          name={"ear_location"}
          label={"Localización del producto en la oreja"}
          list={earLocationList}
          valueOf={(x) => x}
          value={product ? valueOfEarLocation(product.location) : ""}
        />
        {/* Level of Discretion */}
        <RadioInput
          name={"level_of_discretion"}
          label={"Nivel del discrección del producto"}
          list={levelOfDiscretionList}
          valueOf={(x) => x}
          value={
            product ? valueOfLevelOfDiscretion(product.levelOfDiscretion) : ""
          }
        />
        {/* Degree of Loss */}
        <RadioInput
          name={"degree_of_loss"}
          label={"Grado de pérdida del producto"}
          list={degreeOfLossList}
          valueOf={(x) => x}
          value={product ? valueOfDegreeOfLoss(product.degreeOfLoss) : ""}
        />
        {/* Uses */}
        <CheckBoxInput
          name={"uses"}
          label={"Usos del producto"}
          list={usesList}
          values={
            product ? product.uses.map((x) => valueOfUses(x.text)) : undefined
          }
        />
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
        {/* Submit Button */}
        <SubmitButtonSkeleton />
      </div>
    </div>
  );
}
