import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MediumButtonProps {
  text: string;
}

export default function MediumButton({ text }: MediumButtonProps) {
  return (
    <button
      className={`flex flex-row gap-2 cursor-pointer py-1 px-4 h-16 place-content-center
                  border-2 rounded-2xl border-primary2 dark:border-secondary0 
                  w-64 text-primary2 dark:text-secondary0 lg:text-left md:text-center
                  hover:bg-gray-400 hover:dark:bg-gray-700`}
    >
      <div className="text-2xl font-bold text-center text-primary2 dark:text-secondary0 self-center">
        {text}
      </div>
    </button>
  );
}
