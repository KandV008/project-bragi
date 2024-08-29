import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  negativeComponentBackground,
  negativeHoverComponentBackground,
  negativeComponentText,
} from "../../tailwindClasses";

interface SubmitButtonProps {
  text: string;
  icon: IconProp;
  isDisable: boolean;
}

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
