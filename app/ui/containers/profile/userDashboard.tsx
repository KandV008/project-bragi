"use client";

import {
  faCartShopping,
  faHeart,
  faCircleXmark,
  faTrash,
  faLock,
  faBoxesPacking,
} from "@fortawesome/free-solid-svg-icons";
import {
  OrganizationSwitcher,
  Protect,
  useClerk,
  useUser,
} from "@clerk/nextjs";
import {
  componentBorder,
  componentBackground,
  componentText,
} from "../../tailwindClasses";
import ConfirmationPopUp from "../../components/popUps/confirmationPopUp/confirmationPopUp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import MediumButtonWithIcon from "../../components/buttons/mediumButtonWithIcon/mediumButtonWithIcon";

/**
 * This component provides a user dashboard where the logged-in user can:
 * - View their profile information.
 * - Access the admin panel (if authorized).
 * - Navigate to their favorite items or shopping list.
 * - Log out of their account.
 * - Delete their account (with a confirmation popup).
 *
 * @returns {JSX.Element} The rendered UserDashboard component.
 */
export default function UserDashboard() {
  const { signOut } = useClerk();
  const { user } = useUser();
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  /**
   * Toggles the confirmation modal for account deletion.
   */
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Handles user logout, redirects to login page, and shows a toast notification.
   */
  const handleLogOutClick = () => {
    signOut({ redirectUrl: "/log-in" })
      .then(() => {
        toast.success("Se ha cerrado la sesión.");
        router.push("/log-in");
      })
      .catch(() => toast.error("No se ha podido cerrar la sesión."));
  };

  /**
   * Handles account deletion, redirects to sign-up page, and shows a toast notification.
   */
  const handleDeleteAccountClick = async () => {
    user
      ?.delete()
      .then(() => {
        handleShowModal();
        toast.success("Se ha borrado la cuenta.");
        router.push("/sign-up");
      })
      .catch(() => toast.error("No se ha podido borrar la cuenta."));
  };

  return (
    <section
      className={`flex flex-col place-self-center p-3 sm:p-5 items-center gap-2 sm:gap-3 rounded-xl w-fit
      ${componentBorder} ${componentBackground} ${componentText}`}
    >
      {/* Organization Switcher for multi-org users */}
      <OrganizationSwitcher />

      {/* User Information */}
      <h2 className="text-xl sm:text-3xl font-bold">{user?.firstName}</h2>
      <h2 className="text-base sm:text-xl font-semibold">
        {user?.emailAddresses[0].emailAddress}
      </h2>

      {/* Separator */}
      <div className={`w-full border-t mb-1 ${componentBorder}`}></div>
      {/* User Actions */}
      <h1 className="text-base sm:text-lg">¿Qué desea hacer con su cuenta?</h1>
      {/* Admin Panel (Only for authorized users) */}
      <Protect permission="org:product:managment">
        <MediumButtonWithIcon
          icon={faLock}
          text={"Panel de Admin"}
          subtext={"Ver Panel de Control"}
          type={"danger"}
          navigationURL="/admin"
        />
      </Protect>
      {/* Navigation Buttons */}
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
        icon={faBoxesPacking}
        text={"Pedidos"}
        subtext={"Ver todos tus pedidos"}
        type={"default"}
        navigationURL="/profile/orders"
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
        onClick={handleShowModal}
      />

      {/* Confirmation Popup for Account Deletion */}
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && (
          <ConfirmationPopUp
            handleShowModal={handleShowModal}
            handleAction={handleDeleteAccountClick}
            message={"Borrar tu cuenta es una acción irreversible."}
          />
        )}
      </article>
    </section>
  );
}
