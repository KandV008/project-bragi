'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SmallButtonWithIconProps {
  icon: IconDefinition;
  text: string;
  subtext: string;
  onClick?: () => void; 
}

export default function SmallButtonWithIcon({ icon, text, subtext, onClick }: SmallButtonWithIconProps) {
  return (
    <button
      className="flex items-start cursor-pointer py-1 px-2 2xl:h-12  
                    min-w-8 lg:w-28 xl:w-48 lg:text-left md:text-center
                    text-emerald-900 dark:text-emerald-100
                    hover:bg-gray-300 hover:dark:bg-gray-700 
                    hover:lg:rounded hover:rounded-full 
                    hover:border-emerald-900 hover:border-2
                    hover:dark:border-emerald-100"
      onClick={onClick} 
    >
      <div className="mr-2 md:mr-0 lg:mr-2">
        <FontAwesomeIcon icon={icon} className="" />
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-semibold md:hidden lg:block">{text}</div>
        <div className="text-xs text-primary1 dark:text-secondary1 hidden xl:block">
          {subtext}
        </div>
      </div>
    </button>
  );
}