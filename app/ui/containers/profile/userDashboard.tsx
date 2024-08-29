"use client";

import {
  faCartShopping,
  faHeart,
  faCircleXmark,
  faTrash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {
  OrganizationSwitcher,
  Protect,
  useClerk,
  useUser,
} from "@clerk/nextjs";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon";
import { componentBorder, componentBackground, componentText } from "../../tailwindClasses";

export default function UserDashboard() {
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleLogOutClick = () => {
    signOut();
  };

  const handleDeleteAccountClick = async () => {
    await user?.delete();
    signOut();
  };

  return (
    <section
    className={`flex flex-col place-self-center p-3 sm:p-5 items-center gap-2 sm:gap-3 rounded-xl w-fit
      ${componentBorder} ${componentBackground} ${componentText}`}
    >
      <OrganizationSwitcher />
      <h2 className="text-xl sm:text-3xl font-bold">{user?.firstName}</h2>
      <h2 className="text-base sm:text-xl font-semibold">
        {user?.emailAddresses[0].emailAddress}
      </h2>
      <div className={`w-full border-t mb-1 ${componentBorder}`}></div>
      <h1 className="text-base sm:text-lg">¿Qué desea hacer con su cuenta?</h1>
      <Protect permission="org:product:managment">
        <MediumButtonWithIcon
          icon={faLock}
          text={"Panel de Admin"}
          subtext={"Ver Panel de Control"}
          type={"danger"}
          navigationURL="/admin"
        />
      </Protect>
      <MediumButtonWithIcon
        icon={faHeart}
        text={"Favoritos"}
        subtext={"Ver tu lista de favoritos"}
        type={"default"}
        navigationURL="/profile/favorites"
      />
      <MediumButtonWithIcon
        icon={faCartShopping}
        text={"Cesta"}
        subtext={"Ver tu lista de la compra"}
        type={"default"}
        navigationURL="/profile/shoppingList"
      />
      <MediumButtonWithIcon
        icon={faCircleXmark}
        text={"Cerrar Sesión"}
        subtext={"Podrás volver más tarde"}
        type={"warning"}
        navigationURL="/log-in"
        onClick={handleLogOutClick}
      />
      <MediumButtonWithIcon
        icon={faTrash}
        text={"Borrar Cuenta"}
        subtext={"Eliminaremos tu cuenta"}
        type={"danger"}
        navigationURL="/sign-up"
        onClick={handleDeleteAccountClick}
      />
    </section>
  );
}
