import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { negativeComponentBackground, negativeHoverComponentBackground, negativeComponentText } from "../../tailwindClasses";
import { faEye } from "@fortawesome/free-solid-svg-icons";

/**
 * Props for the SeeMoreButton component.
 */
interface SeeMoreButtonInterface {
  /**
   * The URL to navigate to when the button is clicked.
   */
  link: string;

  /**
   * The label for the content that the user will "see more" of.
   */
  thing: string;
}

/**
 * A button component that navigates to a given URL when clicked.
 * The button displays a "See More" action with an eye icon and is styled with hover effects.
 * 
 * @param link - The URL to navigate to when the button is clicked.
 * @param thing - The content label to show in the button's text (e.g., "Ver productos").
 * @returns A button that navigates to the provided URL with an eye icon and text.
 */
export default function SeeMoreButton({ link, thing }: SeeMoreButtonInterface) {
  return (
    <Link
      href={link}
      className={`flex flex-row items-center justify-center md:justify-around md:px-2
      rounded-2xl h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40
      ${negativeComponentBackground} ${negativeHoverComponentBackground}
      ${negativeComponentText}`}
    >
      <div className=" mr-0 md:mr-2 xl:mr-0">
        <FontAwesomeIcon icon={faEye} className="" />
      </div>
      <span className="hidden xl:block text-sm font-black">
        Ver {thing}
      </span>
      <span className="hidden md:block xl:hidden text-xs font-black">
        Ver más
      </span>
    </Link>
  );
}
