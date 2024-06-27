import Image from "next/image";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  brand: string;
  price: string;
}

export default function Product({id, image, name, brand, price}: ProductProps) {
  return (
    <Link
      href={`/search/about/${id}`} 
      className="flex flex-col justify-between items-center gap-3 p-3 md:p-4 xl:p-5
    bg-primary0 dark:bg-secondary2 border-solid border-2  border-primary2 dark:border-secondary1 text-primary2 dark:text-secondary0
    rounded rounded-tr-3xl 
    md:w-48 xl:w-64 h-fit"
    >
      <section className="flex flex-col items-center justify-between gap-3">
        <Image
          src={image}
          width={150}
          height={150}
          alt={"img-" + id}
          className="size-28 md:size-40 xl:size-56"
        />
        <div className="flex flex-col text-center">
          <span className="text-xs md:self-start md:text-sm xl:text-lg font-bold ">
            {name}
          </span>
          <span className="text-xs md:self-start md:text-sm xl:text-base ">
            {brand}
          </span>
          <span className="text-sm md:self-end md:text-base xl:text-xl font-bold ">
            {price}€
          </span>
        </div>
      </section>
      <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-2 xl:gap-1">
        <form method="post" action="">
          <button
            type="submit"
            className="flex flex-row items-center justify-center md:justify-between md:px-2
            rounded-2xl border-2 border-primary2  dark:border-secondary0  hover:bg-gray-400 hover:dark:bg-gray-700
            h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40 "
          >
            <div className=" mr-0 md:mr-2 xl:mr-0">
              <FontAwesomeIcon icon={faCartShopping} className="" />
            </div>
            <span className="hidden xl:block text-sm font-black">
              Añadir a la cesta
            </span>
            <span className="hidden md:block xl:hidden text-sm font-black ">
              Añadir
            </span>
          </button>
        </form>
        <form method="post" action="">
          <button
            type="submit"
            className="rounded-2xl border-2 border-primary2 dark:border-secondary0 hover:bg-gray-400 hover:dark:bg-gray-700
             h-8 w-12 md:size-10 xl:size-12"
          >
            <div className="">
              <FontAwesomeIcon icon={faHeart} className="" />
            </div>
          </button>
        </form>
      </section>
    </Link>
  );
}
