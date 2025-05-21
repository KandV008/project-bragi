'use client';

import { componentText } from "@/app/ui/tailwindClasses";
import Image from "next/image";

/**
 * A component that displays an empty message when no products are found.
 *
 * @returns {JSX.Element} The rendered empty message component.
 */
export default function EmptyMessage(): JSX.Element {
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
          Producto no encontrado
        </h1>
      </article>
      <article className="flex flex-col m-auto">
        <p className="text-sm sm:text-lg lg:text-xl text-center">
          No se ha podido encontrar un producto que cumpla con sus criterios.
        </p>
        <p className="text-sm sm:text-lg lg:text-xl text-center">
          Pruebe con otro tipo de búsqueda.
        </p>
      </article>
    </section>
  );
}
