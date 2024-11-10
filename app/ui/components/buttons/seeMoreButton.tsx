import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { negativeComponentBackground, negativeHoverComponentBackground, negativeComponentText } from "../../tailwindClasses";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface SeeMoreButtonInterface {
    link: string;
    thing: string;
}

export default function SeeMoreButton({ link, thing }: SeeMoreButtonInterface){
    return (
        <Link
          href={link}
          className={`flex flex-row items-center justify-center md:justify-around md:px-2
          rounded-2xl h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40
          ${negativeComponentBackground} ${negativeHoverComponentBackground}
          ${negativeComponentText}`}
        >
          <div className=" mr-0 md:mr-2 xl:mr-0">
            <FontAwesomeIcon icon={faEye} className="" />
          </div>
          <span className="hidden xl:block text-sm font-black">
            Ver {thing}
          </span>
          <span className="hidden md:block xl:hidden text-xs font-black">
            Ver más
          </span>
        </Link>
    )
}