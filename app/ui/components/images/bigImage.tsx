import Image from "next/image";
import { componentBorder } from "../../tailwindClasses";

interface ImageProps {
  src: string;
  alt: string;
}

export default function BigImage({ src, alt }: ImageProps) {
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

export function BigImageSkeleton() {
  return (
    <div className="place-self-center">
      <div className="size-64 sm:size-72 lg:size-96 bg-gray-200"></div>
    </div>
  );
}
