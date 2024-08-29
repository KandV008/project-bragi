import { DegreeOfLoss } from "@/app/model/entities/enums/DegreeOfLoss";
import { UseDefinition } from "@/app/model/entities/enums/Uses";
import { lightComponentBackground, componentBorder, componentText } from "@/app/ui/tailwindClasses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProductDetailsProps {
  description: string;
  adaptationRange: string;
  dustWaterResistance: boolean;
  location: string;
  levelOfDiscretion: string;
  degreeOfLoss: DegreeOfLoss;
  uses: UseDefinition[];
}

export default function ProductDetails({
  description,
  adaptationRange,
  dustWaterResistance,
  location,
  levelOfDiscretion,
  degreeOfLoss,
  uses,
}: ProductDetailsProps) {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row rounded gap-5 p-5
                 ${lightComponentBackground} ${componentBorder} ${componentText}`}
    >
      {/* Product Description */}
      <article className="flex flex-col md:w-1/2 gap-2">
        <h2 className="text-2xl font-bold">Descripción</h2>
        <p className="text-justify">{description}</p>
      </article>
      {/* Product Attributes */}
      <article className="flex flex-col md:w-1/2 gap-2">
        <h2 className="text-2xl font-bold">Características</h2>
        {/* Ear Location */}
        <div>
          <h4 className="text-lg font-bold">Ubicación</h4>
          <span className="text-base p-2">{location}</span>
        </div>
        {/* Adaptation Range */}
        <div>
          <h4 className="text-lg font-bold">Rango de Adaptación</h4>
          <span className="text-base p-2">{adaptationRange}</span>
        </div>
        {/* Degree of Loss */}
        <div>
          <h4 className="text-lg font-bold">Grado de pérdida</h4>
          <span className="text-base p-2">{degreeOfLoss}</span>
        </div>
        {/* Level of Discretion */}
        <div>
          <h4 className="text-lg font-bold">Nivel de Discreción</h4>
          <span className="text-base p-2">{levelOfDiscretion}</span>
        </div>
        {/* Dust and Water Resistance */}
        <div>
          <h4 className="text-lg font-bold">Resistente al Polvo y al Agua</h4>
          <span className="text-base p-2">
            {dustWaterResistance ? "Sí" : "No"}
          </span>
        </div>
        {/* Uses of the product */}
        <div>
          <h4 className="text-lg font-bold">Usos</h4>
          <div className="flex flex-row flex-wrap gap-5">
            {uses.map((use, index) => (
              <div key={use.text + "-" + index} className="flex flex-col items-center">
                <div className={`flex flex-col justify-center items-center size-10 rounded-3xl ${componentBorder}`}>
                  <FontAwesomeIcon icon={use.icon} className="w-fit" />
                </div>
                <span className="text-base">{use.text}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ProductDetailsSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col-reverse md:flex-row gap-5">
        {/* Product Description */}
        <article className="flex flex-col md:w-1/2 gap-2">
          <h2 className="md:self-start h-6 sm:h-5 xl:h-6 w-40 rounded-md bg-gray-200 mb-1" />
          <p className="md:self-start h-full w-full rounded-md bg-gray-200" />
        </article>
        {/* Product Attributes */}
        <article className="flex flex-col md:w-1/2 gap-2">
          <h2 className="md:self-start h-6 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
          {/* Ear Location */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-72 rounded-md bg-gray-200 mb-1" />
          {/* Adaptation Range */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />

          {/* Degree of Loss */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />

          {/* Level of Discretion */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-28 rounded-md bg-gray-200 mb-1" />

          {/* Dust and Water Resistance */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-8 rounded-md bg-gray-200 mb-1" />

          {/* Uses of the product */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <div className="flex flex-row flex-wrap gap-5">
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2"></div>
              <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2"></div>
              <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2"></div>
              <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2"></div>
              <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
