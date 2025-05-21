'use client';

import SmallButton from "@/app/ui/components/buttons/smallButton/smallButton";
import { componentText, lightComponentBackground } from "@/app/ui/tailwindClasses";
import Image from "next/image";

/**
 * This component describes the steps a user can follow to acquire a hearing aid.
 * It includes three main workflows:
 * - Knowing the hearing aid and purchasing it.
 * - Not knowing the hearing aid but having a hearing test.
 * - Not knowing the hearing aid and needing a hearing test.
 * 
 * @returns {JSX.Element} The rendered WorkingFlow component.
 */
export default function WorkingFlow(): JSX.Element {
  return (
    <section className={`flex flex-col lg:grid lg:grid-cols-2 gap-3 ${componentText}`}>
      {/* Knowing the hearing aid */}
      <article className={`flex flex-col justify-items-center lg:flex-row gap-5 col-span-2 p-5 rounded
                          ${lightComponentBackground}`}>
        {/* Choose hearing aid */}
        <div className="flex flex-col gap-2 lg:w-1/3">
          <Image
            src="/workFlow/icon-search-product.png"
            alt="Icono de selección de audífono"
            width={1000}
            height={1000}
            className="size-1/3 md:size-1/4 lg:size-1/2 self-center"
          />
          <h1 className="text-lg sm:text-xl font-bold text-center">
            1. Seleccionar audífono
          </h1>
          <p className="text-base sm:text-lg font-medium text-center">
            Elija el mejor audífono para tí entre toda nuestra variedad.
          </p>
        </div>
        {/* Send hearing test */}
        <div className="flex flex-col gap-2  lg:w-1/3">
          <Image
            src="/workFlow/icon-doc.png"
            alt="Icono de documento para audiograma"
            width={1000}
            height={1000}
            className="size-1/3 md:size-1/4 lg:size-1/2 self-center"
          />
          <h1 className="text-lg sm:text-xl font-bold text-center">
            2. Envíenos tu audiograma
          </h1>
          <p className="text-base sm:text-lg font-medium text-center">
            Con el audiograma podremos ajustar tus audífonos a tus necesidades.
          </p>
        </div>
        {/* Pick up in store or ship to your home */}
        <div className="flex flex-col gap-2 lg:w-1/3">
          <Image
            src="/workFlow/icon-ship-home.png"
            alt="Icono de envío a casa o recogida en tienda"
            width={1000}
            height={1000}
            className="size-1/3 md:size-1/4 lg:size-1/2 self-center"
          />
          <h1 className="text-lg sm:text-xl font-bold text-center">
            3. Recógelo en tienda o te lo enviamos
          </h1>
          <p className="text-base sm:text-lg font-medium text-center">
            Puedes ir a tu tienda más cercana a recoger tu audífono o podemos enviártelo a tu casa directamente.
          </p>
        </div>
      </article>

      {/* Not knowing the hearing aid but having a hearing test */}
      <article className={`flex flex-col gap-4 p-10 rounded ${lightComponentBackground}`}>
        <Image
          src="/workFlow/icon-no-idea.png"
          alt="Icono de duda sobre audífonos"
          width={1000}
          height={1000}
          className="size-7/12 self-center"
        />
        <h1 className="text-xl sm:text-3xl font-bold text-center">
          ¿No sabes qué audífono elegir?
        </h1>
        <p className="text-base sm:text-lg font-medium text-center">
          Envíanos tu audiograma y te haremos una lista de recomendaciones.
        </p>
        <div className="self-center hidden lg:block">
          <SmallButton text="Enviar audiograma" href="/in-development"/>
        </div>
        <div className="self-center block lg:hidden">
          <SmallButton text="Enviar" href="/in-development"/>
        </div> 
      </article>

      {/* Not knowing the hearing aid but not having a hearing test */}
      <article className={`flex flex-col gap-4 p-10 rounded ${lightComponentBackground}`}>
        <Image
          src="/workFlow/icon-schedule.png"
          alt="Icono de calendario para cita"
          width={1000}
          height={1000}
          className="size-7/12 self-center"
        />
        <h1 className="text-xl sm:text-3xl font-bold text-center">
          ¿No tienes tu audiograma?
        </h1>
        <p className="text-base sm:text-lg font-medium text-center">
          Pide cita en línea y nos encargaremos de hacerte tu audiograma.
        </p>
        <div className="self-center">
          <SmallButton text="Pedir cita" href="/in-development" />
        </div>
      </article>
    </section>
  );
}
