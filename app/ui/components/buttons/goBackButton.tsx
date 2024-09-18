"use client";

import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "./mediumButtonWithIcon";
import { useRouter } from "next/navigation";
import SmallButtonWithIcon from "./smallButtonWithIcon";
import { componentBorder, fillYellowComponentBackground } from "../../tailwindClasses";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <article className="flex flex-center shrink-0 justify-start ">
      <div className="fixed top-48 ">
        <div className="hidden md:block">
          <MediumButtonWithIcon
            icon={faBackspace}
            text={"Volver atrás"}
            subtext={"Volver a la página anterior"}
            type={"warning"}
            onClick={router.back}
          />
        </div>
        <div className={`w-fit block md:hidden rounded
          ${fillYellowComponentBackground} ${componentBorder}`}>
          <SmallButtonWithIcon
            icon={faBackspace}
            text={"Volver atrás"}
            subtext={""}
            onClick={router.back}
          />
        </div>
      </div>
    </article>
  );
}
