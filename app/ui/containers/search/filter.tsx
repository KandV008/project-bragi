import { checkAdaptationRangeType } from "@/app/model/entities/enums/AdaptionRange";
import { checkBrandType } from "@/app/model/entities/enums/Brand";
import { checkDegreeOfLossType } from "@/app/model/entities/enums/DegreeOfLoss";
import { checkEarLocationType } from "@/app/model/entities/enums/EarLocation";
import { checkLevelOfDiscretionType } from "@/app/model/entities/enums/LevelOfDiscretion";
import { ProductEntity } from "@/app/model/entities/Product";
import { ChangeEvent } from "react";
import SectionHeader from "../../components/common/sectionHeader";

interface FilterProps {
  onChange: (filter: (product: ProductEntity) => boolean) => void;
  products: ProductEntity[];
}

const adaptationRangeType = "adaptation_range";
const waterDustResistanceType = "dust_water_resistance";
const brandType = "brand";
const earLocationType = "location";
const levelOfDiscretionType = "level_of_discretion";
const degreeOfLossType = "degree_of_loss";

const filters = {
  adaptationRangeType: (value: string) => (product: ProductEntity) =>
    value === product.adaptation_range,
  waterDustResistanceType: (value: string) => (product: ProductEntity) =>
    value === "Sí"
      ? true === product.dust_water_resistance
      : false === product.dust_water_resistance,
  brandType: (value: string) => (product: ProductEntity) =>
    value === product.brand,
  earLocationType: (value: string) => (product: ProductEntity) =>
    value === product.location,
  levelOfDiscretionType: (value: string) => (product: ProductEntity) =>
    value === product.level_of_discretion,
  degreeOfLossType: (value: string) => (product: ProductEntity) =>
    value === product.degree_of_loss,
};

export default function Filter({ onChange, products }: FilterProps) {
  const filterSelected =
    (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement).value;
      console.log(type, value);
      let filter: (product: ProductEntity) => boolean = () => true;

      if (type === adaptationRangeType) {
        filter = filters.adaptationRangeType(value);
      }

      if (type === waterDustResistanceType) {
        filter = filters.waterDustResistanceType(value);
      }

      if (type === brandType) {
        filter = filters.brandType(value);
      }

      if (type === earLocationType) {
        filter = filters.earLocationType(value);
      }

      if (type === levelOfDiscretionType) {
        filter = filters.levelOfDiscretionType(value);
      }

      if (type === degreeOfLossType) {
        filter = filters.degreeOfLossType(value);
      }

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
        <form action="" className="px-3">
          {Object.values(checkAdaptationRangeType(products)).map(
            (adaptationRange, index) =>
              adaptationRange.quantity !== 0 ? (
                <div key={adaptationRange}>
                  <input
                    type="radio"
                    id={"range-" + index}
                    name="adaptationRange"
                    value={adaptationRange.type}
                    onChange={filterSelected(adaptationRangeType)}
                  />
                  <label htmlFor={"range-" + index}>
                    {" "}
                    {adaptationRange.type} ( {adaptationRange.quantity} )
                  </label>
                  <br></br>
                </div>
              ) : (
                <></>
              )
          )}
        </form>
      </article>
      {/* Water Dust Resistance */}
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
                    value={resistance.type}
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
        <form action="" className="px-3">
          {Object.values(checkBrandType(products)).map((brand, index) =>
            brand.quantity !== 0 ? (
              <div key={brand.type}>
                <input
                  type="radio"
                  id={"brand-" + index}
                  name="brand"
                  value={brand.type}
                  onChange={filterSelected(brandType)}
                />
                <label htmlFor={"brand-" + index}>
                  {" "}
                  {brand.type} ( {brand.quantity} )
                </label>
                <br></br>
              </div>
            ) : (
              <></>
            )
          )}
        </form>
      </article>
      {/* Ear Location */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Ubicación</h1>
        <form action="" className="px-3">
          {Object.values(checkEarLocationType(products)).map(
            (location, index) =>
              location.quantity !== 0 ? (
                <div key={location.type}>
                  <input
                    type="radio"
                    id={"earLocation-" + index}
                    name="earLocation"
                    value={location.type}
                    onChange={filterSelected(earLocationType)}
                  />
                  <label htmlFor={"earLocation-" + index}>
                    {" "}
                    {location.type} ( {location.quantity} )
                  </label>
                  <br></br>
                </div>
              ) : (
                <></>
              )
          )}
        </form>
      </article>
      {/* Level of Discretion */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Nivel de discrección</h1>
        <form action="" className="px-3">
          {Object.values(checkLevelOfDiscretionType(products)).map(
            (levelOfDiscretion, index) =>
              levelOfDiscretion.quantity !== 0 ? (
                <div key={levelOfDiscretion.type}>
                  <input
                    type="radio"
                    id={"levelOfDiscretion-" + index}
                    name="levelOfDiscretion"
                    value={levelOfDiscretion.type}
                    onChange={filterSelected(levelOfDiscretionType)}
                  />
                  <label htmlFor={"levelOfDiscretion-" + index}>
                    {" "}
                    {levelOfDiscretion.type} ( {levelOfDiscretion.quantity} )
                  </label>
                  <br></br>
                </div>
              ) : (
                <></>
              )
          )}
        </form>
      </article>
      {/* Degree Of Loss */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Grado de perdida</h1>
        <form action="" className="px-3">
          {Object.values(checkDegreeOfLossType(products)).map(
            (degreeOfLoss, index) =>
              degreeOfLoss.quantity !== 0 ? (
                <div key={degreeOfLoss.type}>
                  <input
                    type="radio"
                    id={"degreeOfLoss-" + index}
                    name="degreeOfLoss"
                    value={degreeOfLoss.type}
                    onChange={filterSelected(degreeOfLossType)}
                  />
                  <label htmlFor={"degreeOfLoss-" + index}>
                    {" "}
                    {degreeOfLoss.type} ( {degreeOfLoss.quantity} )
                  </label>
                  <br></br>
                </div>
              ) : (
                <></>
              )
          )}
        </form>
      </article>
    </section>
  );
}

function checkWaterAndDustResistanceType(products: ProductEntity[]) {
  const counts = {
    YES: { quantity: 0, type: "Sí" },
    NO: { quantity: 0, type: "No" },
  };

  products.forEach((product) => {
    if (product.dust_water_resistance) counts.YES.quantity += 1;
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
