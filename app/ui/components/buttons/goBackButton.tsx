"use client";

import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "./mediumButtonWithIcon";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <article className="flex flex-center shrink-0 justify-end p-2">
      <div className="fixed top-40 md:top-36">
        <MediumButtonWithIcon
          icon={faBackspace}
          text={"Volver atrás"}
          subtext={"Volver a la página anterior"}
          type={"warning"}
          onClick={router.back}
        />
      </div>
    </article>
  );
}
