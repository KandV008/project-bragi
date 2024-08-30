import Image from "next/image";
import { componentBorder } from "../../tailwindClasses";

interface ImageProps {
  src: string;
  alt: string;
}

export default function SmallImage({ src, alt }: ImageProps) {
  return (
    <Image
    src={src}
    width={1500}
    height={1500}
    alt={alt}
    className={`size-20 sm:size-24 lg:size-32 bg-white rounded ${componentBorder}`}
  />
  );
}

export function SmallImageSkeleton() {
  return (
    <div className="place-self-center">
            <div className="size-20 sm:size-24 lg:size-32 bg-gray-200"></div>
    </div>
  );
}
