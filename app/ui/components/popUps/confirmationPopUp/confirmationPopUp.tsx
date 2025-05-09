import {
  componentBackground,
  componentText,
  componentBorder,
  hoverFillDefaultComponentBackground,
} from "../../../tailwindClasses";
import { faRightLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon/mediumButtonWithIcon";

/**
 * Props for the ConfirmationPopUp component.
 *
 * @property {() => void} handleShowModal - Function to toggle the visibility of the popup.
 * @property {() => void} handleAction - Function to execute the primary action when confirmed.
 * @property {string} message - The message displayed in the popup to inform the user.
 */
interface PopUpProps {
  handleShowModal: () => void;
  handleAction: () => void;
  message: string;
}

/**
 * A confirmation popup component that prompts the user to confirm or cancel an action.
 * The popup overlays the entire screen with a darkened background.
 *
 * @param {PopUpProps} props - The properties for the ConfirmationPopUp component.
 * @returns {JSX.Element} The rendered ConfirmationPopUp component.
 */
export default function ConfirmationPopUp({
  handleShowModal,
  handleAction,
  message,
}: PopUpProps): JSX.Element {
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
        <h1 className="text-3xl sm:text-4xl font-bold">¿Estás seguro?</h1>

        {/* Message */}
        <p className="text-lg sm:text-xl text-center">
          <strong>{message}</strong>
        </p>

        {/* Action Buttons */}
        <section className="flex flex-col md:flex-row justify-between gap-5">
          <MediumButtonWithIcon
            icon={faXmark}
            text={"Cancelar"}
            subtext={""}
            type={"default"}
            onClick={handleShowModal}
          />
          <MediumButtonWithIcon
            icon={faRightLong}
            text={"Continuar"}
            subtext={""}
            type={"danger"}
            onClick={handleAction}
          />
        </section>
      </article>
    </section>
  );
}
