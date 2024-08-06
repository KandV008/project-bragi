import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MediumButtonWithIconProps {
  icon: IconDefinition;
  text: string;
  subtext: string;
  type: 'default' | 'warning' | 'danger';
  onClick?: () => void;
}

export default function MediumButtonWithIcon({ icon, text, subtext, type, onClick }: MediumButtonWithIconProps) {
  const bgColorClass = checkTypeMediumButton(type);

  return (
    <button
      className={`flex flex-row gap-2 cursor-pointer py-1 px-4 h-16 align-items-center w-64
                  border-emerald-900 dark:border-emerald-100 border-2 rounded-2xl 
                  text-emerald-900 dark:text-emerald-100 lg:text-left md:text-center
                  ${bgColorClass}`}
                  onClick={onClick}
    >
      <div className="mr-2 md:mr-0 lg:mr-2 self-center">
        <FontAwesomeIcon icon={icon} className="size-6" />
      </div>
      <div className="flex flex-col text-start w-full self-center">
        <div className="text-lg font-bold">
          {text}
        </div>
        <div className="text-sm text-emerald-900 font-semibold dark:text-emerald-100">
          {subtext}
        </div>
      </div>
    </button>
  );
}

function checkTypeMediumButton(type: 'default' | 'warning' | 'danger'){
  if (type === 'default'){
    return "bg-emerald-200 hover:bg-emerald-500 dark:bg-emerald-600 hover:dark:bg-emerald-500"
  }

  if (type === 'warning'){
    return "bg-amber-200 hover:bg-amber-400 dark:bg-amber-600 hover:dark:bg-amber-500"
  }

  if (type === 'danger'){
    return "bg-red-300 hover:bg-red-500 dark:bg-red-700 hover:dark:bg-red-500"
  }
}
