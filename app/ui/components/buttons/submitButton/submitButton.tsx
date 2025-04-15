import { negativeComponentText, negativeComponentBackground, negativeHoverComponentBackground } from "@/app/ui/tailwindClasses";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Props for the SubmitButton component.
 */
interface SubmitButtonProps {
  /**
   * The text to display on the button.
   */
  text: string;

  /**
   * The icon to display inside the button.
   */
  icon: IconProp;

  /**
   * Boolean to determine if the button is disabled.
   */
  isDisable: boolean;
}

/**
 * A button component that displays an icon and text, and can be disabled based on the `isDisable` prop.
 * 
 * If `isDisable` is true, the button is disabled and styled as inactive.
 * If `isDisable` is false, the button is enabled and clickable.
 * 
 * @param text - The text to display on the button.
 * @param icon - The icon to display inside the button.
 * @param isDisable - A boolean to control whether the button is disabled.
 * @returns A submit button with an icon and text, and a disabled state if necessary.
 */
export default function SubmitButton({
  text,
  icon,
  isDisable,
}: SubmitButtonProps) {
  return (
    <>
      {isDisable ? (
        <button
          disabled
          className={`w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center rounded 
                  bg-gray-500 dark:bg-gray-300 ${negativeComponentText}`}
        >
          <div className="flex flex-row place-self-center gap-3">
            <div className=" mr-0 md:mr-2 xl:mr-0">
              <FontAwesomeIcon icon={icon} className="" />
            </div>
            <span className="text-base font-black">{text}</span>
          </div>
        </button>
      ) : (
        <button
          type="submit"
          className={`w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center rounded 
                  ${negativeComponentBackground} ${negativeHoverComponentBackground}
                  ${negativeComponentText}`}
        >
          <div className="flex flex-row place-self-center gap-3">
            <div className=" mr-0 md:mr-2 xl:mr-0">
              <FontAwesomeIcon icon={icon} className="" />
            </div>
            <span className="text-base font-black">{text}</span>
          </div>
        </button>
      )}
    </>
  );
}

/**
 * Skeleton component for the SubmitButton, used to display a placeholder during loading.
 * 
 * @returns A skeleton representation of the SubmitButton with a gray background and basic button shape.
 */
export function SubmitButtonSkeleton() {
  return (
    <section className="self-center">
      <div
        className="w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center
    border-2 rounded bg-gray-200"
      />
    </section>
  );
}
