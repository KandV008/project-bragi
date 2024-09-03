import { DegreeOfLoss } from "@/app/model/entities/enums/DegreeOfLoss";
import { UseDefinition } from "@/app/model/entities/enums/Uses";
import { Article, ArticleSkeleton } from "@/app/ui/components/tags/article";
import ArticleHeader from "@/app/ui/components/tags/articleHeader";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import {
  lightComponentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "@/app/ui/tailwindClasses";
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
        <SectionHeader text={"Descripción"} />
        <Article label={""} value={description} />
      </article>
      {/* Product Attributes */}
      <article className="flex flex-col md:w-1/2 gap-2">
        <SectionHeader text={"Características"} />
        {/* Ear Location */}
        <Article label={"Ubicación"} value={location} />
        {/* Adaptation Range */}
        <Article label={"Rango de Adaptación"} value={adaptationRange} />
        {/* Degree of Loss */}
        <Article label={"Grado de pérdida"} value={degreeOfLoss} />
        {/* Level of Discretion */}
        <Article label={"Nivel de Discreción"} value={levelOfDiscretion} />
        {/* Dust and Water Resistance */}
        <Article
          label={"Resistente al Polvo y al Agua"}
          value={dustWaterResistance ? "Sí" : "No"}
        />
        {/* Uses of the product */}
        <div>
          <Article label={"Usos"} value={""} />
          <div className="flex flex-row flex-wrap gap-5">
            {uses.map((use, index) => (
              <div
                key={"uses-" + index}
                className="flex flex-col items-center"
              >
                <div
                  className={`flex flex-col justify-center items-center size-10 rounded-3xl ${componentBorder}`}
                >
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

export function ProductDetailsSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col-reverse md:flex-row gap-5">
        {/* Product Description */}
        <article className="flex flex-col md:w-1/2 gap-2">
          <ArticleSkeleton />
        </article>
        {/* Product Attributes */}
        <article className="flex flex-col md:w-1/2 gap-2">
          <h2 className="md:self-start h-6 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
          {/* Ear Location */}
          <ArticleSkeleton />
          {/* Adaptation Range */}
          <ArticleSkeleton />
          {/* Degree of Loss */}
          <ArticleSkeleton />
          {/* Level of Discretion */}
          <ArticleSkeleton />
          {/* Dust and Water Resistance */}
          <ArticleSkeleton />
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
