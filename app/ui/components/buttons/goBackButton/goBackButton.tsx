"use client";

import { fillYellowComponentBackground, componentBorder } from "@/app/ui/tailwindClasses";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import MediumButtonWithIcon from "../mediumButtonWithIcon/mediumButtonWithIcon";
import SmallButtonWithIcon from "../smallButtonWithIcon/smallButtonWithIcon";


/**
 * Props for the GoBackButton component.
 */
interface GoBackButtonInterface {
  /**
   * An optional link to navigate to a specific URL instead of going back to the previous page.
   */
  link?: string;
}

/**
 * A button component for navigating back to the previous page or a specific link.
 * If a link is provided, it will navigate to that URL; otherwise, it will go back 
 * to the previous page in the browser history.
 * 
 * @param link - An optional URL to navigate to instead of using the browser's history.
 * @returns A button that allows the user to go back to the previous page or to a specific URL.
 */
export default function GoBackButton({ link }: GoBackButtonInterface) {
  const router = useRouter();

  return (
    <article className="flex flex-center shrink-0 justify-start">
      <div className="fixed top-48">
        {/* Render the medium button for larger screens */}
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

        {/* Render the small button for smaller screens */}
        <div
          className={`w-fit block md:hidden rounded ${fillYellowComponentBackground} ${componentBorder}`}
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
