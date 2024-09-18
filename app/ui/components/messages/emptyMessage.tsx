import Image from "next/image";
import { componentText } from "../../tailwindClasses";

export default function EmptyMessage() {
  return (
    <section
      className={`flex flex-col gap-5 w-full ${componentText}`}>
      {/* Icon */}
      <Image
        src="/placeholder-parrot.png"
        alt={""}
        width={1000}
        height={1000}
        className="w-5/6 lg:size-1/2 self-center"
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
