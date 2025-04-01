import { errorMessagesList } from "@/lib/validations/validations";
import MediumButton from "../buttons/mediumButton";
import { componentBackground, componentText, componentBorder, hoverFillDefaultComponentBackground } from "../../tailwindClasses";

/**
 * Props for the FormValidationPopUp component.
 *
 * @property {() => void} handleShowModal - Function to close the popup when triggered.
 */
interface PopUpProps {
  handleShowModal: () => void;
}

/**
 * A popup component that displays validation error messages when a form submission is invalid.
 * The popup overlays the entire screen with a darkened background and provides an option to dismiss it.
 *
 * @param {PopUpProps} props - The properties for the FormValidationPopUp component.
 * @returns {JSX.Element} The rendered FormValidationPopUp component.
 */
export default function FormValidationPopUp({ handleShowModal }: PopUpProps): JSX.Element {
  return (
    <section
      className="flex justify-center items-center w-full h-full fixed  
        backdrop-filter backdrop-brightness-75 backdrop-blur-md top-0 right-0 z-50"
      onClick={handleShowModal}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        className={`relative 
            rounded-lg shadow m-1 p-4 sm:px-16 sm:py-8 flex flex-col items-center gap-8
            ${componentBackground} ${componentText} ${componentBorder}`}
      >
        {/* Close Button */}
        <button
          type="button"
          className={`absolute top-3 right-2.5 
                   bg-transparent 
                   ${hoverFillDefaultComponentBackground} rounded-lg 
                   text-sm p-1 sm:p-1.5 ml-auto inline-flex items-center popup-close`}
          onClick={handleShowModal}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 fill-emerald-900 dark:fill-emerald-100"
            fill="#c6c7c7"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close popup</span>
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold">Formulario no válido</h1>

        {/* Error Messages List */}
        <ul>
          {errorMessagesList.map((element, index) => (
            <li key={"errorMessage-" + index} className="text-lg">* {element}</li>
          ))}
        </ul>

        {/* Action Button */}
        <MediumButton text={"Continuar"} onClick={handleShowModal} />
      </article>
    </section>
  );
}
