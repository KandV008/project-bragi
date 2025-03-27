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
    <section className={`flex flex-col items-center gap-2 mb-2 ${componentText}`}>
      {/* Image */}
      <article>
        <Image
          src={imageURL}
          alt={`img-${name}`}
          width={1000}
          height={1200}
          className={`size-28 md:w-40 md:h-44 rounded-2xl ${componentBorder}`}
        />
      </article>
      {/* Display */}
      <article className="flex flex-col items-center gap-1">
        {/* Name */}
        <div className="font-bold text-xl md:text-2xl">{name}</div>
        {/* Role */}
        <div className="font-medium text-base md:text-lg">{rol}</div>
      </article>
    </section>
  );
}
