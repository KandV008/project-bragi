"use client";

import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { componentText } from "../../../tailwindClasses";
import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon/mediumButtonWithIcon";

/**
 * A component that displays an 'in development' message when no products are found.
 *
 * @returns {JSX.Element} The rendered 'in development' message component.
 */
export default function InDevelopmentMessage(): JSX.Element {
  const router = useRouter();

  return (
    <section
      className={`flex flex-col gap-5 w-full ${componentText}`}
    >
      <Image
        src="/placeholder-in-development.png"
        alt={"in-development-image"}
        width={1000}
        height={1000}
        className="w-5/6 lg:size-1/2 self-center"
      />
      <article className="flex flex-col m-auto">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center">
          En Desarrollo
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center">
          Próximamente disponible
        </h2>
      </article>
      <article className="flex flex-col m-auto">
        <p className="p-3 text-sm sm:text-lg lg:text-xl text-center">
          En futuras actualizaciones se podrá acceder al contenido de esta
          página.
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
