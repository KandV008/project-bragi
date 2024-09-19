import { componentBorder, componentText } from "@/app/ui/tailwindClasses";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  imageURL: string;
  rol: string;
}

export default function TeamMember({ name, imageURL, rol }: TeamMemberProps) {
  return (
    <section className={`flex flex-col items-center gap-2 mb-2 ${componentText}`}>
      {/* Image */}
      <article>
        <Image
          src={imageURL}
          alt={"img-" + name}
          width={1000}
          height={1000}
          className={`size-28 md:size-40 rounded-full ${componentBorder}`}
        />
      </article>
      {/* Display */}
      <article className="flex flex-col items-center gap-1">
        {/* Name */}
        <div className="font-bold text-xl md:text-2xl">{name}</div>
        {/* Rol */}
        <div className="font-medium text-base md:text-lg">{rol}</div>
      </article>
    </section>
  );
}
