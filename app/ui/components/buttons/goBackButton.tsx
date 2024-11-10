"use client";

import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "./mediumButtonWithIcon";
import { useRouter } from "next/navigation";
import SmallButtonWithIcon from "./smallButtonWithIcon";
import {
  componentBorder,
  fillYellowComponentBackground,
} from "../../tailwindClasses";

interface GoBackButtonInterface {
  link?: string;
}

export default function GoBackButton({ link }: GoBackButtonInterface) {
  const router = useRouter();

  return (
    <article className="flex flex-center shrink-0 justify-start ">
      <div className="fixed top-48 ">
        <div className="hidden md:block">
          {link ? (
            <MediumButtonWithIcon
              icon={faBackspace}
              text={"Volver atrás"}
              subtext={"Volver a la página anterior"}
              type={"warning"}
              navigationURL={link}
            />
          ) : (
            <MediumButtonWithIcon
              icon={faBackspace}
              text={"Volver atrás"}
              subtext={"Volver a la página anterior"}
              type={"warning"}
              onClick={router.back}
            />
          )}
        </div>
        <div
          className={`w-fit block md:hidden rounded
          ${fillYellowComponentBackground} ${componentBorder}`}
        >
          {link ? (
            <SmallButtonWithIcon
              icon={faBackspace}
              text={"Volver atrás"}
              subtext={""}
              href={link}
            />
          ) : (
            <SmallButtonWithIcon
              icon={faBackspace}
              text={"Volver atrás"}
              subtext={""}
              onClick={router.back}
            />
          )}
        </div>
      </div>
    </article>
  );
}
