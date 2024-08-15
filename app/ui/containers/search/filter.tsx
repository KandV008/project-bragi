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
import SectionHeader from "../../components/common/sectionHeader";
import RadioInputList from "../../components/inputs/radioInputList";

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
      className="sticky top-32 h-fit p-5 rounded flex-col space-y-3
        bg-emerald-100 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 
        hidden md:flex w-64"
    >
      {/* Header */}
      <SectionHeader text="Filtrar por:" />
      {/* Adaptation Range */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Rango de Adaptación</h1>
        <RadioInputList
          name={adaptationRangeType}
          list={Object.values(checkAdaptationRangeType(products))}
          valueOf={valueOfAdaptationRange}
          type={adaptationRangeType}
          onChange={filterSelected}
        />
      </article>
      {/* Water Dust Resistance */} {/* TODO Convert to have a generic one */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Resistente al Polvo y al Agua</h1>
        <form action="" className="px-3">
          {Object.values(checkWaterAndDustResistanceType(products)).map(
            (resistance, index) =>
              resistance.quantity !== 0 ? (
                <div key={resistance.type}>
                  <input
                    type="radio"
                    id={"waterDustResistance-" + index}
                    name="waterDustResistance"
                    value={resistance.value}
                    onChange={filterSelected(waterDustResistanceType)}
                  />
                  <label htmlFor={"waterDustResistance-" + index}>
                    {" "}
                    {resistance.type} ( {resistance.quantity} )
                  </label>
                  <br></br>
                </div>
              ) : (
                <></>
              )
          )}
        </form>
      </article>
      {/* Brand */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Marca</h1>
        <RadioInputList
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
        <RadioInputList
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
        <RadioInputList
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
        <RadioInputList
          name={degreeOfLossType}
          list={Object.values(checkDegreeOfLossType(products))}
          valueOf={valueOfDegreeOfLoss}
          type={degreeOfLossType}
          onChange={filterSelected}
        />
      </article>
    </section>
  );
}

function checkWaterAndDustResistanceType(products: ProductEntity[]) {
  const counts = {
    YES: { quantity: 0, type: "Sí", value: "true" },
    NO: { quantity: 0, type: "No", value: "false" },
  };

  products.forEach((product) => {
    if (product.waterDustResistance) counts.YES.quantity += 1;
    else counts.NO.quantity += 1;
  });

  return counts;
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function FilterSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm p-4`}
    >
      <section className="p-4 rounded flex-col space-y-3 h-full bg-gray-100 hidden md:flex w-64">
        {/* Header */}
        <span className="md:self-start h-8 w-40 rounded-md bg-gray-200 mb-1"></span>
        {/* Adaptation Range */}
        <article className="text-lg">
          <h2 className="md:self-start h-6 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>
        </article>
        {/* Water Dust Resistance */}
        <article className="text-lg">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>
        </article>
        {/* Brand */}
        <article className="text-lg">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>{" "}
        </article>
        {/* Location */}
        <article className="text-lg">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>{" "}
        </article>
        {/* Level of Discretion */}
        <article className="flex flex-col gap-3">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>{" "}
        </article>
        {/* Degree Of Loss */}
        <article className="text-lg">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>{" "}
        </article>
      </section>
    </div>
  );
}
