import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "../../../tailwindClasses";
import SeeMoreButton from "../../buttons/seeMoreButton/seeMoreButton";

/**
 * Props for the `Bargain` component.
 */
interface BargainProps {
  /** Unique identifier for the bargain. */
  id: string;
  /** Title of the bargain. */
  title: string;
  /** Description of the bargain. */
  description: string;
  /** Promotional code associated with the bargain. */
  code: string;
  /** Indicates if the component is displayed as a preview. */
  isPreview?: boolean;
}

/**
 * A component to display a bargain offer.
 *
 * @param {BargainProps} props - The props for the `Bargain` component.
 * @returns {JSX.Element} The `Bargain` component.
 */
export default function Bargain({
  id,
  title,
  description,
  code,
  isPreview,
}: BargainProps): JSX.Element {
  return (
    <section
      className={`flex flex-col items-center p-3 gap-3
        ${componentBorder} rounded-xl
        ${componentText}
        ${componentBackground}`}
    >
      <div className="flex flex-col sm:flex-row justify-between p-3 sm:p-5 gap-3">
        <article className="text-center sm:text-justify">
          {/* Title */}
          <h1 className="font-extrabold text-xl sm:text-2xl">
            {title}
          </h1>
          {/* Description */}
          <p role="contentinfo" className="font-semibold text-base sm:text-lg">
            {description}
          </p>
        </article>
        {/* Code */}
        <article className="font-bold text-xl sm:text-2xl self-center text-center">
          Código: <span role="definition" className="font-extrabold">{code}</span>
        </article>
      </div>
      {isPreview ? (
        <SeeMoreButton link={`/admin/bargains/${id}`} thing={"Oferta"} />
      ) : (
        <SeeMoreButton link={`/services/bargains/${id}`} thing={"Oferta"} />
      )}
    </section>
  );
}

/**
 * Skeleton loader for the `Bargain` component.
 *
 * This component is used to show a placeholder while the actual `Bargain` data is being loaded.
 *
 * @returns {JSX.Element} The `BargainSkeleton` component.
 */
export function BargainSkeleton(): JSX.Element {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 shadow-sm`}
    >
      <div
        className="flex flex-col justify-between items-center gap-3 p-3 md:p-4 xl:p-5 h-fit"
      >
        <div className="flex flex-col sm:flex-row justify-between p-3 sm:p-5 gap-3">
          <article className="text-center sm:text-justify">
            {/* Title */}
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-64 rounded-md bg-gray-200 mb-1" />
            {/* Description */}
            <div className="md:self-start h-20 w-64 rounded-md bg-gray-200 mb-1" />
          </article>
          {/* Code */}
          <article className="font-bold text-xl sm:text-2xl self-center text-center">
            <div className="h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40 rounded-2xl border-2 bg-gray-200" />
          </article>
        </div>
      </div>
    </div>
  );
}
