"use client";

import {
  faUser,
  faHeart,
  faCartShopping,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
import SmallButtonWithIcon from "../buttons/smallButtonWithIcon";
import SearchBar from "../inputs/searchBar";
import ThemeToggle from "./themeToggle";
import { mainBackground } from "../../tailwindClasses";
import { useUser } from "@clerk/nextjs";
import ExpandButton from "../../containers/header/expandButton";
import SubHeaderButtons from "../../containers/header/subHeaderButtons";

export default function Header() {
  const { user } = useUser();

  const profileText = user ? "Ver tu perfil" : "Iniciar sesión / Registrarse";

  const favoritesText = user ? "Ver tu lista de favoritos" : "Iniciar sesión";

  const shoppingLisText = user ? "Ver tu lista de la compra" : "Iniciar sesión";

  return (
    <header
      className={`flex flex-col justify-center items-center place-self-center space-y-2 w-full xl:w-4/6 pt-2
            ${mainBackground}
            top-0 z-10 fixed`}
    >
      {/* Top Header */}
      <section className="flex flex-col space-y-4 md:flex-row justify-between items-center md:space-x-8 lg:space-x-6">
        {/* Logo */}
        <article className="flex flex-row justify-between w-full sm:w-fit align-middle">
          <section className="block sm:hidden">
            <ThemeToggle />
          </section>
          <Logo />
          <section className="block sm:hidden">
            <ExpandButton />
          </section>
        </article>
        {/* Search Bar */}
        <article className="flex flex-row sm:space-x-4 lg:space-x-0">
          <SearchBar isCompress={true} />
          <section className="hidden sm:block md:hidden">
            <ThemeToggle />
          </section>
        </article>
        {/* Actions */}
        <article className="flex flex-row sm:space-x-4 lg:space-x-0">
          <SmallButtonWithIcon
            icon={faUser}
            text={"Cuenta"}
            subtext={profileText}
            href={"/profile"}
          />
          <SmallButtonWithIcon
            icon={faHeart}
            text={"Favoritos"}
            subtext={favoritesText}
            href={"/profile/favorites"}
          />
          <SmallButtonWithIcon
            icon={faCartShopping}
            text={"Cesta"}
            subtext={shoppingLisText}
            href={"/profile/shoppingList"}
          />
          <section className="hidden sm:block md:hidden">
            <SmallButtonWithIcon
              icon={faWrench}
              text={"Servicios"}
              subtext={""}
              href={"/services"}
            />
          </section>
        </article>
        <article className="hidden 2xl:block">
          <ThemeToggle />
        </article>
      </section>
      {/* Bottom Header */}
      <section className="flex-row justify-center items-center space-x-4 hidden md:flex pb-2 2xl:pb-0">
        <SubHeaderButtons />
        <div className="block 2xl:hidden">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
