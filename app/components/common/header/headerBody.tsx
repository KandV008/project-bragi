"use client";

import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import SmallButtonWithIcon from "../../buttons/smallButtonWithIcon";
import SearchBar from "../../inputs/searchBar";
import Logo from "./logo";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HeaderBody() {
  const router = useRouter();

  const handleUserClick = () => {
    router.push("/profile");
  };

  const handleFavoritesClick = () => {
    router.push("/profile/favorites")
  };

  const handleCartClick = () => {
    router.push("/profile/shoppingList")
  };

  return (
    <>
      <div className="flex flex-col space-y-4 md:flex-row justify-between items-center md:space-x-8 lg:space-x-6">
        <Link href={"/"}>
          <Logo />
        </Link>
        <SearchBar />
        <div className="flex flex-row sm:space-x-4 lg:space-x-0">
          <SmallButtonWithIcon
            icon={faUser}
            text={"Cuenta"}
            subtext={"Iniciar sesión / Registrarse"}
            onClick={handleUserClick}
          />
          <SmallButtonWithIcon
            icon={faHeart}
            text={"Favoritos"}
            subtext={"Ver su lista de favoritos"}
            onClick={handleFavoritesClick}
          />
          <SmallButtonWithIcon
            icon={faCartShopping}
            text={"Cesta"}
            subtext={"Ver su lista de la compra"}
            onClick={handleCartClick}
          />
        </div>
      </div>
    </>
  );
}
