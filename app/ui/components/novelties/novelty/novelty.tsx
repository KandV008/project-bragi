import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "../../../tailwindClasses";
import Image from "next/image";
import SeeMoreButton from "../../buttons/seeMoreButton/seeMoreButton";

/**
 * Properties for the Novelty component.
 */
interface NoveltyProps {
  /** Unique identifier for the novelty item. */
  id: string;
  /** Title of the novelty item. */
  title: string;
  /** Description providing details about the novelty item. */
  description: string;
  /** URL or path to the promotional image. */
  promotionalImage: string;
  /**
   * Determines if the preview button should be displayed.
   * @default false
   */
  isPreview?: boolean;
}

/**
 * A component that displays a novelty item with an image, title, and description.
 * Optionally includes a preview button for navigation.
 *
 * @param {NoveltyProps} props - The properties for the novelty component.
 * @returns {JSX.Element} The rendered novelty component.
 */
export default function Novelty({
  id,
  title,
  description,
  promotionalImage,
  isPreview,
}: NoveltyProps): JSX.Element {
  return (
    <section
      className={`flex flex-col items-center p-1 sm:p-3 sm:gap-3
        ${componentBorder} rounded-xl
        ${componentText}
        ${componentBackground}`}
    >
      <div className="flex flex-col items-center sm:items-start p-3 sm:p-5 gap-1 sm:gap-3">
        {/* Promotional Image */}
        <article className="font-bold text-xl sm:text-2xl self-center text-center ">
          <Image className="rounded" src={promotionalImage} alt={"promotional_image"} width={1000} height={500}/>
        </article>
        <article className="text-center sm:text-justify">
          {/* Title */}
          <h1 className="font-extrabold text-xl sm:text-2xl">{title}</h1>
          {/* Description */}
          <p className="font-semibold text-base sm:text-lg sm:px-3">{description}</p>
        </article>
      </div>
      {isPreview ? (
        <SeeMoreButton link={`/admin/novelties/${id}`} thing={"Novedad"} />
      ) : (
        <></>
      )}
    </section>
  );
}

/**
 * A skeleton loading component for the Novelty component.
 *
 * @returns {JSX.Element} The skeleton loader for the novelty component.
 */
export function NoveltySkeleton(): JSX.Element {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 shadow-sm`}
    >
      <div className="flex flex-col justify-between items-center gap-3 p-3 md:p-4 xl:p-5  h-fit">
        <div className="flex flex-col justify-between p-3 sm:p-5 gap-3">
          {/* Promotional Image */}
          <article className="font-bold text-xl sm:text-2xl self-center text-center h-32 sm:h-80 w-40 sm:w-96 bg-gray-200" >
            <div className=" md:w-24 md:h-10 xl:h-12 xl:w-40 rounded-2xl border-2 " />
          </article>
          <article className="text-center sm:text-justify">
            {/* Title */}
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 sm:w-64 rounded-md bg-gray-200 mb-1" />
            {/* Description */}
            <div className="md:self-start h-12 sm:h-16 w-full rounded-md bg-gray-200 mb-1" />
          </article>
        </div>
      </div>
    </div>
  );
}
