'use client';

import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import MediumButtonWithIcon from "../../components/buttons/mediumButtonWithIcon";

export default function Message() {
  const router = useRouter()

  return (
    <section
      className="flex flex-col gap-5
                text-emerald-900 dark:text-emerald-100 w-full"
    >
      <Image
        src="/placeholder-parrot.png"
        alt={""}
        width={1000}
        height={1000}
        className="w-5/6 lg:size-1/2 self-center"
      />
      <article className="flex flex-col m-auto">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center">ERROR 404</h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center">
          Página no disponible
        </h2>
      </article>
      <article className="flex flex-col m-auto">
        <p className="p-3 text-sm sm:text-lg lg:text-xl text-center">
          La página a la que estas intentando acceder no existe o no esta disponible
          actualmente.
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
