import Image from "next/image";
import MediumButtonWithIcon from "../buttons/mediumButtonWithIcon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function NoFavoritesMessage() {
  return (
    <section
      className="flex flex-col gap-5
                text-emerald-900 dark:text-emerald-100 w-full"
    >
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
          No hay ningún producto en favoritos
        </h1>
      </article>
      <article className="flex flex-col m-auto">
        <p className="text-sm sm:text-lg lg:text-xl text-center">
          Explora nuestra variedad de productos y pulse el botón con un corazón
          para añadirlo a favoritos.
        </p>
      </article>
      {/* Button */}
      <article className="self-center">
        <MediumButtonWithIcon
          icon={faMagnifyingGlass}
          text={"Explorar productos"}
          subtext={"Buscar favoritos"}
          type={"default"}
          navigationURL="/search?category=EARPHONE"
        />
      </article>
    </section>
  );
}
