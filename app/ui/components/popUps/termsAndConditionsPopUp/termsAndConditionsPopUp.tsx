"use client";

import {
  componentBackground,
  componentText,
  componentBorder,
} from "../../../tailwindClasses";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import { acceptTermsAndConditions } from "@/lib/cookies";
import { useEffect, useState } from "react";
import { checkCookiesStatusRoute, checkTermsAndConditionsRoute } from "@/app/api/routes";
import TermsAndConditions from "@/app/ui/containers/policies/termsAndConditions/termsAndConditions";

/**
 * A Cookies popup component that prompts the user to accept the cookies of the application.
 * The popup overlays the entire screen with a darkened background.
 *
 * @param {PopUpProps} props - The properties for the CookiesPopUp component.
 * @returns {JSX.Element} The rendered CookiesPopUp component.
 */
export default function TermsAndConditionsPopUp(): JSX.Element {
  const [isTermsAndConditionsAccepted, hasTermsAndConditionsAccepted] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${checkTermsAndConditionsRoute}`)
      .then((response) => response.json())
      .then((data) => {
        hasTermsAndConditionsAccepted(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  });

  if (isTermsAndConditionsAccepted) return <></>;

  const handleAction = async () => {
    await acceptTermsAndConditions();
    hasTermsAndConditionsAccepted(true);
  };

  return (
    <section
      className="flex justify-center items-center w-full h-full fixed 
        backdrop-filter backdrop-brightness-75 backdrop-blur-md top-0 right-0 z-50"
    >
      <article
        className={`relative 
            rounded-lg shadow m-1 p-4 sm:px-16 sm:py-8 flex flex-col items-center gap-8 w-5/6 xl:w-1/2
            ${componentBackground} ${componentText} ${componentBorder}`}
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold">Términos y Condiciones</h1>

        {/* Message */}
        <div className="flex flex-col gap-3 text-lg sm:text-xl text-center overflow-y-auto h-96 w-5/6">
          <TermsAndConditions />
        </div>

        {/* Action Buttons */}
        <section className="flex flex-col md:flex-row justify-between gap-5">
          <MediumButtonWithIcon
            icon={faRightLong}
            text={"Aceptar"}
            subtext={""}
            type={"default"}
            onClick={() => handleAction()}
          />
        </section>
      </article>
    </section>
  );
}
