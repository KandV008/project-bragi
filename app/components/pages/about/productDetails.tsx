import { DegreeOfLoss } from "@/app/model/enums/DegreeOfLoss";
import { UseDefinition, Uses } from "@/app/model/enums/Uses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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
      className="flex flex-col-reverse md:flex-row rounded gap-5 bg-white
    border-2 border-primary2 dark:border-secondary1 text-primary2 dark:text-secondary0 p-5"
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
              <div key={index} className="flex flex-col items-center">
                <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2 border-primary2 dark:border-secondary0">
                  <FontAwesomeIcon icon={use.icon} className="w-fit " />
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
