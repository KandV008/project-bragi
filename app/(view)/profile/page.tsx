"use client";

import {
  faCartShopping,
  faHeart,
  faCircleXmark,
  faTrash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import {
  OrganizationSwitcher,
  Protect,
  useClerk,
  useUser,
} from "@clerk/nextjs";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon";

export default function Page() {
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleFavoritesClick = () => {
    router.push("/profile/favorites");
  };

  const handleCartClick = () => {
    router.push("/profile/shoppingList");
  };

  const handleLogOutClick = () => {
    signOut({ redirectUrl: "/log-in" });
  };

  const handleDeleteAccountClick = async () => {
    await user?.delete();
    signOut();
    router.push("/sign-up");
  };

  return (
    <section
      className="flex flex-col place-self-center p-3 sm:p-5 items-center gap-2 sm:gap-3 rounded-xl w-fit
      border-emerald-900 dark:border-emerald-100 border-2
      bg-emerald-50 dark:bg-emerald-800
      text-emerald-900 dark:text-emerald-100"
    >
      <OrganizationSwitcher />
      <h2 className="text-xl sm:text-3xl font-bold">{user?.firstName}</h2>
      <h2 className="text-base sm:text-xl font-semibold">
        {user?.emailAddresses[0].emailAddress}
      </h2>
      <div className="w-full border-t mb-1 border-emerald-900 dark:border-emerald-100"></div>
      <h1 className="text-base sm:text-lg">¿Qué desea hacer con su cuenta?</h1>
      <Protect permission="org:product:managment">
        <MediumButtonWithIcon
          icon={faLock}
          text={"Panel de Admin"}
          subtext={"Ver Panel de Control"}
          type={"danger"}
          onClick={() => router.push("/admin")}
        />
      </Protect>
      <MediumButtonWithIcon
        icon={faHeart}
        text={"Favoritos"}
        subtext={"Ver tu lista de favoritos"}
        type={"default"}
        onClick={handleFavoritesClick}
      />
      <MediumButtonWithIcon
        icon={faCartShopping}
        text={"Cesta"}
        subtext={"Ver tu lista de la compra"}
        type={"default"}
        onClick={handleCartClick}
      />
      <MediumButtonWithIcon
        icon={faCircleXmark}
        text={"Cerrar Sesión"}
        subtext={"Podrás volver más tarde"}
        type={"warning"}
        onClick={handleLogOutClick}
      />
      <MediumButtonWithIcon
        icon={faTrash}
        text={"Borrar Cuenta"}
        subtext={"Eliminaremos tu cuenta"}
        type={"danger"}
        onClick={handleDeleteAccountClick}
      />
    </section>
  );
}
