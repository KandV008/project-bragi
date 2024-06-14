import Image from "next/image";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product() {
  return (
    <article className="flex flex-col justify-between items-center gap-3 p-5
    bg-primary0 dark:bg-secondary2 border-solid border-2  border-primary2 dark:border-secondary1 text-primary2 dark:text-secondary0
    rounded rounded-tr-3xl 
    w-64">
      <section className="flex flex-col items-center justify-between gap-3">
        <Image
          src="/placeholder-product.jpg"
          width={150}
          height={150}
          alt="Placeholder" // TODO Add the real image
          className="size-56"
        />
        <div className="flex flex-col">
          <span className="text-lg font-bold ">Audeo Lumity L50-RT</span>
          <span className="text-base ">Phonak</span>
          <span className="self-end text-xl font-bold ">
            1.599,00€
          </span>
        </div>
      </section>
      <section className="flex flex-row flex-wrap justify-between gap-1">
        <form method="post" action="">
          <button
            type="submit"
            className="flex flex-row items-center justify-between px-2
            rounded-2xl border-2 border-primary2  dark:border-secondary0  hover:bg-gray-400 hover:dark:bg-gray-700
            h-12 w-40 "
          >
            <div className="mr-2 md:mr-0 lg:mr-2">
              <FontAwesomeIcon icon={faCartShopping} className="" />
            </div>
            <span className=" text-sm font-black text-ellipsis whitespace-nowrap text-white-0">
              Añadir a la cesta
            </span>
          </button>
        </form>
        <form
          method="post"
          action=""
        >
          <button
            type="submit"
            className="rounded-2xl border-2 border-primary2 dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700
            size-12"
          >
            <div className="">
              <FontAwesomeIcon icon={faHeart} className="" />
            </div>
          </button>
        </form>
      </section>
    </article>
  );
}
