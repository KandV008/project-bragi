import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
import SmallButtonWithIcon from "../buttons/smallButtonWithIcon";
import SearchBar from "../inputs/searchBar";
import ThemeToggle from "./themeToggle";
import NavButton from "../buttons/navButton";

export default function Header() {
  return (
    <header
      className="flex flex-col justify-center items-center place-self-center z-9 fixed pt-2
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
            href={"/profile"}
          />
          <SmallButtonWithIcon
            icon={faHeart}
            text={"Favoritos"}
            subtext={"Ver su lista de favoritos"}
            href={"/profile/favorites"}
          />
          <SmallButtonWithIcon
            icon={faCartShopping}
            text={"Cesta"}
            subtext={"Ver su lista de la compra"}
            href={"/profile/shoppingList"}
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
          href={"/search?category=EARPHONE"}
        />
        <NavButton
          text="Accesorios"
          href={"/search?category=ACCESSORY"}
        />
        <NavButton
          text="Servicios"
          href={"/in-development"}
        />
        <NavButton
          text="Nosotros"
          href={"/in-development"}
        />
        <NavButton
          text="Pedir Cita"
          href={"/in-development"}
        />
        <div className="block 2xl:hidden">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
