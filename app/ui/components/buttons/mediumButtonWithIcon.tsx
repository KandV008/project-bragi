"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import {
  componentBorder,
  componentText,
} from "../../tailwindClasses";
import { ButtonType, checkTypeButton } from "@/app/model/entities/enums/ButtonType";

interface MediumButtonWithIconProps {
  icon: IconDefinition;
  text: string;
  subtext: string;
  type: ButtonType;
  navigationURL?: string;
  onClick?: () => void;
}

export default function MediumButtonWithIcon({
  icon,
  text,
  subtext,
  type,
  navigationURL,
  onClick: action,
}: MediumButtonWithIconProps) {
  const bgColorClass = checkTypeButton(type);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (action) action();
    if (!navigationURL) e.preventDefault;
  };

  return (
    <Link href={navigationURL ? navigationURL : ""} onClick={onClick}>
      <button
        className={`flex flex-row gap-2 cursor-pointer py-1 px-4 h-16 align-items-center w-64
                  ${componentBorder} rounded-2xl 
                  ${componentText} lg:text-left md:text-center
                  ${bgColorClass}`}
      >
        <div className="mr-2 md:mr-0 lg:mr-2 self-center">
          <FontAwesomeIcon icon={icon} className="size-6" />
        </div>
        <div className="flex flex-col text-start w-full self-center">
          <div className="text-lg font-bold">{text}</div>
          <div className="text-sm  font-semibold ">{subtext}</div>
        </div>
      </button>
    </Link>
  );
}

export function MediumButtonWithIconSkeleton() {
  return (
    <div
      className="w-64 h-16 flex flex-row place-self-center md:place-self-start justify-center
                border-2 rounded bg-gray-200"
    />
  );
}
