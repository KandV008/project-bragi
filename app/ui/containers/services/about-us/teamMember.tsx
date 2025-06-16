import { componentBorder, componentText } from "@/app/ui/tailwindClasses";
import Image from "next/image";

/**
 * Props for the TeamMember component.
 */
interface TeamMemberProps {
  /** Name of the team member */
  name: string;
  /** URL of the team member's image */
  imageURL: string;
  /** Role or position of the team member */
  rol: string;
}

/**
 * Displays an individual team member's profile with their image, name, and role.
 *
 * @param {TeamMemberProps} props - The props for the component.
 * @returns {JSX.Element} The rendered TeamMember component.
 */
export default function TeamMember({ name, imageURL, rol }: TeamMemberProps): JSX.Element {
  return (
    <section className={`flex flex-col items-center gap-2 mb-2 ${componentText} sm:w-1/4`}>
      {/* Image */}
      <article className="w-2/3 lg:w-3/5 xl:w-2/3 2xl:w-1/2">
        <Image
          src={imageURL}
          alt={`img-${name}`}
          width={1000}
          height={1200}
          className={`rounded-2xl ${componentBorder}`}
        />
      </article>
      {/* Display */}
      <article className="flex flex-col items-center gap-1 text-center">
        {/* Name */}
        <div className="font-bold text-xl md:text-xl 2xl:text-2xl ">{name}</div>
        {/* Role */}
        <div className="font-medium text-base md:text-lg lg:text-base 2xl:text-lg">{rol}</div>
      </article>
    </section>
  );
}
