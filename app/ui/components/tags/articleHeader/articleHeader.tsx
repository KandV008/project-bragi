import { componentBorder } from "@/app/ui/tailwindClasses";

/**
 * Props for the ArticleHeader component.
 *
 * @property {string} text - The header text to be displayed.
 */
interface HeaderProps {
  text: string;
}

/**
 * A component that displays a styled article header with an underline.
 *
 * @param {HeaderProps} props - The properties for the ArticleHeader component.
 * @returns {JSX.Element} The rendered ArticleHeader component.
 */
export default function ArticleHeader({ text }: HeaderProps): JSX.Element {
  return (
    <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
      {/* Header Text */}
      {text}
      {/* Underline */}
      <div className={`w-full border-t mb-3 ${componentBorder}`}></div>
    </h3>
  );
}

/**
 * A skeleton loader for the ArticleHeader component.
 * Displays a placeholder to mimic the appearance of a loading header.
 *
 * @returns {JSX.Element} The skeleton loader for the ArticleHeader component.
 */
export function ArticleHeaderSkeleton(): JSX.Element {
  return (
    <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
  );
}
