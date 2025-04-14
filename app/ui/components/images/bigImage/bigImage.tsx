import Image from "next/image";
import { componentBorder } from "../../../tailwindClasses";

/**
 * Props for the BigImage component.
 */
interface ImageProps {
  /** The source URL of the image */
  src: string;
  /** The alt text for the image */
  alt: string;
}

/**
 * A large image component with a responsive size and styled border.
 *
 * @param {ImageProps} props - The properties for the image component.
 * @returns {JSX.Element} The rendered image component.
 */
export default function BigImage({ src, alt }: ImageProps): JSX.Element {
  return (
    <Image
      src={src}
      width={1500}
      height={1500}
      alt={alt}
      className={`size-64 sm:size-72 lg:size-96 bg-white rounded ${componentBorder}`}
    />
  );
}

/**
 * A skeleton placeholder for the BigImage component.
 *
 * @returns {JSX.Element} A skeleton div with a similar size to the BigImage component.
 */
export function BigImageSkeleton(): JSX.Element {
  return (
    <div className="place-self-center">
      <div className="size-64 sm:size-72 lg:size-96 bg-gray-200"></div>
    </div>
  );
}