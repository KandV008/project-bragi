'use client';

import Image from "next/image";
import SmallButton from "../../components/buttons/smallButton";
import { useRouter } from "next/navigation";

export default function WorkingFlow() {
  const router = useRouter()

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 text-emerald-900 dark:text-emerald-100 gap-3">
      {/* Knowing the hearing aid */}
      <article className="flex flex-col justify-items-center lg:flex-row gap-5 col-span-2 p-5 rounded
                         bg-emerald-50 dark:bg-emerald-900 ">
        {/* Choose hearing aid */}
        <div className="flex flex-col gap-2 lg:w-1/3">
          <Image
            src="/workFlow/search-product.png"
            alt={""}
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
            src="/workFlow/documento.png"
            alt={""}
            width={1000}
            height={1000}
            className="size-1/3 md:size-1/4 lg:size-1/2 self-center"
          />
          <h1 className="text-lg sm:text-xl font-bold text-center">
            2. Envienos tu audiograma
          </h1>
          <p className="text-base sm:text-lg font-medium text-center">
            Con el audiograma podremos ajustar tus audifonos a tus necesidades.
          </p>
        </div>
        {/* Pick up in store or ship to your home */}
        <div className="flex flex-col gap-2 lg:w-1/3">
          <Image
            src="/workFLow/ship-home.png"
            alt={""}
            width={1000}
            height={1000}
            className="size-1/3 md:size-1/4 lg:size-1/2 self-center"
          />
          <h1 className="text-lg sm:text-xl font-bold text-center">
            3. Recogelo en tienda o te lo enviamos
          </h1>
          <p className="text-base sm:stext-lg font-medium text-center">
            Puedes ir a tu tienda más cercana a recoger tu audífono o podemos
            enviartelo a tu casa directamente.
          </p>
        </div>
      </article>
      {/* Not knowing the hearing aid but having a hearing test */}
      <article className="flex flex-col gap-4 p-10 rounded
                         bg-emerald-50 dark:bg-emerald-900">
        <Image
          src="/workFlow/no-idea.png"
          alt={""}
          width={1000}
          height={1000}
          className="size-7/12 self-center"
        />{" "}
        <h1 className="text-xl sm:text-3xl font-bold text-center ">
          ¿No sabes que audífono elegir?
        </h1>
        <p className="text-base sm:text-lg font-medium text-center">
          Envianos tu audiograma y te haremos una lista de recomendaciones.
        </p>
        <div className="self-center hidden lg:block">
          <SmallButton text="Enviar audiograma" href="/in-development"/>
        </div>
        <div className="self-center block lg:hidden">
          <SmallButton text="Enviar" href="/in-development"/>
        </div> 
      </article>
      {/* Not knowing the hearing aid but not having a hearing test */}
      <article className="flex flex-col gap-4 p-10 rounded
                         bg-emerald-50 dark:bg-emerald-900">
        <Image
          src="/workFlow/date.png"
          alt={""}
          width={1000}
          height={1000}
          className="size-7/12 self-center"
        />
        <h1 className="text-xl sm:text-3xl font-bold text-center">
          ¿No tienes tu audiograma?
        </h1>
        <p className="text-base sm:text-lg font-medium text-center">
          Pide cita vía online y nos encargaremos de hacerte tu audiograma.
        </p>
        <div className="self-center">
          <SmallButton text="Pedir cita" href="/in-development" />
        </div>
      </article>
    </section>
  );
}
