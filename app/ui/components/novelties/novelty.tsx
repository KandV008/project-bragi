import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  componentBackground,
  componentBorder,
  componentText,
  negativeComponentBackground,
  negativeComponentText,
  negativeHoverComponentBackground,
  shimmer,
} from "../../tailwindClasses";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface NoveltyProps {
  id: string;
  title: string;
  description: string;
  promotionalImage: string;
  isPreview?: boolean;
}

export default function Novelty({
  id,
  title,
  description,
  promotionalImage,
  isPreview,
}: NoveltyProps) {
  return (
    <section
      className={`flex flex-col items-center p-1 sm:p-3  gap-3
        ${componentBorder} rounded-xl
        ${componentText}
        ${componentBackground}`}
    >
      <div className="flex flex-col items-center sm:items-start p-3 sm:p-5 gap-1 sm:gap-3">
        {/* Promotional Image */}
        <article className="font-bold text-xl sm:text-2xl self-center text-center ">
          <Image className="rounded" src={promotionalImage} alt={"promotional_image"} width={1500} height={1500}/>
        </article>
        <article className="text-center sm:text-justify">
          {/* Title */}
          <h1 className="font-extrabold text-xl sm:text-2xl">{title}</h1>
          {/* Description */}
          <p className="font-semibold text-base sm:text-lg sm:px-3">{description}</p>
        </article>
      </div>
      {isPreview ? (
        <Link
          href={`/admin/bargains/${id}`}
          className={`flex flex-row items-center justify-center md:justify-around md:px-2
          rounded-2xl h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40
          ${negativeComponentBackground} ${negativeHoverComponentBackground}
          ${negativeComponentText}`}
        >
          <div className=" mr-0 md:mr-2 xl:mr-0">
            <FontAwesomeIcon icon={faEye} className="" />
          </div>
          <span className="hidden xl:block text-sm font-black">
            Ver Novedad
          </span>
          <span className="hidden md:block xl:hidden text-xs font-black">
            Ver más
          </span>
        </Link>
      ) : (
        <></>
      )}
    </section>
  );
}

export function NoveltySkeleton() {
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
