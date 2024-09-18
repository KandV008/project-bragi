"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { componentText, hoverComponentText, hoverComponentEmptyBackground, hoverComponentBorder } from "../../tailwindClasses";

interface SmallButtonWithIconProps {
  icon: IconDefinition;
  text: string;
  subtext: string;
  href?: string;
  onClick?: () => void;
}

export default function SmallButtonWithIcon({
  icon,
  text,
  subtext,
  href,
  onClick: action
}: SmallButtonWithIconProps) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (action) action();
    if (!href) e.preventDefault;
  };

  return (
    <Link href={href ? href : ""} onClick={onClick}>
      <button
        className={`flex items-start cursor-pointer py-1 px-2 2xl:h-12  
                    min-w-8 lg:w-28 xl:w-48 lg:text-left md:text-center
                    ${componentText} ${hoverComponentText}
                    ${hoverComponentEmptyBackground}
                    border-2 border-transparent
                    ${hoverComponentBorder} hover:lg:rounded hover:rounded-full 
`}
      >
        <div className="mr-2 md:mr-0 lg:mr-2">
          <FontAwesomeIcon icon={icon} className="" />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold md:hidden lg:block">{text}</div>
          <div className="text-xs hidden xl:block">{subtext}</div>
        </div>
      </button>
    </Link>
  );
}
