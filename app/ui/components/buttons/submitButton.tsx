import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SubmitButtonProps {
    text: string,
    icon: IconProp
}

export default function SubmitButton({ text, icon }: SubmitButtonProps){
    return (
        <button
        type="submit"
        className="w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center rounded 
                  bg-emerald-900 text-emerald-100
                  dark:bg-emerald-100 dark:text-emerald-800
                  hover:bg-emerald-700 hover:dark:bg-emerald-200"
      >
        <div className="flex flex-row place-self-center gap-3">
          <div className=" mr-0 md:mr-2 xl:mr-0">
            <FontAwesomeIcon icon={icon} className="" />
          </div>
          <span className="text-base font-black">
            {text}
          </span>
        </div>
      </button>
    );
}