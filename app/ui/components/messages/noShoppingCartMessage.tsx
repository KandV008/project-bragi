import Image from "next/image";
import MediumButtonWithIcon from "../buttons/mediumButtonWithIcon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { componentText } from "../../tailwindClasses";

/**
 * A component that displays an empty shopping cart message when no products are found.
 *
 * @returns {JSX.Element} The rendered empty shopping cart message component.
 */
export default function NoShoppingCartMessage(): JSX.Element {
  return (
    <section
      className={`flex flex-col gap-5 w-full ${componentText}`}
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
          No hay ningún producto en la cesta de la compra
        </h1>
      </article>
      <article className="flex flex-col m-auto">
        <p className="text-sm sm:text-lg lg:text-xl text-center">
          Explora nuestra variedad de productos y pulse el botón de añadir a la
          cesta de la compra.
        </p>
      </article>
      {/* Button */}
      <article className="self-center">
        <MediumButtonWithIcon
          icon={faMagnifyingGlass}
          text={"Explorar productos"}
          subtext={"Buscar cesta de la compra"}
          type={"default"}
          navigationURL="/search?category=EARPHONE"
        />
      </article>
    </section>
  );
}
