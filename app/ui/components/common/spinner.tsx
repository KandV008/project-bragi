import { componentBorder } from "../../tailwindClasses";

/**
 * Spinner component renders a loading spinner.
 * The spinner is a circular rotating animation that is commonly used for loading states.
 * 
 * - The spinner's size is 8x8 units and it is styled with a border to create the spinning effect.
 * - It utilizes Tailwind CSS classes for styling and animations.
 * - The spinner is centered using flexbox and will spin continuously until the loading state ends.
 *
 * @returns JSX.Element - A loading spinner.
 */
export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`inline-block h-8 w-8 rounded-full 
                     animate-spin align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]
                     ${componentBorder} border-4 border-r-transparent`}
        role="status"
      ></div>
    </div>
  );
}
