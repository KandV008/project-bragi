import {
  checkAdaptationRangeType,
  valueOfAdaptationRange,
} from "@/app/model/entities/enums/AdaptionRange";
import { checkBrandType } from "@/app/model/entities/enums/Brand";
import {
  checkDegreeOfLossType,
  valueOfDegreeOfLoss,
} from "@/app/model/entities/enums/DegreeOfLoss";
import {
  checkEarLocationType,
  valueOfEarLocation,
} from "@/app/model/entities/enums/EarLocation";
import {
  checkLevelOfDiscretionType,
  valueOfLevelOfDiscretion,
} from "@/app/model/entities/enums/LevelOfDiscretion";
import { ProductEntity } from "@/app/model/entities/Product";
import { ChangeEvent } from "react";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "../../components/tags/sectionHeader";
import RadioInputWithQuantity, {
  RadioInputWithQuantitySkeleton,
} from "../../components/inputs/radioInputWithQuantity";
import {
  checkWaterAndDustResistanceType,
  valueOfWaterDustResistance,
} from "@/app/model/entities/enums/WaterDustResistance";
import {
  componentBackground,
  componentText,
  shimmer,
} from "../../tailwindClasses";

interface FilterProps {
  onChange: (filter: string) => void;
  products: ProductEntity[];
}

const adaptationRangeType = "adaptation_range";
const waterDustResistanceType = "dust_water_resistance";
const brandType = "brand";
const earLocationType = "location";
const levelOfDiscretionType = "level_of_discretion";
const degreeOfLossType = "degree_of_loss";

export default function Filter({ onChange, products }: FilterProps) {
  const filterSelected =
    (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement).value;
      const filter = `${type}:${value}`;
      console.log("SELECTED FILTER:", filter);

      onChange(filter);
    };

  return (
    <section
      className={`flex flex-col sticky top-32 h-fit p-5 pr-1 rounded space-y-3 w-64 
        ${componentBackground} ${componentText} "`}
    >
      {/* Header */}
      <SectionHeader text="Filtrar por:" />
      {/* Filters */}
      <div className="max-h-[40rem] overflow-y-auto space-y-3">
        {/* Adaptation Range */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Rango de Adaptación</h1>
          <RadioInputWithQuantity
            name={adaptationRangeType}
            list={Object.values(checkAdaptationRangeType(products))}
            valueOf={valueOfAdaptationRange}
            type={adaptationRangeType}
            onChange={filterSelected}
          />
        </article>
        {/* Water Dust Resistance */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Resistente al Polvo y al Agua</h1>
          <RadioInputWithQuantity
            name={waterDustResistanceType}
            list={Object.values(checkWaterAndDustResistanceType(products))}
            valueOf={valueOfWaterDustResistance}
            type={waterDustResistanceType}
            onChange={filterSelected}
          />
        </article>
        {/* Brand */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Marca</h1>
          <RadioInputWithQuantity
            name={brandType}
            list={Object.values(checkBrandType(products))}
            valueOf={(x) => x}
            type={brandType}
            onChange={filterSelected}
          />
        </article>
        {/* Ear Location */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Ubicación</h1>
          <RadioInputWithQuantity
            name={earLocationType}
            list={Object.values(checkEarLocationType(products))}
            valueOf={valueOfEarLocation}
            type={earLocationType}
            onChange={filterSelected}
          />
        </article>
        {/* Level of Discretion */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Nivel de discrección</h1>
          <RadioInputWithQuantity
            name={levelOfDiscretionType}
            list={Object.values(checkLevelOfDiscretionType(products))}
            valueOf={valueOfLevelOfDiscretion}
            type={levelOfDiscretionType}
            onChange={filterSelected}
          />
        </article>
        {/* Degree Of Loss */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Grado de perdida</h1>
          <RadioInputWithQuantity
            name={degreeOfLossType}
            list={Object.values(checkDegreeOfLossType(products))}
            valueOf={valueOfDegreeOfLoss}
            type={degreeOfLossType}
            onChange={filterSelected}
          />
        </article>
      </div>
    </section>
  );
}

export function FilterSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm p-4`}
    >
      <section className="p-4 rounded flex-col space-y-3 h-full bg-gray-100 hidden md:flex w-64">
        {/* Header */}
        <SectionHeaderSkeleton />
        {/* Adaptation Range */}
        <RadioInputWithQuantitySkeleton />
        {/* Water Dust Resistance */}
        <RadioInputWithQuantitySkeleton />
        {/* Brand */}
        <RadioInputWithQuantitySkeleton />
        {/* Location */}
        <RadioInputWithQuantitySkeleton />
        {/* Level of Discretion */}
        <RadioInputWithQuantitySkeleton />
        {/* Degree Of Loss */}
        <RadioInputWithQuantitySkeleton />
      </section>
    </div>
  );
}
