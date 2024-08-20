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
import SectionHeader from "@/app/ui/components/common/sectionHeader";
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

interface FormProps {
  product?: ProductEntity;
}

export default function ProductForm({ product }: FormProps) {
  const actionText = product ? "Actualizar producto" : "Crear nuevo producto";
  const actionForm = product ? actionUpdate : actionCreate;

  return (
    <form
      action={actionForm}
      className="flex flex-col gap-5 p-10 
                   bg-emerald-50 dark:bg-emerald-800
                   border-emerald-900 dark:border-emerald-100 border-2 rounded-xl"
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
  );
}
