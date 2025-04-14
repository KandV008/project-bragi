import { EarphoneAttributes } from "@/app/model/entities/product/EarphoneAttributes";
import { EarphoneShapeDetails } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneShape";
import { Article, ArticleSkeleton } from "@/app/ui/components/tags/article/article";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
 import {
  lightComponentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "@/app/ui/tailwindClasses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Interface for product details props.
 * 
 * @interface ProductDetailsProps
 * @property {string} description - The product description.
 * @property {EarphoneAttributes | null} earphoneAttributes - Optional earphone attributes.
 */
interface ProductDetailsProps {
  description: string;
  earphoneAttributes: EarphoneAttributes | null;
}

/**
 * This component renders product details including a description and earphone attributes.
 * If earphone attributes are provided, it displays various characteristics like location,
 * level of discretion, adaptation range, degree of loss, water and dust resistance, and usage.
 *
 * @component
 * @param {string} description - The product description.
 * @param {Object} [props.earphoneAttributes] - Optional earphone attributes.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function DisplayProductDetails({
  description,
  earphoneAttributes,
}: ProductDetailsProps): JSX.Element {
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
      {/* Earphone Attributes */}
      {earphoneAttributes ? (
        <article className="flex flex-col md:w-1/2 gap-2">
          <SectionHeader text={"Características"} />
          {/* Ear Location */}
          <Article label={"Ubicación"} value={EarphoneShapeDetails[earphoneAttributes?.earphoneShape].location} />
          {/* Level of Discretion */}
          <Article label={"Nivel de Discreción"} value={EarphoneShapeDetails[earphoneAttributes?.earphoneShape].level_of_discretion} />
          {/* Adaptation Range */}
          <Article label={"Rango de Adaptación"} value={earphoneAttributes.adaptationRange} />
          {/* Degree of Loss */}
          <Article label={"Grado de pérdida"} value={earphoneAttributes.degreeOfLoss} />
          {/* Dust and Water Resistance */}
          <Article
            label={"Resistente al Polvo y al Agua"}
            value={earphoneAttributes.waterDustResistance ? "Sí" : "No"}
          />
          {/* Uses of the product */}
          <div>
            <Article label={"Usos"} value={""} />
            <div className="flex flex-row flex-wrap gap-5">
              {earphoneAttributes.uses.map((use, index) => (
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
      ) : (
        <></>
      )}
    </div>
  );
}

/**
 * This component renders a skeleton placeholder for product details while data is loading.
 * It includes placeholders for the description, earphone attributes, and various characteristics.
 * 
 * @component
 * @returns {JSX.Element} The skeleton loading component.
 */
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
