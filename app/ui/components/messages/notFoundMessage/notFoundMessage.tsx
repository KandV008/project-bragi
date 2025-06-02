'use client';

import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { componentText } from "../../../tailwindClasses";
import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon/mediumButtonWithIcon";

/**
 * A component that displays a 404 not found message when a page is unavailable.
 *
 * @returns {JSX.Element} The rendered not found message component.
 */
export default function NotFoundMessage(): JSX.Element {
  const router = useRouter();

  return (
    <section className={`flex flex-col gap-5 w-full ${componentText}`}>
      {/* Icon */}
      <Image
        src="/icon-not-found.png"
        alt="not-found-icon"
        width={1000}
        height={1000}
        className="w-1/2 sm:size-1/3 lg:size-1/3 self-center"
      />
      {/* Message */}
      <article className="flex flex-col m-auto">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center">
          ERROR 404
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center">
          Página no disponible
        </h2>
      </article>
      <article className="flex flex-col m-auto">
        <p className="p-3 text-sm sm:text-lg lg:text-xl text-center">
          La página a la que estás intentando acceder no existe o no está
          disponible actualmente.
        </p>
      </article>
      <article className="self-center">
        <MediumButtonWithIcon
          icon={faArrowLeft}
          text={"Volver atrás"}
          subtext={"Ir a la página anterior"}
          type={"default"}
          onClick={router.back}
        />
      </article>
    </section>
  );
}
