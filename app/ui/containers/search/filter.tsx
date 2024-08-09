import { AdaptationRange } from "@/app/model/entities/enums/AdaptionRange";
import { Brand } from "@/app/model/entities/enums/Brand";
import { DegreeOfLoss } from "@/app/model/entities/enums/DegreeOfLoss";
import { EarLocation } from "@/app/model/entities/enums/EarLocation";
import { LevelOfDiscretion } from "@/app/model/entities/enums/LevelOfDiscretion";
import { ProductEntity } from "@/app/model/entities/Product";
import { ChangeEvent } from "react";
import SectionHeader from "../../components/common/sectionHeader";

interface FilterProps {
  onChange: (filter: (product: ProductEntity) => boolean) => void;
}

const adaptationRangeType = "adaptation_range";
const waterDustResistanceType = "dust_water_resistance";
const brandType = "brand";
const earLocationType = "location";
const levelOfDiscretionType = "level_of_discretion";
const degreeOfLossType = "degree_of_loss";

export default function Filter({ onChange }: FilterProps) {
  const adaptationRanges = Object.values(AdaptationRange);
  const waterDustResistances = ["Sí", "No"];
  const brands = Object.values(Brand);
  const locations = Object.values(EarLocation);
  const levelOfDiscretions = Object.values(LevelOfDiscretion);
  const degreeOfLosses = Object.values(DegreeOfLoss);

  const filterSelected =
    (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement).value;
      console.log(type, value)
      let filter: (product: ProductEntity) => boolean = () => true

      if (type === adaptationRangeType){
        filter = filters.adaptationRangeType(value)
      }

      if (type === waterDustResistanceType){
        filter = filters.waterDustResistanceType(value)
      }

      if (type === brandType){
        filter = filters.brandType(value)
      }

      if (type === earLocationType){
        filter = filters.earLocationType(value)
      }

      if (type === levelOfDiscretionType){
        filter = filters.levelOfDiscretionType(value)
      }

      if (type === degreeOfLossType){
        filter = filters.degreeOfLossType(value)
      }

      onChange(filter)
    };

  return (
    <section
      className=" p-5 rounded flex-col space-y-3
        bg-emerald-100 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 h-full
        hidden md:flex w-64"
    >
      {/* Header */}
      <SectionHeader text="Filtrar por:" />
      {/* Adaptation Range */}
      <article className="text-lg                                                ">
        <h1 className="text-xl font-bold">Rango de Adaptación</h1>
        <form action="" className="px-3">
          {adaptationRanges.map((adaptationRange, index) => (
            <div key={adaptationRange}>
              <input
                type="radio"
                id={"range-" + index}
                name="adaptationRange"
                value={adaptationRange}
                onChange={filterSelected(adaptationRangeType)}
              />
              <label htmlFor={"range-" + index}> {adaptationRange}</label>
              <br></br>
            </div>
          ))}
        </form>
      </article>
      {/* Water Dust Resistance */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Resistente al Polvo y al Agua</h1>
        <form action="" className="px-3">
          {waterDustResistances.map((adaptationRange, index) => (
            <div key={adaptationRange}>
              <input
                type="radio"
                id={"waterDustResistance-" + index}
                name="waterDustResistance"
                value={adaptationRange}
                onChange={filterSelected(waterDustResistanceType)}
              />
              <label htmlFor={"waterDustResistance-" + index}>
                {" "}
                {adaptationRange}
              </label>
              <br></br>
            </div>
          ))}
        </form>
      </article>
      {/* Brand */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Marca</h1>
        <form action="" className="px-3">
          {brands.map((brand, index) => (
            <div key={brand}>
              <input
                type="radio"
                id={"brand-" + index}
                name="brand"
                value={brand}
                onChange={filterSelected(brandType)}
              />
              <label htmlFor={"brand-" + index}> {brand}</label>
              <br></br>
            </div>
          ))}
        </form>
      </article>
      {/* Ear Location */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Ubicación</h1>
        <form action="" className="px-3">
          {locations.map((location, index) => (
            <div key={location}>
              <input
                type="radio"
                id={"earLocation-" + index}
                name="earLocation"
                value={location}
                onChange={filterSelected(earLocationType)}
              />
              <label htmlFor={"earLocation-" + index}> {location}</label>
              <br></br>
            </div>
          ))}
        </form>
      </article>
      {/* Level of Discretion */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Nivel de discrección</h1>
        <form action="" className="px-3">
          {levelOfDiscretions.map((levelOfDiscretion, index) => (
            <div key={levelOfDiscretion}>
              <input
                type="radio"
                id={"levelOfDiscretion-" + index}
                name="levelOfDiscretion"
                value={levelOfDiscretion}
                onChange={filterSelected(levelOfDiscretionType)}
              />
              <label htmlFor={"levelOfDiscretion-" + index}>
                {" "}
                {levelOfDiscretion}
              </label>
              <br></br>
            </div>
          ))}
        </form>
      </article>
      {/* Degree Of Loss */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Grado de perdida</h1>
        <form action="" className="px-3">
          {degreeOfLosses.map((degreeOfLoss, index) => (
            <div key={degreeOfLoss}>
              <input
                type="radio"
                id={"degreeOfLoss-" + index}
                name="degreeOfLoss"
                value={degreeOfLoss}
                onChange={filterSelected(degreeOfLossType)}
              />
              <label htmlFor={"degreeOfLoss-" + index}> {degreeOfLoss}</label>
              <br></br>
            </div>
          ))}
        </form>
      </article>
    </section>
  );
}

const filters = {
  adaptationRangeType: (value: string) => (product: ProductEntity) => value === product.adaptation_range,
  waterDustResistanceType: (value: string) => (product: ProductEntity) => value === "Sí" ? true === product.dust_water_resistance : false === product.dust_water_resistance,
  brandType: (value: string) => (product: ProductEntity) => value === product.brand,
  earLocationType: (value: string) => (product: ProductEntity) => value === product.location,
  levelOfDiscretionType: (value: string) => (product: ProductEntity) => value === product.level_of_discretion,
  degreeOfLossType: (value: string) => (product: ProductEntity) => value === product.degree_of_loss
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
        <h1 className="w-fit text-primary2 dark:text-secondary0 text-3xl font-bold">
          Filtrar por:
          <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
        </h1>
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
