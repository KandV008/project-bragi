"use client";

import { componentText } from "@/app/ui/tailwindClasses";
import { useSearchParams } from "next/navigation";
import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

/**
 * A component that displays an empty message when no products are found.
 *
 * @returns {JSX.Element} The rendered empty message component.
 */
export default function ResultTPVMessage(): JSX.Element {
  const searchParams = useSearchParams();
  const state = searchParams.get("status");
  const isOkay = state! === "ok";

  const title = isOkay
    ? "Compra realizada exitosamente"
    : "No se ha podido realizar la compra";
  const description = isOkay
    ? "Se ha generado un pedido con tus datos, y se te ha enviado al correo el recibo de la compra."
    : "Ha habido algún problema con los datos ofrecidos en la compra.";
  
  const buttonTitle = isOkay ? "Continuar" : "Reintentar";
  const buttonSubTitle = isOkay ? "Seguir explorando" : "Volver a intentarlo";
  const buttonURL = isOkay ? "/" : "/profile/shoppingList/";

  return (
    <section className={`flex flex-col gap-5 w-full ${componentText}`}>
      {/* Message */}
      <article className="flex flex-col m-auto">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center">
          {title}
        </h1>
      </article>
      <article className="flex flex-col m-auto">
        <p className="text-sm sm:text-lg lg:text-xl text-center">
          {description}
        </p>
      </article>
      {/* Button */}
      <article className="self-center">
        <MediumButtonWithIcon
          icon={faArrowRight}
          text={buttonTitle}
          subtext={buttonSubTitle}
          type={"default"}
          navigationURL={buttonURL}
        />
      </article>
    </section>
  );
}
