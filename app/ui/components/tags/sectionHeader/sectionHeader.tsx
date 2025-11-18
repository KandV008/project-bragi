import { componentBorder, componentText } from "@/app/ui/tailwindClasses";

/**
 * Props for the SectionHeader component.
 *
 * @property {string} text - The section title to be displayed.
 */
interface SectionHeaderProps {
  text: string;
  id?: string;
}

/**
 * A component that displays a section header with a bold title and an underline.
 *
 * @param {SectionHeaderProps} props - The properties for the SectionHeader component.
 * @returns {JSX.Element} The rendered SectionHeader component.
 */
export default function SectionHeader({
  text,
  id,
}: SectionHeaderProps): JSX.Element {
  return (
    <h1
      id={id}
      className={`${componentText}
            text-xl md:text-2xl lg:text-3xl font-bold w-fit`}
    >
      {/* Header Text */}
      {text}
      {/* Underline */}
      <div className={`w-full border-t mb-3 ${componentBorder}`}></div>
    </h1>
  );
}

/**
 * A skeleton loader for the SectionHeader component.
 * Displays a placeholder to mimic the appearance of a loading section header.
 *
 * @returns {JSX.Element} The skeleton loader for the SectionHeader component.
 */
export function SectionHeaderSkeleton(): JSX.Element {
  return (
    <h1 className="w-fit flex flex-col gap-1">
      {/* Placeholder for the header text */}
      <div className="md:self-start h-7 sm:h-8 lg:h-10 w-32 md:w-44 lg:w-56 rounded-md bg-gray-200" />
      {/* Placeholder for the underline */}
      <div className="w-full border-t mb-3 border-2"></div>
    </h1>
  );
}
