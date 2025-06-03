"use client";

import {
  componentBackground,
  componentText,
  componentBorder,
  hoverFillDefaultComponentBackground,
} from "../../../tailwindClasses";
import { faRightLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import { updateCookiesStatus } from "@/lib/cookies";
import { useEffect, useState } from "react";
import { checkCookiesStatusRoute } from "@/app/api/routes";

interface CookiesPopUpProps {
  isConfiguration?: boolean;
  setConfiguration?: () => void;
}

/**
 * A Cookies popup component that prompts the user to accept the cookies of the application.
 * The popup overlays the entire screen with a darkened background.
 *
 * @param {PopUpProps} props - The properties for the CookiesPopUp component.
 * @returns {JSX.Element} The rendered CookiesPopUp component.
 */
export default function CookiesPopUp({
  isConfiguration,
  setConfiguration,
}: CookiesPopUpProps): JSX.Element {
  const [isCookiesConfigured, hasCookiesConfigured] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${checkCookiesStatusRoute}`)
      .then((response) => response.json())
      .then((data) => {
        hasCookiesConfigured(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  });

  if (isCookiesConfigured && !isConfiguration) return <></>;

  const handleAction = async (isAccepted: string) => {
    await updateCookiesStatus(isAccepted);
    hasCookiesConfigured(true);

    if (setConfiguration) {
      setConfiguration();
    }
  };

  return (
    <section
      className="flex justify-center items-center w-full h-full fixed 
        backdrop-filter backdrop-brightness-75 backdrop-blur-md top-0 right-0 z-40"
    >
      <article
        className={`relative 
            rounded-lg shadow m-1 p-4 sm:px-16 sm:py-8 flex flex-col items-center gap-8 w-5/6 xl:w-1/2
            ${componentBackground} ${componentText} ${componentBorder}`}
      >
        {/* Close Button */}
        {isConfiguration ? (
          <button
            type="button"
            className={`absolute top-3 right-2.5 
                   bg-transparent 
                   ${hoverFillDefaultComponentBackground} rounded-lg 
                   text-sm p-1 sm:p-1.5 ml-auto inline-flex items-center popup-close`}
            onClick={setConfiguration}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 fill-emerald-900 dark:fill-emerald-100"
              fill="#c6c7c7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>
        ) : (
          <></>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold">Política de Cookies</h1>

        {/* Message */}
        <div className="flex flex-col gap-3 text-lg sm:text-xl text-center overflow-y-auto h-5/6">
          <p>
            <strong>Audífonos X menos</strong> y sus socios utilizan cookies
            para ofrecerte un servicio mejor, más seguro y más rápido y para
            apoyar nuestro negocio. Algunas cookies son necesarias para utilizar
            nuestros servicios, mejorarlos y asegurarse de que funcionan
            correctamente.
          </p>
          <p>
            Si haces clic en <strong>{'"Aceptar todas"'}</strong>, también
            permites a <strong>Audífonos X menos</strong> y sus socios utilizar
            cookies para ofrecerte anuncios y comunicaciones adaptados a tus
            intereses. Si haces clic en{" "}
            <strong>{'"Solo las necesarias"'}</strong>, no utilizaremos las
            cookies para recopilar datos adicionales para mostrar anuncios y
            comunicaciones personalizados.
          </p>
          <p>
            Para obtener más información, incluyendo cómo cambiar tu elección,
            visita la página de <strong>{'"Política de cookies"'}</strong> en la
            sección Información.
          </p>
        </div>

        {/* Action Buttons */}
        <section className="flex flex-col md:flex-row justify-between gap-5">
          <MediumButtonWithIcon
            icon={faXmark}
            text={"Solo las necesarias"}
            subtext={""}
            type={"warning"}
            onClick={() => handleAction("false")}
          />
          <MediumButtonWithIcon
            icon={faRightLong}
            text={"Aceptar todas"}
            subtext={""}
            type={"default"}
            onClick={() => handleAction("true")}
          />
        </section>
      </article>
    </section>
  );
}
