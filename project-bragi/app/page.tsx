import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import SmallButtonWithIcon from "./components/smallButtonWithIcon";
import SearchBar from "./components/searchBar";
import Logo from "./components/logo";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <SmallButtonWithIcon
          icon={faUser}
          text={"Cuenta"}
          subtext={"Iniciar sesión / Registrarse"}
        />
        <SmallButtonWithIcon
          icon={faHeart}
          text={"Favoritos"}
          subtext={"Ver su lista de favoritos"}
        />
        <SmallButtonWithIcon
          icon={faCartShopping}
          text={"Cesta"}
          subtext={"Ver su lista de la compra"}
        />
      </div>

      <SearchBar />

      <Logo />
    </>
  );
}
