import Image from "next/image";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ProductOptions() {
  return (
    <div className="flex flex-col md:flex-row rounded rounded-tr-3xl
     border-2 border-primary2 dark:border-secondary1 bg-primary0 dark:bg-secondary2 text-primary2 dark:text-secondary0 p-5">
      <article className="flex flex-col md:w-1/2 gap-3 lg:gap-2">
        <div className="place-self-center">
          <Image
            src="/placeholder-product.jpg"
            width={1500}
            height={1500}
            alt="Placeholder" // TODO Add the real image
            className="size-64 sm:size-72 lg:size-96"
          />
        </div>
        <div className="flex flex-row gap-2 justify-center">
          <Image
            src="/placeholder-product.jpg"
            width={1500}
            height={1500}
            alt="Placeholder" // TODO Add the real image
            className="size-20 sm:size-24 lg:size-32"
          />
          <Image
            src="/placeholder-product.jpg"
            width={1500}
            height={1500}
            alt="Placeholder" // TODO Add the real image
            className="size-20 sm:size-24 lg:size-32"
          />
          <Image
            src="/placeholder-product.jpg"
            width={1500}
            height={1500}
            alt="Placeholder" // TODO Add the real image
            className="size-20 sm:size-24 lg:size-32"
          />
        </div>
      </article>
      <article className="flex flex-col  md:w-1/2 md:justify-around">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold w-fit">Phonak</h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl w-fit">Audeo Lumity L50-RT</h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold w-fit">1.599,00€</h1>
        <br className="hidden sm:block"/>
        <div className="w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Colores disponibles
            <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
          </h3>
          <div className="flex flex-row flex-wrap gap-1">
            <button className="size-8 md:size-6 lg:size-8 border-2 border-primary2 dark:border-secondary0 bg-slate-900"></button>
            <button className="size-8 md:size-6 lg:size-8 border-2 border-primary2 dark:border-secondary0 bg-orange-500"></button>
            <button className="size-8 md:size-6 lg:size-8 border-2 border-primary2 dark:border-secondary0 bg-yellow-300"></button>
            <button className="size-8 md:size-6 lg:size-8 border-2 border-primary2 dark:border-secondary0 bg-lime-700"></button>
            <button className="size-8 md:size-6 lg:size-8 border-2 border-primary2 dark:border-secondary0 bg-cyan-300"></button>
            <button className="size-8 md:size-6 lg:size-8 border-2 border-primary2 dark:border-secondary0 bg-fuchsia-200"></button>
          </div>
        </div>
        <div className="w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Lado del Audífono
            <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
          </h3>
          <div className="flex flex-row flex-wrap gap-3">
            <button className="h-8 w-24 border-2 rounded border-primary2 dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700">
              Derecho
            </button>
            <button className="h-8 w-24 border-2 rounded border-primary2 dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700">
              Izquierdo
            </button>
            <button className="h-8 w-24 border-2 rounded border-primary2 dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700">
              Ambos
            </button>
          </div>
        </div>
        <div className="mb-3 md:mb-1 lg:mb-3 w-fit">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
            Incluye
            <div className="w-full border-t mb-1 lg:mb-3 border-primary2 dark:border-secondary0"></div>
          </h3>
          <ul className="px-2 text-sm lg:text-base">
            <li>Cargador incluido</li>
            <li>Servicio Completo Gratuito de Audiometría</li>
          </ul>
        </div>

        <Link
        href="/">
          <button
            className="w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center
          border-2 rounded border-primary2 dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700"
          >
            <div className="flex flex-row place-self-center gap-3">
            <div className=" mr-0 md:mr-2 xl:mr-0">
              <FontAwesomeIcon icon={faCartShopping} className="" />
            </div>
            <span className="text-base font-black">Añadir a la cesta</span>
            </div>
          </button>
        </Link>
      </article>
    </div>
  );
}
