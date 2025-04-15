"use client";

import { ChangeEvent, useEffect, useState } from "react";
import RadioInputWithQuantity, {
  RadioInputWithQuantitySkeleton,
} from "../../../components/inputs/radioInputWithQuantity/radioInputWithQuantity";
import {
  valueOfWaterDustResistance,
} from "@/app/model/entities/product/enums/earphoneAttributes/WaterDustResistance";
import {
  componentBackground,
  componentText,
  shimmer,
} from "../../../tailwindClasses";
import { getFilterInformationRoute } from "@/app/api/routes";
import { valueOfEarphoneAdaptationRange } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneAdaptationRange";
import { valueOfEarphoneDegreeOfLoss } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneDegreeOfLoss";
import { adaptationRangeName, brandName, degreeOfLossName, earphoneShapeName, dustWaterResistanceName } from "@/app/config/JSONnames";
import SectionHeader, { SectionHeaderSkeleton } from "@/app/ui/components/tags/sectionHeader/sectionHeader";

/**
 * Props for the Filter component
 * @property {(filter: string) => void} onChange - Function called when a filter is selected.
 * @property {ProductEntity[]} products - List of products to filter.
 */
interface FilterProps {
  onChange: (filter: string) => void;
}

const elementsToFilter = [
  adaptationRangeName,
  dustWaterResistanceName,
  brandName,
  earphoneShapeName,
  degreeOfLossName,
];

/**
 * Renders a filter sidebar for products.
 *
 * @param {FilterProps} props - Component properties
 * @returns {JSX.Element} The Filter component
 */
export default function Filter({
  onChange,
}: FilterProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [filterElements, setFilterElements] = useState<any>();

  useEffect(() => {
    const joinFilters = elementsToFilter.join(",");
    console.info(getFilterInformationRoute);
    fetch(
      `${getFilterInformationRoute}?category=${"EARPHONE"}&filters=${joinFilters}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setFilterElements(data);
      })
      .catch((error) => {
        console.error(error)
      });
  }, []);

  if (isLoading) return <FilterSkeleton />;
  if (!filterElements) return <></>;

  /**
   * Handles filter selection.
   * @param {string} type - The type of filter.
   * @returns {(event: ChangeEvent<HTMLInputElement>) => void} - Event handler for filter selection.
   */
  const filterSelected =
    (type: string): (event: ChangeEvent<HTMLInputElement>) => void => (event: ChangeEvent<HTMLInputElement>) => {
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
            name={adaptationRangeName}
            list={filterElements.adaptation_range}
            valueOf={valueOfEarphoneAdaptationRange}
            type={adaptationRangeName}
            onChange={filterSelected}
          />
        </article>
        {/* Water Dust Resistance */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Resistente al Polvo y al Agua</h1>
          <RadioInputWithQuantity
            name={dustWaterResistanceName}
            list={filterElements.dust_water_resistance}
            valueOf={valueOfWaterDustResistance}
            type={dustWaterResistanceName}
            onChange={filterSelected}
          />
        </article>
        {/* Brand */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Marca</h1>
          <RadioInputWithQuantity
            name={brandName}
            list={filterElements.brand}
            valueOf={(x) => x}
            type={brandName}
            onChange={filterSelected}
          />
        </article>
        {/* Earphone Shape */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Forma del Audífono</h1>
          <RadioInputWithQuantity
            name={earphoneShapeName}
            list={filterElements.earphone_shape}
            valueOf={(x) => x}
            type={earphoneShapeName}
            onChange={filterSelected}
          />
        </article>
        {/* Degree Of Loss */}
        <article className="text-lg">
          <h1 className="text-xl font-bold">Grado de perdida</h1>
          <RadioInputWithQuantity
            name={degreeOfLossName}
            list={filterElements.degree_of_loss}
            valueOf={valueOfEarphoneDegreeOfLoss}
            type={degreeOfLossName}
            onChange={filterSelected}
          />
        </article>
      </div>
    </section>
  );
}

/**
 * Skeleton version of the Filter component for loading states.
 * @returns {JSX.Element} The FilterSkeleton component.
 */
export function FilterSkeleton(): JSX.Element {
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
