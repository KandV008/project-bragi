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
import SubmitButton from "@/app/ui/components/buttons/submitButton";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import CheckBoxInput from "@/app/ui/components/inputs/checkBoxInput";
import ColorInput from "@/app/ui/components/inputs/colorInput";
import IncrementalTextInput from "@/app/ui/components/inputs/incrementalTextInput";
import RadioInput from "@/app/ui/components/inputs/radioInput";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput";
import TextInput from "@/app/ui/components/inputs/textInput";
import { actionCreate, actionUpdate } from "@/db/action";
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
import { componentBackground, componentBorder } from "@/lib/tailwindClasses";

interface FormProps {
  product?: ProductEntity;
}

export default function ProductForm({ product }: FormProps) {
  const actionText = product ? "Actualizar producto" : "Crear nuevo producto";
  const actionForm = product ? actionUpdate : actionCreate;
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleForm = (formData: FormData) => {
    const isValid = validateFormProduct(formData);
    if (isValid) actionForm;
    else handleShowModal();
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
          <SubmitButton text={actionText} icon={faUpload} />
        </section>
      </form>
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && <FormValidationPopUp handleShowModal={handleShowModal} />}
      </article>
    </>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ProductFormSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col gap-5 p-5 sm:p-10">
        <div className="md:self-start h-7 sm:h-8 lg:h-10 w-96 rounded-md bg-gray-200" />
        {/* Name */}
        <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
        {/* Category */}
        <div className="flex flex-row gap-5 ">
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        </div>
        {/* Brand */}
        <div className="flex flex-row gap-5 ">
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        </div>
        {/* Price */}
        <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
        {/* Description */}
        <div className="md:self-start h-10 sm:h-12 lg:h-16 w-full rounded-md bg-gray-200" />
        {/* Colors */}
        <div className="w-full">
          <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
          <div className="flex flex-col flex-wrap gap-1 p-5">
            <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
            <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
            <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
            <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
          </div>
        </div>
        {/* Includes */}
        <div className="w-full">
          <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
          <div className="flex flex-col flex-wrap gap-1 p-5">
            <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
          </div>
        </div>
        {/* Adaptation Range */}
        <div className="flex flex-row gap-10 ">
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        </div>
        {/* Water Dust Resistance */}
        <div className="flex flex-row gap-10 ">
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />{" "}
        </div>
        {/* Ear Location */}
        <div className="flex flex-row gap-10 ">
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        </div>
        {/* Level of Discretion */}
        <div className="flex flex-row gap-10 ">
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        </div>
        {/* Degree of Loss */}
        <div className="flex flex-row gap-10 ">
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        </div>
        {/* Uses */}
        <div className="flex flex-row gap-10 ">
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        </div>
        {/* Submit Button */}
        <section className="self-center">
          <div
            className="w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center
          border-2 rounded bg-gray-200"
          />
        </section>
      </div>
    </div>
  );
}
