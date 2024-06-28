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
      className={`flex flex-row gap-2 cursor-pointer py-1 px-4 h-16 align-items-center
                  border-2 rounded-2xl border-primary2 dark:border-secondary0 
                  w-64 text-primary2 dark:text-secondary0 lg:text-left md:text-center
                  hover:bg-gray-400 hover:dark:bg-gray-700 ${bgColorClass}`}
                  onClick={onClick}
    >
      <div className="mr-2 md:mr-0 lg:mr-2 self-center">
        <FontAwesomeIcon icon={icon} className="size-6" />
      </div>
      <div className="flex flex-col text-start w-full self-center">
        <div className="text-lg font-bold md:hidden lg:block">
          {text}
        </div>
        <div className="text-sm text-primary1 font-semibold dark:text-secondary1 hidden xl:block">
          {subtext}
        </div>
      </div>
    </button>
  );
}

function checkTypeMediumButton(type: 'default' | 'warning' | 'danger'){
  if (type === 'default'){
    return "bg-primary0"
  }

  if (type === 'warning'){
    return "bg-yellow-200"
  }

  if (type === 'danger'){
    return "bg-red-200"
  }
}
