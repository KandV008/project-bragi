import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import SmallButtonWithIcon from "../smallButtonWithIcon";
import SearchBar from "../searchBar";
import Logo from "./logo";

export default function HeaderBody() {
  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-2">
        <Logo />
        <SearchBar />
        <div className="flex flex-row">
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
      </div>
    </>
  );
}
