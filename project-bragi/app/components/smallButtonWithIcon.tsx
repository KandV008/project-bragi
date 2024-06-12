import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SmallButtonWithIcon({ icon, text, subtext }) {
  return (
    <button
      className="flex items-start cursor-pointer py-1 px-2 h-12 w-48 min-h-4 min-w-4
                    text-primary2 dark:text-secondary0 
                    hover:bg-gray-400 hover:rounded hover:border-primary2 hover:border-2
                    hover:dark:bg-gray-700 hover:dark:border-secondary0"
    >
      <div className="mr-2">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-semibold text-left">{text}</div>
        <div className="text-xs text-left text-primary1 dark:text-secondary1">
          {subtext}
        </div>
      </div>
    </button>
  );
}
