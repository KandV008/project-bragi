import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SmallButtonWithIcon({ icon, text, subtext }) {
  return (
    <button
      className="flex items-start cursor-pointer py-1 px-2 2xl:h-12  
                    min-w-8 sm:w-9 lg:w-28 xl:w-48
                    text-primary2 dark:text-secondary0 lg:text-left md:text-center
                    hover:bg-gray-400 hover:lg:rounded hover:rounded-full hover:border-primary2 hover:border-2
                    hover:dark:bg-gray-700 hover:dark:border-secondary0"
    >
      <div className="lg:mr-2">
        <FontAwesomeIcon icon={icon} className="" />
      </div>
      <div className="hidden md:flex md:flex-col">
        <div className="text-sm font-semibold hidden lg:block">{text}</div>
        <div className="text-xs text-primary1 dark:text-secondary1 hidden xl:block">
          {subtext}
        </div>
      </div>
    </button>
  );
}
