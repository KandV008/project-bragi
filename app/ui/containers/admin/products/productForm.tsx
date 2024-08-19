"use client";

import { adaptationRangeList } from "@/app/model/entities/enums/AdaptionRange";
import { Brand } from "@/app/model/entities/enums/Brand";
import { Category } from "@/app/model/entities/enums/Category";
import { degreeOfLossList } from "@/app/model/entities/enums/DegreeOfLoss";
import { earLocationList } from "@/app/model/entities/enums/EarLocation";
import { levelOfDiscretionList } from "@/app/model/entities/enums/LevelOfDiscretion";
import { Uses } from "@/app/model/entities/enums/Uses";
import SubmitButton from "@/app/ui/components/buttons/submitButton";
import SectionHeader from "@/app/ui/components/common/sectionHeader";
import CheckBoxInput from "@/app/ui/components/inputs/checkBoxInput";
import ColorInput from "@/app/ui/components/inputs/colorInput";
import IncrementalTextInput from "@/app/ui/components/inputs/incrementalTextInput";
import RadioInput from "@/app/ui/components/inputs/radioInput";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput";
import TextInput from "@/app/ui/components/inputs/textInput";
import { createProduct } from "@/db/action";
import {
  faEarListen,
  faMoneyBill,
  faPlus,
  faTextHeight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductForm() {
  return (
    <form action={createProduct}
      className="flex flex-col gap-5 p-10 
                   bg-emerald-50 dark:bg-emerald-800
                   border-emerald-900 dark:border-emerald-100 border-2 rounded-xl"
    >
      <SectionHeader text={"Crear nuevo producto"} />
      {/* Name */}
      <TextInput
        name={"name"}
        type={"text"}
        placeholder={"Audífono X"}
        label={"Nombre del producto"}
        icon={faEarListen}
      />
      {/* Category */}
      <RadioInput
        name={"category"}
        label={"Categoría del producto"}
        list={Object.values(Category)}
        valueOf={(x) => x}
        type={""}
      />
      {/* Brand */}
      <RadioInput
        name={"brand"}
        label={"Marca del producto"}
        list={Object.values(Brand)}
        valueOf={(x) => x}
        type={""}
      />
      {/* Price */}
      <TextInput
        name={"price"}
        type={"number"}
        placeholder={"1234.56"}
        label={"Precio del producto (€)"}
        icon={faMoneyBill}
      />
      {/* Description */}
      <TextAreaInput
        name={"description"}
        placeholder={"Lore ipsum..."}
        label={"Descripción"}
        icon={faTextHeight}
      />
      {/* Colors */}
      <ColorInput name={"color"} label={"Colores disponibles del producto"} />
      {/* Includes */}
      <IncrementalTextInput
        name={"include"}
        type={"text"}
        placeholder={"Incluye..."}
        label={"Incluye el producto"}
        icon={faPlus}
      />
      {/* Adaptation Range */}
      <RadioInput
        name={"adaptation_range"}
        label={"Rango de adaptación del producto"}
        list={adaptationRangeList}
        valueOf={(x) => x}
        type={""}
      />
      {/* Water Dust Resistance */}
      <CheckBoxInput
        name={"water_dust_resistance"}
        label={"Resistencia al Agua y al Polvo"}
        list={["Sí"]}
        type={""}
      />
      {/* Ear Location */}
      <RadioInput
        name={"ear_location"}
        label={"Localización del producto en la oreja"}
        list={earLocationList}
        valueOf={(x) => x}
        type={""}
      />
      {/* Level of Discretion */}
      <RadioInput
        name={"level_of_discretion"}
        label={"Nivel del discrección del producto"}
        list={levelOfDiscretionList}
        valueOf={(x) => x}
        type={""}
      />
      {/* Degree of Loss */}
      <RadioInput
        name={"degree_of_loss"}
        label={"Grado de pérdida del producto"}
        list={degreeOfLossList}
        valueOf={(x) => x}
        type={""}
      />
      {/* Uses */}
      <CheckBoxInput
        name={"uses"}
        label={"Usos del producto"}
        list={Object.values(Uses).map((x) => x.text)}
        type={""}
      />
      {/* Submit Button */}
      <section className="self-center">
        <SubmitButton text={"Crear nuevo producto"} icon={faUpload} />
      </section>
    </form>
  );
}
