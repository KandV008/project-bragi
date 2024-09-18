"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "./mediumButtonWithIcon";
import SmallButtonWithIcon from "./smallButtonWithIcon";
import {
  componentBorder,
} from "../../tailwindClasses";
import {
  ButtonType,
  checkTypeButton,
} from "@/app/model/entities/enums/ButtonType";

interface FloatButtonProps {
  icon: IconDefinition;
  text: string;
  subtext: string;
  type: ButtonType;
  navigationURL?: string;
  position: "start" | "center" | "end"
  onClick?: () => void;
}

export default function FloatButton({
  icon,
  text,
  subtext,
  type,
  navigationURL,
  position,
  onClick,
}: FloatButtonProps) {
  const bgColor = checkTypeButton(type);
  const top = position === "center" ? "top-60 sm:top-48" : "top-48"

  return (
    <article className={`flex flex-center shrink-0 justify-${position} p-2`}>
      <div className={`fixed ${top}`}>
        <div className="hidden md:block">
          <MediumButtonWithIcon
            icon={icon}
            text={text}
            subtext={subtext}
            type={type}
            navigationURL={navigationURL}
            onClick={onClick}
          />
        </div>
        <div
          className={`w-fit block md:hidden rounded
          ${bgColor} ${componentBorder}`}
        >
          <SmallButtonWithIcon
            icon={icon}
            text={text}
            subtext={""}
            href={navigationURL}
            onClick={onClick}
          />
        </div>
      </div>
    </article>
  );
}
