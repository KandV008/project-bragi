"use client";

import {
  faPaintRoller,
  faLeftLong,
  faTag,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@clerk/nextjs";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon";
import {
  componentBorder,
  componentBackground,
  componentText,
} from "../../tailwindClasses";

export default function AdminDashboard() {
  const { user } = useUser();

  return (
    <section
      className={`flex flex-col place-self-center p-3 sm:p-5 items-center gap-2 sm:gap-3 rounded-xl w-fit
        ${componentBorder} ${componentBackground} ${componentText}`}
    >
      <h2 className="text-xl sm:text-3xl font-bold">Panel de Control</h2>
      <h2 className="text-base sm:text-xl font-semibold">
        Bienvenid@ {user?.firstName}
      </h2>
      <div className={`w-full border-t mb-1 ${componentBorder}`}></div>
      <h1 className="text-base sm:text-lg">¿Qué acción desea realizar?</h1>
      <MediumButtonWithIcon
        icon={faPaintRoller}
        text={"Modificar productos"}
        subtext={"Ver todos los productos"}
        type={"default"}
        navigationURL="/admin/products"
      />
      <MediumButtonWithIcon
        icon={faTag}
        text={"Modificar ofertas"}
        subtext={"Ver todas las ofertas"}
        type={"default"}
        navigationURL="/admin/bargains"
      />
      <MediumButtonWithIcon
        icon={faAward}
        text={"Modificar novedades"}
        subtext={"Ver todas las novedades"}
        type={"default"}
        navigationURL="/admin/novelties"
      />
      <MediumButtonWithIcon
        icon={faLeftLong}
        text={"Salir"}
        subtext={"Salir del panel de control"}
        type={"warning"}
        navigationURL="/profile"
      />
    </section>
  );
}
