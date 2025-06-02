import Image from "next/image";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { componentText } from "../../../tailwindClasses";
import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon/mediumButtonWithIcon";

/**
 * A component that displays an empty favorites list message when no products are found.
 *
 * @returns {JSX.Element} The rendered empty favorites list message component.
 */
export default function NoOrdersMessage(): JSX.Element {
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
          No ha realizado ningún pedido
        </h1>
      </article>
      <article className="flex flex-col m-auto">
        <p className="text-sm sm:text-lg lg:text-xl text-center">
          Explora nuestra variedad de productos y llena la cesta de la compra
          con lo que te interese, para así poder crear un pedido.
        </p>
      </article>
      {/* Button */}
      <article className="self-center">
        <MediumButtonWithIcon
          icon={faMagnifyingGlass}
          text={"Explorar productos"}
          subtext={"Llenar cesta"}
          type={"default"}
          navigationURL="/search?category=EARPHONE"
        />
      </article>
    </section>
  );
}
