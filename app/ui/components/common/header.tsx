'use client';

import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
import { useRouter } from "next/navigation";
import SmallButtonWithIcon from "../buttons/smallButtonWithIcon";
import SearchBar from "../inputs/searchBar";
import ThemeToggle from "./themeToggle";
import NavButton from "../buttons/navButton";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className="flex flex-col justify-center items-center place-self-center z-10 fixed pt-2
            bg-white dark:bg-emerald-950
            top-0 
            space-y-2 w-full xl:w-4/6  "
    >
      {/* Top Header */}
      <section className="flex flex-col space-y-4 md:flex-row justify-between items-center md:space-x-8 lg:space-x-6">
        <Logo />
        <SearchBar isCompress={true} />
        <article className="flex flex-row sm:space-x-4 lg:space-x-0">
          <SmallButtonWithIcon
            icon={faUser}
            text={"Cuenta"}
            subtext={"Iniciar sesión / Registrarse"}
            onClick={() => router.push("/profile")}
          />
          <SmallButtonWithIcon
            icon={faHeart}
            text={"Favoritos"}
            subtext={"Ver su lista de favoritos"}
            onClick={() => router.push("/profile/favorites")}
          />
          <SmallButtonWithIcon
            icon={faCartShopping}
            text={"Cesta"}
            subtext={"Ver su lista de la compra"}
            onClick={() => router.push("/profile/shoppingList")}
          />
        </article>
        <article className="hidden 2xl:block">
          <ThemeToggle />
        </article>
      </section>
      {/* Bottom Header */}
      <section className="flex-row justify-center items-center space-x-4 hidden md:flex pb-2 2xl:pb-0">
        <NavButton
          text="Audífonos"
          onClick={() => router.push("/search?category=EARPHONE")}
        />
        <NavButton
          text="Accesorios"
          onClick={() => router.push("/search?category=ACCESSORY")}
        />
        <NavButton
          text="Servicios"
          onClick={() => router.push("/in-development")}
        />
        <NavButton
          text="Nosotros"
          onClick={() => router.push("/in-development")}
        />
        <NavButton
          text="Pedir Cita"
          onClick={() => router.push("/in-development")}
        />
        <div className="block 2xl:hidden">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
